<template>

   <router-link  class="create-btn" to="/create-from">+ </router-link>

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
  font-size: 64px;
  border-radius: 50%;
  width: 92px;
  height: auto;
  background-color: $btn-bg-color;
  color: $btn-color;
  text-decoration: none;
  text-align: center;
}

</style>
