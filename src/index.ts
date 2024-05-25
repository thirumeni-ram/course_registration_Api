import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/Database";
import router from "./Routes/index";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON requests

// Use the router for handling routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
