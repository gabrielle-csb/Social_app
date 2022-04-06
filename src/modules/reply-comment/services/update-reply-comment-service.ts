import { getRepository } from "typeorm"
import { ReplyCommentEntity } from "../reply-comment-entity"

type UpdateReplyCommentRequest = {
  id: string
  text: string
  account_id: string
}

export class UpdateReplyCommentService {
  async execute({ id, text, account_id }: UpdateReplyCommentRequest): Promise<ReplyCommentEntity | Error> {
    const replyCommentRepository = getRepository(ReplyCommentEntity)
    const replyComment = await replyCommentRepository
      .createQueryBuilder("reply")
      .innerJoinAndSelect("reply.account", "account")
      .where("reply.id = :id", { id })
      .getOne()

    if (!replyComment) {
      return new Error("Reply comment does not exist!")
    }

    if (account_id !== replyComment.account_id) {
      return new Error("This account cannot change the reply!")
    }

    replyComment.text = text ? text : replyComment.text

    return replyCommentRepository.save(replyComment)
  }
}
