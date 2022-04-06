import { Request, Response } from "express"
import { SignUpService } from "../services/sign-up-service"

export class SignUpController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {documentNumber, email, name, password} = request.body
    const service = new SignUpService()
    const result = await service.execute({ documentNumber, email, name, password})

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
