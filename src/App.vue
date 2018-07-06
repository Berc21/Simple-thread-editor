<template>
  <div id="app">
    <header class="top-header">
       <h1>Simple Thread Editor</h1>
    </header>


    <router-view></router-view>
  </div>
</template>

<script>

import "simple-css-reset/reset.css";

export default {
  name: "App"
};
</script>

<style lang="scss">

@import 'https://fonts.googleapis.com/css?family=Roboto';

$h1 : 40px;
$h2 : 36px;
$h3 : 32px;
$h4 : 28px;
$h5 : 24px;
$h6 : 20px;
html {
  font-family: 'Roboto', sans-serif;
}


h1, h2, h3, h4, h5, h6 {
    margin-bottom: 8px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
}

h1 {
  font-size: $h1;
}
h2 {
  font-size: $h2;
}
h3 {
  font-size: $h3;
}
h4 {
  font-size: $h4;
}
h5 {
  font-size: $h5;
}
h6 {
  font-size: $h6;
}

p {
  margin-bottom: 1rem;
}


.top-header {
  padding: 24px;
  background-color: #8c0032;
  color: white;
}


#app {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
</style>
