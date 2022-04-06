import { Request, Response } from "express"
import { LoginService } from "../services/login-service"

export class AuthLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { login, password } = request.body
    const service = new LoginService()
    const result = await service.execute({ password, login })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
