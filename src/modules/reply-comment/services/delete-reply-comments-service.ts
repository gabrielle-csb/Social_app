import { getRepository } from "typeorm";
import { ReplyCommentEntity } from "../reply-comment-entity";

type DeleteReplyCommentRequest = {
  id: string
  account_id: string
}

export class DeleteReplyCommentService {
  async execute({ account_id, id }: DeleteReplyCommentRequest) {
    const replyCommentRepository = getRepository(ReplyCommentEntity)
    const replyComment = await replyCommentRepository
      .createQueryBuilder("reply")
      .innerJoinAndSelect("reply.comment", "comment")
      .innerJoinAndSelect("comment.publication", "publication")
      .where("reply.id = :id", { id })
      .getOne()

    if (!replyComment) {
      return new Error("Reply does not exist!")
    }

    if (account_id !== replyComment.account_id && account_id !== replyComment.comment.publication.account_id) {
      return new Error("Account cannot delete the reply!")
    }

    replyComment.deleted_at = new Date()
    await replyCommentRepository.save(replyComment)
  }
}
