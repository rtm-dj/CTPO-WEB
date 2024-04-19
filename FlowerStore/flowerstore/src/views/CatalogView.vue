<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="blocks">
        <CatalogBlock/>
    </div>
  </div>
</template>

<script>
import CatalogBlock from '../components/CatalogBlock.vue'; //импортируем нашу карточку товара
export default {
    components: {CatalogBlock},
}
</script>

<style scoped>
.catalog{
    padding: 0 20vw;
}
</style>