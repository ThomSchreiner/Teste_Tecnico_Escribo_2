import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLastLoginDate1700750148580 implements MigrationInterface {
    name = 'AddLastLoginDate1700750148580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "last_login" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_login"`);
    }

}
