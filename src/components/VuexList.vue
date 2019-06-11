<template>
<div id="fruits-list">
  <h1>Fruits Name</h1>
  <ul>
    <li v-for="fruit in upperCaseFruits">
      {{ fruit.name }}
    </li>
  </ul>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState([  // ES6 - Spread
      'fruits'
    ]),
    ...mapGetters([  // ES6 - Spread
      'upperCaseFruits'
    ])
  }
}
</script>

<style></style>
