import { getRepository } from "typeorm"
import { PublicationEntity } from "../../entities"

type GetPublicationsRequest = {
  account_id?: string
  pageSize: number
  pageNumber: number
  keyword?: string
}

export class GetPublicationsService {
  async execute({ account_id, pageNumber, pageSize, keyword }: GetPublicationsRequest): Promise<[PublicationEntity[], number]> {
    const skip = (pageNumber - 1) * pageSize
    const publicationRepository = getRepository(PublicationEntity)
    const query = publicationRepository
      .createQueryBuilder("publication")
      .leftJoinAndSelect("publication.comments", "comments")

    if (account_id) {
      query.where("publication.account_id = :account_id", {
        account_id
      })
    }

    if (keyword) {
      query.where("LOWER(publication.content) LIKE LOWER(:keyword)", {
        keyword: `%${keyword}%`
      })
    }

    query.orderBy("publication.created_at", "DESC")
      .skip(skip).take(pageSize)
    return query.getManyAndCount()
  }
}
