import { getRepository } from "typeorm"
import { AccountEntity } from "../../entities/account-entity"

export class GetAccountByIdService {
  async execute(id: string): Promise<AccountEntity | Error> {

    const accountRepository = getRepository(AccountEntity)
    const account = accountRepository.findOne({ where: { id } })

    if (!account) {
      return new Error("Account does not exist!")
    }

    return account
  }
}
