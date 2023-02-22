<template>
  <div>
    <p>{{ message }}</p>
    <Grandchild />
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue';

export default {
  inject: ['message'],
  components: {
    GrandChild,
  },
};
</script>