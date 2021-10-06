import { Module } from '@nestjs/common';
import NotesController from './notes.controller';

@Module({
  imports: [],
  controllers: [NotesController],
  providers: [],
})
export class NotesModule {}
