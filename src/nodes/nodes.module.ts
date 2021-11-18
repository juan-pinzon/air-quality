import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { NodesController } from './nodes.controller'
import { NodesService } from './nodes.service'
import { NodeSchema, Node } from './schemas/node.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Node.name, schema: NodeSchema }]),
	],
	controllers: [NodesController],
	providers: [NodesService],
})
export class NodesModule {}
