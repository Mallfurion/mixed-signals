<script setup lang="ts">
renderLog("Counter");

const count = ref(1);
const double = computed(() => count.value * 2);

effect(() => console.log(`[count] changed to: ${count.value}`));

function increment() {
  count.value = count.value + 1;
}
</script>

<template>
  <div class="counter">
    <p>{{ count }} ({{ double }})</p>
    <button v-on:click="increment">Increment</button>
  </div>
</template>

<style scoped lang="scss"></style>
