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
  private vehiclesRepository: VehiclesRepository;

  constructor(vehiclesRepository: VehiclesRepository) {
    this.vehiclesRepository = vehiclesRepository;
  }

  public execute({
    mark,
    model,
    year,
    price,
    category,
    gas_type,
    used_km,
  }: Request): Vehicle {
    const vehicle = this.vehiclesRepository.create({
      mark,
      model,
      year,
      price,
      category,
      gas_type,
      used_km,
    });

    return vehicle;
  }
}

export default CreateVehicleService;
