<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Cultural exchange between hosts and refugees</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
Login as a seeder or click to join the event</blockquote>
      </v-flex>
          <v-flex xs12 sm6 offset-sm3 mt-3>

        
    <carousel :per-page="1" :navigate-to="0" mouse-drag="true">
    <slide>
      <img src="https://dummyimage.com/535x200/999999/0011ff&text=This+is+an+event+1">
    </slide>
    <slide>
      <img src="https://dummyimage.com/535x200/bbbbbb/0011ff&text=This+is+an+event+2">
    </slide>
        <slide>
      <img src="https://dummyimage.com/535x200/dddddd/0011ff&text=This+is+an+event+3">
    </slide>
  </carousel>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
          
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default { 
    components: {
    Carousel,
    Slide
  }
}
</script>