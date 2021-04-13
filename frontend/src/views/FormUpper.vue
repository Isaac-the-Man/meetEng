<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Upperclassmen Sign Up</h1>
        <hr>
        <app-form-upper @validateSuccess="submitUpper" submit-title="Submit" :form-data="formData"></app-form-upper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppFormUpper from "@/components/AppFormUpper";
import axios from "axios";

export default {
  name: "FormSenior",
  components: {AppFormUpper},
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        mail: '',
        gender: '',
        majors: [],
        isInternational: false,
        hometown: '',
        availability: {}
      }
    }
  },
  methods: {
    async submitUpper() {
      try {
        await axios.post('/api/form/upperclassmen', this.formData);
        console.log('submit success');
        this.$router.push('/landing');
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>