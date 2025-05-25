import { Router } from "express";
import {
  getItems,
  getItemAsID,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/items.controller.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItemAsID);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
