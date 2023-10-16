<script lang="ts">
    import {CERTIFICATE_MAP} from "$lib/Certificates";
    import CertificateComponent from "$lib/components/CertificateComponent.svelte";
    import type {Certificates} from "$lib/types/question";

    export let scores: [Certificates, number][]

    const topThreeCertificates = scores.slice(0, 3)
    const theRest = scores.slice(3, 10)
</script>

<div class="container">
    <h2>Certificates that are most suited for you are:</h2>
    <div class="certificate-container">
        {#each topThreeCertificates as [key, number], i}
            <CertificateComponent certificate={CERTIFICATE_MAP.get(key)} order={i+1}/>
        {/each}
    </div>
</div>
<div class="divider"></div>
<div class="container">
    <h2>Certificates that you could be interested in:</h2>
    <div class="certificate-container">
        {#each theRest as [key, number], i}
            <CertificateComponent certificate={CERTIFICATE_MAP.get(key)} order={i+4}/>
        {/each}
    </div>
</div>
<style>
    .container {
        margin: 0 auto;
        max-width: 80%;
        display: flex;
        flex-direction: column;
    }

    h2 {
        margin: 0 0 .5em;
    }

    .divider {
        background-color: #d4e5d4;
        height: 1px;
        border-radius: 3px;
        margin: 3em auto;
        width: 60%;
    }

    .certificate-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1rem;
        background-color: #f8f8f8; /* Light green */
        color: #333; /* Dark gray */
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, .1);
    }
</style>