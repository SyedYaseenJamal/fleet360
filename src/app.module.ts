import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
import { UsersModule } from './users/users/users.module';

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI not defined in .env');
}

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
