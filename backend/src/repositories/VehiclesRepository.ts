import Vehicle from '../models/Vehicle';

interface CreateVehicleDTO {
  mark: string;
  model: string;
  year: string;
  price: number;
  category: string;
  gas_type: string;
  used_km: number;
}

class VehiclesRepository {
  private vehicles: Vehicle[];

  constructor() {
    this.vehicles = [];
  }

  public all(): Vehicle[] {
    return this.vehicles;
  }

  public create({
    mark,
    model,
    year,
    price,
    category,
    gas_type,
    used_km,
  }: CreateVehicleDTO) {
    const vehicle = new Vehicle({
      mark,
      model,
      year,
      price,
      category,
      gas_type,
      used_km,
    });

    this.vehicles.push(vehicle);

    return vehicle;
  }
}

export default VehiclesRepository;
