import { Module } from '@nestjs/common'
import { MeasurementsController } from './measurements.controller'
import { MeasurementsService } from './measurements.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Measurement, MeasurementSchema } from './schemas/measurement.schema'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Measurement.name, schema: MeasurementSchema },
		]),
	],
	controllers: [MeasurementsController],
	providers: [MeasurementsService],
})
export class MeasurementsModule {}
