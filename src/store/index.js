import Vue from 'vue'
import Vuex from 'vuex'
import movesAndTimer from './modules/movesAndTimer'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        gameIsStarted: false,
        boardSize: '4x3',
        cells: [],
        currentActiveNumbers: []
    },
    mutations:{
        startGame(state){
            state.gameIsStarted = true
        },
        endGame(state){
            state.gameIsStarted = false
        },
        updateBoardSize(state, size){
            state.boardSize = size
        },
        updateCells(state, cells){
            state.cells = cells
        },
        updateCurrentActiveNumbers(state, numbers){
            state.currentActiveNumbers = numbers
        }
    },
    getters: {
        gameIsStarted(state){
            return state.gameIsStarted
        },
        boardSize(state){
            return state.boardSize
        },
        cells(state){
            return state.cells
        },
        currentActiveNumbers(state){
            return state.currentActiveNumbers
        }
    },
    modules: {
        movesAndTimer
    }
})