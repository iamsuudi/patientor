import express from "express";
import patientRouter from "../routers/patients.router";

const app = express();

app.use(express.json());
app.use("/api", patientRouter);

export default app;
