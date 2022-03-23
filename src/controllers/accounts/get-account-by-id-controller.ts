import { Request, Response } from "express"
import { GetAccountByIdService } from "../../services/accounts"

export class GetAccountByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const service = new GetAccountByIdService()
    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
