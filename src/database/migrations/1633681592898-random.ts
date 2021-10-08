import {MigrationInterface, QueryRunner} from "typeorm";

export class random1633681592898 implements MigrationInterface {
    name = 'random1633681592898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pear" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_d1bae2d0924f45f32308c93f6bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "random" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_51338eeac6f73b0b6809e1dafc0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "random"`);
        await queryRunner.query(`DROP TABLE "pear"`);
    }

}
