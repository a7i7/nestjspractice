import { Controller, Get } from '@nestjs/common';

@Controller('notes')
export default class NotesController {
  constructor() {}

  @Get()
  getAllNotes() {
    return ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'C'];
  }
}
