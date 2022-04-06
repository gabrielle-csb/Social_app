import { getRepository } from "typeorm";
import { CommentEntity } from "../comment-entity";

type DeleteCommentRequest = {
  id: string
  account_id: string
}

export class DeleteCommentService {
  async execute({ account_id, id }: DeleteCommentRequest) {
    const commentRepository = getRepository(CommentEntity)
    const comment = await commentRepository.findOne({ where: { id }, relations: ["publication"] })

    if (!comment) {
      return new Error("Comment does not exist!")
    }
    //SE a conta for diferente da conta que comentou
    //E a conta for diferente da conta que publicou, não pode apagar comentario
    if (account_id !== comment.account_id && account_id !== comment.publication.account_id) {
      return new Error("Account cannot delete the comment!")
    }

    comment.deleted_at = new Date()
    await commentRepository.save(comment)
  }
}
