<script>
    let visible = false;

    function show()
    {
        visible = true;
    }

    function hide()
    {
        visible = false;
    }

    alt.on("debug:audio:Show", show);
    alt.on("debug:audio::Hide", hide);
</script>

<div class="audio-tester-container" class:hidden={!visible}>
    Hello, world!
</div>

<style>
    * {
        font-size: 1.6vh;
        font-weight: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-user-select: none;
        -webkit-user-drag: none;
    }
</style>