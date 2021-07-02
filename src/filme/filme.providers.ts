import { Connection, Repository } from 'typeorm';
import { Filme } from './filme.entity';

export const filmeProviders = [
  {
    provide: 'FILME_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Filme),
    inject: ['DATABASE_CONNECTION'],
  },
];
