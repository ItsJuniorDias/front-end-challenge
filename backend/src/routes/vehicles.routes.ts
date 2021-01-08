import { Router } from 'express';

import VehiclesRepository from '../repositories/VehiclesRepository';
import CreateVehicleService from '../services/CreateVehicleService';

const vehiclesRouter = Router();
const vehiclesRepository = new VehiclesRepository();

vehiclesRouter.get('/', (request, response) => {
  const vehicles = vehiclesRepository.all();

  return response.json(vehicles);
});

vehiclesRouter.post('/', (request, response) => {
  try {
    const {
      mark,
      model,
      year,
      price,
      category,
      gas_type,
      used_km,
    } = request.body;

    const createVehicle = new CreateVehicleService(vehiclesRepository);

    const vehicle = createVehicle.execute({
      mark,
      model,
      year,
      price,
      category,
      gas_type,
      used_km,
    });

    return response.json(vehicle);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default vehiclesRouter;
