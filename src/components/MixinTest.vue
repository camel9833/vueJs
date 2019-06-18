<template>
<div class="init">
  <my-header></my-header>
  <p>
    {{todateTmp()}} : {{tmpvalue}}
  </p>

</div>
</template>

<script>
import Header from './Header.vue'

export default {
/*
  data() {
    return {
      tmpvalue: 222
    }
  },
*/

  components: {
    'my-header': Header
  },
  methods: {
/*
        todateTmp: function() {
          return '재정의';
        }
*/
  }

}
</script>

<style>

</style>
