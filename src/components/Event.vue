<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <h3>New Event</h3>
    <form v-on:submit.prevent="onSubmit">
      <div>
        <input name="title" type="text" placeholder="title" v-model="event.title" />
      </div>
      <div>
        <input name="date" type="text" placeholder="date" v-model="event.date" />
      </div>
      <div>
        <input name="description" type="text" placeholder="description" v-model="event.description" />
      </div>
     
      <button v-if="updating">Update</button>
      <button v-else>Add</button>
    </form>
    <h3>All Events</h3>
    <table>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Description</th>
        <td>Update</td>
        <td>Delete</td>
      </tr>
      <tr v-for="(b, index) in events" :key="b.title">
        <td><a :href="/event/ + b.title">{{ b.title }}</a></td>
        <td>{{ b.date }}</td>
        <td>{{ b.description }}</td>
        <td v-on:click.prevent="onEdit(index)"><a>✎</a></td>
        <td v-on:click.prevent="onDelete(index)"><a>✗</a></td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'My Events Manager',
      updating: false,
      updateIndex: 0,
      events: [],
      event: {
        title: '',
        date: '',
        description: '',
      }
    }
  },
  created(){
      fetch('https://api.myjson.com/bins/vfcea')
    .then(res => res.json())
    .then(res => {
      this.events = res.events;
      this.items = res.items;
    })
  },
  methods: {
      onSubmit() {
        if(this.updating) {
          this.onUpdate();
          return;
        }
        this.events.push(this.event);
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json'); 
        fetch('https://api.myjson.com/bins/vfcea', {
                method: 'PUT',
                headers : myHeaders,
                body: JSON.stringify({"events": this.events, "items": this.items})
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
        
        this.event = {
          title: '',
          date: '',
          description: '',
          
        }
      },
      onEdit(index) {
       this.updating = true;
       this.updateIndex = index;
       this.event = this.events[index];
     },
     onUpdate() {
   this.updating = false;
   this.events[this.updateIndex] = this.event;
   this.event = {
     title: '',
     date: '',
     description: '',
     
   }
 },
 onDelete(index) {
 // Remove one item starting at
 // the specified index
 this.events.splice(index, 1)
}
  }
}
</script>