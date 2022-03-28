import { getRepository } from "typeorm"
import { AccountEntity } from "../../entities"

type UpdateAccountRequest = {
  id: string
  email: string
  password: string
}

export class UpdateAccountService {
  async execute({ id, email, password }: UpdateAccountRequest): Promise<AccountEntity | Error> {
    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id } })

    if (!account) {
      return new Error("Account does not exist!")
    }

    //Condições de alteração
    //account.email vai receber outro email como parametro
    //? se esse email for true, retorne o novo email
    //: se não, retorne o email anterior
    account.email = email ? email : account.email
    account.password = password ? password : account.password

    await accountRepository.save(account)
    return account
  }
}
