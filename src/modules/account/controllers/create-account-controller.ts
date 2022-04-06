import { Request, Response } from "express";
import { CreateAccountService } from "../services";

export class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, documentNumber, email, password } = request.body
    const service = new CreateAccountService()
    const result = await service.execute({ name, documentNumber, email, password })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
