<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel pandel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
 .panel-body{
     font-family: "Arizonia", cursive;
     font-size: 25px;
 }
 .quote:hover{
     background-color: red;
 }
</style>
