import { Router } from "express"
import { SignUpController } from "./controllers"
import { AuthLoginController } from "./controllers/auth-login-controller"

const authRoutes = Router()

authRoutes.post("/login", new AuthLoginController().handle)
authRoutes.post("/sign-up", new SignUpController().handle)

export { authRoutes }
