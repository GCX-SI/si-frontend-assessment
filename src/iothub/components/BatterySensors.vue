<template>
  <section class="battery-sensors">
    <Battery :id="id" />
    <SensorList class="sensor-list" :id="id" />
  </section>
</template>

<script lang="ts">
import Battery from "./Battery.vue";
import SensorList from "./SensorList.vue";
export default {
  name: "TheBatterySensors",
  components: { Battery, SensorList },
  props: { id: { required: true, type: String } },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";
.battery-sensors {
  display: flex;
  flex-direction: row;
  gap: 5%;
  margin-bottom: 50px;
  padding: 0;
  width: 100%;
  color: $white;
}

@media only screen and (max-width: 990px) {
  .battery-sensors {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-bottom: 50px;
  }
}
</style>
