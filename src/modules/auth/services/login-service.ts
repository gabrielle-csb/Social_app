import { getRepository } from "typeorm";
import jsonwebtoken from "jsonwebtoken"
import { AccountEntity } from "../../account/account-entity";

type LoginRequest = {
  login: string
  password: string
}

export class LoginService {
  async execute({ login, password }: LoginRequest): Promise<{ accessToken: string } | Error> {
    const accountRepository = getRepository(AccountEntity)
    let account: AccountEntity | null = null

    const accountExistsDocumentNumber = await accountRepository.findOne({ where: { documentNumber: login } })
    account = accountExistsDocumentNumber ? accountExistsDocumentNumber : account

    const accountExistsEmail = await accountRepository.findOne({ where: { email: login } })
    account = accountExistsEmail ? accountExistsEmail : account
    if (!account) {
      return new Error("Invalid login/password!")
    }

    if (password !== account.password) {
      return new Error("Invalid login/password!")
    }

    const secretKey = "dev"
    const accessToken = jsonwebtoken.sign({ id: account.id }, secretKey, {
      expiresIn: "100d"
    })

    return { accessToken }
  }
}
