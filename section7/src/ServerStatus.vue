<template>
  <div>
    <p>Server Status: {{status}}</p>
    <button @click="changeStatus">Reset Status</button>
  </div>
</template>

<script>
 export default{
     data: function(){
         return {
             status: "Critical"
         }
     },
     methods:{
         changeStatus() {
             this.status = 'Normal'
         }
     }
 }
</script>

<style scoped>
 div{
     border: 1px solid blue
 }
</style>
