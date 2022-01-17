import Vue from 'vue';
import Router from 'vue-router';
import { store } from './services/state/store';

Vue.use(Router);

const waitForStorageToBeReady = async (to, from, next) => {
    await store.restored;
    next();
};
const DEFAULT_TITLE = 'Sample';

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (dashboard.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./pages/Dashboard.vue'),
            meta: {
                breadcrumb: [{
                    name: 'Dashboard',
                    link: 'dashboard',
                }],
                pageTitle: 'Dashboard',
            },
        },
        {
            path: '/cards',
            component: () => import('./pages/card/router.vue'),
            children: [
                {
                    path: '/',
                    name: 'cards.index',
                    // route level code-splitting
                    // this generates a separate chunk (dashboard.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './pages/card/Index.vue'),
                    meta: {
                        breadcrumb: [
                            {
                                name: 'Home',
                                link: 'dashboard',
                            },
                            {
                                name: 'Cards',
                                link: 'cards.index',
                            },
                        ],
                        pageTitle: 'Cards',
                    },
                },
                {
                    path: 'create',
                    name: 'cards.create',
                    component: () => import('./pages/card/Create.vue'),
                    meta: {
                        breadcrumb: [
                            {
                                name: 'Home',
                                link: 'dashboard',
                            },
                            {
                                name: 'Cards',
                                link: 'cards.index',
                            },
                            {
                                name: 'Create',
                                link: 'cards.create',
                            },
                        ],
                        pageTitle: 'Create Project',
                    },
                },
            ],
        },
    ],
});

router.beforeEach(waitForStorageToBeReady);

router.beforeEach((to, from, next) => {
        return next();
});
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    document.title = to.meta.pageTitle || DEFAULT_TITLE;
});

export default router;
