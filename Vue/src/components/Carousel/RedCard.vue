<template>
  <div class="red-card">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true }
  }
};
</script>

<style scoped>
.red-card {
  background-color: red;
  height: 300px;
  width: 200px;
}
</style>
