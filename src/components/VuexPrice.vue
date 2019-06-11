<template>
<div id="fruits-price">
  <h1>Fruits Price</h1>
  <ul>
    <li v-for="fruit in fruits">
      $ {{ fruit.price }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  // Removed props
  computed: {
    fruits() {
      return this.$store.state.fruits
    }
  }
}
</script>

<style></style>
