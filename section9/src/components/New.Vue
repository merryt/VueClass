<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">+1</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
 export default{
     data: function(){
         return {
             counter: 0
         }
     },
     destroyed: function(){
         // destoyed wont fire from within a "keep alive"
         console.log("we died")
     },
     activated: function(){
         console.log("we have been activated")
     },
     deactivated: function(){
         console.log("deactivated")
     }

 }

</script>

<style></style>
