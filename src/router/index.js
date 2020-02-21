import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ProductEdit from "../views/ProductEdit.vue"



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/product/:id",
        name: "product-detail",
        component: ProductDetail,
        params: true
    },
    {
        path: "/product/:id/edit",
        name: "product-edit",
        component: ProductEdit,
        params: true
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;