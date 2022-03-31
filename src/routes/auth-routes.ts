import { Router } from "express"
import { AuthLoginController } from "../controllers/auth/auth-login-controller"

const authRoutes = Router()

authRoutes.post("/login", new AuthLoginController().handle)

export { authRoutes }
