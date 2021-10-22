import { UserAuthDto, UserDto } from '../dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: UserAuthDto): Promise<{
        token: string;
    }>;
    registration(dto: UserDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
    }>;
}
