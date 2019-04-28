<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Name: {{ name }}</p>
    <p>Reversed Name: {{ reverseName() }}</p>
    <button @click="resetName">Reset Name</button>

  </div>
</template>

<script>
 export default{
     props:{
         "name":{
             type: String,
             required: true,
         },
     },
     methods: {
         reverseName(){
             return this.name.split("").reverse().join("");
         },
         resetName(){
             this.name = 'tyler';
             this.$emit('nameWasReset', this.name);
         }
     }
 }
</script>

<style scoped>
 div {
     background-color: lightcoral;
 }
</style>
