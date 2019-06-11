<template>
<div id="fruits-list">
  <h1>Fruits Name</h1>
  <ul>
    <li v-for="fruit in fruits">
      {{ fruit.name }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  // Removed Props
  computed: {
    fruits() {
      return this.$store.state.fruits
    }
  }
}
</script>

<style></style>
