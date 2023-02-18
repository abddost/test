<template>
  <div class="yellow-card">
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
.yellow-card {
  background-color: yellow;
  height: 300px;
  width: 200px;
}
</style>
