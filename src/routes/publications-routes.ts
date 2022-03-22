import { Router } from "express"
import { CreatePublicationController } from "../controllers/publications/create-publication-controller"
import { DeletePublicationController } from "../controllers/publications/delete-publication-controller"
import { GetPublicationByIdController } from "../controllers/publications/get-publication-by-id-controller"
import { GetPublicationsController } from "../controllers/publications/get-publications-controller"
import { UpdatePublicationController } from "../controllers/publications/update-publication-controller"

const publicationsRoutes = Router()

publicationsRoutes.post("/", new CreatePublicationController().handle)
publicationsRoutes.get("/", new GetPublicationsController().handle)
publicationsRoutes.put("/:id", new UpdatePublicationController().handle)
publicationsRoutes.get("/:id", new GetPublicationByIdController().handle)
publicationsRoutes.delete("/:id", new DeletePublicationController().handle)

export { publicationsRoutes }

