export type Question = {
    id: string,
    text: string,
    answerGroups: AnswerGroup[]
}

export type AnswerGroup = {
    title: string,
    answers: Answer[]
}

export type Answer = {
    text: string,
    points: [Category, number][],
    following_questions: string[]
}

export enum Category {
    EcoLabel = "EcoLabel",
    EPD_C2B = "EPD_C2B",
    EPD_B2B = "EPD_B2B"
}