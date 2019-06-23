<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Directives</h1>
      <p v-text="'test'"></p>
      <p v-html="'<strong>test</strong>'"></p> <!-- you should sanitize this -->
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Directives</h1>
      <p v-local-highlight:background="'pink'">argument</p>
      <p v-local-highlight.delayed="'green'">modifier</p>
      <p v-local-highlight:background.delayed="'green'">modifier and argument</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  directives:{
    'local-highlight':{
      bind(el, binding){

        let delay = 0;
        if(binding.modifiers['delayed']){
            delay = 2000
        }

        setTimeout(() => {
            if(binding.arg == "background"){
                el.style.backgroundColor = binding.value;
            }else{
                el.style.color = binding.value;
            }
        },delay)

      }
    }
  }
}
</script>

<style>

</style>
