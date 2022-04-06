import { getRepository } from "typeorm";
import { AccountEntity } from "../account-entity";

export class DeleteAccountService {
  async execute(id: string, account_id: string) {

    if (id !== account_id) {
      return new Error("This account cannot be deleted!")
    }

    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id } })

    if (!account) {
      return new Error("Account does not exist!")
    }

    account.deleted_at = new Date()
    await accountRepository.save(account)
  }
}
