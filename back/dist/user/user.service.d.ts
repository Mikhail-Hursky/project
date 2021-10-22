import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { UserDocument } from '../shemas/user.schema';
import { UserDto } from '../dto/user.dto';
export declare class UserService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    createUser(dto: UserDto): Promise<import("mongoose").Document<any, any, UserDocument> & import("../shemas/user.schema").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUserByEmail(email: string): Promise<import("mongoose").Document<any, any, UserDocument> & import("../shemas/user.schema").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUser(token: string): Promise<import("mongoose").Document<any, any, UserDocument> & import("../shemas/user.schema").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
