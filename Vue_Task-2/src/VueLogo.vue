<template functional>
  <svg :width="props.width" :height="props.height" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path :fill="props.color1" d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"></path>
      <path :fill="props.color2" d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"></path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color1: {
      type: String,
      default: "#41B883",
    },
    color2: {
      type: String,
      default: "#35495E",
    },
    width: {
      type: String,
      default: "256px",
    },
    height: {
      type: String,
      default: "221px",
    },
  },
};
</script>
