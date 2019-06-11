<!--App.vue-->
<template>
<div id="app">
  <h1 id="app-title">Fruits List</h1>
  <div id="fruits-table">
    <fruits-list></fruits-list>
    <fruits-price></fruits-price>
  </div>
</div>
</template>

<script>
import FruitsList from './VuexList.vue';
import FruitsPrice from './VuexPrice.vue';

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    'fruits-list': FruitsList,
    'fruits-price': FruitsPrice
  }
}
</script>

<style>
#app-title {
  color: orangered;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 40px 0 20px 0;
}

#fruits-table {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  padding: 0 20px;
}

#fruits-table li {
  padding: 20px;
  border-bottom: 1px dashed grey;
  color: white;
}

#fruits-table li:last-child {
  border-bottom: none;
}

#fruits-table li:hover {
  background: rgba(255, 255, 255, .2);
}

#fruits-list {
  background: orange;
  flex: 1;
}

#fruits-price {
  background: tomato;
  flex: 1;
}

#fruits-list h1,
#fruits-price h1 {
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  border-bottom: 1px solid;
}
</style>
