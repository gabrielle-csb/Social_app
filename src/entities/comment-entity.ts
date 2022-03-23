import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import { AccountEntity } from "./account-entity"
import { BaseEntity } from "./base-entity"
import { PublicationEntity } from "./publication-entity"

@Entity({ name: "comments" })
export class CommentEntity extends BaseEntity {
  @Column()
  text: string

  @Column()
  publication_id: string

  @Column()
  account_id: string

  @JoinColumn({ name: "account_id" })
  @ManyToOne(() => AccountEntity, account => account.publications)
  account: AccountEntity

  @JoinColumn({ name: "publication_id" })
  @ManyToOne(() => PublicationEntity, publication => publication.comments)
  publication: PublicationEntity
}
