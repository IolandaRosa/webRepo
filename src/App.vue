<template>
  <div id="app" class="container">
    <div class="menu">
      <img src="./assets/logo_textBottom.png" alt="logo" class="menu-img" />
      <div class="menu-list">
        <router-link class="menu-link" to="/" exact-active-class="menu-link-active">Home</router-link>
        <router-link class="menu-link" to="/statistics" exact-active-class="menu-link-active">Statistics</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>