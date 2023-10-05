import type {Answer} from "$lib/types/question";
import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export const answerIdStore: Writable<string[]> = writable([]);
export const answerStore: Writable<Answer[]> = writable([]);
export const inputAnswerStore: Writable<Record<string, Answer>[]> = writable([]);

export function inputAnswerChanged(questionId: string, value: Answer) {
    inputAnswerStore.update(answers => {
        answers[questionId] = value;
        return answers;
    })
    console.log(`${questionId} => ${value.text}`)
}