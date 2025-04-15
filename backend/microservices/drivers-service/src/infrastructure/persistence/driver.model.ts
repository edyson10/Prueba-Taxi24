import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('drivers')
export class DriverModel {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  status: string;
}