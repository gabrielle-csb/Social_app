import { Request, Response } from "express"
import { GetReplyCommentsService } from "../../services/reply-comments/get-reply-comments-service"

export class GetReplyCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetReplyCommentsService()
    const result = await service.execute()

    return response.json(result)
  }
}
