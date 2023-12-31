import "express-async-errors";
import express from "express";
import { handleError } from "./errors";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";

export const app = express();

app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", userRoutes);

app.use(handleError);
