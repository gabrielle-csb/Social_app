import { Request, Response } from "express"
import { DeletePublicationService } from "../../services/publications/delete-publication-service"

type Headers = {
  account_id: string
}

export class DeletePublicationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { account_id } = request.headers as Headers
    const service = new DeletePublicationService()
    const result = await service.execute({ id, account_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(204).end()
  }
}
