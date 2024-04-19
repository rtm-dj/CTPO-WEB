<template>
    <div class="block">
        <h3>Name</h3>
        <div class="subheader">
            <p>13 шт</p>
            <p>,</p>
            <p>4500 руб.</p>
        </div>
        <img src="" alt="">
        <div class="buttons">
            <button class="add">Add to cart</button>
            <button class="buy">Buy</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.add{
    background-color: #8EB19D;
    border-radius: 5px;
    border: solid 1px #8EB19D;
    color: white;
    padding: 5px 15px;
}

.buy{
    background-color: #ffffff;
    border-radius: 5px;
    border: solid 1px #8EB19D;
    color: #8EB19D;
    padding: 5px 15px;
}

.add:hover{
    background-color: #718d7d;
    border: solid 1px #718d7d;
    cursor: pointer;
}

.buy:hover{
    background-color: #eeeeee;
    cursor: pointer;
}

button{
    font-family: 'Montserrat';
    font-size: 1.1rem;
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
}

img{
    height: 200px;
    width: auto;
    object-fit: cover;
}
</style>