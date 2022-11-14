import { object, string, TypeOf } from 'zod';

const cpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const cep = /^[0-9]{5}-[0-9]{3}$/;

export const createPeopleSchema = object({
  body: object({
    name: string({
      required_error: 'O nome deve ser preenchido!',
      invalid_type_error: 'O nome deve ser texto',
    }).min(5, { message: 'O nome deve não pode estar vazio!' }),
    lastName: string({
      required_error: 'O sobrenome deve ser preenchido!',
      invalid_type_error: 'O sobrenome deve ser do tipo texto',
    }).min(5, { message: 'O sobrenome deve não pode estar vazio!' }),
    cpf: string({
      required_error: 'O cpf deve ser preenchido!',
      invalid_type_error: 'O cpf deve ser do tipo texto',
    })
      .min(5, { message: 'O cpf deve não pode estar vazio!' })
      .regex(cpf, { message: 'O cpf está inválido!' }),
    nacionality: string({
      required_error: 'A nacionalidade deve ser preenchido!',
      invalid_type_error: 'A nacionalidade deve ser do tipo texto',
    }).min(5, { message: 'A nacionalidade deve não pode estar vazio!' }),
    cep: string({
      required_error: 'O cep deve ser preenchido!',
      invalid_type_error: 'O cep deve ser do tipo texto',
    })
      .min(5, { message: 'O cep deve não pode estar vazio!' })
      .regex(cep, { message: 'O cep está inválido!' }),
    state: string({
      required_error: 'O estado deve ser preenchido!',
      invalid_type_error: 'O estado deve ser do tipo texto',
    }).min(5, { message: 'O estado deve não pode estar vazio!' }),
    city: string({
      required_error: 'A cidade deve ser preenchida!',
      invalid_type_error: 'A cidade deve ser do tipo texto',
    }).min(5, { message: 'a cidade deve não pode estar vazio!' }),
    public_place: string({
      required_error: 'O cep deve ser preenchido!',
      invalid_type_error: 'O cep deve ser do tipo texto',
    }).min(5, { message: 'O cep deve não pode estar vazio!' }),
    email: string({
      required_error: 'O e-mail deve ser preenchido!',
      invalid_type_error: 'O e-mail deve ser do tipo texto',
    })
      .email({ message: 'O e-mail está incorreto!' })
      .min(5, { message: 'O e-mail deve não pode estar vazio!' }),
    telephone: string({
      required_error: 'O telefone deve ser preenchido!',
      invalid_type_error: 'O telefone deve ser do tipo texto',
    }).min(5, { message: 'O telefone deve não pode estar vazio!' }),
  }),
});

const params = {
  params: object({
    peopleId: string(),
  }),
};

export const getPeopleSchema = object({
  ...params,
});

export const updatePeopleSchema = object({
  ...params,
  body: object({
    name: string(),
    lastName: string(),
    nacionality: string(),
    cpf: string(),
    cep: string(),
    state: string(),
    city: string(),
    public_place: string(),
    email: string(),
    telephone: string(),
  }).partial(),
});

export const deletePeopleSchema = object({
  ...params,
});

export type CreatePeopleSchema = TypeOf<typeof createPeopleSchema>['body'];
export type GetPeopleSchema = TypeOf<typeof getPeopleSchema>['params'];
export type UpdatePeopleSchema = TypeOf<typeof updatePeopleSchema>;
export type DeletePeopleSchema = TypeOf<typeof deletePeopleSchema>['params'];
