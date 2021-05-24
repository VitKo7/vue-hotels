export const actions = {
    addFavorite({ commit }, item) {
        commit('addFavorite', { ...item });
    },

    changeNavItem({ commit }, navItem) {
        commit('changeNavItem', navItem);
    },

    toggleMapOpen({ commit }) {
        commit('toggleMapOpen');
    },
};
