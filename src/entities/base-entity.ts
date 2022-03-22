import { CreateDateColumn, PrimaryColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"

export abstract class BaseEntity {
  @PrimaryColumn()
  id: string

  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at:Date

  @DeleteDateColumn()
  deleted_at: Date | null

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
