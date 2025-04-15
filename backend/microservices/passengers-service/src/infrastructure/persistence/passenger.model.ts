import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('passengers')
export class PassengerOrmEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}