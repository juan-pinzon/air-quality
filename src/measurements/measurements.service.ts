import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateMeasurementDto } from './dto/measurement.dto'
import { Measurement, MeasurementDocument } from './schemas/measurement.schema'

@Injectable()
export class MeasurementsService {
	constructor(
		@InjectModel(Measurement.name)
		private readonly measurementModel: Model<MeasurementDocument>,
	) {}

	async create(createMeasurementDto: CreateMeasurementDto) {
		return await this.measurementModel.create(createMeasurementDto)
	}
}
