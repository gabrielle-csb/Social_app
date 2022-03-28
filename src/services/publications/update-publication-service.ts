import { getRepository } from "typeorm"
import { AccountEntity, PublicationEntity } from "../../entities"

type UpdatePublicationRequest = {
  id: string
  content: string
  account_id: string
}

export class UpdatePublicationService {
  async execute({ id, content, account_id }: UpdatePublicationRequest): Promise<PublicationEntity | Error> {
    const publicationRepository = getRepository(PublicationEntity)
    const publication = await publicationRepository
      .createQueryBuilder("publication") //cria o apelido da entidade (alias)
      .innerJoinAndSelect("publication.account", "account") //relaciona o alias com o account
      .where("publication.id = :id", { id }) //adiciona a condição de trazer a publication pelo id
      .getOne() //retorna um item, que será um publication

    if (!publication) {
      return new Error("Publication does not exist!")
    }


    if (account_id !== publication.account.id) {
      return new Error("Only the account that posted can change the post.")
    }

    publication.content = content ? content : publication.content

    await publicationRepository.save(publication)
    return publication
  }
}
