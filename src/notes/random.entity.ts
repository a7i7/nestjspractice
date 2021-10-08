import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Random {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;
}
