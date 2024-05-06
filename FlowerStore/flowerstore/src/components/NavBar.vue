<template>
  <div class="main">
    <div class="logo">
        <img src="../static/logo.svg" alt="">
    </div>

    <!-- Меню навигации -->
    <div class="buttons">
        <router-link :to="'/'">Home</router-link>
        <router-link :to="'/catalog'">Catalog</router-link>
        <router-link :to="'/'">Custom bouquet
            <Tag :text="'New'" :color="'#F6EFA6'"/>
        </router-link>
        <router-link :to="'/contacts'">Contacts</router-link>
    </div>


    <div class="actions">
        <div class="cart-container">
            <button @click="showCart = !showCart" @blur="showCart = !showCart">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 12.5C11.9175 12.5 11.25 13.1675 11.25 14C11.25 14.3978 11.408 14.7794 11.6893 15.0607C11.9706 15.342 12.3522 15.5 12.75 15.5C13.1478 15.5 13.5294 15.342 13.8107 15.0607C14.092 14.7794 14.25 14.3978 14.25 14C14.25 13.1675 13.575 12.5 12.75 12.5ZM0.75 0.5V2H2.25L4.95 7.6925L3.93 9.53C3.8175 9.74 3.75 9.9875 3.75 10.25C3.75 10.6478 3.90804 11.0294 4.18934 11.3107C4.47064 11.592 4.85218 11.75 5.25 11.75H14.25V10.25H5.565C5.51527 10.25 5.46758 10.2302 5.43242 10.1951C5.39725 10.1599 5.3775 10.1122 5.3775 10.0625C5.3775 10.025 5.385 9.995 5.4 9.9725L6.075 8.75H11.6625C12.225 8.75 12.72 8.435 12.975 7.9775L15.66 3.125C15.7125 3.005 15.75 2.8775 15.75 2.75C15.75 2.55109 15.671 2.36032 15.5303 2.21967C15.3897 2.07902 15.1989 2 15 2H3.9075L3.2025 0.5M5.25 12.5C4.4175 12.5 3.75 13.1675 3.75 14C3.75 14.3978 3.90804 14.7794 4.18934 15.0607C4.47064 15.342 4.85218 15.5 5.25 15.5C5.64782 15.5 6.02936 15.342 6.31066 15.0607C6.59196 14.7794 6.75 14.3978 6.75 14C6.75 13.1675 6.075 12.5 5.25 12.5Z" fill="black"/>
                </svg>
            </button>

            <div v-if="showCart" class="cart">
                <div v-for="item in products" :key="item.id">
                    <div class="cart-item">
                        <h3>{{ item.name }}</h3>
                        <div>
                            <span class="price">{{ item.price }} ₽</span>
                            <svg width="20" height="20" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.41667 0C8.41208 0 10.8333 2.42125 10.8333 5.41667C10.8333 8.41208 8.41208 10.8333 5.41667 10.8333C2.42125 10.8333 0 8.41208 0 5.41667C0 2.42125 2.42125 0 5.41667 0ZM8.125 2.70833H6.77083L6.22917 2.16667H4.60417L4.0625 2.70833H2.70833V3.79167H8.125V2.70833ZM3.79167 8.66667H7.04167C7.18533 8.66667 7.3231 8.6096 7.42468 8.50802C7.52627 8.40644 7.58333 8.26866 7.58333 8.125V4.33333H3.25V8.125C3.25 8.26866 3.30707 8.40644 3.40865 8.50802C3.51023 8.6096 3.64801 8.66667 3.79167 8.66667Z" fill="#F0D2D1"/>
                            </svg>
                        </div>
                    </div>
                    <hr class="cart-divider">
                </div>
                
                <div class="total">
                    <h3>Tot.</h3>
                    <h2>{{ total }} ₽</h2>
                </div>

                <div class="cart-buttons">
                    <button class="checkout">Checkout</button>
                </div>
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

            products: [
                {
                    id: '1',
                    name: 'Букет роз',
                    price: '2500',
                },
                {
                    id: '2',
                    name: 'Ромашки',
                    price: '400',
                },
                {
                    id: '3',
                    name: 'Кактус XXL',
                    price: '4200',
                },
            ]
        }
    },
}
</script>

<style scoped>
.main{
    padding: 50px 500px;
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
    z-index: 99;
    top: 20px;

    width: 300px;
}

.cart-container svg{
    cursor: pointer;
}

.cart-container svg:hover path{
    fill: #8EB19D;
}

.cart-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
}

.cart-item div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.cart-item h3{
    font-weight: 400;
    margin: 0;
}

.price{
    font-weight: 600;
    color: #8EB19D;
}

.cart-divider{
    margin: 0;
    background-color: #EDEDED;
    border: none;
    height: 2px;
}

.total{
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 15px;
    gap: 10px;
}

.total h3{
    font-weight: 400;
    margin: 0;
}

.total h2{
    font-weight: 600;
    margin: 0;
    color: #8EB19D;
    font-size: .8rem;
}

.checkout{
    background-color: #8EB19D;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    padding: 5px;
    font-family: 'Montserrat';
    transition: all .2s ease;
}

.checkout:hover{
    background-color: #728f7f;
    cursor: pointer;
}

.cart-buttons{
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 15px 15px 15px;
}

</style>