import express from "express";
import cors from "cors";
import patientRouter from "../routers/patients.router";
import diagnosisRouter from "../routers/diagnosis.router";

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api", patientRouter, diagnosisRouter);

export default app;
