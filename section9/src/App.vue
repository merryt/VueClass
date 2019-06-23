<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <button @click="selectedComponent = 'appAuthor'">Author</button>
      <button @click="selectedComponent = 'appNew'">New</button>
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <hr/>
      <p>{{selectedComponent}}</p>


      <!-- if you want your component to stay alive wrap it in keep alive -->
      <keep-alive><component :is=selectedComponent>
        <h2 slot="title">Dynamicly loaded content into a dynamic component</h2>

        </component>
      </keep-alive>
      <hr/>

      <!-- example of a dynamic component -->
      <component :is=selectedComponent>
        <h2 slot="title">Dynamicly loaded content into a dynamic component</h2>

      </component>
      <hr/>

      <!-- example of a slot -->
      <app-quote>
        <h2 slot="title"> Your Quote</h2>
        <p slot="body">{{quoteBody}}</p>
        <p>anything in this slot will get rendered into the overflow slot</p>
      </app-quote>

    </div>
  </div>
    </div>
</template>

<script>
    import Author from './components/Author.vue';
import New from './components/New.vue';
import Quote from './components/Quote.vue';
export default {
  data:function(){
    return {
      quoteBody: "here is a newest quote",
      selectedComponent: "appQuote"
    }
  },
        components: {
          appAuthor: Author,
          appNew: New,
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
