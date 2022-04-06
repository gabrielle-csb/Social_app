import { Request, Response } from "express";
import { CreatePublicationService } from "../services";

export class CreatePublicationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { content } = request.body
    const { account_id } = request
    const service = new CreatePublicationService()
    const result = await service.execute({ content, account_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
