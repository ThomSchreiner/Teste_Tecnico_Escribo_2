import { AppDataSource } from "../data-source";
import { PhoneNumber } from "../entities/phoneNumbers.entity";
import { User } from "../entities/users.entity";
import { iUserRequest } from "../interfaces/user.interfaces";

export const createUserService = async (body: iUserRequest) => {
  const userRepo = AppDataSource.getRepository(User);
  const phoneNumberRepo = AppDataSource.getRepository(PhoneNumber);

  const newUser = userRepo.create(body);
  await userRepo.save(newUser);

  const newPhoneNumber = body.phone_numbers.map((phoneNumber) =>
    phoneNumberRepo.create({ ...phoneNumber, user: newUser })
  );

  await phoneNumberRepo.save(newPhoneNumber);

  return { ...newUser, phone_numbers: newPhoneNumber };
};
