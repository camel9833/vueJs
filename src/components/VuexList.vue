<template>
<div id="fruits-list">
  <h1>Fruits Name</h1>
  <ul>
    <li v-for="fruit in upFruits">
      {{ fruit.name }}
    </li>
  </ul>
</div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    fruits() {
      return this.$store.state.s01.fruits;
    },
    /*
    ...mapState({ // ES6 - Spread
      fruits: fruits => fruits.a
    }),
    */

    upFruits() {
      return this.$store.getters.upperCaseFruits;
    }

    /*
    ...mapGetters({ // ES6 - Spread
      upFruits: 'upperCaseFruits'
    })
    */
  }
}
</script>

<style></style>
