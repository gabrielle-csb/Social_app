import { getRepository } from "typeorm"
import { AccountEntity, CommentEntity, PublicationEntity, ReplyCommentEntity } from "../../entities"

type ReplyCommentsRequest = {
  text: string
  account_id: string
  publication_id: string
  comment_id: string
}

export class CreateReplyCommentsService {
  async execute({ text, account_id, publication_id, comment_id }: ReplyCommentsRequest): Promise<ReplyCommentEntity | Error> {
    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id: account_id } })

    if (!account) {
      return new Error("Account does not exists!")
    }

    const publicationRepository = getRepository(PublicationEntity)
    const publication = await publicationRepository.findOne({ where: { id: publication_id } })

    if (!publication) {
      return new Error("Publication does not exists!")
    }

    const commentRepository = getRepository(CommentEntity)
    const comment = await commentRepository.findOne({ where: { id: comment_id } })

    if (!comment) {
      return new Error("Comment does not exists!")
    }

    const replyCommentRepository = getRepository(ReplyCommentEntity)
    const replyComment = replyCommentRepository.create({ text, publication_id, account_id, comment_id })
    return replyCommentRepository.save(replyComment)
  }
}
