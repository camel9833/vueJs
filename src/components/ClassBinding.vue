<template>
<div :class="{red:isActive}">
  <h1>Hello vuejs</h1>
  <button @click="isActive=!isActive">Click me</button>
</div>
</template>

<script>
export default {
  name: 'classBinding',
  data: function() {
    return {
      isActive: false
    }
  }
}
</script>

<style>
.red {
  background-color: red;
}
</style>
