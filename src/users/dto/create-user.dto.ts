import { Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Hobby } from 'src/hobbies/model/hobby.model';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHobbyDto {
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

  // hobby
  @ApiProperty({
    example: 'Swimming',
    description: 'Hobby',
    format: 'string',
    type: String,
    minLength: 2,
    maxLength: 255,
  })
  hobby: Hobby[];
}

@InputType()
export class ListPersonInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Fiifi',
    description: 'The firstname of the User',
    format: 'string',
    type: String,
    minLength: 5,
    maxLength: 25,
  })
  name?: string;

  // hobby
  @Field(() => [String], { nullable: true })
  @ApiProperty({
    example: 'Swimming',
    description: 'Array of Hobbies',
    format: 'string',
    type: String,
    minLength: 2,
    maxLength: 255,
  })
  hobbies?: Hobby[];
}

// Update
@InputType()
export class UpdatePersonInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
  hobbies?: Hobby[];
}
