export const state = () => ({
    currentUser: {
        email:'',
        password: ''
    }
})

export const mutations = {
    SET_CURRENT_USER(state, user) {
        state.currentUser = user
    }
}

export const actions = {
    setUser({commit}, user) {
        commit('SET_CURRENT_USER', user)
    }
}