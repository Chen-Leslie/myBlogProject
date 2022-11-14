import Vue from "vue";
import VueRouter from "vue-router";
import indexVue from "@/views/index.vue";
import testVue from "@/views/test.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "MyBolg",
    component: indexVue,
    redirect: '/index',
    children: [{
        path: "/index",
        name: "index",
        component: indexVue,
    },
    {
        path: "/test",
        name: "test",
        component: testVue,
    },
    ]
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;