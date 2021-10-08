import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Random } from '../notes/random.entity';
import { Pear } from '../notes/pear.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjspractice',
      //   synchronize: true,
      autoLoadEntities: false,
      entities: [Random, Pear],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
      cli: {
        // entitiesDir: 'src/notes',
        migrationsDir: 'src/database/migrations',
      },
    }),
  ],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
