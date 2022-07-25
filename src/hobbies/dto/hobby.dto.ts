import { InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateHobbyInput {
  // firstName
  @ApiProperty({
    example: 'Maxwell Amuzu',
    description: 'The firstname of the User',
    format: 'string',
    type: String,
    minLength: 5,
    maxLength: 30,
  })
  name: string;
}

@InputType()
export class ListHobbyInput {
  _id?: MongooseSchema.Types.ObjectId;

  // firstName
  @ApiProperty({
    example: 'Swimming',
    description: 'A hobby you engage in',
    format: 'string',
    type: String,
    minLength: 5,
    maxLength: 30,
  })
  name?: string;
}

@InputType()
export class UpdateHobbyInput {
  _id: MongooseSchema.Types.ObjectId;

  // hobby
  @ApiProperty({
    example: 'Maxwell Amuzu',
    description: 'A hobby',
    format: 'string',
    type: String,
    minLength: 5,
    maxLength: 30,
  })
  name?: string;
}
