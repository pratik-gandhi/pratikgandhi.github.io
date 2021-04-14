import { Injectable, NotFoundException } from "@nestjs/common";
import { Resume } from "./resume.model";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class ResumeService {

    private resumes: Resume[] = [];


    getAllResumes(): Resume[] {
        return this.resumes;
    }

    getResume(id: number): Resume {
        const resume = this.resumes.find(resume => resume.id === id);
        if (!resume) {
            throw new NotFoundException(`No Resume found for id : ${id}`);
        }
        return resume;
    }


    addResume(resume: Resume): string {
        const id = uuidv4();

        const newResume = { ...resume, "id": id };

        this.resumes.push(newResume);

        return id;
    }

}