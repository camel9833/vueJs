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
// import { mapState } from 'vuex';

export default {
  computed: {

    fruits() {
      return this.$store.state.s01.fruits;
    }

    /*
    ...mapState({ // ES6 - Spread
      fruits: 'fruits'
    })
    */
  }
}
</script>

<style></style>
