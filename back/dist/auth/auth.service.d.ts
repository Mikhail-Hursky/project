import { HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAuthDto, UserDto } from '../dto/user.dto';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(dto: UserAuthDto): Promise<{
        token: string;
    }>;
    registration(dto: UserDto): Promise<HttpException | {
        message: string;
    }>;
    private generateToken;
    private validateUser;
}
