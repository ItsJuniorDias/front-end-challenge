import { Router } from 'express';
import { uuid } from 'uuidv4';
import Vehicle from '../models/Vehicle';

const vehiclesRouter = Router();

const vehicles: Vehicle[] = [];

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

  const vehicle = new Vehicle(
    mark,
    model,
    year,
    price,
    category,
    gas_type,
    used_km,
    photos,
  );

  vehicles.push(vehicle);

  return response.json(vehicle);
});

export default vehiclesRouter;
