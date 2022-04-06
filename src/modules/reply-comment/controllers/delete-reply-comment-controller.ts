import { Request, Response } from "express"
import { DeleteReplyCommentService } from "../services"

export class DeleteReplyCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { account_id } = request
    const service = new DeleteReplyCommentService()
    const result = await service.execute({ id, account_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(204).end()
  }
}
