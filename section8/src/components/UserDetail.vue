<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Name: {{ name }}</p>
    <p>Reversed Name: {{ reverseName() }}</p>
    <p>age: {{ age }}</p>
    <button @click="resetName">Reset Name</button>

  </div>
</template>

<script>
 import { eventBus } from '../main';
 export default{
     props:{
         "name":{
             type: String,
             required: true,
         },
         "age": Number
     },
     methods: {
         reverseName(){
             return this.name.split("").reverse().join("");
         },
         resetName(){
             this.name = 'tyler';
             this.$emit('nameWasReset', this.name);
         }
     },
     created(){
         eventBus.$on("ageChanged", (age) =>{
             this.age = age;
         });
     }
 }
</script>

<style scoped>
 div {
     background-color: lightcoral;
 }
</style>
