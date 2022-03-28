import { Entity, Column, OneToMany } from "typeorm"
import { BaseEntity } from "./base-entity"
import { CommentEntity } from "./comment-entity"
import { PublicationEntity } from "./publication-entity"
import { ReplyCommentEntity } from "./reply-comment-entity"

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

  //UM PARA MUITOS
  //Uma unica conta pode conter varias publicacoes e comentarios!
  @OneToMany(() => PublicationEntity, publications => publications.account)
  publications: PublicationEntity[]

  @OneToMany(() => CommentEntity, comments => comments.account)
  comments: CommentEntity[]

  @OneToMany(() => ReplyCommentEntity, reply_comments => reply_comments.account)
  reply_comments: ReplyCommentEntity[]
}
