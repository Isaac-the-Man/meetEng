<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Prospective / Freshmen Sign Up</h1>
        <hr>
        <app-form-fresh @validateSuccess="submitUnder" submit-title="Submit" :form-data="formData"></app-form-fresh>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppFormFresh from "@/components/AppFormFresh";
import axios from "axios";

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
        firstMajor: '',
        secondMajor: '',
        isInternational: false,
        hometown: '',
        availability: {}
      }
    }
  },
  methods: {
    async submitUnder() {
      try {
        await axios.post('/api/form/underclassmen', this.formData);
        console.log('submit success');
        this.$router.push('/landing');
      } catch (e) {
        console.log(e);
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