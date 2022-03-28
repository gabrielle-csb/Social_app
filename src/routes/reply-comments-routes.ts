import { Router } from "express"
import { CreateCommentController, DeleteCommentController, GetCommentsByPublicationIdController, GetCommentsController, UpdateCommentController } from "../controllers/comments"
import { CreateReplyCommentsController } from "../controllers/reply-comments"

const replyCommentsRoutes = Router()

replyCommentsRoutes.post("/", new CreateReplyCommentsController().handle)
//commentsRoutes.get("/", new GetCommentsController().handle)
//commentsRoutes.put("/:id", new UpdateCommentController().handle)
//commentsRoutes.get("/publications/:publication_id", new GetCommentsByPublicationIdController().handle)
//commentsRoutes.delete("/:id", new DeleteCommentController().handle)

export { replyCommentsRoutes }
