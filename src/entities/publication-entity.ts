import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { AccountEntity } from "./account-entity"
import { BaseEntity } from "./base-entity"
import { CommentEntity } from "./comment-entity"

@Entity({ name: "publications" })
export class PublicationEntity extends BaseEntity {
  @Column()
  content: string

  @Column()
  account_id: string

  @JoinColumn({ name: "account_id" })
  @ManyToOne(() => AccountEntity, account => account.publications)
  account: AccountEntity

  @OneToMany(() => CommentEntity, comments => comments.publication)
  comments: CommentEntity[]
}
