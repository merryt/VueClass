<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
 import { eventBus } from '../main';

 export default{
     props:{
         age: Number
     },
     methods:{
         editAge(){
             this.age = 20;
             console.log(eventBus)
             eventBus.changeAge(this.age)
         }
     }
 }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
