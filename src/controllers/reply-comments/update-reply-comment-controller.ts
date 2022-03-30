import { Request, Response } from "express"
import { UpdateReplyCommentService } from "../../services/reply-comments/update-reply-comment-service"

export class UpdateReplyCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { account_id, text } = request.body
    const service = new UpdateReplyCommentService()
    const result = await service.execute({ id, text, account_id })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.json(result)
  }
}
