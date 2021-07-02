
import { IsString, isDateString, isNotEmpty, IsNotEmpty, isString } from 'class-validator';

export class FilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  genero: string;

  @IsNotEmpty()
  data_lancamento: Date
}
