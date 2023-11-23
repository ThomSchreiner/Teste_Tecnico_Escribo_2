import { AppDataSource } from "../data-source";
import { PhoneNumber } from "../entities/phoneNumbers.entity";
import { User } from "../entities/users.entity";
import { AppError } from "../errors";
import { iUser, iUserRequest } from "../interfaces/user.interfaces";
import { userResponseSchema } from "../schemas/user.schemas";
import { loginService } from "./login.services";

export const createUserService = async (body: iUserRequest) => {
  const userRepo = AppDataSource.getRepository(User);
  const phoneNumberRepo = AppDataSource.getRepository(PhoneNumber);

  await userRepo.findOneBy({ email: body.email }).then((res) => {
    if (res?.id) {
      throw new AppError("This email already used", 409);
    }
  });

  const newUser = userRepo.create(body);
  await userRepo.save(newUser);

  const newPhoneNumber = body.phone_numbers.map((phoneNumber) =>
    phoneNumberRepo.create({ ...phoneNumber, user: newUser })
  );
  await phoneNumberRepo.save(newPhoneNumber);

  const userValidated = await loginService({ email: body.email, password: body.password });

  return userValidated;
};

export const findOneUserService = async (user: User) => {
  const userValidated: iUser = userResponseSchema.validateSync(user, {
    stripUnknown: true,
    abortEarly: false,
  });

  return userValidated;
};
