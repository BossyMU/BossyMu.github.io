<template>
  <div id="app">
    <iccs340-left-sidenav></iccs340-left-sidenav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Iccs340LeftSidenav: require('./LeftSidenav')
  }
}
</script>

<style>
</style>
