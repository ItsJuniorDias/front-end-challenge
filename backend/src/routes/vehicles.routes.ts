import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import VehiclesRepository from '../repositories/VehiclesRepository';
import CreateVehicleService from '../services/CreateVehicleService';

const vehiclesRouter = Router();

vehiclesRouter.get('/', async (request, response) => {
  const vehiclesRepository = getCustomRepository(VehiclesRepository);
  const vehicles = await vehiclesRepository.find();

  return response.json(vehicles);
});

vehiclesRouter.post('/', async (request, response) => {
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

    const createVehicle = new CreateVehicleService();

    const vehicle = await createVehicle.execute({
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
