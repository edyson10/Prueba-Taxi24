import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('trips')
export class TripModel {
  @PrimaryColumn()
  id: string;

  @Column()
  passengerId: string;

  @Column({ nullable: true })
  driverId: string;

  @Column({ type: 'json' })
  origin: {
    lat: number;
    lon: number;
  };

  @Column()
  destination: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp', nullable: true })
  startTime?: Date;

  @Column({ type: 'timestamp', nullable: true })
  endTime?: Date;

  @Column({ type: 'numeric', nullable: true })
  price?: number;
}