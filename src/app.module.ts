import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsController } from './plants/plants.controller';
import { MongooseModule } from '@nestjs/mongoose';
// import { PurchaseController } from './purchase/purchase.controller';
// import { DetailsController } from './details/details.controller';
// import { DetailsModule } from './details/details.module';
// import { PlantsService } from './plants/plants.service';

@Module({
  imports: [DetailsModule],
  controllers: [
    AppController,
    PlantsController,
    PurchaseController,
    DetailsController,
  ],
  providers: [AppService],
})
export class AppModule {}
