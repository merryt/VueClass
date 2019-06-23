<template>
  <div class="row">

    <div v-for="(quote, index) in quotes">
      <app-quote @click.native="removeQuote(index)">{{ quote }}</app-quote>
    </div>
  </div>
</template>

<script>
 import Quote from "./Quote.vue"
 export default{
     props: ['quotes'],
     components:{
         appQuote : Quote
     },
     methods:{
         removeQuote(index){
             this.$emit("removeQuote", index)
         }
     }

 }
</script>
