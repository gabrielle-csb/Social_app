import { getRepository } from "typeorm"
import { PublicationEntity } from "../../entities/publication-entity"

export class GetPublicationsService {
  async execute(): Promise<PublicationEntity[]> {
    const publicationRepository = getRepository(PublicationEntity)
    const publications = publicationRepository.find()

    return publications
  }
}
