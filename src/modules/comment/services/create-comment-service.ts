import { getRepository } from "typeorm"
import { AccountEntity } from "../../account/account-entity"
import { PublicationEntity } from "../../publication/publication-entity"
import { CommentEntity } from "../comment-entity"

type CommentRequest = {
  text: string
  account_id: string
  publication_id: string
}

export class CreateCommentService {
  async execute({ text, account_id, publication_id }: CommentRequest): Promise<CommentEntity | Error> {
    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id: account_id } })

    if (!account) {
      return new Error("Account does not exists!")
    }

    const publicationRepository = getRepository(PublicationEntity)
    const publication = await publicationRepository.findOne({ where: { id: publication_id } })

    if (!publication) {
      return new Error("Publication does not exists!")
    }

    const commentRepository = getRepository(CommentEntity)
    const comment = commentRepository.create({ text, publication_id, account_id })
    return commentRepository.save(comment)
  }
}
