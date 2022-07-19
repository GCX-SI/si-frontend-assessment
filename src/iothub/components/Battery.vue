<template>
  <div class="battery">
    <div class="battery__header">
      <h1>Battery</h1>
      <div class="battery__header__charge">
        <p>
          {{
            (typeof battery["current_level"] === "string"
              ? Number(battery["current_level"])
              : battery["current_level"]
            )?.toFixed()
          }}%
        </p>
        <div class="battery-icon">
          <img src="../assets/icons/battery.svg" alt="batteryIcon" />
          <div
            :class="[
              'battery-icon--after',
              {
                lowBattery:
                  0 <= battery['current_level'] &&
                  battery['current_level'] <= 25,
                normalBattery:
                  25 < battery['current_level'] &&
                  battery['current_level'] <= 50,
                highBattery:
                  50 < battery['current_level'] &&
                  battery['current_level'] <= 95,
                fullBattery: 95 < battery['current_level'],
              },
            ]"
          ></div>
        </div>
      </div>
    </div>
    <div class="battery__body">
      <div class="battery__body__keys">
        <div>Last Charge</div>
        <div>Time Remaining</div>
        <div>Health</div>
      </div>
      <div class="battery__body__values">
        <div>{{ lastCharge }}</div>
        <div>4 Hours, 12 Minutes</div>
        <div>{{ battery?.health?.toFixed() }}%</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { computed, onMounted, ref, type Ref } from "vue";
import type BatteryType from "../types/BatteryType";

export default {
  name: "TheBattery",
  props: { id: { required: true, type: String } },
  setup(props: { id: string }) {
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
          `https://stoplight.io/mocks/iothub1/iot/382663/devices/${props.id}/battery`,
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
          battery.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    onMounted(() => {
      fetchBattery();
    });

    const lastCharge = computed(() => {
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let dates: number[] = battery.value?.charges?.map(
        (date: { value: number; created_at: string }) =>
          new Date(date["created_at"])?.getTime()
      );

      const controller = (num: number) => {
        let controlledDateInfo = String(num).length === 2 ? num : `0${num}`;
        return controlledDateInfo;
      };

      if (dates !== undefined) {
        let lastChargeTimeStamp = Math.max(...dates);
        let lastChargeDate = new Date(lastChargeTimeStamp);
        let date = controller(lastChargeDate.getDate());
        let month = controller(lastChargeDate.getMonth() + 1);
        let hours = controller(lastChargeDate.getHours());
        let minutes = controller(lastChargeDate.getMinutes());

        let lastChargeString = `${
          weekday[lastChargeDate.getDay()]
        } ${date}.${month}.${lastChargeDate.getFullYear()}, ${hours}.${minutes}`;
        return lastChargeString;
      }
      return "Last Charge Date";
    });

    return { battery, lastCharge };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";

.battery {
  display: flex;
  flex-direction: column;
  width: 50%;
  box-shadow: $shadow;
  border-radius: 15px;
  background-color: $gray;
  padding: 0 20px;
  height: 175px;
  gap: 10px;
  font-size: $secondaryFontSize;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: $primaryFontSize;

    &__charge {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;

      img {
        width: 25px;
        height: 20px;
        background-color: transparent;
      }

      .battery-icon {
        position: relative;
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;

        .battery-icon--after {
          position: absolute;
          left: 5px;
          top: 7px;
          bottom: 7px;
          padding: 0;
        }

        .lowBattery {
          background-color: $red;
          width: 14%;
        }
        .normalBattery {
          background-color: $yellow;
          width: 28%;
        }
        .highBattery {
          background-color: $lightGreen;
          width: 40%;
        }
        .fullBattery {
          background-color: $lightGreen;
          width: 56%;
        }
      }
    }
  }

  &__body {
    display: flex;
    flex-direction: row;
    gap: 30px;

    &__keys {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__values {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}

@media only screen and (max-width: 990px) {
  .battery {
    width: 275px;
  }
}
</style>
