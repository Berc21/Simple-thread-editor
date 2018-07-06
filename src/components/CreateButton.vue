<template>
<div>
    Click button below to create a new thread
  <router-link class="create-btn" to="/create-thread">+ </router-link>
</div>



</template>

<script>
export default {
  name: 'CreateBotton'
}
</script>

<style lang="scss" scoped>

$btn-bg-color: #C62828;
$btn-color: #fff;

.create-btn {
  position: fixed;
  right: 48px;
  bottom: 64px;
  font-size: 32px;
  border-radius: 50%;
  padding: 16px;
  background-color: $btn-bg-color;
  color: $btn-color;
  text-decoration: none;
  text-align: center;
}

</style>
