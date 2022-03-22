import { Request, Response } from "express"
import { UpdateAccountService } from "../../services/accounts/update-account-service"

export class UpdateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { email, password } = request.body
    const service = new UpdateAccountService()
    const result = await service.execute({ id, email, password })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
