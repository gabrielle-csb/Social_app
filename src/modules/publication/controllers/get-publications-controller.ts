import { Request, Response } from "express"
import { GetPublicationsService } from "../services"
import { Paginate } from "../../../utils/paginate"

type QueryParams = {
  account_id?: string
  pageSize: string
  pageNumber: string
  keyword?: string
}

export class GetPublicationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { account_id, keyword, ...rest } = request.query as unknown as QueryParams
    const pageSize = rest.pageSize ? + rest.pageSize : 5
    const pageNumber = rest.pageNumber ? + rest.pageNumber : 1
    const service = new GetPublicationsService()
    const [data, totalCount] = await service.execute({
      account_id,
      pageNumber,
      pageSize,
      keyword
    })
    const result = Paginate.do({
      data,
      pageNumber,
      pageSize,
      totalCount
    })

    return response.json(result)
  }
}
