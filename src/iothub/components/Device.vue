<template>
  <section class="device">
    <div class="device__info">
      <div class="device__info__header">
        <RouterLink class="back-button" type="button" to="/iothub/devices">
          <img src="../assets/icons/back.svg" alt="backIcon" />
        </RouterLink>
        <h1>{{ device.name }}</h1>
      </div>
      <div class="device__info__body">
        <div class="device__info__body__keys">
          <div>Status</div>
          <div>Version</div>
          <div>Serial</div>
        </div>
        <div class="device__info__body__values">
          <div class="status">
            <div
              class="status--after"
              :style="{
                'background-color': device?.active ? '#00AD88' : '#F53434',
              }"
            ></div>
            <p>{{ device?.active ? "online" : "offline" }}</p>
          </div>
          <div>{{ device["firmware_version"] }}</div>
          <div>{{ device.id }}</div>
        </div>
      </div>
    </div>
    <div class="device__photo">
      <img
        :src="
          device.image === 'device-3.png'
            ? deviceImage3
            : device.image === 'device-2.png'
            ? deviceImage2
            : deviceImage1
        "
        :alt="device.image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import axios from "axios";
import { ref, onMounted, type Ref } from "vue";
import device1 from "../assets/images/device-1.png";
import device2 from "../assets/images/device-2.png";
import device3 from "../assets/images/device-3.png";
import type DeviceType from "../types/DeviceType";

export default {
  name: "TheDevicesInfos",
  props: { id: { required: true, type: String } },
  setup(props: { id: string }) {
    let device: Ref<DeviceType> = ref({
      name: "",
      image: "",
      id: "",
      active: true,
      firmware_version: "",
      serial_number: "",
    });
    const deviceImage1 = device1;
    const deviceImage2 = device2;
    const deviceImage3 = device3;

    const fetchDevice = (): void => {
      axios
        .get(
          `https://stoplight.io/mocks/iothub1/iot/382663/devices/${props.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Prefer: "code=200, dynamic=true",
            },
          }
        )
        .then((response) => {
          device.value = response.data;
        })
        .catch((error) => console.error(error));
    };

    onMounted(() => {
      fetchDevice();
    });

    return { device, deviceImage1, deviceImage2, deviceImage3 };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/shared.scss";
.device {
  display: flex;
  flex-direction: row;
  width: 460px;
  height: 125px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: $gray;
  box-shadow: $shadow;
  gap: 10%;

  &__info {
    width: 70%;

    &__header {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: $primaryFontSize;

      .back-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 5px;
        background-color: $lightGreen;

        &:hover {
          cursor: pointer;
          background-color: $yellow;
        }
      }
    }

    &__body {
      display: flex;
      flex-direction: row;
      gap: 10%;

      &__keys,
      &__values {
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: $secondaryFontSize;
      }

      &__keys div,
      &__values div {
        height: 16px;
      }

      &__values {
        .status {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin: 0;
          padding: 0;
          gap: 5px;

          &--after {
            width: 10px;
            height: 10px;
            margin: 0;
            padding: 0;
            border-radius: 1px;
          }
        }
      }
    }
  }

  &__photo {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }
  }
}

@media only screen and (max-width: 990px) {
  .device {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: fit-content;
    gap: 15px;

    &__info,
    &__photo {
      width: 100%;
    }
  }
}
</style>
