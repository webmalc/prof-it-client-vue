<template><div id="app">
  <header-item></header-item>
  <jumbotron-item></jumbotron-item>
  <work-item></work-item>
  <contacts-item></contacts-item>
  <footer-item></footer-item>
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem'
import FooterItem from '@/components/FooterItem'
import ContactsItem from '@/components/ContactsItem'
import JumbotronItem from '@/components/JumbotronItem'
import WorkItem from '@/components/WorkItem'
export default {
  name: 'App',
  components: {
    WorkItem,
    JumbotronItem,
    ContactsItem,
    'header-item': HeaderItem,
    'footer-item': FooterItem
  }
}
</script>

<style>
@import './../assets/css/app.css';
</style>
