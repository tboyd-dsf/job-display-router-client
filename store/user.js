export const state = () => ({
    currentUser: {
        email:'',
        password: ''
    },
    userLogged: false
})

export const mutations = {
    SET_CURRENT_USER(state, user) {
        state.currentUser = user
        state.userLogged = true
    },
    LOGOUT_CURRENT_USER(state) {
        state.currentUser = {
            email:'',
            password:''
        }
        state.userLogged = false
    }
}

export const actions = {
    setUser({commit}, user) {
        commit('SET_CURRENT_USER', user)
    },
    logoutUser({commit}) {
        commit('LOGOUT_CURRENT_USER')
    }
}