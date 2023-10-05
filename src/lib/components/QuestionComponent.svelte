<script lang="ts">

    import {answerIdStore, inputAnswerChanged, inputAnswerStore} from "$lib/stores/answerStore.js";
    import type {Answer, Question} from "$lib/types/question";

    export let on_select: (string, Answer) => void = () => {};
    export let question: Question
    let inputAnswer: Answer = $inputAnswerStore[`${question.id}-other`] ?? {
        text: "",
        points: [],
        following_questions: []
    }
</script>

<div class="question">
    <h2>{question.text}</h2>
    <ul>
        {#each question.answerGroups as answer_group, group_id}
            <li>
                <p>{answer_group.title}</p>
                <ul>
                    {#each answer_group.answers as answer, i}
                        {@const answer_id = `${question.id}-${group_id}-${i}`}
                        {@const checked = $answerIdStore.includes(answer_id)}
                        <li>
                            <label>
                                <input type="checkbox" on:change={() => on_select(answer_id, answer)} {checked}>
                                {answer.text}
                            </label>
                        </li>
                    {/each}
                </ul>
                {#if answer_group.answers.length === 0}
                    {@const id = `${question.id}-other`}
                    <input type="text" placeholder="Please describe" bind:value={inputAnswer.text} on:change={(input) => inputAnswerChanged(id, inputAnswer)}/>
                {/if}
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        list-style: none;
        user-select: none;
        margin: 0;
        padding: 0;
    }

    ul p {
        font-weight: bold;
        opacity: 0.8;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding: 0 0 1rem;
    }

    label {
        display: block;
        margin: .5rem 0;
    }

    input[type="text"] {
        width: 100%;
        outline: none;
        border: 1px solid rgba(0, 0, 0, .2);
        padding: .5rem;
        box-sizing: border-box;
        -webkit-appearance: none;
        appearance: none;
    }

    .question {
        padding: 1rem;
    }
</style>