import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    /* 5 optional lifestyle hooks for directives */
    bind(el, binding, vnode){

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

    },
    inserted(el, binding, vnode){
    },
    update(el, binding, vnode, oldVnode){
    },
    componentUpdated(el, binding, vnode, oldVnode){
    },
    unbinding(el, binding, vnode){
    }



});

new Vue({
  el: '#app',
  render: h => h(App)
})
