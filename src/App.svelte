<script>
import Click from "./components/Click.svelte";
export let name;
</script>

<div class="App">
<h1>Hello {name}</h1>
<Click/>
</div>  

<style>
    .App{
        text-align: center;
    }
    h1{
        color: darkblue;
    }
</style>