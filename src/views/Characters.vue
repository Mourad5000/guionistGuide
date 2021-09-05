<template>
    <div id="product-list-one">
      <p>hola caracola</p>
    </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created(){
    this.lanzarAPI()
  },
 methods:{
   lanzarAPI:function(){
     this.$store.dispatch('getMovies');
   }
 }
};
</script>
