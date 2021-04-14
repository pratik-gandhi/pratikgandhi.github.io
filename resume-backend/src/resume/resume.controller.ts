import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Resume } from "./resume.model";
import { ResumeService } from "./resume.service";


@Controller("resume")
export class ResumeController {
    constructor(private readonly resumeService : ResumeService) {}

    @Get(":id")
    getResume(@Param("id") id: number) : Resume {
        return this.resumeService.getResume(id);
    }

    @Get()
    getAllResume(@Param("id") id: number) : Resume[] {
        return this.resumeService.getAllResumes();
    }

    @Post()
    createResume(@Body() resume: Resume) : string {
        return this.resumeService.addResume(resume);
    }

}