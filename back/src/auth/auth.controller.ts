import { Body, Controller, Post } from '@nestjs/common';
import { UserAuthDto, UserDto } from '../dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: UserAuthDto) {
    return this.authService.login(dto);
  }

  @Post('registration')
  registration(@Body() dto: UserDto) {
    return this.authService.registration(dto);
  }
}
