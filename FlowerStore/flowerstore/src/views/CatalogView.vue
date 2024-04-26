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
            products: [
                {
                    id: '1',
                    name: 'Букет роз',
                    price: '2500',
                    amount: '17',
                    picture: 'src/static/catalog/1.jpg'
                },
                {
                    id: '2',
                    name: 'Тюльпаны',
                    price: '1200',
                    amount: '21',
                    picture: 'src/static/catalog/2.jpg'
                },
                {
                    id: '3',
                    name: 'Ромашки полевые',
                    price: '4500',
                    amount: '101',
                    picture: 'src/static/catalog/3.jpg'
                },
                {
                    id: '4',
                    name: 'Цветочная корзина',
                    price: '9600',
                    amount: '1',
                    picture: 'src/static/catalog/4.jpg'
                },
                {
                    id: '5',
                    name: 'Бронзовые лилии',
                    price: '4700',
                    amount: '7',
                    picture: 'src/static/catalog/5.jpg'
                },
                {
                    id: '6',
                    name: 'Ландыши из вибраниума',
                    price: '800000',
                    amount: '2',
                    picture: 'src/static/catalog/6.jpg'
                },
            ]
        }
    },

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