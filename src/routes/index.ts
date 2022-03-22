import { Router } from "express"
import { accountRoutes } from "./accounts-routes"

import { publicationsRoutes } from "./publications-routes"

const routes = Router()
routes.use("/accounts", accountRoutes)
routes.use("/publications", publicationsRoutes)

export { routes }
