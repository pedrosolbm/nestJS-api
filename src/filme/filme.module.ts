import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FilmeController } from './filme.controller';
import { filmeProviders } from './filme.providers';
import { FilmeService } from './filme.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FilmeController],
  providers: [...filmeProviders, FilmeService],
})
export class FilmeModule {}
