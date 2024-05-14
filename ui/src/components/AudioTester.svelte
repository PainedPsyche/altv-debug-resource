<script>
    let visible = false;
    let dataLoaded = false;
    let soundList = [];
    let selected;

    async function loadData(data)
    {
        if(!dataLoaded)
        {
            soundList = data;
            dataLoaded = true;

            alt.emit("debug:audio:DataLoaded");
        }
    }

    function play()
    {
        if(selected)
        {
            alt.emit("debug:audio:Play", selected.AudioName, selected.AudioRef);
        }
    }

    function close()
    {
        hide();
        alt.emit("debug:audio:Close");
    }

    function show()
    {
        visible = true;
    }

    function hide()
    {
        visible = false;
    }

    alt.on("debug:audio:LoadData", loadData);
    alt.on("debug:audio:Show", show);
    alt.on("debug:audio::Hide", hide);
</script>

<div class="audio-tester-container" class:hidden={!visible}>
    <select bind:value={selected} name="audio-list" class="audio-tester-dropdown">
        {#each soundList as sound}
            <option value={sound}>Name: {sound.AudioName}, Ref: {sound.AudioRef}</option>
        {/each}
    </select>
    <button on:click={play}>Play</button>
    <button on:click={close}>Close</button>
</div>

<style>
    * {
        font-size: 1.6vh;
        font-weight: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-user-select: none;
        -webkit-user-drag: none;
    }

    .audio-tester-container.hidden {
        display: none !important;
    }

    .audio-tester-container {
        width: 50%;
        height: 10%;
        position: absolute;
        left: 50%;
        bottom: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 10%;
        justify-content: center;
        align-items: center;
    }
</style>