import { Request, Response } from "express"
import { UpdateReplyCommentService } from "../services"

export class UpdateReplyCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { text } = request.body
    const { account_id } = request
    const service = new UpdateReplyCommentService()
    const result = await service.execute({ id, text, account_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
