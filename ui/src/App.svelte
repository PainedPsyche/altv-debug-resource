<script>
    if(window.alt === undefined)
    {
        window.alt = {
            emit: () => { },
            on: () => { },
        };
    }

    import AudioTester from './components/AudioTester.svelte'
</script>

<main>
    <AudioTester />
</main>

<style>
    /*  custom definitions    */
</style>