<template>
  <b-container>
    <b-row align-h="center">
      <b-col xl="6" md="8" sm="10">
        <div class="text-center">
          <img alt="RPI logo" src="../assets/icon-large.png" class="rpi-logo-small">
          <h3 class="display-4">Meet Eng</h3>
        </div>
        <b-card class="mt-3 shadow">
          <b-card-body>
            <b-card-title>Admin Login</b-card-title>
            <b-form>
              <b-form-group label="Username: " label-for="input-login-user">
                <b-form-input v-model="user" id="input-login-user" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Password: " label-for="input-login-pass">
                <b-form-input v-model="pass" id="input-login-pass" type="password" required></b-form-input>
              </b-form-group>
              <b-button class="button-red" type="submit" block squared>Submit</b-button>
            </b-form>
          </b-card-body>
        </b-card>
        <div class="d-flex justify-content-center mt-3">
          <b-link to="/">home</b-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      user: '',
      pass: ''
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>