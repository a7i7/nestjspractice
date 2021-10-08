import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import NotesController from './notes.controller';
import { Pear } from './pear.entity';
import { Random } from './random.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Random, Pear])],
  controllers: [NotesController],
  providers: [Random, Pear],
})
export class NotesModule {}
