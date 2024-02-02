import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    required: false,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  course: string;


  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;

