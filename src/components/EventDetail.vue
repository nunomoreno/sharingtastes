<template>
  <div id="app">
    <h1> {{ name }} </h1>
    <h3>New item</h3>
    <form v-on:submit.prevent="onSubmit">
      <div>
        <input name="name" type="text" placeholder="name" v-model="item.name" />
      </div>
      
      <div>
        <input name="description" type="text" placeholder="description" v-model="item.description" />
      </div>
     
      <button v-if="updating">Update</button>
      <button v-else>Add</button>
    </form>
    <h3>All items</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <td>Update</td>
        <td>Delete</td>
      </tr>
      <tr v-for="(b, index) in items" :key="b.name">
        <td>{{ b.name }}</td>
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
      event_id: this.$route.params.event_id,
      name: 'Item Manager',
      updating: false,
      updateIndex: 0,
      items: [],
      item: {
        name: '',
        event_id: this.event_id
      }
    }
  },
  created(){
    fetch('https://api.myjson.com/bins/vfcea')
    .then(res => res.json())
    .then(res => {
      this.events = res.events;
      this.items = res.items.filter(item => item.event_id == this.event_id);
    })
  },
  methods: {
      onSubmit() {
        if(this.updating) {
          this.onUpdate();
          return;
        }
        this.item.event_id = this.event_id;
        this.items.push(this.item);
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json'); 
        fetch('https://api.myjson.com/bins/vfcea', {
                method: 'PUT',
                headers : myHeaders,
                body: JSON.stringify({"events": this.events, "items": this.items})
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
        this.item = {
          name: '',
          date: '',
          description: '',
          
        }
      },
      onEdit(index) {
       this.updating = true;
       this.updateIndex = index;
       this.item = this.items[index];
     },
     onUpdate() {
   this.updating = false;
   this.items[this.updateIndex] = this.item;
   this.item = {
     name: '',
     event_id: this.event_id,
     description: '',
     
   }
 },
 onDelete(index) {
 // Remove one item starting at
 // the specified index
 this.items.splice(index, 1)
}
  }
}
</script>