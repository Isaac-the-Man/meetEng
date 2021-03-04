<template>
  <b-container class="h-100">
    <b-row align-h="center" class="h-100">
      <b-col class="h-100 d-flex flex-column justify-content-center align-items-center">
        <!-- Replace with RPI logo -->
        <img alt="Vue logo" src="../assets/logo.png">
        <h1 class="display-3">Meet Eng</h1>
        <div>
          <b-button to="" class="mr-1" variant="dark">Freshmen</b-button>
          <b-button to="/formSenior" class="ml-1" variant="dark">Senior</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>
