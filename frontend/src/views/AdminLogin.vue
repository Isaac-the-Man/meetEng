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
            <b-card-title class="text-center">Admin Login</b-card-title>
            <b-form>
              <b-form-group label-for="input-login-user">
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <b-icon-person></b-icon-person>
                  </b-input-group-prepend>
                  <b-form-input v-model="user" placeholder="Username" id="input-login-user" type="text" required></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group label-for="input-login-pass">
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <b-icon-lock></b-icon-lock>
                  </b-input-group-prepend>
                  <b-form-input v-model="pass" placeholder="Password" id="input-login-pass" type="password" required></b-form-input>
                </b-input-group>
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
import {BIconPerson, BIconLock} from "bootstrap-vue"

export default {
  name: "AdminLogin",
  components: {
    BIconLock,
    BIconPerson
  },
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