import { Router } from "express";

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/users.controller.js";

const router = Router();

// Get all users
router.get("/", getUsers);
// Get user by ID
router.get("/:id", getUserById);
// Create user
router.post("/", createUser);
// Update user
router.put("/:id", updateUser);
// Delete user
router.delete("/:id", deleteUser);
// Login user
router.post("/login", loginUser);

export default router;