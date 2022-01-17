import CardService from '../../card';
const getDefaultState = () => ({
    cards:{}
});

export default {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        getCards: state => state.cards,
    },
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },

        setNewCard(state, card) {
            state.cards.push(card);
        },
        setAllCards(state, allCards) {
            state.cards = allCards;
        },
    },
    actions: {
        async fetchCards({ commit }) {
            try {
                const [allCards] = await Promise.all([CardService.getAllCards()]);
                commit('setAllCards', { allCards });
                // eslint-disable-next-line no-empty
            } catch (e) {
                console.log(e);
            }
        },

    },
};
