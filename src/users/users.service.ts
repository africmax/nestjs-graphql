import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import {
  CreateHobbyDto,
  ListPersonInput,
  UpdatePersonInput,
} from './dto/create-user.dto';
import { User, UserDocument } from './model/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(payload: CreateHobbyDto) {
    const user = new this.userModel(payload);
    user.save();
  }

  async findById(_id: MongooseSchema.Types.ObjectId) {
    const user = await this.userModel.findOne({ _id });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    await this.findById(_id);
    this.userModel.findByIdAndDelete(_id).exec();
  }

  list(filters: ListPersonInput) {
    return this.userModel.find({ ...filters }).exec();
  }

  update(payload: UpdatePersonInput) {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }
}
