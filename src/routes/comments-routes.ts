import { Router } from "express"
import { CreateCommentController, DeleteCommentController, GetCommentsByPublicationIdController, GetCommentsController, UpdateCommentController } from "../controllers/comments"

const commentsRoutes = Router()

commentsRoutes.post("/", new CreateCommentController().handle)
commentsRoutes.get("/", new GetCommentsController().handle)
commentsRoutes.put("/:id", new UpdateCommentController().handle)
commentsRoutes.get("/publications/:publication_id", new GetCommentsByPublicationIdController().handle)
commentsRoutes.delete("/:id", new DeleteCommentController().handle)

export { commentsRoutes }
