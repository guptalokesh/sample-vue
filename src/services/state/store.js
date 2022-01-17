import Vue from 'vue';
import Vuex from 'vuex';

import { vuexLocal } from './vueXLocal';
import cards from "./modules/cards";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    modules: {
        cards
    },
    actions: {
    },
    plugins: [
        vuexLocal.plugin,
    ],
});
