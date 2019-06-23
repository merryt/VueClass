<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <app-quote>
        <h2> Your Quote</h2>
        <p>{{quoteBody}}</p>
      </app-quote>

    </div>
  </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

export default {
  data:function(){
    return {
      quoteBody: "here is a newest quote"
    }
  },
        components: {
            appQuote: Quote
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
