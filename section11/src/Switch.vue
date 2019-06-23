<template>
  <div>
    <div id="on"
         @click="switched(true)"
         :class="{active: value}"
    >On</div>

    <div id="off"
         @click="switched(false)"
         :class="{active: !value}"
    >Off</div>

  </div>
</template>


<script>
 /*

    To use components as controls with v-model they need to have a prop with the name of value,
    and a emit with input.
  */
 export default {
     props: ['value'],
     methods: {
         switched(updatedValue){
             this.value=updatedValue
             this.$emit('input', updatedValue)
         }
     }
 }
</script>


<style scoped>
 #on, #off{
     width: 40px;
     height: 20px;
     background-color: lightgray;
     padding: 2px;
     display: inline-block;
     margin: 10px -2px;
     box-sizing: content-box;
     cursor: poiinter;
     text-align: center;
 }

 #on:hover, #on.active{
     background-color: lightgreen;

 }
 #off:hover, #off.active{
     background-color: lightcoral;

 }
</style>
