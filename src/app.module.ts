import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livro.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: 'Livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
