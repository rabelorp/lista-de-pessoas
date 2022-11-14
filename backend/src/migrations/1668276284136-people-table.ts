import { MigrationInterface, QueryRunner } from 'typeorm';

export class peopleTable1668276284136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "people" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
      "name" character varying NOT NULL, 
      "lastName" character varying NOT NULL,
      "cpf" character varying NOT NULL,
      "nacionality" character varying NOT NULL,
      "cep" character varying NOT NULL,
      "state" character varying NOT NULL,
      "city" character varying NOT NULL,
      "public_place" character varying NOT NULL,
      "email" character varying NOT NULL,
      "telephone" character varying NOT NULL,
      "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
      "updated_at" TIMESTAMP NOT NULL DEFAULT now() )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "people"`);
  }
}
