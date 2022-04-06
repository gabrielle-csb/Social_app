import { Request, Response } from "express"
import { GetCommentsByPublicationIdService } from "../services"

export class GetCommentsByPublicationIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { publication_id } = request.params
    const service = new GetCommentsByPublicationIdService()
    const result = await service.execute(publication_id)

    return response.json(result)
  }
}
