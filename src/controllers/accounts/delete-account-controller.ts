import { Request, Response } from "express"
import { DeleteAccountService } from "../../services/accounts/delete-account-service"

export class DeleteAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const service = new DeleteAccountService()
    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(204).end()
  }
}
