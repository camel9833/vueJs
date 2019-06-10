<template>
<button @click="handleClick">{{name}}</button>
</template>

<script>
export default {
  props: {
    name: {
      required:true,
      type:String
    },
    handleClick: {
      required:true,
      type:Function
    }
  }
}
</script>
