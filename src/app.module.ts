import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MeasurementsModule } from './measurements/measurements.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
	imports: [
		MongooseModule.forRoot('mongodb+srv://air-quality:1254889@cluster0.hw1ns.mongodb.net/air-quality?retryWrites=true&w=majority'),
		MeasurementsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
