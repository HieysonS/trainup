import express from "express";
import {
  getMotivationMessage,
  updateMotivationMessage,
} from "../controllers/mensajeController.js";

const router = express.Router();

router.get("/", getMotivationMessage);
router.patch("/", updateMotivationMessage);

export default router;
