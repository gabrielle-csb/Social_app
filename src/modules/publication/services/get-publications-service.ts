import { getRepository } from "typeorm"
import { PublicationEntity } from "../publication-entity"

type GetPublicationsRequest = {
  account_id?: string
  pageSize: number
  pageNumber: number
  keyword?: string
}

export class GetPublicationsService {
  async execute({ account_id, pageNumber, pageSize, keyword }: GetPublicationsRequest): Promise<[PublicationEntity[], number]> {
    const skip = (pageNumber - 1) * pageSize //metodo de paginação
    const publicationRepository = getRepository(PublicationEntity)
    const query = publicationRepository
      .createQueryBuilder("publication")
      .leftJoinAndSelect("publication.comments", "comments")
      .leftJoinAndSelect("comments.reply_comments", "reply_comments")

    //Se account_id existir, adiciona condição para trazer publicações vinculado account_id
    if (account_id) {
      query.where("publication.account_id = :account_id", {
        account_id
      })
    }

    //keyword
    //busca de publiações com palavras chaves
    if (keyword) {
      query.where("LOWER(publication.content) LIKE LOWER(:keyword)", {
        keyword: `%${keyword}%`
      })
    }

    //Ordena minhas publications por ordem decrescente
    return query.orderBy("publication.created_at", "DESC")
      .skip(skip) //pula itens
      .take(pageSize) //limita os itens
      .getManyAndCount() //retorna os dados e a quantidade total de itens no banco
  }
}
