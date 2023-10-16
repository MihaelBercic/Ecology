<script lang="ts">
    import FinalComponent from "$lib/components/FinalComponent.svelte";
    import QuestionComponent from "$lib/components/QuestionComponent.svelte";
    import {questions} from "$lib/questions";
    import {answerIdStore, answerStore, inputAnswerStore} from "$lib/stores/answerStore";
    import type {Answer, Question} from "$lib/types/question";
    import {Certificates} from "$lib/types/question";
    import type {ProgressDTO} from "$lib/types/progress";

    let questionnaireId: number | undefined

    let currentQuestionIndex = 0;
    let questionStack: Question[] = [...questions.filter(q => /^\d+$/.test(q.id))];
    let currentScores: Map<Certificates, number> = new Map();
    let answerResults: Map<number, String[]> = new Map();

    /**
     * Changes the actively visible question and adds any subsequently questions that are dependent on answers to the question stack.
     * @param forward
     */
    function moveQuestion(forward: boolean) {
        const currentlyAnsweredQuestion = questionStack[currentQuestionIndex];
        const oldIndex = currentQuestionIndex
        currentQuestionIndex += (forward ? 1 : -1)
        currentQuestionIndex = Math.max(0, currentQuestionIndex)

        if (!currentlyAnsweredQuestion) return

        const otherQuestionId = `${currentlyAnsweredQuestion.id}-other`;
        const otherAnswer = $inputAnswerStore[otherQuestionId];
        const answerGroups = currentlyAnsweredQuestion.answerGroups.flatMap(group => group.answers);
        let currentAnswers = $answerStore.filter(answer => answerGroups.includes(answer));
        if (otherAnswer) currentAnswers.push(otherAnswer);

        answerResults[currentlyAnsweredQuestion.id] = currentAnswers.map(answer => answer.text);
        const progressPercentage = (currentQuestionIndex * 100) / (questions.length);
        const progressUpdate: ProgressDTO = {id: questionnaireId, progress: progressPercentage, answers: answerResults};
        if (forward && currentQuestionIndex <= questions.length) {
            const questionsToAdd: Question[] = $answerStore
                .map(answer => questions.filter(question => answer.following_questions.includes(question.id)))
                .flat().filter(Boolean);
            questionStack.splice(currentQuestionIndex, 0, ...questionsToAdd);
            questionStack = [...new Set([...questionStack])];
            fetch("/progress", {
                method: "PUT",
                body: JSON.stringify(progressUpdate)
            }).then(async (data) => {
                questionnaireId = parseInt(await data.text())
            })
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

    $: sorted = [...currentScores.entries()].sort((a, b) => b[1] - a[1]);

    $: console.log(questionStack.length)

</script>

{#if currentQuestionIndex >= questionStack.length}
    <FinalComponent bind:scores={sorted}/>
{:else}

    <div id="question_holder">
        <ul id="questions">
            <QuestionComponent bind:question={questionStack[currentQuestionIndex]} {on_select}/>
            {currentQuestionIndex + 1} / {questions.length}
        </ul>
        <button on:click={() => {moveQuestion(false)}}>Back</button>
        <button on:click={() => {moveQuestion(true)}}>Next</button>
        <!--
        <br><br>
        <div>
            {#each sorted as entry}
                <div style="font-family: monospace">{entry[0]} = {entry[1]} = {JSON.stringify(CERTIFICATE_MAP.get(entry[0]))}}</div>
            {/each}
        </div>
        -->
    </div>
{/if}


<style>
    :global(body) {
        font-family: Arial, sans-serif;
    }

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

    /* Body styles */
    body {
        background-color: #f0f8f0; /* Light green */
        color: #333; /* Dark gray */
        font-family: Arial, sans-serif;
    }

    /* Heading styles */
    h2 {
        color: #006400; /* Dark green */
        font-size: 1.5rem;
    }

    /* Checkbox styles */
    input[type="checkbox"] {
        margin-right: 5px;
    }

    /* List styles */
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    /* Question styles */
    .question {
        margin-bottom: 20px;
    }

    /* Button styles */
    button {
        background-color: #228b22; /* Forest green */
        color: #fff; /* White */
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 10px;
    }

    button:hover {
        background-color: #006400; /* Dark green */
    }

    /* Text input styles */
    input[type="text"] {
        padding: 5px;
        border: 1px solid #ccc; /* Light gray */
        border-radius: 3px;
    }

    /* Placeholder styles */
    input::placeholder {
        color: #999; /* Light gray */
    }

    /* Description text styles */
    p {
        color: #333; /* Dark gray */
    }

    /* Additional styles for visual aesthetics */
    #question_holder {
        background-color: #f8f8f8; /* Off-white */
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); /* Light shadow */
    }

    #questions {
        margin-bottom: 10px;
    }

    .svelte-announcer {
        /* Styling for the screen reader text */
        display: none;
    }

</style>