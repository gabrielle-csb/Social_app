import { Request, Response } from "express"
import { UpdatePublicationService } from "../services"

export class UpdatePublicationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { content } = request.body
    const { account_id } = request
    const service = new UpdatePublicationService()
    const result = await service.execute({ content, account_id, id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
