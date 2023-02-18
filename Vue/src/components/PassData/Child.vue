<template>
  <div>
    <p>{{ message }}</p>
    <Grandchild />
  </div>
</template>

<script>
import Grandchild from './Grandchild.vue';

export default {
  inject: ['message'],
  components: {
    Grandchild,
  },
};
</script>