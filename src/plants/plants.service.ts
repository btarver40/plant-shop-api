import { Injectable } from '@nestjs/common';
import { Plant } from './interfaces/plant.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PlantsService {
  constructor(@InjectModel('Plant') private readonly plantModel:Model<Plant>) {}

  async findAll(): Promise<Plant[]> {
    return await this.plantModel.find();
  }

  async findOne(id: string): Promise<Plant> {
    return await this.plantModel.findOne({_id: id });
  }

  // return the new plant with the mongodb id
  async create(plant: Plant): Promise<Plant> {
    const newPlant = new this.plantModel(plant);
    return await newPlant.save();
  }

  // using mongoose method to find by id and delete
  async delete(id: string): Promise<Plant> {
    return await this.plantModel.findByIdAndRemove(id);
  }

  async update(id: string, plant: Plant): Promise<Plant> {
    return await this.plantModel.findByIdAndUpdate(id, plant, { new: true });
  }
}
