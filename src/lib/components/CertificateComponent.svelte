<script lang="ts">
    import type {Certificate} from "$lib/types/question";

    export let certificate: Certificate
    export let order: number = 1
</script>

<a class="certificate" href={certificate.url}>
    <div id="title"><h5><span>{order}.</span> {certificate.name}</h5><img id="logos" src="{certificate.logo}"></div>
    <div id="information">{certificate.info}</div>
</a>


<style>
    /* Body styles */
    .certificate {
        display: inline-block;
        text-decoration: none;
        max-width: 350px;
        background-color: #f0f8f0; /* Light green */
        color: #333; /* Dark gray */
        border: 3px solid #006400; /* Dark green */
        border-radius: 3px;
        padding: .25rem 1rem;
    }

    .certificate:hover {
        background-color: #bfe1bf;
    }

    .certificate:hover #title {
        padding-left: .5em;
        padding-right: .5em;
    }

    /* Heading styles */
    #title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #006400; /* Dark green */
        font-size: 1.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding: .5em 0;
    }

    h5 {
        margin: 0;
    }

    #information {
        padding: 1em 0;
    }

    #logos {
        max-height: 2em;
        display: inline-block;
    }

</style>