<template>
  <main class="main">
    <Dashboard />
    <DeviceInfo :id="id" />
  </main>
</template>

<script lang="ts">
import Dashboard from "../components/Dashboard.vue";
import DeviceInfo from "../components/DeviceInfo.vue";

export default {
  name: "TheDevice",
  components: {
    Dashboard,
    DeviceInfo,
  },
  props: { id: { required: true, type: String } },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 125px auto 0;
  width: 75%;
  gap: 15px;
}

@media only screen and (max-width: 990px) {
  .main {
    margin: 125px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
}
</style>
