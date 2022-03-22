import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class publicationSchema1647637142791 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "publications",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "content",
            type: "varchar",
          },
          {
            name: "account_id",
            type: "uuid"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true
          }
        ],
        foreignKeys: [
          {
            name: "fk_account_publication",
            columnNames: ["account_id"],
            referencedTableName: "accounts",
            referencedColumnNames: ["id"]
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("publications")
  }
}
