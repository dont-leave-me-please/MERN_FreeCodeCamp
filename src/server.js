import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/noteRoutes.js";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(rateLimiter);
app.use((req, res, next) => {
  console.log("Someone made a request to:", req.url);
  next();
});
connectDB().then(() => {
  app.use("/api/notes", notesRoutes);

  app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
  });
});
