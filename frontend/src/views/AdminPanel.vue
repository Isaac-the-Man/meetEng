<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between align-items-baseline">
          <h1>Admin Panel</h1>
          <b-link @click="logout">Log Out</b-link>
        </div>
        <hr>
        <!-- Status Bar -->
        <app-matching-status></app-matching-status>
        <!-- data tabs -->
        <div class="mt-3">
          <b-tabs pills content-class="mt-3">
            <b-tab title="Prospectives / Freshmen" active>
              <app-edit-freshmen-table></app-edit-freshmen-table>
            </b-tab>
            <b-tab title="Upperclassmen">
              <app-edit-upper-table></app-edit-upper-table>
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppMatchingStatus from "@/components/AppMatchingStatus";
import AppEditFreshmenTable from "@/components/AppEditFreshmenTable";
import AppEditUpperTable from "@/components/AppEditUpperTable";

export default {
  name: "AdminPanel",
  components: {
    AppMatchingStatus,
    AppEditFreshmenTable,
    AppEditUpperTable
  },
  methods: {
    logout() {
      this.$store.commit('clearToken');
      this.$router.push('/');
    }
  },
  created() {
    if(!this.$store.state.authToken) {
      this.$router.push('/login');  // auth guard
    }
  }
}
</script>

<style scoped>

</style>