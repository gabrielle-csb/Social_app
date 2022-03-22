import { Request, Response } from "express"
import { GetPublicationsService } from "../../services/publications/get-publications-service"

export class GetPublicationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetPublicationsService()
    const result = await service.execute()

    return response.json(result)
  }
}
