<template>
  <div class="sensor-list">
    <div v-for="sensor in sensors" :key="sensor?.id">
      <Sensor :sensor="sensor" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { onMounted, ref, type Ref } from "vue";
import type SensorType from "../types/SensorType";
import Sensor from "./Sensor.vue";

export default {
  name: "TheSensorList",
  components: { Sensor },
  props: { id: { required: true, type: String } },
  setup(props: { id: string }) {
    let sensors: Ref<SensorType[]> = ref([]);

    const fetchSensors = (): void => {
      axios
        .get(
          `https://stoplight.io/mocks/iothub1/iot/382663/devices/${props.id}/sensors`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Prefer: "code=200, dynamic=true",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          sensors.value = response.data;
        })
        .catch((error) => console.error(error));
    };

    onMounted(() => {
      fetchSensors();
    });

    return { sensors };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";

.sensor-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  width: 280px;
  height: 100%;
}

@media only screen and (max-width: 990px) {
  .sensor-list {
    width: 320px;
  }
}
</style>
