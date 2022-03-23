import { getRepository } from "typeorm"
import { CommentEntity } from "../../entities"

export class GetCommentsService {
  async execute(): Promise<CommentEntity[]> {
    const commentRepository = getRepository(CommentEntity)
    const comments = await commentRepository.find({ relations: ["publication"] })
    return comments
  }
}
