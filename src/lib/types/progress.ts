export type ProgressDTO = {
    id: number | undefined,
    progress: number,
    answers: Map<number, String[]>
}