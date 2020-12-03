<script>
    let counter = 0;
    function handleClick(){
        counter +=1;
    }
</script>

<button on:click={handleClick}>You have clicked {counter} times!!</button>