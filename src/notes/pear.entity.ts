import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pear {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;
}
