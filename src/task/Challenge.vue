<template>
  <img class="top-figure" src="@/assets/head-green.svg" />
  <div class="content">
    <router-view></router-view>
  </div>
  <img class="bottom-figure" src="@/assets/head-blue.svg" />
</template>
<script setup lang="ts"></script>
<style lang="scss">
:root {
  --primary: #61c37e;
  --secondary: #304455;
  --fa-primary-color: var(--primary);
  --fa-secondary-color: var(--secondary);
  --fa-secondary-opacity: 1;
}

@font-face {
  font-family: IBMPlexSans;
  src: url('@/assets/fonts/IBMPlexSans-Regular.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: GeomanistWord;
  src: url('@/assets/fonts/GeomanistWord-Medium.otf') format('opentype');
  font-display: swap;
}

p {
  text-align: justify;
  line-height: 1.7;

  &.center {
    text-align: center;
  }
}

h1,
h2,
h3,
h4 {
  font-family: GeomanistWord;
}

li {
  padding: 0.3rem 0;
}

a {
  color: var(--primary);
}

span {
  color: var(--primary);
  font-weight: bold;
}

.btn {
  background: var(--primary);
  border-radius: 0.3rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}
</style>
<style scoped lang="scss">
.content {
  max-width: 50rem;
  margin: 0 auto;
  font-size: 20px;
  font-family: IBMPlexSans;
  padding: 7rem 1rem 11rem 1rem;

  @media (min-width: 1000px) {
    padding: 1rem;
  }
}

.top-figure {
  position: fixed;
  top: 0;
  right: 0;
  width: 20rem;
}

.bottom-figure {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 20rem;
}
</style>
