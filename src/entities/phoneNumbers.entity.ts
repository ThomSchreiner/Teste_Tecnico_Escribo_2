import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./users.entity";

@Entity("phone_numbers")
export class PhoneNumber {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "varchar", length: 2 })
  ddd: string;

  @Column({ type: "varchar", length: 9 })
  number: string;

  @ManyToOne(() => User, (user) => user.phone_numbers, { onDelete: "CASCADE" })
  user: User;
}
