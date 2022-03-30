import { getRepository } from "typeorm"
import { ReplyCommentEntity } from "../../entities"

export class GetReplyCommentByCommentIdService {
  async execute(comment_id: string): Promise<ReplyCommentEntity[]> {
    const replyCommentsRepository = getRepository(ReplyCommentEntity)
    const replyComents = await replyCommentsRepository.find({ where: { comment_id }, relations: ["comment"] })

    return replyComents
  }
}
