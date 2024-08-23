import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../page/home/index.vue'),
        children: [
            {
                path: 'table',
                component: () => import('@comps/table'),
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
