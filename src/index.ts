import express from "express";
import router from "./Routes/index";

const app = express();
const PORT = 3000;

app.use(express.json());

// Use routes defined in the routes folder
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
