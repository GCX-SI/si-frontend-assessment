<template>
  <main class="main">
    <Dashboard />
    <DevicesInfos :devices="devices" />
  </main>
</template>

<script lang="ts">
import { onMounted, ref, type Ref } from "vue";
import axios from "axios";
import Dashboard from "../components/Dashboard.vue";
import DevicesInfos from "../components/DevicesInfos.vue";
import type DeviceType from "../types/DeviceType";

export default {
  name: "TheDevices",
  components: {
    Dashboard,
    DevicesInfos,
  },
  setup() {
    let devices: Ref<DeviceType[]> = ref([]);

    const fetchDevices = (): void => {
      axios
        .get(`https://stoplight.io/mocks/iothub1/iot/382663/devices`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Prefer: "code=200, dynamic=true",
          },
        })
        .then((response) => {
          devices.value = response.data;
        })
        .catch((error) => console.error(error));
    };

    onMounted(() => {
      fetchDevices();
    });

    return { devices };
  },
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
