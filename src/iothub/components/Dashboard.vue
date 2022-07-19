<template>
  <aside class="dashboard">
    <section class="dashboard__active-devices">
      <img src="../assets/icons/stats.svg" alt="activeDevicesIcon" />
      <div>
        <p>Active Devices</p>
        <h1>{{ widgets["active_devices"]?.value }}</h1>
      </div>
    </section>
    <section class="dashboard__system-health">
      <img src="../assets/icons/health.svg" alt="systemHealthIcon" />
      <div>
        <p>System Health</p>
        <h1>{{ widgets?.health?.value }}</h1>
      </div>
    </section>
    <section class="dashboard__energy-levels">
      <img src="../assets/icons/lightning.svg" alt="energyLevelsIcon" />
      <div>
        <p>Energy Levels</p>
        <h1>{{ widgets?.energy?.value }} Watts</h1>
      </div>
    </section>
  </aside>
</template>

<script lang="ts">
import { onMounted, ref, type Ref } from "vue";
import axios from "axios";
import type WidgetsType from "../types/WidgetsType";

export default {
  name: "TheDashboard",
  setup() {
    let widgets: Ref<WidgetsType> = ref({
      active_devices: { value: 0 },
      health: { value: "" },
      energy: { value: 0 },
    });

    const fetchWidgets = (): void => {
      axios
        .get("https://stoplight.io/mocks/iothub1/iot/382663/widgets", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Prefer: "code=200, dynamic=true",
          },
        })
        .then((response) => (widgets.value = response.data))
        .catch((error) => {
          console.error(error);
        });
    };

    onMounted(() => {
      fetchWidgets();
    });

    return { widgets };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/shared.scss";
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  width: 275px;

  &__active-devices,
  &__system-health,
  &__energy-levels {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    padding: 25px;
    width: 200px;
    height: 35px;
    border-radius: 10px;

    img {
      width: 50px;
    }

    div {
      font-size: $primaryFontSize;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      height: 50px;

      P {
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
  &__active-devices {
    background-color: $blue;
  }

  &__system-health {
    background-color: $lightGreen;
  }

  &__energy-levels {
    background-color: $yellow;
  }
}

@media only screen and (max-width: 990px) {
  .dashboard {
    width: 100%;

    &__active-devices,
    &__system-health,
    &__energy-levels {
      width: 275px;
    }
  }
}
</style>
