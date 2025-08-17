import express, { json } from "express";
import cors from "cors";
import stickerRoutes from "./routes/stickers.routes.js";
import usersRoutes from "./routes/users.routes.js";
import { config } from "dotenv";
import { connectDB } from "./utils/db.js";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;
config();

app.use(cors());
app.use(json());
// morgan middleware
app.use(morgan("dev"));

app.use("/api/stickers", stickerRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  connectDB().then(() => console.log("Database connected successfully"));
  console.log(`Server is running on port ${PORT}`);
});
