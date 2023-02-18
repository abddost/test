<script>
import { ref } from 'vue';

export default {
  setup() {
    const minutes = ref(0);
    const seconds = ref(0);
    const timerRunning = ref(false);
    const intervalId = ref(null);

    const focusInput = () => {
      minutesInput.value.focus();
    };

    const startTimer = () => {
      timerRunning.value = true;
      intervalId.value = setInterval(() => {
        if (seconds.value > 0) {
          seconds.value--;
        } else if (minutes.value > 0) {
          minutes.value--;
          seconds.value = 59;
        } else {
          clearInterval(intervalId.value);
          timerRunning.value = false;
        }
      }, 1000);
    };

    const stopTimer = () => {
      clearInterval(intervalId.value);
      timerRunning.value = false;
      minutes.value = 0;
      seconds.value = 0;
    };

    const timeLeft = () => {
      return `${minutes.value} : ${seconds.value < 10 ? '0' : ''}${seconds.value}`;
    };

    return {
      minutes,
      seconds,
      timerRunning,
      focusInput,
      startTimer,
      stopTimer,
      timeLeft,
      minutesInput: ref(null),
    };
  },
};
</script>

<template>
  <div>
    <label for="minutes-input" @click="focusInput">Minutes:</label>
    <input type="number" id="minutes-input" v-model.number="minutes" :disabled="timerRunning" ref="minutesInput">
    <button @click="startTimer" :disabled="timerRunning || minutes === 0">Start</button>
    <button @click="stopTimer" :disabled="!timerRunning">Stop/Reset</button>
    <p>{{ timeLeft() }}</p>
  </div>
</template>
