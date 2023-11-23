import { Router } from "express";
import { loginController } from "../controller/login.controllers";
import { bodyValidateMiddleware } from "../middlewares/bodyValidate.middleware";
import { loginSchema } from "../schemas/login.schemas";

export const loginRoutes = Router();

loginRoutes.post("", bodyValidateMiddleware(loginSchema), loginController);
