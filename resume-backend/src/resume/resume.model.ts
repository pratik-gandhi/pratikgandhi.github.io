export enum ResumeStatus {
    DRAFT = 0,
    IN_REVIEW,
    PUBLISHED,
    ARCHIVE
}

export interface Resume {
    id: number,
    type: string,
    status: ResumeStatus,
    summary: string,
    imageUrl: string
    targetCompany?: string[],
}