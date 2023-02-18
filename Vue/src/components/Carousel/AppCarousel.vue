<template>
  <div>
    <Carousel :cardCount="7">
      <template v-slot="{ activeIndex }">
        <RedCard v-if="activeIndex % 2 === 0" :text="activeIndex + 1" />
        <YellowCard v-else :text="activeIndex + 1" />
      </template>
    </Carousel>
    <Carousel :cardCount="6">
      <template v-slot="{ activeIndex }">
        <YellowCard v-if="activeIndex % 2 === 0" :text="activeIndex + 1" />
        <RedCard v-else :text="activeIndex + 1" />
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import RedCard from "./RedCard.vue";
import YellowCard from "./YellowCard.vue";

export default {
  components: {
    Carousel,
    RedCard,
    YellowCard,
  },
};
</script>

<style>
* {
  margin: 0;
}
</style>