import { getCustomRepository } from 'typeorm';

import Vehicle from '../models/Vehicle';
import VehiclesRepository from '../repositories/VehiclesRepository';

interface Request {
  mark: string;
  model: string;
  year: string;
  price: number;
  category: string;
  gas_type: string;
  used_km: number;
}

class CreateVehicleService {
  public async execute({
    mark,
    model,
    year,
    price,
    category,
    gas_type,
    used_km,
  }: Request): Promise<Vehicle> {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);

    const vehicle = vehiclesRepository.create({
      mark,
      model,
      year,
      price,
      category,
      gas_type,
      used_km,
    });

    await vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default CreateVehicleService;
