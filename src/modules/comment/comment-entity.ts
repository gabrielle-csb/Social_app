import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { BaseEntity } from "../../common/base-entity"
import { AccountEntity } from "../account/account-entity"
import { PublicationEntity } from "../publication/publication-entity"
import { ReplyCommentEntity } from "../reply-comment/reply-comment-entity"

@Entity({ name: "comments" })
export class CommentEntity extends BaseEntity {
  @Column()
  text: string

  @Column()
  publication_id: string

  @Column()
  account_id: string

  //MUITOS PARA UM
  //Pode-se fazer varios comentarios, porem cada comentario tem que esta
  // ligado a uma conta e uma publicação
  @JoinColumn({ name: "account_id" })
  @ManyToOne(() => AccountEntity, account => account.comments)
  account: AccountEntity

  @JoinColumn({ name: "publication_id" })
  @ManyToOne(() => PublicationEntity, publication => publication.comments)
  publication: PublicationEntity

  @OneToMany(() => ReplyCommentEntity, reply_comments => reply_comments.comment)
  reply_comments: ReplyCommentEntity[]
}
