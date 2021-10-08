import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Random } from '../notes/random.entity';
import { Pear } from '../notes/pear.entity';
import { join } from 'path';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'nestjspractice',
    //   //   synchronize: true,
    //   autoLoadEntities: true,
    //   // entities: [Random, Pear],
    //   entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    //   migrations: ['dist/database/migrations/*{.ts,.js}'],
    //   migrationsRun: true,
    //   // cli: {
    //   //   // entitiesDir: 'src/notes',
    //   //   migrationsDir: 'src/database/migrations',
    //   // },
    // }),
    TypeOrmModule.forRoot(),
  ],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
