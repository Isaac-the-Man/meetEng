<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Form Senior</h1>
        <hr>
        <b-form>
          <b-form-group label="First Name:" label-for="input-senior-firstname">
            <b-form-input v-model="formData.firstName" id="input-senior-firstname" required></b-form-input>
          </b-form-group>
          <b-form-group label="Last Name:" label-for="input-senior-lastname">
            <b-form-input v-model="formData.lastName" id="input-senior-lastname" required></b-form-input>
          </b-form-group>
          <b-form-group label="RPI Mail:" label-for="input-senior-mail">
            <b-form-input v-model="formData.mail" id="input-senior-mail" type="email" required></b-form-input>
          </b-form-group>
          <b-form-group label="Gender:" label-for="input-senior-gender">
            <b-form-select v-model="formData.gender" id="input-senior-gender" :options="genderOptions" required></b-form-select>
          </b-form-group>
          <b-form-group label="Majors:" label-for="input-senior-majors" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
                v-model="formData.majors"
                id="input-senior-majors"
                :options="majorsOptions"
                :aria-describedby="ariaDescribedby"
                name="majors-list"
            ></b-form-checkbox-group>
          </b-form-group>
          <b-form-group label="Hometown:" label-for="input-senior-hometown">
            <b-form-select v-model="formData.hometown" id="input-senior-hometown" :options="statesOptions"></b-form-select>
          </b-form-group>
          <b-form-group label="Time Blocks:" label-for="input-senior-timeblocks">
            <app-time-block-picker @count="writeCount" @data="writeData" id="input-senior-timeblocks"></app-time-block-picker>
          </b-form-group>
          <b-button block type="submit" variant="primary">Submit</b-button>
        </b-form>
        <pre>{{formData}}</pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppTimeBlockPicker from "@/components/AppTimeBlockPicker";

export default {
  name: "FormSenior",
  components: {AppTimeBlockPicker},
  data() {
    return {
      blocksCount: 0,
      formData: {
        firstName: '',
        lastName: '',
        mail: '',
        gender: '',
        majors: [],
        hometown: '',
        availability: {}
      },
      genderOptions: [
        {text: 'Please select an option', value: ''},
        {text: 'Male', value: 'm'},
        {text: 'Female', value: 'f'},
        {text: 'Others', value: 'o'}
      ],
      majorsOptions: [
        {text: 'Aeronautical Engineering', value: 'aeronautical-engineering'},
        {text: 'Biomedical Engineering', value: 'biomedical-engineering'},
        {text: 'Chemical Engineering', value: 'chemical-engineering'},
        {text: 'Civil Engineering', value: 'civil-engineering'},
        {text: 'Computer & Systems Engineering', value: 'computer-systems-engineering'},
        {text: 'Electrical Engineering', value: 'electrical-engineering'},
        {text: 'Environmental Engineering', value: 'environmental-engineering'},
        {text: 'Industrial and Management Engineering', value: 'industrial-and-management-engineering'},
        {text: 'Materials Engineering', value: 'materials-engineering'},
        {text: 'Mechanical Engineering', value: 'mechanical-engineering'},
        {text: 'Nuclear Engineering', value: 'nuclear-engineering'},
        {text: 'Undeclared Engineering', value: 'undeclared-engineering'}
      ],
      statesOptions: [
        {
          "text": "Please select an option",
          value: ''
        },
        {
          "text": "Alabama",
          "value": "AL"
        },
        {
          "text": "Alaska",
          "value": "AK"
        },
        {
          "text": "American Samoa",
          "value": "AS"
        },
        {
          "text": "Arizona",
          "value": "AZ"
        },
        {
          "text": "Arkansas",
          "value": "AR"
        },
        {
          "text": "California",
          "value": "CA"
        },
        {
          "text": "Colorado",
          "value": "CO"
        },
        {
          "text": "Connecticut",
          "value": "CT"
        },
        {
          "text": "Delaware",
          "value": "DE"
        },
        {
          "text": "District Of Columbia",
          "value": "DC"
        },
        {
          "text": "Federated States Of Micronesia",
          "value": "FM"
        },
        {
          "text": "Florida",
          "value": "FL"
        },
        {
          "text": "Georgia",
          "value": "GA"
        },
        {
          "text": "Guam",
          "value": "GU"
        },
        {
          "text": "Hawaii",
          "value": "HI"
        },
        {
          "text": "Idaho",
          "value": "ID"
        },
        {
          "text": "Illinois",
          "value": "IL"
        },
        {
          "text": "Indiana",
          "value": "IN"
        },
        {
          "text": "Iowa",
          "value": "IA"
        },
        {
          "text": "Kansas",
          "value": "KS"
        },
        {
          "text": "Kentucky",
          "value": "KY"
        },
        {
          "text": "Louisiana",
          "value": "LA"
        },
        {
          "text": "Maine",
          "value": "ME"
        },
        {
          "text": "Marshall Islands",
          "value": "MH"
        },
        {
          "text": "Maryland",
          "value": "MD"
        },
        {
          "text": "Massachusetts",
          "value": "MA"
        },
        {
          "text": "Michigan",
          "value": "MI"
        },
        {
          "text": "Minnesota",
          "value": "MN"
        },
        {
          "text": "Mississippi",
          "value": "MS"
        },
        {
          "text": "Missouri",
          "value": "MO"
        },
        {
          "text": "Montana",
          "value": "MT"
        },
        {
          "text": "Nebraska",
          "value": "NE"
        },
        {
          "text": "Nevada",
          "value": "NV"
        },
        {
          "text": "New Hampshire",
          "value": "NH"
        },
        {
          "text": "New Jersey",
          "value": "NJ"
        },
        {
          "text": "New Mexico",
          "value": "NM"
        },
        {
          "text": "New York",
          "value": "NY"
        },
        {
          "text": "North Carolina",
          "value": "NC"
        },
        {
          "text": "North Dakota",
          "value": "ND"
        },
        {
          "text": "Northern Mariana Islands",
          "value": "MP"
        },
        {
          "text": "Ohio",
          "value": "OH"
        },
        {
          "text": "Oklahoma",
          "value": "OK"
        },
        {
          "text": "Oregon",
          "value": "OR"
        },
        {
          "text": "Palau",
          "value": "PW"
        },
        {
          "text": "Pennsylvania",
          "value": "PA"
        },
        {
          "text": "Puerto Rico",
          "value": "PR"
        },
        {
          "text": "Rhode Island",
          "value": "RI"
        },
        {
          "text": "South Carolina",
          "value": "SC"
        },
        {
          "text": "South Dakota",
          "value": "SD"
        },
        {
          "text": "Tennessee",
          "value": "TN"
        },
        {
          "text": "Texas",
          "value": "TX"
        },
        {
          "text": "Utah",
          "value": "UT"
        },
        {
          "text": "Vermont",
          "value": "VT"
        },
        {
          "text": "Virgin Islands",
          "value": "VI"
        },
        {
          "text": "Virginia",
          "value": "VA"
        },
        {
          "text": "Washington",
          "value": "WA"
        },
        {
          "text": "West Virginia",
          "value": "WV"
        },
        {
          "text": "Wisconsin",
          "value": "WI"
        },
        {
          "text": "Wyoming",
          "value": "WY"
        }
      ]
    }
  },
  methods: {
    writeData(data) {
      this.formData.availability = data
    },
    writeCount(data) {
      this.blocksCount = data;
    }
  }
}
</script>

<style scoped>

</style>