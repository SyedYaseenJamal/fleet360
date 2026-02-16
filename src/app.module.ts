// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users/users.module';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule],
})
export class AppModule {}
