<script lang="ts">
    import {CERTIFICATE_MAP} from "$lib/Certificates";
    import CertificateComponent from "$lib/components/CertificateComponent.svelte";
    import type {Certificates} from "$lib/types/question";

    export let scores: [Certificates, number][]
</script>

<h2>Certificates that are most suited for you are:</h2>
<div class="certificate-container">
    {#each scores.slice(0, 3) as [key, number]}
        <CertificateComponent certificate={CERTIFICATE_MAP.get(key)}/>
    {/each}
</div>

<style>

    .certificate-container {
        display: flex;
        align-content: center;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;

        background-color: #f8f8f8; /* Light green */
        color: #333; /* Dark gray */
        padding: 1rem;
        border-radius: 3px;
        border: 1px solid rgba(0,0,0, .1);
    }
</style>