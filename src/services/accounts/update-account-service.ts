import { getRepository, Not } from "typeorm"
import { AccountEntity } from "../../entities"

type UpdateAccountRequest = {
  id: string
  email: string
  password: string
  account_id: string
}

export class UpdateAccountService {
  async execute({ id, email, password, account_id }: UpdateAccountRequest): Promise<AccountEntity | Error> {

    if (id !== account_id) {
      return new Error("This account cannot change data!")
    }

    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id } })

    if (!account) {
      return new Error("Account does not exist!")
    }

    const emailInUse = await accountRepository.findOne({ where: { email, id: Not(id) } })//Not, ele não aparece na consultada desse determinado id

    if (emailInUse) {
      return new Error("This email is used by another account!")
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
