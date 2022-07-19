<template>
  <div v-if="sensor['sensor_type'] === 'temperature'" class="sensor">
    <div class="sensor__level">
      <img src="../assets/icons/temperature.svg" alt="temperatureIcon" />
      <div>
        <p>Temperature ({{ sensor?.title }})</p>
        <h1>{{ lastSensorValue }}℃</h1>
      </div>
    </div>
    <svg class="wave" viewBox="0 0 280 90">
      <path d="M 0 90 L 0 65 Q 35 65 70 50 C 120 75 180 75 280 50 L 280 90 Z" />
    </svg>
  </div>

  <div v-if="sensor['sensor_type'] === 'humidity'" class="sensor">
    <div class="sensor__level">
      <img src="../assets/icons/humidity.svg" alt="humidityIcon" />
      <div>
        <p>Humidity ({{ sensor?.title }})</p>
        <h1>{{ lastSensorValue }}%</h1>
      </div>
    </div>
    <svg class="wave" viewBox="0 0 280 90">
      <path d="M 0 90 L 0 65 Q 15 55 45 55 C 120 60 175 65 280 60 L 280 90 Z" />
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, type PropType } from "vue";
import type SensorType from "../types/SensorType";

export default {
  name: "TheSensor",
  props: { sensor: { required: true, type: Object as PropType<SensorType> } },
  setup(props: { sensor: SensorType }) {
    const lastSensorValue = computed(() => {
      let dates: number[] = props.sensor?.levels?.map(
        (level: { created_at: string; value: number }) =>
          new Date(level["created_at"])?.getTime()
      );

      if (dates !== undefined) {
        let lastChargeTimeStamp: number = Math.max(...dates);
        let index = dates.indexOf(lastChargeTimeStamp);

        return props.sensor?.levels[index]?.value;
      }
      return "Last Sensor Value";
    });

    return { lastSensorValue };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";

.sensor {
  width: 230px;
  height: 74px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background-color: $gray;
  box-shadow: $shadow;
  display: flex;
  flex-direction: row;
  align-items: center;

  &__level {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 1;

    img {
      margin-left: 20px;
      width: 30px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 7.5px;
      height: 40px;
      p {
        font-size: $secondaryFontSize;
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: $primaryFontSize;
        margin: 0;
        padding: 0;
      }
    }
  }

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    path {
      fill: $blue;
      stroke: $blue;
    }
  }
}

@media only screen and (max-width: 990px) {
  .sensor {
    height: 90px;
    width: 100%;
  }
}
</style>
