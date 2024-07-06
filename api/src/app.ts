import express from "express";
import patientRouter from "../routers/patients.router";
import diagnosisRouter from "../routers/diagnosis.router";

const app = express();

app.use(express.json());
app.use("/api", patientRouter, diagnosisRouter);

export default app;
