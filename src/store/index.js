import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        
    },
    mutations:{
        updateGameIsStarted(state, bool){
            state.gameIsStarted = bool
        },
        updateBoardSize(state, size){
            state.boardSize = size
        }
    },
    state: {
        gameIsStarted: false,
        boardSize: '4x3'
    },
    getters: {
        gameIsStarted(state){
            return state.gameIsStarted
        },
        boardSize(state){
            return state.boardSize
        }
    }
})