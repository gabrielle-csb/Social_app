import { getRepository } from "typeorm"
import { CommentEntity } from "../../entities"

export class GetCommentsByPublicationIdService {
  async execute(publication_id: string): Promise<CommentEntity[]> {
    const commentsRepository = getRepository(CommentEntity)
    const comments = commentsRepository.find({where: {publication_id}})

    return comments
  }
}
