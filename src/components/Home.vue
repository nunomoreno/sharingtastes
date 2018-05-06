<template>
    
    <div>
     <v-container fluid text-xs-center>    
    <v-layout row wrap>
        
    
      
        <v-flex xs12 sm6 class="text-xs-center" mt-3>
            <!--calendar here -->
            <v-date-picker
            v-model="date"
            event-color="deep-orange lighten-1"
            :events="arrayEvents"
            :picker-date.sync="pickerDate"
            ref="picker"
            no-title="true"
            width="500px"
            class="text-s-center"
        ></v-date-picker>
        </v-flex>
        
        <v-flex xs12 sm6 class="my-2 px-1">
       
        <v-card flat="true">
        <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px">
          <p class="date-above-image"><span style="background-color: rgba(0, 0, 0, 0.0)">{{ (date===null)?"":date.substr(8,2)}}</span></p>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              {{ pickerDate }}</h3>
             <ul class="ma-3">
        <li v-for="note in notes" :key="note">{{ note }}</li>
        </ul>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="white">Share</v-btn>
          <v-btn flat color="white">Explore</v-btn>
        </v-card-actions>
      </v-card>
        </v-flex>
        
    </v-layout>    
    </v-container>    
  </div>  
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
      input: function (date) {
          console.log("test")
    
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


<style lang="css">
    .picker__body{
      height: 400px;
    }
    .date-picker-table td, .date-picker-table th {
      height: 50px;
    }
    .theme--light .date-picker-table .btn {
      font-size: 20px;
      font-weight: 100; /* ?melhor? */
    }
    .card__title {
      background-color: coral;  /* ??  terá de ser a cor desse evento ?? */
    }
    .card__actions {
      background-color: coral;  /* ??  terá de ser a cor desse evento ?? */
    }
    .card__title {
      color: white;
    }
    .date-above-image {
      color: #ffffff; /* DimGray */
      position: relative;
        text-align: right;
      top: -30%;
      font-size: 200px;
      font-family: 'Montserrat', sans-serif;
      @import url('https://fonts.googleapis.com/css?family=Montserrat:100');
      font-weight: 800;
    }
    .headline mb-0 {

    }
</style>