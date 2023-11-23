import { Request, Response } from "express";
import { createUserService, findOneUserService } from "../services/user.services";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

export const findOneUserController = async (req: Request, res: Response) => {
  const user = await findOneUserService(req.authUser);
  return res.status(200).json(user);
};
