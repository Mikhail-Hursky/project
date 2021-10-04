import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersService} from './users/users.service';
import {UsersController} from './users/users.controller';
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}${process.env.URL}`),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
