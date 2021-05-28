import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';
import { PlantSchema } from './schemas/plant.schema';
// import { PurchaseController } from './purchase/purchase.controller';
// import { DetailsController } from './details/details.controller';
// import { DetailsModule } from './details/details.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Plant', schema: PlantSchema}])],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class PlantsModule {}
