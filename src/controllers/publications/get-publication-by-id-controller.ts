import { Request, Response } from "express"
import { GetPublicationByIdService } from "../../services/publications"

export class GetPublicationByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const service = new GetPublicationByIdService()
    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
