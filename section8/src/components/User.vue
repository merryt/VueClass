<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!....{{name}}</p>
    <button @click="changeName">Change my name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- this will send data to the component, and allow you to listen to events-->
        <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
 import UserDetail from './UserDetail.vue';
 import UserEdit from './UserEdit.vue';

 export default {
     data: function(){
         return {
          name: "Tyler"
         }
     },
     methods:{
         changeName(){
             this.name = "Randi";
         }
     },
     components: {
         appUserDetail: UserDetail,
         appUserEdit: UserEdit
     }
 }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
