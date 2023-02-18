<script>
	import Increment from "../components/Increment.svelte";
  import PassData from "../components/PassData/PassData.svelte";
  import Timer from "../components/Timer.svelte";
</script>

<div>
  <div class="container">
    <h2 class="title">Task-1: Svelte timer</h2>
    <Timer />
  </div>

  <div class="container">
    <h2 class="title">Task-2: A button that counts</h2>
    <Increment />
  </div>

  <div class="container">
    <h2 class="title">Task-3: Pass data down without props</h2>
    <PassData />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding-bottom: 10px;
    width: 60%;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
  }

  .title {
    padding-bottom: 20px;
    color: black;
  }
</style>