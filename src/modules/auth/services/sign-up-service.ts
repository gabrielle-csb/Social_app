import { CreateAccountService } from "../../account/services";

type SignUpRequest = {
  documentNumber: string
  email: string
  name: string
  password: string
}

export class SignUpService {
  async execute({ documentNumber, email, name, password }: SignUpRequest): Promise<void | Error> {
    const service = new CreateAccountService()
    await service.execute({ documentNumber, email, name, password })
  }
}
