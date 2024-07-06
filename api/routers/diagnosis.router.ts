import express from "express";
import { getAllDiagnosis } from "../controllers/diagnosis.controller";

const diagnosisRouter = express.Router();

diagnosisRouter.get("/diagnosis", getAllDiagnosis);
diagnosisRouter.post("/diagnosis", );

export default diagnosisRouter;
