<template>
<div id="app">
  <button @click="fetchPosts">Bring me</button>
  <div v-for="post in posts">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    fetchPosts() {
      this.$store.dispatch({
        type: 'fetchPosts'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
