import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateVehicles1610109428792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'mark',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'model',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'year',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'numeric',
            precision: 6,
            scale: 3,
            isNullable: false,
          },
          {
            name: 'category',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'gas_type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'used_km',
            type: 'numeric',
            precision: 6,
            scale: 3,
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
