<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="blocks">
      <CatalogBlock v-for="item in products" :key="item.id" :data="item"/>
    </div>
  </div>
</template>

<script>
import CatalogBlock from '../components/CatalogBlock.vue'; //импортируем нашу карточку товара
export default {
    components: {CatalogBlock},

    data(){
        return{
            
        }
    },

    computed:{
        products(){
            return this.$store.state.products;
        }
    }

}
</script>

<style scoped>
.catalog{
    padding: 0 500px;
}

.blocks{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px; 
}
</style>