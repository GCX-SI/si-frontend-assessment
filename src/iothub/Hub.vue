<template>
  <Navbar />
  <router-view></router-view>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  name: "TheHub",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "./assets/_shared.scss";
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: $backgroundColor;
  font-family: "Ubuntu", sans-serif;
}
</style>
