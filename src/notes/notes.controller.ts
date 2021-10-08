import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Random } from './random.entity';

export class NotesDTO {
  id: number;
  value: string;
}

@Controller('notes')
@Injectable()
export default class NotesController {
  constructor(
    @InjectRepository(Random)
    private randomRepository: Repository<Random>,
  ) {}

  @Get()
  getAllNotes(): Promise<Random[]> {
    console.log('Get All Note');
    return this.randomRepository.find();
    // return Promise.resolve(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'C']);
  }

  @Post()
  createNotes(@Body() note: NotesDTO) {
    this.randomRepository.insert({
      id: note.id,
      value: note.value,
    });
    console.log('Inserted');
  }
}
