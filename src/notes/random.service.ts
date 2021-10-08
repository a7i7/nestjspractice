import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Random } from './random.entity';

@Injectable()
export class RandomService {
  constructor(
    @InjectRepository(Random)
    private randomRepository: Repository<Random>,
  ) {}

  findAll(): Promise<Random[]> {
    return this.randomRepository.find();
  }

  insert(random: Random) {
    this.randomRepository.insert({ id: 1, value: 'jhfg1j4' });
  }
}
