import { NextFunction, Request, Response } from 'express';
import {
  CreatePeopleSchema,
  DeletePeopleSchema,
  GetPeopleSchema,
  UpdatePeopleSchema,
} from '../schemas/PeopleSchema';
import {
  createPeopleService,
  getAllPeopleService,
  getPeopleService,
  updatePeopleService,
  deletePeopleService,
} from '../services/PeopleService';
import AppError from '../utils/appError';

export const createPeopleController = async (
  req: Request<Record<string, never>, Record<string, never>, CreatePeopleSchema>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const people = await createPeopleService(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        people,
      },
    });
  } catch (err: any) {
    if (err.code === '23505') {
      return res.status(409).json({
        status: 'fail',
        message: 'A pessoa com esse CPF já está cadastrada!',
      });
    }
    next(err);
  }
};

export const getPeopleController = async (
  req: Request<GetPeopleSchema>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const people = await getPeopleService(req.params.peopleId);
    if (!people) {
      return next(new AppError(404, 'Pessoa não encontrada!'));
    }

    res.status(200).json({
      status: 'success',
      data: {
        people,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllPeopleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const people = await getAllPeopleService();

    res.status(200).json({
      status: 'success',
      data: {
        people,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const updatePeopleController = async (
  req: Request<UpdatePeopleSchema['params'], Record<string, never>, UpdatePeopleSchema['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const people = await getPeopleService(req.params.peopleId);

    if (!people) {
      return next(new AppError(404, 'Pessoa não encontrada!'));
    }

    Object.assign(people, req.body);

    const updatedPeople = await updatePeopleService(req.params.peopleId, req.body);
    res.status(200).json({
      status: 'success',
      data: {
        people: updatedPeople,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deletePeopleController = async (
  req: Request<DeletePeopleSchema>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const people = await getPeopleService(req.params.peopleId);

    if (!people) {
      return next(new AppError(404, 'Pessoa não encontrada!'));
    }

    await deletePeopleService(req.params.peopleId);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};
