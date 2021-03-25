<template>
  <b-row>
    <b-col>
      <b-card class="shadow bg-red text-white mb-1 rounded-0">
        <div class="d-flex justify-content-between">
          <b>Prospectives</b>
          <div>
            10/20 matched
          </div>
        </div>
      </b-card>
    </b-col>
    <b-col>
      <b-card class="shadow bg-red text-white mb-1 rounded-0">
        <div class="d-flex justify-content-between">
          <b>Freshmen</b>
          <div>
            12/30 matched
          </div>
        </div>
      </b-card>
    </b-col>
    <b-col>
      <b-card class="shadow bg-dark text-white mb-1 rounded-0">
        <div class="d-flex justify-content-between">
          <b>Upperclassmen</b>
          <div>
            22/40 matched
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "AppMatchingStatus"
}
</script>

<style scoped>

</style>