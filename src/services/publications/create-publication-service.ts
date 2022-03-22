import { getRepository } from "typeorm"
import { AccountEntity } from "../../entities/account-entity"
import { PublicationEntity } from "../../entities/publication-entity"

type PublicationRequest = {
  content: string
  account_id: string
}

export class CreatePublicationService {
  async execute({ content, account_id }: PublicationRequest): Promise<PublicationRequest | Error> {
    const publicationRepository = getRepository(PublicationEntity)
    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id: account_id } })

    if (!account) {
      return new Error("Account does not exists!")
    }

    const publication = publicationRepository.create({
      content, account_id
    })

    await publicationRepository.save(publication)
    return publication
  }
}
