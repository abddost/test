<script>
  let minutes = 0;
  let seconds = 0;
  let interval;
  let timerStarted = false;

  function startTimer() {
    timerStarted = true;
    let duration = minutes * 60 + seconds;
    interval = setInterval(() => {
      duration--;
      minutes = Math.floor(duration / 60);
      seconds = duration % 60;
      if (duration === 0) {
        clearInterval(interval);
        timerStarted = false;
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    timerStarted = false;
  }

  function focusInput() {
    const input = document.querySelector("#minutes");
    input?.focus();
  }
</script>

<div>
  <label for="minutes" on:keypress={focusInput}>Enter minutes:</label>
  <input
    type="number"
    id="minutes"
    bind:value={minutes}
    disabled={timerStarted}
  />

  <button on:click={startTimer} disabled={timerStarted}>Start</button>
  <button on:click={stopTimer} disabled={!timerStarted}>Stop and Reset</button>
</div>

{#if timerStarted}
  <p>{minutes} : {seconds < 10 ? "0" + seconds : seconds}</p>
{/if}
