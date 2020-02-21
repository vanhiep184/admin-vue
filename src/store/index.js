import Vue from "vue";
import Vuex from "vuex";
import Api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            // console.log('products data: ', products)
            state.products = products;
        },
        ADD_PRODUCT(state, product) {
            state.products = [...state.products, product]
        }
    },
    actions: {
        async loadProducts({ commit }) {
            let res = await Api().get("/products");
            // console.log("Find st in here!!", res);
            commit('SET_PRODUCTS', res.data)

        },

    },
    method: {
        async addProduct(newProduct, { commit }) {
            let res = await Api().post("/products", newProduct);
            // console.log("Find data to add in here!!", res);
            // window.location.reload();
            commit('ADD_PRODUCTS', res.data)
        }
    },
    modules: {}
});