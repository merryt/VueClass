export const fruitMixin = {
     data(){
         return {
             fruits: ["Apple", 'Mango', 'Banana'],
             filterText: ''
         }
     },
     computed:{
         filterFruits(){
             return this.fruits.filter((element)=>{
                 return element.toLowerCase().match(this.filterText.toLowerCase());
             });
         }
     },
}
