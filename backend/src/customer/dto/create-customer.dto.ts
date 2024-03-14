import { IsEmail, IsIn, IsString, Matches, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @MinLength(3, { message: 'O nome precisa ter no minimo 3 caracteres' })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'CPF inválido' })
  cpf: string;

  phone: string;

  @IsIn(['ativo', 'inativo', 'aguardando_ativacao', 'desativado'], {
    message: 'Status inválido',
  })
  status: string;
}
