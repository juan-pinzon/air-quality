import { IsNotEmpty, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateNodeDto {
	@IsNotEmpty()
	@IsString()
	readonly idNode: string

	@IsNotEmpty()
	@IsString()
	readonly name: string
}

export class UpdateNodeDto extends PartialType(CreateNodeDto) {}
