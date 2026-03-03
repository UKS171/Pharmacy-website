import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

/* =========================
   Middleware
   ========================= */
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev URL
    credentials: true,
  }),
);
app.use(express.json());

/* =========================
   Admin Login Route
   ========================= */
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;

  // ⚠️ Temporary hardcoded admin (replace with DB + JWT later)
  if (email === "admin@alline.tech" && password === "admin123") {
    return res.status(200).json({
      success: true,
      token: "admin-token",
      admin: {
        email,
        role: "admin",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

/* =========================
   Health Check
   ========================= */
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "Pharmacy API" });
});

/* =========================
   Server
   ========================= */
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
