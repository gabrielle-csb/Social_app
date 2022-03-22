import { getRepository } from "typeorm"
import { PublicationEntity } from "../../entities/publication-entity"

export class GetPublicationByIdService {
  async execute(id: string): Promise<PublicationEntity | Error> {

    const publicationRepository = getRepository(PublicationEntity)
    const publication = publicationRepository.findOne({ where: { id } })

    if (!publication) {
      return new Error("Publication does not exist!")
    }

    return publication
  }
}
