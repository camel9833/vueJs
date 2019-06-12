<template>
<div class="btntmp" @click="discountPrice()">DISCOUNT PRICE</div>
</template>

<script>
// import {mapActions} from 'vuex';

export default {
  methods: {
    discountPrice() {
      this.$store.dispatch({
        type: 'discountPrice',
        discountRate: 10
      })
    }
  }


  /*
  discountPrice() {
    // 액션 호출
    this.$store.dispatch({
      type: 'discountPrice',
      discountRate: 20
    })
  }
  */
  /*
    data() {
      return {
        discountData: {
          rate: 20
        }
      }
    },
    methods: {
      ...mapActions({
        price: 'discountPrice'
      })
    }
    */
}
</script>

<style scoped>
.btntmp {
  max-width: 700px;
  margin: 10px auto;
  padding: 10px 0;
  color: white;
  text-align: center;
  background: salmon;
  border-radius: 6px;
  cursor: pointer;
}
</style>
