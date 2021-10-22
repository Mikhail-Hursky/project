import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../shemas/user.schema';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: UserDto) {
    return await this.userModel.create(dto);
  }

  async getUserByEmail(email: string) {
    return this.userModel.findOne({ email: email });
  }

  async getUser(token: string) {
    const user = this.jwtService.decode(token);
    if (!user) throw new UnauthorizedException('Error authorization');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.userModel.findOne(user);
  }
}
