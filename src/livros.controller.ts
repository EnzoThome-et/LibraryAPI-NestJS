import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class ProdutosController {
  constructor(private produtosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.produtosService.obterUmId(params.id);
  }

  @Post()
  async criar(@Body() produto): Promise<void> {
    this.produtosService.criar(produto);
  }

  @Put()
  async alterar(@Body() produto) {
    this.produtosService.alterar(produto);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.produtosService.apagar(params.id);
  }
}
