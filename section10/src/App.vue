<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @removeQuote="removeQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Click a quote to remove it
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import QuoteGrid from "./components/QuoteGrid.vue"
 import NewQuote from "./components/NewQuote.vue"
 import ProgressBar from "./components/Progress.vue"
 export default {
     data: function(){
         return {
             quotes: [
                 "quote one",
                 "quote two"
             ],
             maxQuotes: 10,

         }
     },
     methods:{
         newQuote(quote){
             if(this.quotes.length >= this.maxQuotes){
                 alert("you don goofed")
             }else{
                 this.quotes.push(quote)
             }
         },
         removeQuote(index){
             this.quotes.splice(index, 1)
         }
     },
     components:{
         appQuoteGrid: QuoteGrid,
         appNewQuote: NewQuote,
         appHeader: ProgressBar
     }
 }
</script>

<style>
</style>
