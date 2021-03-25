<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Upperclassmen Sign Up</h1>
        <hr>
        <app-form-upper submit-title="Submit" :form-data="formData"></app-form-upper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppFormUpper from "@/components/AppFormUpper";

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
  }
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>