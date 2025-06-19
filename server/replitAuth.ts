import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import type { Express, RequestHandler } from "express";
import connectPg from "connect-pg-simple";
import { storage } from "./storage";

export function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions",
  });
  return session({
    secret: process.env.SESSION_SECRET || "fallback-secret-key",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: sessionTtl,
    },
  });
}

export async function setupAuth(app: Express) {
  app.set("trust proxy", 1);
  app.use(getSession());
  app.use(passport.initialize());
  app.use(passport.session());

  console.log("🚀 Setting up Google OAuth authentication");
  
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    console.error("🚨 FATAL ERROR: Missing Google OAuth secrets!");
    console.error("💡 Add these secrets in the Secrets tool:");
    console.error("   GOOGLE_CLIENT_ID = 24059398734-53ujc0ikjkv1lb96cisvjvmdm0tf8o5f.apps.googleusercontent.com");
    console.error("   GOOGLE_CLIENT_SECRET = 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");
    process.exit(1);
  }
  
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  }, async (accessToken, refreshToken, profile, done) => {
    console.log("🎉 Google OAuth callback received for user:", profile.emails?.[0]?.value);
    try {
      const user = {
        id: profile.id,
        email: profile.emails?.[0]?.value || '',
        firstName: profile.name?.givenName || '',
        lastName: profile.name?.familyName || '',
        profileImageUrl: profile.photos?.[0]?.value || '',
      };

      const savedUser = await storage.upsertUser(user);
      return done(null, savedUser);
    } catch (error) {
      return done(error, null);
    }
  }));

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });

  // Google OAuth routes
  app.get("/api/login", passport.authenticate("google", {
    scope: ["profile", "email"]
  }));

  app.get("/api/auth/google/callback", 
    passport.authenticate("google", { failureRedirect: "/" }),
    (req: any, res) => {
      req.session.userId = req.user.id;
      req.session.user = req.user;
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req: any, res) => {
    req.session.destroy((err: any) => {
      if (err) {
        console.error("Logout error:", err);
      }
      res.redirect("/");
    });
  });
}

export const isAuthenticated: RequestHandler = (req: any, res, next) => {
  if (req.session.userId && req.session.user) {
    req.user = req.session.user;
    return next();
  }
  return res.status(401).json({ message: "Unauthorized" });
};