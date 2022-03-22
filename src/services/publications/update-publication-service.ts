import { getRepository } from "typeorm"
import { AccountEntity } from "../../entities/account-entity"
import { PublicationEntity } from "../../entities/publication-entity"

type UpdatePublicationRequest = {
  id: string
  content: string
  account_id: string
}

export class UpdatePublicationService {
  async execute({ id, content, account_id }: UpdatePublicationRequest): Promise<PublicationEntity | Error> {
    const publicationRepository = getRepository(PublicationEntity)
    const accountRepository = getRepository(AccountEntity)
    const publication = await publicationRepository.findOne({ where: { id } })
    const account = await accountRepository.findOne({ where: { id : account_id} })

    if (!account) {
      return new Error("Account does not exist!")
    }

    if (!publication) {
      return new Error("Publication does not exist!")
    }

    if (account.id !== publication.account_id) {
      return new Error("Only the account that posted can change the post.")
    }

    publication.content = content ? content : publication.content

    await publicationRepository.save(publication)
    return publication
  }
}
