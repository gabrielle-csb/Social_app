import { getRepository } from "typeorm"
import { AccountEntity } from "../../entities/account-entity"

export class GetAccountsService {
  async execute(): Promise<AccountEntity[]> {
    const accountRepository = getRepository(AccountEntity)
    const accounts = accountRepository.find()

    return accounts
  }
}
