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

  // Debug environment variables
  console.log("🔍 Google OAuth Setup Check:");
  console.log("- GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID ? `✅ SET (${process.env.GOOGLE_CLIENT_ID.substring(0, 10)}...)` : "❌ MISSING");
  console.log("- GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? `✅ SET (${process.env.GOOGLE_CLIENT_SECRET.substring(0, 6)}...)` : "❌ MISSING");
  console.log("- All env vars:", Object.keys(process.env).filter(key => key.includes('GOOGLE')));

  // Configure Google OAuth Strategy
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    console.log("🚀 Using Google OAuth authentication");
    
    const callbackURL = process.env.NODE_ENV === "production" 
      ? "/api/auth/google/callback"
      : "/api/auth/google/callback";
    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: callbackURL
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
        // Set session data for compatibility with existing auth system
        req.session.userId = req.user.id;
        req.session.user = req.user;
        res.redirect("/");
      }
    );
  } else {
    console.log("⚠️  Using DEMO login - Google OAuth not configured");
    console.log("📝 Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to Secrets, then restart");
    
    // Fallback demo login when Google OAuth is not configured
    app.get("/api/login", async (req: any, res) => {
      try {
        const demoUser = {
          id: "demo-user-123",
          email: "student@mathmaster.com",
          firstName: "Math",
          lastName: "Student",
          profileImageUrl: "https://www.gravatar.com/avatar/default?d=identicon&s=150",
        };

        const user = await storage.upsertUser(demoUser);

        req.session.userId = user.id;
        req.session.user = user;

        res.redirect("/");
      } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login failed" });
      }
    });
  }

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