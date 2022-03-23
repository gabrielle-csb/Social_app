import { getRepository } from "typeorm";
import { AccountEntity } from "../../entities";

export class DeleteAccountService {
  async execute(id: string) {
    const accountRepository = getRepository(AccountEntity)
    const account = await accountRepository.findOne({ where: { id } })

    if (!account) {
      return new Error("Account does not exist!")
    }

    account.deleted_at = new Date()
    await accountRepository.save(account)
  }
}
