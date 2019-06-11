<template>
<div class="init">
  <my-header></my-header>

  <h3>{{ msg }}</h3>

  <ul>
    <li>
      <router-link to="/" tag="li" active-class="current-page" exact><a href>Main</a></router-link>
    </li>
    <li>
      <router-link to="/AxiosTest" tag="li" active-class="current-page" exact><a href>Axios</a></router-link>
    </li>
    <li>
      <router-link to="/todos" tag="li" active-class="current-page" exact><a href>Todos</a></router-link>
    </li>
    <li>
      <router-link to="/PropsChild" tag="li" active-class="current-page" exact><a href>PropsChild</a></router-link>
    </li>
    <li>
      <router-link to="/ClassBinding" tag="li" active-class="current-page" exact><a href>ClassBinding</a></router-link>
    </li>
    <li <router-link to="/Paging" tag="li" active-class="current-page" exact><a href>Paging</a></router-link>
    </li>
    </li>
    <li <router-link to="/Vuex01" tag="li" active-class="current-page" exact><a href>Vuex01</a></router-link>
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
      msg: '2. Contents'
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
