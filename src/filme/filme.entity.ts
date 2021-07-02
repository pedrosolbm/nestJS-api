import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Filme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200, nullable: false })
  nome: string;

  @Column({ length: 200 })
  genero: string;

  @Column()
  data_lancamento: Date;
}
