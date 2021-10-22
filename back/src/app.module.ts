import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}${process.env.URL}`,
    ),
    CardModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
