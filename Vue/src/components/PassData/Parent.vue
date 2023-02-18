<template>
  <div>
    <h1>Hello World</h1>
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  provide: {
    message: 'Hello from Parent.vue',
  },
  components: {
    Child,
  },
};
</script>