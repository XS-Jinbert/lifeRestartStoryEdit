import { createRouter, createWebHashHistory } from "vue-router";

const home = () =>
    import ("../home")
const login = () =>
    import ("../login")

const routes = [
    // 重定向
    // { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;