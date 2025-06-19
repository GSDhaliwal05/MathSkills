import session from "express-session";
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

  // Demo login for testing (replace with real Google OAuth later)
  app.get("/api/login", async (req: any, res) => {
    try {
      // Create demo user for testing
      const demoUser = {
        id: "demo-user-123",
        email: "student@mathmaster.com",
        firstName: "Math",
        lastName: "Student",
        profileImageUrl: "https://www.gravatar.com/avatar/default?d=identicon&s=150",
      };

      const user = await storage.upsertUser(demoUser);
      
      // Set session
      req.session.userId = user.id;
      req.session.user = user;
      
      res.redirect("/");
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });



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