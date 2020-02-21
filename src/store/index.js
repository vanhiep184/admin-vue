import Vue from "vue";
import Vuex from "vuex";
import Api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            // console.log('products data: ', products)
            state.products = products;
        }
    },
    actions: {
        async loadProducts({ commit }) {
            let res = await Api().get("/products");
            console.log("Find st in here!!", res);
            commit('SET_PRODUCTS', res.data)

        }
    },
    modules: {}
});