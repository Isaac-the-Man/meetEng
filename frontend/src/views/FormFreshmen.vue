<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Prospective / Freshmen Sign Up</h1>
        <hr>
        <app-form-fresh submit-title="Submit" :form-data="formData"></app-form-fresh>
        <pre>{{ formData }}</pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppFormFresh from "@/components/AppFormFresh";

export default {
  name: "FormFreshmen",
  components: {AppFormFresh},
  data() {
    return {
      formData: {
        type: 'prospective',
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
  created() {
    // change type, default is prospective
    if (this.$route.query.type === 'freshmen') {
      this.formData.type = 'freshmen'
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>