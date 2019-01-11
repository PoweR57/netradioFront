<template>
  <div>
    <!-- header -->
    <div class="ui top attached menu">
      <h1>Net'Radio</h1>
      <div class="right menu">
        <a class="item">Sign Up</a>
      </div>
    </div>
    <!-- sous header -->
    <div class="ui pointing menu">
      <a class="active item">Home</a>
      <a class="item">Replay</a>
      <a class="item">Planning</a>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
/* eslint-disable */
export default {};
</script>

<style>
h1 {
  margin-left: 45%;
  font-size: 2rem;
}
</style>

