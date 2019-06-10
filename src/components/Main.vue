<template>
<div class="init">
  <my-header></my-header>

  <h1>{{ msg }}</h1>

  <ul>
    <li>
      <a href="http://localhost:8080" target="_self"> Main
      </a>
    </li>
    <li>
      <a href="http://localhost:8080/#/AxiosTest" target="_self"> Axios
      </a>
    </li>
    <li>
      <a href="http://localhost:8080/#/todos" target="_self"> Todos
      </a>
    </li>
    <li>
      <a href="http://localhost:8080/#/PropsChild" target="_self"> PropsChild
      </a>
    </li>
    <li>
      <a href="http://localhost:8080/#/ClassBinding" target="_self"> ClassBinding
      </a>
    </li>
    <li>
      <a href="http://localhost:8080/#/Paging" target="_self"> Paging
      </a>
    </li>
  </ul>

</div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'init',
  data() {
    return {
      msg: 'App body'
    }
  },
  components: {
    'my-header': Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
