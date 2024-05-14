<template>
    <div class="block">
        <h3>{{ data.name }}</h3>
        <div class="subheader">
            <p>{{ data.amount }} шт</p>
            <p>●</p>
            <p>{{ data.price }} ₽</p>
        </div>
        <img :src="data.picture" alt="image">
        <div class="buttons">
            <button @click="addToCart" class="add">Add to cart</button>
            <button class="buy">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        addToCart(){
            this.$store.commit('ADD_TO_CART', this.data)
            console.log('Товар успешно добавлен!')
        }
    }
}
</script>

<style scoped>
.add{
    background-color: #8EB19D;
    border: solid 1px #8EB19D;
    color: white;
    transition: all .1s ease;
}

.buy{
    background-color: transparent;
    border: solid 1px #8EB19D;
    color: #8EB19D;
    transition: all .1s ease;
}

.add:hover{
    background-color: #718d7d;
    border: solid 1px #718d7d;
    cursor: pointer;
}

.buy:hover{
    background-color: #ffffff;
    cursor: pointer;
}

button{
    font-family: 'Montserrat';
    font-size: 1.1rem;
    padding: 5px 25px;
    border-radius: 8px;
}

.buttons{
    display: flex;
    gap: 10px;
}

.block{
    background-color: #F4F4F4;
    padding: 20px;
}

.subheader{
    display: flex;
    gap: 5px;
    color: #8EB19D;
    font-weight: bold;
}

h3, p{
    margin: 0;
}

.block h3{
    font-weight: 500;
    font-size: 2rem;
    white-space: nowrap;
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
}

img{
    border-radius: 5px;
    margin: 15px 0;
    height: 300px;
    width: 100%;
    object-fit: cover;
}
</style>