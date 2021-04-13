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
            <b-form @submit="login">
              <b-alert :show="showError" variant="danger">Invalid Credentials</b-alert>
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
import axios from "axios";

export default {
  name: "AdminLogin",
  components: {
    BIconLock,
    BIconPerson
  },
  data() {
    return {
      user: '',
      pass: '',
      showError: false
    }
  },
  methods: {
    async login(evt) {
      evt.preventDefault();
      try {
        const res = await axios.post('/api/auth', {name: this.user, pass: this.pass});
        this.$store.commit('setToken', res);  // record auth token
        this.$router.push('/admin');
      } catch (e) {
        this.$store.commit('clearToken');
        this.showError = true;
      }
    }
  },
  created() {
    if (this.$store.state.authToken != null) {
      this.$router.push('/admin'); // auto login
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>