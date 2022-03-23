import { Request, Response } from "express";
import { CreateCommentService } from "../../services/comments";

export class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { text, account_id, publication_id } = request.body
    const service = new CreateCommentService()
    const result = await service.execute({ text, account_id, publication_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
