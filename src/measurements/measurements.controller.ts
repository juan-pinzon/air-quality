import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	HttpStatus,
} from '@nestjs/common'
import { CreateMeasurementDto } from './dto/measurement.dto'
import { MeasurementsService } from './measurements.service'

@Controller('api/measurements')
export class MeasurementsController {
	constructor(private readonly measurementService: MeasurementsService) {}

	@Get('status')
	status() {
		return {
			success: true,
		}
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async save(@Body() measurement: CreateMeasurementDto) {
		const createdMeasurement = await this.measurementService.create(measurement)
		return {
			data: createdMeasurement,
			message: 'measurement created',
		}
	}
}
