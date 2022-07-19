<template>
  <aside class="device-info">
    <Device :id="id" />
    <BatterySensors :id="id" />
  </aside>
</template>

<script lang="ts">
import BatterySensors from "./BatterySensors.vue";
import Device from "./Device.vue";

export default {
  name: "TheDevicesInfos",
  components: { Device, BatterySensors },
  props: { id: { required: true, type: String } },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";
.device-info {
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 30px;
  color: $white;
}

@media only screen and (max-width: 990px) {
  .device-info {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>
