import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import { BaseEntity } from "../../common/base-entity"
import { AccountEntity } from "../account/account-entity"
import { CommentEntity } from "../comment/comment-entity"
import { PublicationEntity } from "../publication/publication-entity"

@Entity({ name: "reply_comment" })
export class ReplyCommentEntity extends BaseEntity {
  @Column()
  text: string

  @Column()
  comment_id: string

  @Column()
  publication_id: string

  @Column()
  account_id: string

  @JoinColumn({ name: "account_id" })
  @ManyToOne(() => AccountEntity, account => account.reply_comments)
  account: AccountEntity

  @JoinColumn({ name: "publication_id" })
  @ManyToOne(() => PublicationEntity, publication => publication.reply_comments)
  publication: PublicationEntity

  @JoinColumn({ name: "comment_id" })
  @ManyToOne(() => CommentEntity, comment => comment.reply_comments)
  comment: CommentEntity
}
