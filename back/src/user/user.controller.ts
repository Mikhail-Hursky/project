import { Controller, Headers, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserByEmail(@Headers() headers) {
    const user = await this.userService.getUser(
      headers.authorization.split(' ')[1],
    );
    return {
      email: user.email,
      name: user.name,
    };
  }
}
