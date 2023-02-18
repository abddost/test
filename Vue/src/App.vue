<script>
import Timer from './components/Timer.vue'
import VueLogo from './components/VueLogo/VueLogo.vue';
import AppCarousel from './components/Carousel/AppCarousel.vue'
import Increment from './components/Increment.vue';
import PassData from './components/PassData/Parent.vue'

export default {
  name: 'App',
  components: {
    Timer,
    VueLogo,
    AppCarousel,
    Increment,
    PassData
  }
}
</script>

<template>
  <div class="container">
    <h2 class="title">Task-1: Vue timer</h2>
    <Timer />
  </div>

  <div class="container">
    <h2 class="title">Task-2: SVG as a component</h2>
    <VueLogo />
  </div>

  <div class="container">
    <h2 class="title">Task-3: Simple carousel with the use of Slot</h2>
    <AppCarousel />
  </div>

  <div class="container">
    <h2 class="title">Task-4: A button that counts</h2>
    <Increment />
  </div>
  
  <div class="container">
    <h2 class="title">Task-5: Pass data down without props</h2>
    <PassData />
  </div>
  
</template>

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
    color: rgb(37, 37, 37);
  }
</style>