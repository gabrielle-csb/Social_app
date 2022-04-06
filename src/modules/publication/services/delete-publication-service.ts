import { getRepository } from "typeorm";
import { AccountEntity } from "../../account/account-entity";
import { PublicationEntity } from "../publication-entity";

type DeletePublicationRequest = {
  id: string
  account_id: string
}

export class DeletePublicationService {
  async execute({ account_id, id }: DeletePublicationRequest) {
    const publicationRepository = getRepository(PublicationEntity)
    const accountRepository = getRepository(AccountEntity)
    const publication = await publicationRepository.findOne({ where: { id } })
    const account = await accountRepository.findOne({ where: { id: account_id } })

    if (!account) {
      return new Error("Account does not identified!")
    }

    if (!publication) {
      return new Error("Publication does not exist!")
    }

    if (account.id !== publication.account_id) {
      return new Error("Only the account that posted can delete the post!")
    }

    publication.deleted_at = new Date()
    await publicationRepository.save(publication)
  }
}
