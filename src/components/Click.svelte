<script>
    import confetti from 'canvas-confetti';
    let counter = 0;
    function handleClick(){
        counter +=1;
        confetti();
    }
</script>

<button on:click={handleClick}>You have clicked {counter} times!!</button>
