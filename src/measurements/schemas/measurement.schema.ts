import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type MeasurementDocument = Measurement & Document

@Schema({ timestamps: true })
export class Measurement {
	@Prop()
	node: string

	@Prop()
	readonly so2: number

	@Prop()
	readonly co: number

	@Prop()
	readonly o3: number

	@Prop()
	readonly no2: number
}

export const MeasurementSchema = SchemaFactory.createForClass(Measurement)
