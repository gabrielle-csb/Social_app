import { Router } from "express"
import { CreateAccountController } from "../controllers/accounts/create-account-controller"
import { DeleteAccountController } from "../controllers/accounts/delete-account-controller"
import { GetAccountByIdController } from "../controllers/accounts/get-account-by-id-controller"
import { GetAccountsController } from "../controllers/accounts/get-accounts-controller"
import { UpdateAccountController } from "../controllers/accounts/update-account-controller"

const accountRoutes = Router()
accountRoutes.post("/", new CreateAccountController().handle)
accountRoutes.get("/", new GetAccountsController().handle)
accountRoutes.put("/:id", new UpdateAccountController().handle)
accountRoutes.get("/:id", new GetAccountByIdController().handle)
accountRoutes.delete("/:id", new DeleteAccountController().handle)

export { accountRoutes }
