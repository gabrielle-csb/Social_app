import { Request, Response } from "express"
import { GetAccountsService } from "../../services/accounts/get-accounts-service"

export class GetAccountsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAccountsService()
    const result = await service.execute()

    return response.json(result)
  }
}
