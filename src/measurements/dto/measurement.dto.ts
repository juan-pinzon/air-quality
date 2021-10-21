import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateMeasurementDto {
	@IsNotEmpty()
	@IsString()
	readonly node: string

	@IsNotEmpty()
	@IsNumber()
	readonly pm10: number

	@IsNotEmpty()
	@IsNumber()
	readonly so2: number

	@IsNotEmpty()
	@IsNumber()
	readonly co: number

	@IsNotEmpty()
	@IsNumber()
	readonly o3: number

	@IsNotEmpty()
	@IsNumber()
	readonly no2: number
}
