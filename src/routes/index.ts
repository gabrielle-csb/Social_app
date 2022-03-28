import { Router } from "express"
import { accountRoutes } from "./accounts-routes"
import { publicationsRoutes } from "./publications-routes"
import { commentsRoutes } from "./comments-routes"
import { replyCommentsRoutes } from "./reply-comments-routes"

const routes = Router()

routes.use("/accounts", accountRoutes)
routes.use("/publications", publicationsRoutes)
routes.use("/comments", commentsRoutes)
routes.use("/reply-comments", replyCommentsRoutes)

export { routes }
