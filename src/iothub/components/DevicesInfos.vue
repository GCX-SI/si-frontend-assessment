<template>
  <aside class="devices-infos">
    <section class="devices-infos__create">
      <h1>Devices</h1>
      <button class="create-button">
        <img src="../assets/icons/add.svg" alt="addIcon" /> Create
      </button>
    </section>
    <section class="devices-infos__list">
      <DeviceList :devices="devices" />
    </section>
  </aside>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type DeviceType from "../types/DeviceType";
import DeviceList from "./DeviceList.vue";

export default {
  name: "TheDevicesInfos",
  components: { DeviceList },
  props: { devices: { required: true, type: Array as PropType<DeviceType[]> } },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";
.devices-infos {
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 40px;

  &__create {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: $gray;
    padding: 0 25px;
    box-shadow: $shadow;
    border-radius: 10px;
    color: $white;
    height: 70px;
    font-size: $primaryFontSize;
    letter-spacing: 1px;

    .create-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 80px;
      height: 30px;
      background-color: $lightGreen;
      border: 0;
      border-radius: 5px;
      font-size: $secondaryFontSize;

      img {
        width: 10px;
      }

      &:hover {
        cursor: pointer;
        background-color: $yellow;
      }
    }
  }
}

@media only screen and (max-width: 990px) {
  .devices-infos {
    justify-content: center;
    align-items: center;
    width: 100%;

    &__create {
      width: 275px;
    }
  }
}
</style>
