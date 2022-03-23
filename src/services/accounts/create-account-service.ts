import { getRepository } from "typeorm";
import { AccountEntity } from "../../entities";

type AccountRequest = {
  name: string
  documentNumber: string
  email: string
  password: string
}

export class CreateAccountService {
  async execute({ name, documentNumber, email, password }: AccountRequest): Promise<AccountEntity | Error> {
    const accountRepository = getRepository(AccountEntity)
    const accountExistsDocumentNumber = await accountRepository.findOne({ where: { documentNumber } })
    const accountExistsEmail = await accountRepository.findOne({ where: { email } })

    if (accountExistsDocumentNumber || accountExistsEmail) {
      return new Error("Account already exists!")
    }

    const account = accountRepository.create({
      name, documentNumber, email, password
    })

    await accountRepository.save(account)
    return account
  }
}
