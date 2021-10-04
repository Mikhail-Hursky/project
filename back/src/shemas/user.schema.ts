import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = User & Document;

export interface UserDto {
  name: string
  password: string
  email: string
}

export interface AuthDto {
  password: string
  email: string
}

@Schema()
export class User{
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true})
  email:string;

}


export const UserSchema = SchemaFactory.createForClass(User);