import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('people')
export class People {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  @Column()
  cpf: string;

  @Column()
  nacionality: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  public_place: string;

  @Column()
  email: string;

  @Column()
  telephone: string;
}
