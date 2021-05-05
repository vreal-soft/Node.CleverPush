import { getRepository, MigrationInterface, QueryRunner, Table } from 'typeorm';
import { data } from '../seeds/users';
const table_name = 'users';

export class SeedUsers1620206603552 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: table_name,
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isGenerated: true,
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isGenerated: true,
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
    for (const user of data) {
      await queryRunner.query(
        `INSERT INTO users (first_name, last_name, email) VALUES ('${user.first_name}', '${user.last_name}', '${user.email}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table_name, true);
  }
}
