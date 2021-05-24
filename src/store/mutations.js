export const mutations = {
    addFavorite(state, hotel) {
        state.favoriteHotels.push(hotel);
    },

    changeNavItem: (state, navItem) => (state.navItem = navItem),

    toggleMapOpen: (state) => (state.isMapOpen = !state.isMapOpen),
};
