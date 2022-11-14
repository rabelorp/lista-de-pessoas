import express from 'express';
import {
  createPeopleController,
  deletePeopleController,
  getPeopleController,
  getAllPeopleController,
  updatePeopleController,
} from '../controllers/PeopleController';
import { validate } from '../middleware/validate';
import {
  createPeopleSchema,
  deletePeopleSchema,
  getPeopleSchema,
  updatePeopleSchema,
} from '../schemas/PeopleSchema';

const router = express.Router();

router
  .route('/')
  .post(validate(createPeopleSchema), createPeopleController)
  .get(getAllPeopleController);

router
  .route('/:peopleId')
  .get(validate(getPeopleSchema), getPeopleController)
  .patch(validate(updatePeopleSchema), updatePeopleController)
  .delete(validate(deletePeopleSchema), deletePeopleController);

export default router;
