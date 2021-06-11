import Vue from 'vue'
import Vuex from 'vuex'
import movesAndTimer from './modules/movesAndTimer'
import board from './modules/board'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        
    },
    state: {
        gameIsStarted: false,
    },
    mutations:{
        startGame(state){
            state.gameIsStarted = true
        },
        endGame(state){
            state.gameIsStarted = false
        }
    },
    getters: {
        gameIsStarted(state){
            return state.gameIsStarted
        }
    },
    modules: {
        movesAndTimer,
        board
    }
})