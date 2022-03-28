import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { AccountEntity } from "./account-entity"
import { BaseEntity } from "./base-entity"
import { CommentEntity } from "./comment-entity"
import { ReplyCommentEntity } from "./reply-comment-entity"

@Entity({ name: "publications" })
export class PublicationEntity extends BaseEntity {
  @Column()
  content: string

  @Column()
  account_id: string

  //MUITOS PARA UM
  //Uma conta pode ter varias publicações, mas cada publicação pertence a uma conta
  @JoinColumn({ name: "account_id" })
  @ManyToOne(() => AccountEntity, account => account.publications)
  account: AccountEntity

  //UM PARA MUITOS
  //Uma publicação pode ter varios comentarios
  @OneToMany(() => CommentEntity, comments => comments.publication)
  comments: CommentEntity[]

  @OneToMany(() => ReplyCommentEntity, reply_comments => reply_comments.publication)
  reply_comments: ReplyCommentEntity[]
}
