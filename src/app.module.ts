import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsController } from './plants/plants.controller';
import { PlantsModule } from './plants/plants.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { PurchaseController } from './purchase/purchase.controller';
// import { DetailsController } from './details/details.controller';
// import { DetailsModule } from './details/details.module';
import { PlantsService } from './plants/plants.service';
import config from './config/key';

@Module({
  imports: [PlantsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, PlantsController],
  providers: [AppService, PlantsService],
})
export class AppModule {}
