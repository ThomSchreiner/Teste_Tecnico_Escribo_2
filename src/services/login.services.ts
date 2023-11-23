import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../errors";
import { iLogin } from "../interfaces/login.interfaces";
import { userResponseSchema } from "../schemas/user.schemas";
import { iUser } from "../interfaces/user.interfaces";

export const loginService = async (body: iLogin) => {
  const userRepo = AppDataSource.getRepository(User);

  let user = await userRepo
    .findOneByOrFail({ email: body.email })
    .then((res) => {
      const isValidPassword = compareSync(body.password, res.password);
      if (!isValidPassword) {
        console.log();
        console.log(isValidPassword);
        console.log();
        throw new AppError("Email or password incorrect", 401);
      }
      return res;
    })
    .catch(() => {
      throw new AppError("Email or password incorrect", 401);
    });

  const token = sign({}, process.env.SECRET_KEY || "", {
    expiresIn: "30m",
    subject: user.id,
  });

  await userRepo.update({ id: user.id }, { last_login: new Date().toISOString() });

  const userValidated: iUser = userResponseSchema.validateSync(
    { ...user, token },
    { stripUnknown: true, abortEarly: false }
  );

  return userValidated;
};
