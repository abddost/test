<template>
  <button @click="count = (count + 1) % 10">{{ ` Click me ${count} ` }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>