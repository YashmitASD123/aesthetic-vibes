import { Router } from "express";
import { getAllStickers, addSticker, updateSticker, deleteSticker } from "../controllers/stickers.controller.js";

const router = Router();

router.get("/", getAllStickers);
router.post("/", addSticker);
router.put("/:id", updateSticker);
router.delete("/:id", deleteSticker);

export default router;