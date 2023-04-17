export class CreatePatienceDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly patology?: string;
  readonly createdAt?: Date;
}