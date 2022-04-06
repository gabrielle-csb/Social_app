import { Router } from "express"
import { CreateReplyCommentsController, GetReplyCommentsController, UpdateReplyCommentController, GetReplyCommentByCommentIdController, DeleteReplyCommentController } from "./controllers"

const replyCommentsRoutes = Router()

replyCommentsRoutes.post("/", new CreateReplyCommentsController().handle)
replyCommentsRoutes.get("/", new GetReplyCommentsController().handle)
replyCommentsRoutes.put("/:id", new UpdateReplyCommentController().handle)
replyCommentsRoutes.get("/comments/:comment_id", new GetReplyCommentByCommentIdController().handle)
replyCommentsRoutes.delete("/:id", new DeleteReplyCommentController().handle)

export { replyCommentsRoutes }
