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
        },
        EDIT_PRODUCT(state, product) {
            let productOld = state.products.find(pid => pid.id == product.id)
            productOld = product;
            console.log(productOld);
        }
    },
    actions: {
        async loadProducts({ commit }) {
            let res = await Api().get("/products");
            // console.log("Find st in here!!", res);
            commit('SET_PRODUCTS', res.data)

        },
        async addProduct({ commit }, product) {
            let res = await Api().post("/products", product);
            // console.log("Find data to add in here!!", res);
            // window.location.reload();
            let savedProduct = res.data
            commit('ADD_PRODUCT', savedProduct);
            // return savedProduct
        },
        async editProduct({ commit }, product) {
            let res = await Api().put(`products/${product.id}`, product);
            // console.log("Find data to add in here!!", res);
            let editedProduct = res.data
            commit('EDIT_PRODUCT', editedProduct)
            return editedProduct;
        },

    },

    modules: {}
});