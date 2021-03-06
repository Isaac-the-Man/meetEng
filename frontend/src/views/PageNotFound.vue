<template>
  <b-container>
    <b-row align-h="center">
      <b-col class="text-center">
        <img alt="RPI logo" src="../assets/icon-large.png" class="rpi-logo">
        <h1 class="display-3">404</h1>
        <p class="lead">
          Page Not Found
        </p>
        <b-button to="/" variant="link">Back to Home</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>