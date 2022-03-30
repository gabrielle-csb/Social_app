import { getRepository } from "typeorm"
import { ReplyCommentEntity } from "../../entities"

export class GetReplyCommentsService {
  async execute(): Promise<ReplyCommentEntity[]> {
    const replyCommentRepository = getRepository(ReplyCommentEntity)
    const replyComments = await replyCommentRepository.find({ relations: ["comment"] })
    return replyComments
  }
}
