import express, { json } from "express";
import cors from "cors";
import stickerRoutes from "./routes/stickers.routes.js";
import { config } from "dotenv";
import { connectDB } from "./utils/db.js";

const app = express();
const PORT = process.env.PORT || 3000;
config();

app.use(cors());
app.use(json());
app.use("/api/stickers", stickerRoutes);

app.listen(PORT, () => {
  connectDB().then(() => console.log("Database connected successfully"));
  console.log(`Server is running on port ${PORT}`);
});
