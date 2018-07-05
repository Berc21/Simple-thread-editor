<template>
  <div id="app">
    <header>
       Simple Thread Editor
    </header>

  <router-view></router-view>
  </div>
</template>

<script>
import 'simple-css-reset/reset.css';
export default {
  name: 'App'
}
</script>

<style>

#app{

  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}

</style>
