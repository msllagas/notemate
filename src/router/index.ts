import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Welcome from "../views/Welcome.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Welcome",
        component: Welcome,
        children: [],
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
        meta: { requiresAuth: true },
        children: [
            {
                path: "/home",
                name: "DashboardHome",
                component: () => import("../views/dashboard/Home.vue"),
            },
            {
                path: "/bookmarks",
                name: "DashboardBookmark",
                component: () => import("../views/dashboard/Bookmark.vue"),
            },
            {
                path: "/archives",
                name: "DashboardArchive",
                component: () => import("../views/dashboard/Archive.vue"),
            },
            {
                path: "/trash",
                name: "DashboardTrash",
                component: () => import("../views/dashboard/Trash.vue"),
            },
            {
                path: "/user-profile",
                name: "DashboardUserProfile",
                component: () => import("../views/dashboard/UserProfile.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
