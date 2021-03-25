<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Admin Panel</h1>
        <hr>
        <!-- Status Bar -->
        <app-matching-status></app-matching-status>
        <!-- data tabs -->
        <div class="mt-3">
          <b-tabs content-class="mt-3">
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
  }
}
</script>

<style scoped>

</style>