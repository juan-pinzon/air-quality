import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateNodeDto, UpdateNodeDto } from './dtos/node.dto'
import { Node, NodeDocument } from './schemas/node.schema'

@Injectable()
export class NodesService {
	constructor(
		@InjectModel(Node.name)
		private readonly nodeModel: Model<NodeDocument>,
	) {}

	async list() {
		return await this.nodeModel.find()
	}

	async one(id: string) {
		return await this.nodeModel.findById(id)
	}

	async create(createNodeDto: CreateNodeDto) {
		return await this.nodeModel.create(createNodeDto)
	}

	async update(id: string, updateNodeDto: UpdateNodeDto) {
		return await this.nodeModel.findByIdAndUpdate(id, updateNodeDto)
	}
}
