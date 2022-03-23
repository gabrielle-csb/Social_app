import { Router } from "express"
import { CreateAccountController, GetAccountsController, UpdateAccountController, GetAccountByIdController, DeleteAccountController } from "../controllers/accounts"

const accountRoutes = Router()

accountRoutes.post("/", new CreateAccountController().handle)
accountRoutes.get("/", new GetAccountsController().handle)
accountRoutes.put("/:id", new UpdateAccountController().handle)
accountRoutes.get("/:id", new GetAccountByIdController().handle)
accountRoutes.delete("/:id", new DeleteAccountController().handle)

export { accountRoutes }
