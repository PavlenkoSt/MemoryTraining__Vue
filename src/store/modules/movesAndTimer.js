export default {
    state: {
        moves: 0,
        time: 0,
        timer: null
    },
    mutations:{
        incrementMoves(state){
            state.moves += 1
        },
        clearMoves(state){
            state.moves = 0
        },
        updateTime(state, time){
            state.time = time
        },
        setTimer(state){
            state.timer = setInterval(() => {
                state.time += 1
            }, 1000)
        },
        stopTimer(state){
            clearInterval(state.timer)
            state.timer = null
        },
        clearTimer(state){
            clearInterval(state.timer)
            state.timer = null
            state.time = 0
        },
        restartTimer(state){
            clearInterval(state.timer)
            state.timer = null
            state.time = 0
            state.timer = setInterval(() => {
                state.time += 1
            }, 1000)
        }
    },
    getters: {
        moves(state){
            return state.moves
        },
        time(state){
            return state.time
        }
    }
}