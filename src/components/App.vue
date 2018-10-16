<template>
  <div id="app">
    <header-item></header-item>
    <router-view></router-view>
    <contacts-item></contacts-item>
    <footer-item></footer-item>
  </div>
</template>

<script>
import HeaderItem from './HeaderItem'
import FooterItem from './FooterItem'
import ContactsItem from './ContactsItem'
import Home from './Pages/Home'

export default {
  name: 'App',
  components: {
    Home,
    HeaderItem,
    ContactsItem,
    FooterItem
  }
}

</script>

<style>
@import './../assets/css/app.css';
</style>
