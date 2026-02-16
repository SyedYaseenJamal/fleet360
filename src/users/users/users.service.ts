import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/user_schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(username: string, email: string, password: string, roles: string[] = ['user']) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ username, email, password: hashedPassword, roles });
    return user.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  async validatePassword(inputPassword: string, hashedPassword: string) {
    return bcrypt.compare(inputPassword, hashedPassword);
  }
}
