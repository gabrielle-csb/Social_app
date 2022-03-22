import { Entity, Column, OneToMany } from "typeorm"
import { BaseEntity } from "./base-entity"
import { PublicationEntity } from "./publication-entity"

@Entity("accounts")
export class AccountEntity extends BaseEntity {
  @Column()
  name: string

  @Column({ unique: true })
  documentNumber: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => PublicationEntity, (publications) => publications.account)
  publications: PublicationEntity[]
}
