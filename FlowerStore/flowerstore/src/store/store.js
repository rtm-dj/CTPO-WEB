import { createStore } from 'vuex';

export const store = new createStore({
    state: {
        products: [
            { id: '1', name: 'Букет роз', price: '2500', amount: '17', picture: 'src/static/catalog/1.jpg' },
            { id: '2', name: 'Тюльпаны', price: '1200', amount: '21', picture: 'src/static/catalog/2.jpg' },
            { id: '3', name: 'Ромашки полевые', price: '4500', amount: '101', picture: 'src/static/catalog/3.jpg' },
            { id: '4', name: 'Цветочная корзина', price: '9600', amount: '1', picture: 'src/static/catalog/4.jpg' },
            { id: '5', name: 'Бронзовые лилии', price: '4700', amount: '7', picture: 'src/static/catalog/5.jpg' },
            { id: '6', name: 'Ландыши из вибраниума', price: '800000', amount: '2', picture: 'src/static/catalog/6.jpg' },
        ]
    },
})