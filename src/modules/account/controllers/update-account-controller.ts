import { Request, Response } from "express"
import { UpdateAccountService } from "../services"

export class UpdateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { email, password } = request.body
    const { account_id } = request
    const service = new UpdateAccountService()
    const result = await service.execute({ id, email, password, account_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
