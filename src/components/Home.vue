<template>
    
    <v-layout >
      <v-flex xs12 class="text-xs-center" mt-3>
        <!--calendar here -->
      <v-date-picker
        v-model="date"
        event-color="green lighten-1"
        :events="arrayEvents"
        :picker-date.sync="pickerDate"
        ref="picker"
        landscape
      ></v-date-picker>
      </v-flex>
        
    <v-flex xs12 sm6 class="my-2 px-1">
      <div class="title">Month news ({{ pickerDate || 'change month...' }})</div>
      <div class="subheading">Change month to see other news</div>
      <ul class="ma-3">
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </v-flex>
        
        
    </v-layout>
</template>

<script>

  export default {
    data: () => ({
      arrayEvents: null,
      date: null,
         notes: [],
        pickerDate: null,
        allNotes: [
        'President met with prime minister',
        'New power plant opened',
        'Rocket launch announced',
        'Global warming discussion cancelled',
        'Company changed its location'
        ]
    }),

    mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },

    methods: {
      functionEvents (date) {
    //    const [,, day] = date.split('-')
    //    return parseInt(day, 10) % 3 === 0
      }
    },
    watch: {
    pickerDate (val) {
      this.notes = [
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)]
      ].filter((value, index, self) => self.indexOf(value) === index)
    }
  }
}

</script>