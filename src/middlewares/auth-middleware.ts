import { Request, Response, NextFunction } from "express"
import jsonwebtoken from "jsonwebtoken"

export const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers["authorization"]

  if (!token) {
    return response.status(401).json({ error: "Token was not provided!" })
  }

  const { id } = jsonwebtoken.verify(token, "dev", { ignoreExpiration: true }) as { id: string }

  request.account_id = id

  next()
}
