<template>
  <div>
    <b-table-simple class="table table-sm table-bordered overflow-hidden">
      <thead class="bg-dark text-white">
      <tr>
        <th class="same-width" scope="col"></th>
        <th class="same-width" v-for="(day, i) in fields " :key="i" scope="col">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(time, i) in timeBlocks" :key="i">
        <th class="same-width bg-dark text-white" scope="row">{{ time }}</th>
        <td @click="registerBlock(day ,i)"
            :class="['same-width', 'text-center', {'block-booked': blocks[day.toLowerCase()][i], 'block-empty': !blocks[day.toLowerCase()][i]}]"
            v-for="(day, j) in fields" :key="j" role="button">
          <b-icon-check-circle class="text-white" v-if="blocks[day.toLowerCase()][i]"></b-icon-check-circle>
        </td>
      </tr>
      </tbody>
    </b-table-simple>
  </div>
</template>

<script>
import moment from 'moment'
import {BIconCheckCircle} from 'bootstrap-vue'

export default {
  name: "AppTimeBlockPicker",
  components: {
    BIconCheckCircle
  },
  props: {
    display: {
      required: false
    }
  },
  data() {
    return {
      granularity: 30,  // length of each time block in minutes
      startHour: 9,
      startMin: 30,
      endHour: 19,
      endMin: 0,
      fields: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      blocks: {
        mon: {},
        tue: {},
        wed: {},
        thu: {},
        fri: {},
        sat: {},
        sun: {}
      }
    }
  },
  computed: {
    selectCount() {
      // selected blocks
      let count = 0
      Object.values(this.output).forEach((value) => {
        Object.values(value).forEach((v) => {
          if (v === true) {
            ++count
          }
        })
      })
      return count
    },
    output() {
      // format output to Object of bit arrays
      const formatted = {};
      Object.entries(this.blocks).forEach(([key, value]) => {
        let arr = [];
        Object.values(value).forEach((t) => {
          arr.push(t)
        })
        formatted[key] = arr;
      })
      return formatted
    },
    timeBlocks() {
      // set to initial
      let now = moment()
      now.hours(this.startHour)
      now.minutes(this.startMin)
      let end = moment()
      end.hours(this.endHour)
      end.minutes(this.endMin)
      // generate time blocks
      const blocks = []
      now.add(this.granularity, 'm')
      while (now.isSameOrBefore(end, 'm')) {
        blocks.push(now.format('LT'))
        now.add(this.granularity, 'm')
      }
      return blocks
    }
  },
  methods: {
    fillProps() {
      // update props with value
      this.$emit('data', this.output)
      this.$emit('count', this.selectCount)
    },
    registerBlock(day, i) {
      // book/unbook a time block
      console.log('register day ' + day + i)
      console.log(this.blocks[day.toLowerCase()][i])
      this.blocks[day.toLowerCase()][i] = !this.blocks[day.toLowerCase()][i]
      this.fillProps()
    },
    loadBlocks() {
      // fill in empty bit array of blocks
      this.fields.forEach((day) => {
        const arr = {}
        for (let j = 0; j < this.timeBlocks.length; ++j) {
          arr[j] = false
        }
        this.blocks[day.toLowerCase()] = arr
      })
    },
    loadDisplay() {
      // format input to Object
      Object.keys(this.display).forEach((key) => {
        this.display[key].forEach(((value, index) => {
          this.blocks[key][index] = value
        }))
      })
    }
  },
  created() {
    this.loadBlocks()
    // Check if display exists and not empty
    if (this.display && Object.keys(this.display).length > 0) {
      this.loadDisplay()
    }
    // reload
    this.fillProps()
  }
}
</script>

<style scoped>
.block-booked {
  background-color: #5cb85c;
}

.block-empty {
  background-color: transparent;
}

.same-width {
  width: 12.5%;
}

tbody tr:hover {
  background-color: #f0ad4e;
}

td.block-empty:hover {
  background-color: rgba(92, 184, 92, 0.9);
}

td.block-booked:hover {
  background-color: rgba(217, 83, 79, 0.9);
}

td, th {
  position: relative;
}

td:hover::after,
th:hover::after {
  content: "";
  position: absolute;
  background-color: #f0ad4e !important;
  left: 0;
  top: -5000px;
  height: 10000px;
  width: 100%;
  z-index: -1;
}
</style>