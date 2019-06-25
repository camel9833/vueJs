<template>
<div class="header">

  <h4> header  </h4>

  <nav>
    <td v-for='list in linklist'>
      <router-link :to='list.link'>{{list.content}}</router-link>&nbsp;&nbsp;&nbsp;
    </td>
  </nav>

</div>
</template>

<script>
export default {

  data() {
    return {
      linklist: [{
          content: 'Home',
          link: '/'
        },
        {
          content: 'Sample',
          link: '/sample'
        },
        {
          content: 'Mixin',
          link: '/mixintest'
        },
        {
          content: 'Extend',
          link: '/sampleextend'
        },
        {
          content: 'Modal',
          link: '/modal'
        },
        {
          content: 'Modal2',
          link: '/modal2'
        }
      ]

    }
  }


}
</script>

<style>

</style>
