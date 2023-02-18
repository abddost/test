<template>
  <div>
    <VueLogo />
    <VueLogo color1="blue" color2="red" />
  </div>
</template>

<script>
import VueLogo from "./VueLogo.vue";

export default {
  components: {
    VueLogo
  }
};
</script>