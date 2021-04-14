import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

@Module({
    controllers: [ResumeController],
    providers: [ResumeService],
    imports: [],
})
export class ResumeModule {}
