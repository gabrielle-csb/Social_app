import { Router } from "express"
import { accountRoutes } from "./accounts-routes"
import { publicationsRoutes } from "./publications-routes"
import { commentsRoutes } from "./comments-routes"

const routes = Router()

routes.use("/accounts", accountRoutes)
routes.use("/publications", publicationsRoutes)
routes.use("/comments", commentsRoutes)

export { routes }
