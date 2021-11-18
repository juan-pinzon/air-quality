import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type NodeDocument = Node & Document

@Schema({ timestamps: true })
export class Node {
	@Prop()
	readonly idNode: string

	@Prop()
	readonly name: string
}

export const NodeSchema = SchemaFactory.createForClass(Node)
