<template>
  <div>
    <slot name="title">Sample Quote</slot>
    <slot name="subtitle">default content will get show here when there isn't a subtitle slot </slot>
    <slot name="body"></slot>
    <slot></slot>
  </div>
</template>

<script>
 export default{

 }
</script>

<style scoped>
 h2{
     color: red
 }
 div{
     border: 1px sold #ccc;
     box-shadow: 1px 1px 2px black;
     padding: 30px;
     margin: 30px auto;
     text-align: center;
 }
</style>
