import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicles')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mark: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column('numeric', { precision: 6, scale: 3 })
  price: number;

  @Column()
  category: string;

  @Column()
  gas_type: string;

  @Column('numeric', { precision: 6, scale: 3 })
  used_km: number;
}

export default Vehicle;
