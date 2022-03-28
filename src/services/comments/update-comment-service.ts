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

    //Realiza consulta no banco de dados (criar construtor de consultas)
    const comment = await commentRepository
      .createQueryBuilder("comment") //ALIAS (ELHAS), dá um apelido para a manipulação dos dados
      .innerJoinAndSelect("comment.account", "account") //relaciona o comentario com a conta, onde ambos devem existir
      .where("comment.id = :id", { id }) //busca pelo id
      .getOne() //pega o resultado esperado pela consulta

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
