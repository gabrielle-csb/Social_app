import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm"

//ENTIDADE BASE
//Como todas entidades necessariamente possuem registro de id, data da criacao,
//alteracao e deletado criei o BaseEntity com esses registros que se repetem
//podendo ser feito com qualquer propriedade de repeticao desejada.

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date | null
}
