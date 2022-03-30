import { Request, Response } from "express"
import { GetReplyCommentByCommentIdService } from "../../services/reply-comments/get-reply-comment-by-comment-id-service"

export class GetReplyCommentByCommentIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { comment_id } = request.params
    const service = new GetReplyCommentByCommentIdService()
    const result = await service.execute(comment_id)

    return response.json(result)
  }
}
