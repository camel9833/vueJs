<template>
<div>
  <h1>My first post</h1>
  <p>This a big post helps us to learn vue props</p>
  <my-button name="Share" :handleClick="shareMe"></my-button>
</div>
</template>

<script>
import Props from './Props.vue'
export default {
  components: {
    'my-button': Props
  },
  methods: {
    shareMe: function() {
      console.log("share");
    }
  }
}
</script>
