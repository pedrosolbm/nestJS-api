import { Injectable, Inject } from '@nestjs/common';
import { RespostaDto } from 'src/dto/resposta.dto';
import { Repository } from 'typeorm';
import { FilmeDto } from './dto/FilmeDto';
import { Filme } from './filme.entity';

@Injectable()
export class FilmeService {
  constructor(
    @Inject('FILME_REPOSITORY')
    private filmeRepository: Repository<Filme>,
  ) {}

  async listar(): Promise<Filme[]> {
    return this.filmeRepository.find();
  }

  async buscarPorId(_id: number): Promise<Filme> {
    return this.filmeRepository.findOne({
      select: ['id', 'nome', 'genero', 'data_lancamento'],
      where: [{ id: _id }],
    });
  }

  async buscarPorNome(_nome: string): Promise<Filme[]> {
    return this.filmeRepository.find({
      select: ['id', 'nome', 'genero', 'data_lancamento'],
      where: [{ nome: _nome }],
    });
  }

  async buscarPorGenero(_genero: string): Promise<Filme[]> {
    return this.filmeRepository.find({
      select: ['id', 'nome', 'genero', 'data_lancamento'],
      where: [{ genero: _genero }],
    });
  }

  async cadastrar(data: FilmeDto): Promise<RespostaDto> {
    let filme = new Filme();
    filme.nome = data.nome;
    filme.genero = data.genero;
    filme.data_lancamento = data.data_lancamento;
    return this.filmeRepository
      .save(filme)
      .then((result) => {
        return <RespostaDto>{
          status: true,
          mensagem: 'Filme cadastrado com sucesso.',
        };
      })
      .catch((error) => {
        return <RespostaDto>{
          status: false,
          mensagem: 'Erro ao cadastrar o filme.',
          erro: error,
        };
      });
  }

  async atualizar(id: number, data: FilmeDto): Promise<RespostaDto> {
    let filme = await this.filmeRepository.findOne(id);

    filme.nome = data.nome;
    filme.genero = data.genero;
    filme.data_lancamento = data.data_lancamento;

    return this.filmeRepository
      .save(filme)
      .then((result) => {
        return <RespostaDto>{
          status: true,
          mensagem: 'Filme atualizado com sucesso.',
        };
      })
      .catch((error) => {
        return <RespostaDto>{
          status: false,
          mensagem: 'Erro ao atualizar o filme.',
          erro: error,
        };
      });
  }

  async apagar(id: number): Promise<RespostaDto> {
    return this.filmeRepository
      .delete(id)
      .then((result) => {
        return <RespostaDto>{
          status: true,
          mensagem: 'Filme apagado com sucesso.',
        };
      })
      .catch((error) => {
        return <RespostaDto>{
          status: false,
          mensagem: 'Erro ao apagar o filme.',
          erro: error,
        };
      });
  }
}
