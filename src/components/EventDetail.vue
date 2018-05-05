<template>
    <div id='event'>
    <h2>{{ event.title }}</h2>
    <ul id='item-list'>
        <li v-for='item in items' :key="item.name">
            {{ item.name }}
        </li>
    </ul>
    </div>
</template>
  
<script>
export default {
    name: 'EventDetail',
    data () {
        var this_event_id = this.$route.params.event_id;
        return {
            event: this.$store.state.events[this.$route.params.event_id],
            //items:this.$store.state.items,
            items: this.$store.state.items.filter(function (el) {
                return (el.event_id == this_event_id);
                
                
            })
        }
    } 
}
</script>

