<template>
  <section>
    <jumbotron-item/>
    <works/>
  </section>
</template>

<script>
import JumbotronItem from './../JumbotronItem'
import Works from './../Pages/Works'

export default {
  name: 'Home',
  components: {
    JumbotronItem,
    Works
  }
}
</script>

<style scoped>

</style>
