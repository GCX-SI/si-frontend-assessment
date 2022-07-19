<template>
  <nav class="navbar">
    <RouterLink class="navbar__logo" to="/iothub/">
      <img src="../assets/corporate/logo-icon.svg" alt="logoIcon" />
      <img src="../assets/corporate/logo.svg" alt="logo" />
    </RouterLink>
    <div class="navbar__menu">
      <RouterLink class="navbar__menu-item" to="/iothub/devices/"
        ><div class="navbar__menu-item__element">
          <p>Devices</p>
        </div></RouterLink
      >
      <RouterLink class="navbar__menu-item" to="/iothub/preferences/"
        ><div class="navbar__menu-item__element">
          <p>Preferences</p>
        </div></RouterLink
      >
      <RouterLink class="navbar__menu-item" to="/iothub/account/"
        ><div class="navbar__menu-item__element">
          <p>Account</p>
        </div></RouterLink
      >
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "TheNavbar",
};
</script>

<style lang="scss" scoped>
@import "../assets/_shared.scss";
.navbar {
  box-shadow: $shadow;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 35%;
  padding: 0 15%;

  height: 75px;
  background-color: $gray;

  &__logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;

    & :first-child {
      background-color: $lightGreen;
      border-radius: 10px;
      height: 80%;
    }
  }

  &__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: $primaryFontSize;
    font-weight: bold;
    height: 100%;
    color: $white;

    &-item {
      text-decoration: inherit;
      color: inherit;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      width: 100px;
      cursor: pointer;
      font-size: $primaryFontSize;
      font-weight: 500;

      &__element {
        height: 50px;
        margin-bottom: 15px;
      }

      &:hover,
      &.active {
        background-color: $black;
        cursor: pointer;

        .navbar__menu-item__element {
          p:after {
            content: "";
            display: block;
            background-color: $lightGreen;
            width: 100%;
            height: 5px;
            margin-top: 5px;
            border-radius: 50px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 990px) {
  .navbar {
    gap: 5%;
  }
}
</style>
