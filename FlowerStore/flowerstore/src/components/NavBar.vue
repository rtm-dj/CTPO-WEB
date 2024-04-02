<template>
  <div class="main">
    <div class="logo">
        <img src="../static/logo.svg" alt="">
    </div>
    <div class="buttons">
        <a href="">Home</a>
        <a href="">Catalog</a>
        <a href="">Custom bouquet
            <Tag :text="'New'" :color="'#F6EFA6'"/>
        </a>
        <a href="">Contacts</a>
    </div>
    <div class="actions">
        <div class="cart-container">
            <svg @click="showCart = !showCart" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 12.5C11.9175 12.5 11.25 13.1675 11.25 14C11.25 14.3978 11.408 14.7794 11.6893 15.0607C11.9706 15.342 12.3522 15.5 12.75 15.5C13.1478 15.5 13.5294 15.342 13.8107 15.0607C14.092 14.7794 14.25 14.3978 14.25 14C14.25 13.1675 13.575 12.5 12.75 12.5ZM0.75 0.5V2H2.25L4.95 7.6925L3.93 9.53C3.8175 9.74 3.75 9.9875 3.75 10.25C3.75 10.6478 3.90804 11.0294 4.18934 11.3107C4.47064 11.592 4.85218 11.75 5.25 11.75H14.25V10.25H5.565C5.51527 10.25 5.46758 10.2302 5.43242 10.1951C5.39725 10.1599 5.3775 10.1122 5.3775 10.0625C5.3775 10.025 5.385 9.995 5.4 9.9725L6.075 8.75H11.6625C12.225 8.75 12.72 8.435 12.975 7.9775L15.66 3.125C15.7125 3.005 15.75 2.8775 15.75 2.75C15.75 2.55109 15.671 2.36032 15.5303 2.21967C15.3897 2.07902 15.1989 2 15 2H3.9075L3.2025 0.5M5.25 12.5C4.4175 12.5 3.75 13.1675 3.75 14C3.75 14.3978 3.90804 14.7794 4.18934 15.0607C4.47064 15.342 4.85218 15.5 5.25 15.5C5.64782 15.5 6.02936 15.342 6.31066 15.0607C6.59196 14.7794 6.75 14.3978 6.75 14C6.75 13.1675 6.075 12.5 5.25 12.5Z" fill="black"/>
            </svg>
            <div v-if="showCart" class="cart" >
                <p>Это наша корзина!</p>
            </div>
        </div>

        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0C6.79565 0 7.55871 0.31607 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3C9 3.79565 8.68393 4.55871 8.12132 5.12132C7.55871 5.68393 6.79565 6 6 6C5.20435 6 4.44129 5.68393 3.87868 5.12132C3.31607 4.55871 3 3.79565 3 3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.31607 5.20435 0 6 0ZM6 7.5C9.315 7.5 12 8.8425 12 10.5V12H0V10.5C0 8.8425 2.685 7.5 6 7.5Z" fill="black"/>
        </svg>
    </div>
  </div>
</template>

<script>
import Tag from '../components/Tag.vue'; //подключаем (импортируем) наш отдельный компонент Tag
export default {
    components: {Tag},

    data(){
        return{
            showCart: false,
        }
    }
}
</script>

<style scoped>
.main{
    padding: 50px 20vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.buttons{
    display: flex;
    gap: 60px;
}

.buttons a{
    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    transition: all .2s ease;
}

.buttons a:hover{
    color: #8EB19D;
}

.actions{
    display: flex;
    gap: 10px;
    align-items: center;
}

.cart-container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cart{
    background-color: white;
    filter: drop-shadow(0 0 10px rgb(232, 232, 232));
    position: absolute;
    top: 20px;
}

</style>