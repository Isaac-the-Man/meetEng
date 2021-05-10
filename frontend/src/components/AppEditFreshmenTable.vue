<template>
  <div>
    <!-- Modal -->
    <b-modal hide-footer v-model="editShow" size="lg" title="Edit Form">
      <app-form-fresh submit-title="Update" :form-data="items[editIndex]"></app-form-fresh>
    </b-modal>
    <!-- filter -->
    <b-form class="shadow">
      <b-form-group label-for="input-filter">
        <b-input-group>
          <b-input-group-prepend>
            <b-form-select class="bg-light" v-model="filterOn" :options="filterOptions"></b-form-select>
          </b-input-group-prepend>
          <b-form-input v-model="filter" placeholder="type to search..." id="input-filter" type="search"></b-form-input>
        </b-input-group>
      </b-form-group>
    </b-form>
    <!-- Main table element -->
    <b-table
        class="shadow"
        head-variant="dark"
        striped
        hover
        bordered
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
    >

      <template #cell(actions)="row">
        <b-button size="sm" class="mr-1" @click="editShow = !editShow;editIndex=row.index">Edit</b-button>
        <!-- row detail -->
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <!-- pagination -->
    <div class="d-flex justify-content-center">
      <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="shadow"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import AppFormFresh from "@/components/AppFormFresh";

export default {
  name: "AppEditFreshmenTable",
  components: {
    AppFormFresh
  },
  data() {
    return {
      editIndex: 0,
      editShow: false,
      filter: '',
      filterOn: null,
      filterOptions: [
        {text: 'Filter by', value: null},
        'type',
        'name',
        'mail',
        'gender',
        'majors',
        'hometown'
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 8,
      fields: [
        {key: 'type', label: 'Type', sortable: true},
        {
          key: 'name',
          label: 'Name',
          formatter: ((value, key, item) => {
            return item.firstName + ' ' + item.lastName
          }),
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        {key: 'mail', label: 'Mail'},
        {
          key: 'gender',
          label: 'Gender',
          formatter: ((value) => {
            if (value === 'm') return 'Male'
            if (value === 'f') return 'Female'
            if (value === 'o') return 'Non-Binary'
            return 'Error'
          }),
          sortable: true,
          filterByFormatted: true
        },
        {
          key: 'majors',
          label: 'Majors',
          formatter: ((value, key, item) => {
            if (item.secondMajor) return item.firstMajor + ', ' + item.secondMajor
            return item.firstMajor
          })
        },
        {
          key: 'hometown',
          label: 'Hometown',
          formatter: ((value, key, item) => {
            return '(' + (item.isInternational ? value : 'US') + ') ' + (item.isInternational ? '' : value)
          }),
          sortable: true,
          filterByFormatted: true,
          sortByFormatted: true
        },
        {
          key: 'availability',
          label: 'Availability',
          formatter: ((value) => {
            let count = 0;
            Object.values(value).forEach((val) => {
              count += val.reduce((a, b) => a + b, 0)
            })
            return count + ' slots'
          }),
          sortable: true,
          sortByFormatted: true
        },
        {key: 'actions', label: 'Actions'}
      ],
      items: [
        {
          type: "freshmen",
          firstName: "Steven",
          lastName: "Wang",
          mail: "123@rpi.edu", // not neccesarily rpi mail
          gender: "m", // m,f,o (male, female, others)
          firstMajor: 'aeronautical-engineering',
          secondMajor: 'chemical-engineering',
          isInternational: false, // true if international student
          hometown: "TX", // list of states if in US (or country for international students)
          availability: { // bit array for every 30? min
            mon: [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false],
            tue: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            wed: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false],
            thu: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            fri: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            sat: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
            sun: [false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false]
          }
        },
        {
          type: "prospective",
          firstName: "Sean",
          lastName: "Hung",
          mail: "456@rpi.edu", // not neccesarily rpi mail
          gender: "f", // m,f,o (male, female, others)
          firstMajor: 'chemical-engineering',
          isInternational: true, // true if international student
          hometown: "TW", // list of states if in US (or country for international students)
          availability: { // bit array for every 30? min
            mon: [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false],
            tue: [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false],
            wed: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false],
            thu: [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            fri: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            sat: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
            sun: [false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false]
          }
        }
      ]
    }
  },
  mounted() {
    this.totalRows = this.items.length
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>

<style scoped>

</style>