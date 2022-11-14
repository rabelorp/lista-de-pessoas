import { FindOptionsSelect } from 'typeorm';
import { People } from '../entities/PeopleEntity';
import { AppDataSource } from '../utils/data-source';

const peopleRepository = AppDataSource.getRepository(People);

export const createPeopleService = async (input: Partial<People>) => {
  return await peopleRepository.save(peopleRepository.create(input));
};

export const getPeopleService = async (peopleId: string) => {
  return await peopleRepository.findOneBy({ id: peopleId });
};

export const getAllPeopleService = async (select: FindOptionsSelect<People> = {}) => {
  return await peopleRepository.find({ select });
};

export const updatePeopleService = async (peopleId: string, input: Partial<People>) => {
  return await peopleRepository.update(
    { id: peopleId },
    {
      name: input.name,
      lastName: input.lastName,
      nacionality: input.nacionality,
      cep: input.cep,
      state: input.state,
      city: input.city,
      public_place: input.public_place,
      email: input.email,
      telephone: input.telephone,
    },
  );
};

export const deletePeopleService = async (peopleId: string) => {
  return await peopleRepository.delete({ id: peopleId });
};
