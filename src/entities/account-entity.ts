import { Entity, Column, OneToMany } from "typeorm"
import { BaseEntity } from "./base-entity"
import { CommentEntity } from "./comment-entity"
import { PublicationEntity } from "./publication-entity"

@Entity({ name: "accounts" })
export class AccountEntity extends BaseEntity {
  @Column()
  name: string

  @Column({ unique: true })
  documentNumber: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => PublicationEntity, publications => publications.account)
  publications: PublicationEntity[]

  @OneToMany(() => CommentEntity, comments => comments.account)
  comments: CommentEntity[]
}
