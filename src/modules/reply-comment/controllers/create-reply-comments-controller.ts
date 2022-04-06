import { Request, Response } from "express";
import { CreateReplyCommentsService } from "../services";

export class CreateReplyCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { text, publication_id, comment_id } = request.body
    const { account_id } = request
    const service = new CreateReplyCommentsService()
    const result = await service.execute({ text, account_id, publication_id, comment_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
