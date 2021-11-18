import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MeasurementsModule } from './measurements/measurements.module'
import { MongooseModule } from '@nestjs/mongoose'
import { NodesModule } from './nodes/nodes.module'

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/air-quality'),
		MeasurementsModule,
		NodesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
