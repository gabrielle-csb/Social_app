import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class replyCommentShema1648499686043 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reply_comment",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "publication_id",
            type: "uuid"
          },
          {
            name: "comment_id",
            type: "uuid"
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
            name: "fk_account_reply",
            columnNames: ["account_id"],
            referencedTableName: "accounts",
            referencedColumnNames: ["id"]
          },
          {
            name: "fk_publication_reply",
            columnNames: ["publication_id"],
            referencedTableName: "publications",
            referencedColumnNames: ["id"]
          },          {
            name: "fk_comment_reply",
            columnNames: ["comment_id"],
            referencedTableName: "comments",
            referencedColumnNames: ["id"]
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("reply_comment")
  }

}
