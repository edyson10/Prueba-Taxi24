import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locations')
export class LocationModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  driverId: string;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'float' })
  longitude: number;

  @Column({ type: 'timestamp' })
  timestamp: Date;
}