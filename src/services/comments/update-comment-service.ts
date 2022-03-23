import { getRepository } from "typeorm"
import { CommentEntity } from "../../entities"

type UpdateCommentRequest = {
  id: string
  text: string
  account_id: string
}

export class UpdateCommentService {
  async execute({ id, text, account_id }: UpdateCommentRequest): Promise<CommentEntity | Error> {
    const commentRepository = getRepository(CommentEntity)
    const comment = await commentRepository
      .createQueryBuilder("comment")
      .innerJoinAndSelect("comment.account", "account")
      .where("comment.id = :id", { id })
      .getOne()

    if (!comment) {
      return new Error("Comment does not exist!")
    }

    if (account_id !== comment.account_id) {
      return new Error("This account cannot change the comment!")
    }

    comment.text = text ? text : comment.text

    await commentRepository.save(comment)
    return comment
  }
}
