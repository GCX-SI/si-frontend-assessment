<template>
  <!-- /iothub/devices/${device.id} -->
  <RouterLink class="routerlink" :to="`/iothub/devices/${device?.id}`">
    <div class="name data">
      <p>{{ device?.name }}</p>
    </div>
    <div class="charge data">
      <p>
        {{
          (typeof battery["current_level"] === "string"
            ? Number(battery["current_level"])
            : battery["current_level"]
          )?.toFixed()
        }}%
      </p>
      <div class="battery">
        <img
          class="battery-image"
          src="../assets/icons/battery.svg"
          alt="batteryIcon"
        />
        <div
          :class="[
            'battery--after',
            {
              lowBattery:
                0 <= battery['current_level'] && battery['current_level'] <= 25,
              normalBattery:
                25 < battery['current_level'] && battery['current_level'] <= 50,
              highBattery:
                50 < battery['current_level'] && battery['current_level'] <= 95,
              fullBattery: 95 < battery['current_level'],
            },
          ]"
        ></div>
      </div>
    </div>
    <div class="version data">
      <p>{{ device?.firmware_version }}</p>
    </div>
    <div class="status data">
      <p>{{ device?.active ? "online" : "offline" }}</p>
      <div
        class="status--after"
        :style="{ 'background-color': device?.active ? '#00AD88' : '#F53434' }"
      ></div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { onMounted, ref, type Ref } from "vue";
import type { PropType } from "vue";
import axios from "axios";
import type DeviceType from "../types/DeviceType";
import type BatteryType from "../types/BatteryType";

export default {
  name: "TheDeviceListElement",
  props: {
    device: { required: true, type: Object as PropType<DeviceType> },
  },
  setup(props: { device: DeviceType }) {
    let battery: Ref<BatteryType> = ref({
      charges: [
        {
          value: 0,
          created_at: "",
        },
      ],
      current_level: 0,
      health: 0,
    });

    const fetchBattery = (): void => {
      axios
        .get(
          `https://stoplight.io/mocks/iothub1/iot/382663/devices/${props.device.id}/battery`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Prefer: "code=200, dynamic=true",
            },
          }
        )
        .then((response) => {
          battery.value = response.data;
        })
        .catch((error) => console.error(error));
    };

    onMounted(() => {
      fetchBattery();
    });

    return { battery };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";

.routerlink {
  display: flex;
  flex-direction: row;
  text-decoration: inherit;
  width: 100%;
  color: inherit;
  cursor: pointer;

  &:hover {
    background-color: $black;
    border-radius: 15px;
  }
}

.data {
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: $secondaryFontSize;
}

.name {
  width: 49%;
}

.charge,
.version,
.status {
  width: 17%;
}

.status--after {
  margin: 0;
  padding: 0;
  width: 10px;
  height: 10px;
  border-radius: 1px;
}

.battery {
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  &-image {
    width: 16px;
    height: 10px;
    background-color: transparent;
  }

  &--after {
    position: absolute;
    left: 3px;
    top: 3px;
    bottom: 3px;
    padding: 0;
    z-index: 500;
  }

  .lowBattery {
    background-color: $red;
    width: 20%;
  }
  .normalBattery {
    background-color: $yellow;
    width: 35%;
  }
  .highBattery {
    background-color: $lightGreen;
    width: 45%;
  }

  .fullBattery {
    background-color: $lightGreen;
    width: 60%;
  }
}

@media only screen and (max-width: 990px) {
  .status {
    align-items: center;
    justify-content: flex-end;
    gap: 3px;
  }
}
</style>
