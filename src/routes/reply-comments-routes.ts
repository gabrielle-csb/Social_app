import { Router } from "express"
import { CreateReplyCommentsController, DeleteReplyCommentController, GetReplyCommentByCommentIdController, GetReplyCommentsController, UpdateReplyCommentController } from "../controllers/reply-comments"

const replyCommentsRoutes = Router()

replyCommentsRoutes.post("/", new CreateReplyCommentsController().handle)
replyCommentsRoutes.get("/", new GetReplyCommentsController().handle)
replyCommentsRoutes.put("/:id", new UpdateReplyCommentController().handle)
replyCommentsRoutes.get("/comments/:comment_id", new GetReplyCommentByCommentIdController().handle)
replyCommentsRoutes.delete("/:id", new DeleteReplyCommentController().handle)

export { replyCommentsRoutes }
