import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { router as userRoutes } from "./routes/user.routes";

dotenv.config();

const app: Express = express();

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use("/users", userRoutes);

app.get("/name", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript Server" });
});

export default app;
