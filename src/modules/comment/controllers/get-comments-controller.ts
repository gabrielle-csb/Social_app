import { Request, Response } from "express"
import { GetCommentsService } from "../services"

export class GetCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetCommentsService()
    const result = await service.execute()

    return response.json(result)
  }
}
