import { Router } from "express"
import { CreateCommentController, GetCommentsController, UpdateCommentController, GetCommentsByPublicationIdController, DeleteCommentController } from "./controllers"

const commentsRoutes = Router()

commentsRoutes.post("/", new CreateCommentController().handle)
commentsRoutes.get("/", new GetCommentsController().handle)
commentsRoutes.put("/:id", new UpdateCommentController().handle)
commentsRoutes.get("/publications/:publication_id", new GetCommentsByPublicationIdController().handle)
commentsRoutes.delete("/:id", new DeleteCommentController().handle)

export { commentsRoutes }
