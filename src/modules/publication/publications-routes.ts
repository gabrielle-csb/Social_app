import { Router } from "express"
import { CreatePublicationController, GetPublicationsController, UpdatePublicationController, GetPublicationByIdController, DeletePublicationController } from "./controllers"

const publicationsRoutes = Router()

publicationsRoutes.post("/", new CreatePublicationController().handle)
publicationsRoutes.get("/", new GetPublicationsController().handle)
publicationsRoutes.put("/:id", new UpdatePublicationController().handle)
publicationsRoutes.get("/:id", new GetPublicationByIdController().handle)
publicationsRoutes.delete("/:id", new DeletePublicationController().handle)

export { publicationsRoutes }
