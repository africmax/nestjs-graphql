import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesController } from './hobbies.controller';

@Module({
  providers: [HobbiesService],
  controllers: [HobbiesController],
})
export class HobbiesModule {}
