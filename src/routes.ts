import { Router } from "express"
import { accountRoutes } from "./modules/account/accounts-routes"
import { authRoutes } from "./modules/auth/auth-routes"
import { authMiddleware } from "./modules/auth/middlewares/auth-middleware"
import { commentsRoutes } from "./modules/comment/comments-routes"
import { publicationsRoutes } from "./modules/publication/publications-routes"
import { replyCommentsRoutes } from "./modules/reply-comment/reply-comments-routes"

const routes = Router()
routes.use("/auth", authRoutes)

routes.use(authMiddleware)
routes.use("/accounts", accountRoutes)
routes.use("/publications", publicationsRoutes)
routes.use("/comments", commentsRoutes)
routes.use("/reply-comments", replyCommentsRoutes)

export { routes }
