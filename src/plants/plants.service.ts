import { Injectable } from '@nestjs/common';
import { Plants } from './interfaces/plants.interface';

@Injectable()
export class PlantsService {
  private readonly plants: Plants[] = [
    {
      name: 'Moss',
      id: '123234',
      scientificName: 'Bryophyta',
      price: 50,
      qty: 25,
      description: 'Plant 1',
    },
    {
      name: 'Moss2',
      id: '098796',
      scientificName: 'Bryophyta',
      price: 50,
      qty: 25,
      description: 'Plant 2',
    },
  ];

  findAll(): Plants[] {
    return this.plants;
  }
}
