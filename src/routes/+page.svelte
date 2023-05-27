<script lang="ts">
    import QuestionComponent from "$lib/components/QuestionComponent.svelte";
    import {questions} from "$lib/questions";
    import {answerIdStore, answerStore} from "$lib/stores/answerStore";
    import type {Answer, Question} from "$lib/types/question";
    import {Category} from "$lib/types/question";
    import {fade} from "svelte/transition"

    let currentQuestionIndex = 0;
    let questionStack: Question[] = [...questions.filter(q => /^\d+$/.test(q.id))];
    let currentScores: Map<Category, number> = new Map();

    /**
     * Changes the actively visible question and adds any subsequently questions that are dependent on answers to the question stack.
     * @param forward
     */
    function moveQuestion(forward: boolean) {
        currentQuestionIndex += forward ? 1 : -1;
        if (forward) {
            const questionsToAdd: Question[] = $answerStore
                .map(answer => questions.filter(question => answer.following_questions.includes(question.id)))
                .flat();
            questionStack.splice(currentQuestionIndex, 0, ...questionsToAdd);
            questionStack = [...new Set([...questionStack])];
        }
    }

    /**
     * On answer selection the answer and it's ID is added to relevant stores.
     * @param answerId
     * @param answer
     */
    function on_select(answerId: string, answer: Answer) {
        const alreadySelected = $answerIdStore.includes(answerId);
        const multiplier = alreadySelected ? -1 : 1;
        if (alreadySelected) {
            answerIdStore.update(answers => answers.filter(id => id !== answerId))
            answerStore.update(answers => answers.filter(a => answer !== a))
            questionStack = questionStack.filter(question => !answer.following_questions.includes(question.id))
        } else {
            answerIdStore.update(answers => [...answers, answerId]);
            answerStore.update(answers => [...answers, answer]);
        }
        answer.points.forEach(tuple => {
            const [category, value] = tuple;
            const currentValue = currentScores.get(category) ?? 0;
            currentScores.set(category, currentValue + value * multiplier);
        });
        currentScores = new Map(currentScores);
    }

</script>
<div id="question_holder">
    <ul id="questions">
        {#each questionStack as question, i (question.id)}
            {#if i === currentQuestionIndex}
                <li class="question" in:fade>
                    <QuestionComponent question={question} {on_select}/>
                </li>
            {/if}
        {/each}
    </ul>
    <button on:click={() => {moveQuestion(true)}}>Next</button>
    <button on:click={() => {moveQuestion(false)}}>Back</button>
    <br>
    <div>
        {#each [...currentScores.entries()] as entry}
            <div style="font-family: monospace">{entry[0]} = {entry[1]}</div>
        {/each}
    </div>
</div>

<style>
    #questions {
        list-style: none;
        position: relative;
        margin: 0 auto;
        padding: 0;
        font-family: "Helvetica Neue", sans-serif;
    }

    #questions .question {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
    }
</style>