import { getRepository } from "typeorm"
import { AccountEntity } from "../../account/account-entity"
import { PublicationEntity } from "../publication-entity"

type PublicationRequest = {
  content: string
  account_id: string
}

export class CreatePublicationService {
  async execute({ content, account_id }: PublicationRequest): Promise<PublicationRequest | Error> {
    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id: account_id } })

    if (!account) {
      return new Error("Account does not exists!")
    }
    const publicationRepository = getRepository(PublicationEntity)
    const publication = publicationRepository.create({
      content, account_id
    })

    return publicationRepository.save(publication)
  }
}
