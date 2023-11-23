import { User } from "../../entities/users.entity";

declare global {
  namespace Express {
    interface Request {
      authUser: User;
    }
  }
}

export {};
