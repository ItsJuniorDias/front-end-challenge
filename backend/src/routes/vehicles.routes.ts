import { Router } from 'express';

import Vehicle from '../models/Vehicle';
import VehiclesRepository from '../repositories/VehiclesRepository';

const vehiclesRouter = Router();
const vehiclesRepository = new VehiclesRepository();

vehiclesRouter.get('/', (request, response) => {
  const vehicles = vehiclesRepository.all();

  return response.json(vehicles);
});

vehiclesRouter.post('/', (request, response) => {
  const {
    mark,
    model,
    year,
    price,
    category,
    gas_type,
    used_km,
    photos,
  } = request.body;

  const vehicle = vehiclesRepository.create(
    mark,
    model,
    year,
    price,
    category,
    gas_type,
    used_km,
    photos,
  );

  return response.json(vehicle);
});

export default vehiclesRouter;
