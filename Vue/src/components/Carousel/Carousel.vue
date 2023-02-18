<template>
  <div class="carousel">
    <div class="card-container">
      <transition-group name="fade" tag="div">
        <div :key="activeIndex" class="card-wrapper">
          <slot :activeIndex="activeIndex" />
        </div>
      </transition-group>
    </div>
    <div class="controls">
      <button @click="previous" :disabled="activeIndex === 0">Previous</button>
      <button @click="next" :disabled="activeIndex === cardCount - 1">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardCount: { type: Number, required: true },
    start: { type: Number, default: 0 },
  },
  data() {
    return {
      activeIndex: this.start,
    };
  },
  methods: {
    previous() {
      this.activeIndex--;
    },
    next() {
      this.activeIndex++;
    },
  },
};
</script>

<style>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-container {
  height: 300px;
  width: 200px;
  position: relative;
}

.card-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: xx-large;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
</style>


