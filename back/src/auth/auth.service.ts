import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserAuthDto, UserDto } from '../dto/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: UserAuthDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async registration(dto: UserDto) {
    const candidate = await this.userService.getUserByEmail(dto.email);

    if (candidate) {
      return new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(dto.password, +process.env.SALT);
    await this.userService.createUser({ ...dto, password: hashPassword });
    return {
      message: 'You have successfully registered',
    };
  }

  private async generateToken(user: UserDto) {
    const payload = { email: user.email, name: user.name };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(dto: UserAuthDto) {
    const user = await this.userService.getUserByEmail(dto.email);
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (user && passwordEquals) return user;
    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }
}
