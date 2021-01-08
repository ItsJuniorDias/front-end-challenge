import { uuid } from 'uuidv4';

interface IVehicleModel {
  id?: string;
  mark: string;
  model: string;
  year: string;
  price: number;
  category: string;
  gas_type: string;
  used_km: number;
}

class Vehicle {
  id: string;

  mark: string;

  model: string;

  year: string;

  price: number;

  category: string;

  gas_type: string;

  used_km: number;

  constructor({
    mark,
    model,
    year,
    price,
    category,
    gas_type,
    used_km,
  }: IVehicleModel) {
    this.id = uuid();
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.price = price;
    this.category = category;
    this.gas_type = gas_type;
    this.used_km = used_km;
  }
}

export default Vehicle;
