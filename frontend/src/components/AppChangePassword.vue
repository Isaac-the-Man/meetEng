<template>
  <b-form @submit="changePass">
    <h3>Change Password</h3>
    <!-- alert -->
    <b-alert
        v-model="showAlert"
        variant="danger">
      Password mismatch
    </b-alert>
    <b-form-group label="New Password: " label-for="input-new-password">
      <b-form-input v-model="newpass" id="input-new-password" type="password" required></b-form-input>
    </b-form-group>
    <b-form-group label="New Password (Again): " label-for="input-new-password-2">
      <b-form-input v-model="newpass2" id="input-new-password-2" type="password" required></b-form-input>
    </b-form-group>
    <b-button type="submit" class="button-red" squared>Change and Logout</b-button>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  name: "AppChangePassword",
  data() {
    return {
      newpass: '',
      newpass2: '',
      showAlert: false
    }
  },
  watch: {
    newpass2(val) {
      if (val !== this.newpass) {
        this.showAlert = true;
      } else {
        this.showAlert = false;
      }
    }
  },
  methods: {
    async changePass(evt) {
      evt.preventDefault();
      if (this.newpass2 !== this.newpass) {
        this.showAlert = true;
        return;
      } else {
        this.showAlert = false;
      }
      await axios.post('/api/user/edit', {pass: this.newpass}, {headers: {"x-auth-token": this.$store.state.authToken.data}});
      this.$store.commit('clearToken');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>