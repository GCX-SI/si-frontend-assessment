<template>
  <div class="device-list">
    <div class="device-list__head">
      <div class="name head"><p>Name</p></div>
      <div class="charge head"><p>Charge</p></div>
      <div class="version head"><p>Version</p></div>
      <div class="status head"><p>Status</p></div>
    </div>
    <div
      class="device-list__element"
      v-for="device in devices"
      :key="device.id"
    >
      <DeviceListElement :device="device" />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import DeviceListElement from "./DeviceListElement.vue";
import type DeviceType from "../types/DeviceType";

export default {
  name: "TheDeviceList",
  components: { DeviceListElement },
  props: { devices: { required: true, type: Array as PropType<DeviceType[]> } },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";
.device-list {
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
  box-shadow: $shadow;
  width: 100%;

  &__head,
  &__element,
  .head {
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: $secondaryFontSize;
  }

  &:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  &:last-child {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &__head {
    display: flex;
    flex-direction: row;
    background-color: $white;
    color: $gray;

    &:first-child {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    .name {
      width: 49%;
    }

    .charge,
    .version,
    .status {
      width: 17%;
    }
  }

  &__element {
    background-color: $gray;
    color: $white;

    &:last-child {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
}

@media only screen and (max-width: 990px) {
  .device-list {
    width: 325px;
    justify-content: center;
    align-items: center;
  }
}
</style>
