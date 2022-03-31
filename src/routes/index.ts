import { Request, Response, Router } from "express"
import { accountRoutes } from "./accounts-routes"
import { publicationsRoutes } from "./publications-routes"
import { commentsRoutes } from "./comments-routes"
import { replyCommentsRoutes } from "./reply-comments-routes"
import { authMiddleware } from "../middlewares/auth-middleware"
import { authRoutes } from "./auth-routes"

const routes = Router()

routes.use("/accounts", accountRoutes)
routes.use("/publications", publicationsRoutes)
routes.use("/comments", commentsRoutes)
routes.use("/reply-comments", replyCommentsRoutes)
routes.use("/auth", authRoutes)
routes.get("/", authMiddleware, async (request: Request, response: Response): Promise<Response> => {
  console.log(request.account_id)

  return response.json({ message: 'Hello World' })
})

export { routes }
