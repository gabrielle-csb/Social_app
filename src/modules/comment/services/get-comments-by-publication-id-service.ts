import { getRepository } from "typeorm"
import { CommentEntity } from "../comment-entity"

export class GetCommentsByPublicationIdService {
  async execute(publication_id: string): Promise<CommentEntity[]> {
    const commentsRepository = getRepository(CommentEntity)
    const comments = commentsRepository.find({ where: { publication_id }, relations: ["publication"] })

    return comments
  }
}
