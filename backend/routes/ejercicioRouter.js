import express from "express";
import {
  createEjercicio,
  getEjercicio,
  getEjercicios,
  getEjercicioById,
  getEjerciciosbyObjetivo,
  updateEjercicio,
  createMultipleEjercicios,
} from "../controllers/ejercicioController.js";

const router = express.Router();

router.post("/", createEjercicio);
router.post("/varios", createMultipleEjercicios);
router.get("/nombre/:nombre", getEjercicio);
router.get("/", getEjercicios);
router.get("/id/:id", getEjercicioById);
router.get("/objetivo/:objetivo", getEjerciciosbyObjetivo);
router.patch("/update/:id", updateEjercicio);

export default router;
