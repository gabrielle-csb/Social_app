import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import { AccountEntity } from "./account-entity"
import { BaseEntity } from "./base-entity"

@Entity("publications")
export class PublicationEntity extends BaseEntity {
  @Column()
  content: string

  @Column()
  account_id: string

  @JoinColumn({ name: "account_id" })
  @ManyToOne(() => AccountEntity, (account) => account.publications)
  account: AccountEntity
}
