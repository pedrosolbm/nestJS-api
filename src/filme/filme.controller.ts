import { Controller, Get, Param, Post, Body, Put, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { Filme } from './filme.entity';
import { RespostaDto } from 'src/dto/resposta.dto';
import { FilmeDto } from './dto/FilmeDto';

@Controller('api/filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Get()
  async findAll(): Promise<Filme[]> {
    return this.filmeService.listar();
  }
  
  @Get(':id')
  async buscarPorId(@Param() params) {
    return this.filmeService.buscarPorId(params.id);
  }

  @Get(':nome')
  async buscarPorNome(@Param() params) {
    return this.filmeService.buscarPorNome(params.nome);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async cadastrar(@Body() data: FilmeDto): Promise<RespostaDto> {
    return this.filmeService.cadastrar(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async atualizar(@Param() params, @Body() data: FilmeDto): Promise<RespostaDto> {
    return this.filmeService.atualizar(params.id, data);
  }

  @Delete(':id')
  async deletar(@Param() params): Promise<RespostaDto>{
    return this.filmeService.apagar(params.id);
  }

}
