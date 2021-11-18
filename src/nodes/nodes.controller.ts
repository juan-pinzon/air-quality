import {
	Controller,
	Get,
	Post,
	Patch,
	HttpCode,
	HttpStatus,
	Param,
	Body,
} from '@nestjs/common'
import { CreateNodeDto, UpdateNodeDto } from './dtos/node.dto'
import { NodesService } from './nodes.service'

@Controller('nodes')
export class NodesController {
	constructor(private readonly nodeService: NodesService) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	async list() {
		const nodes = await this.nodeService.list()
		return {
			data: nodes,
			message: 'nodes listed',
		}
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	async one(@Param('id') id: string) {
		const node = await this.nodeService.one(id)
		return {
			data: node,
			message: 'node retrieved',
		}
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async save(@Body() createNodeDto: CreateNodeDto) {
		const nodeCreated = await this.nodeService.create(createNodeDto)
		return {
			data: nodeCreated,
			message: 'node created',
		}
	}

	@Patch(':id')
	@HttpCode(HttpStatus.OK)
	async update(@Param('id') id: string, @Body() updateNodeDto: UpdateNodeDto) {
		const nodeUpdated = await this.nodeService.update(id, updateNodeDto)
		return {
			data: nodeUpdated,
			message: 'node updated',
		}
	}
}
