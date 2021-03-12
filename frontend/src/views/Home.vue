<template>
  <b-container>
    <b-row align-h="center">
      <b-col class="d-flex flex-column justify-content-center align-items-center">
        <!-- Replace with RPI logo -->
        <img alt="RPI logo" src="../assets/icon-large.png" class="rpi-logo">
        <h1 class="display-3">Meet Eng</h1>
        <p class="lead">
          Prospective students and freshmen meeting upperclassmen here at RPI.
        </p>
        <p>
          Fill out a form to participate!
        </p>
        <div>
          <b-button squared to="/form/signup?type=prospective" class="mr-1 button-red">Prospective Students</b-button>
          <b-button squared to="/form/signup?type=freshmen" class="mr-1 button-red">Freshmen</b-button>
          <b-button squared to="/form/upperclassmen" class="ml-1" variant="dark">Upperclassmen</b-button>
        </div>
        <b-link class="mt-3" to="/admin-login">Admin Login</b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>
