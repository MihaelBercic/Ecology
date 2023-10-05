<script lang="ts">
    import type {Certificate} from "$lib/types/question";

    export let certificate: Certificate
</script>

<a href={certificate.url}>
    <div class="certificate">
        <h3>{certificate.name}</h3>
        <img id="logos" src="{certificate.logo}"> 
        <div id="information">{certificate.info}</div>
    </div>
</a>


<style>
    /* Body styles */
    .certificate {
        display: inline-block;
        vertical-align: top;
        margin: .5rem;
        max-width: 350px;
        background-color: #f0f8f0; /* Light green */
        color: #333; /* Dark gray */
        font-family: Arial, sans-serif;
        border: 3px solid #006400; /* Dark green */
        border-radius: 3px;
        padding: .5rem 1rem;
    }

    /* Heading styles */
    h3 {
        color: #006400; /* Dark green */
        font-size: 1.5rem;
        padding-bottom: .1rem;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    p {
        color: #E62D0FFF;
    }
    #logos{
        width:60px;
        display:block;
        margin:auto;
        padding-bottom: 10px;
    }

</style>