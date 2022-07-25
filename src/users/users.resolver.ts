import { Args, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { ListPersonInput } from './dto/create-user.dto';
import { User } from './model/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private _userService: UsersService) {}

  @Query(() => User)
  async getPerson(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this._userService.findById(_id);
  }

  @Query(() => [User])
  async users(@Args('filters', { nullable: true }) filters?: ListPersonInput) {
    return this._userService.list(filters);
  }
}
