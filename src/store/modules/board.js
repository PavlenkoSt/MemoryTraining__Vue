export default {
    state: {
        boardSize: '4x3',
        sourceNumbers: [],
        cells: [],
        currentActiveNumbers: []
    },
    mutations:{
        generateNumbers(state){
            state.sourceNumbers = []

            let iterations = 0
            switch(state.boardSize){
                case '4x3': {
                    iterations = 6
                    break
                }
                case '4x4': {
                    iterations = 8
                    break
                }
                case '5x4': {
                    iterations = 10
                    break
                }
                case '6x5': {
                    iterations = 15
                    break
                }
                case '6x6': {
                    iterations = 18
                    break
                }
                default: break
            }

            for(let i = 1; i <= iterations; i++){
                state.sourceNumbers.push(i)
            }
        },
        updateBoardSize(state, size){
            state.boardSize = size
        },
        setActiveCell(state, id){
            state.cells = state.cells.map(cell => {
                if(cell.id === id){
                    cell.active = true
                    state.currentActiveNumbers = [...state.currentActiveNumbers, cell]
                }
                return cell
            })
        },
        clearActiveCell(state, guessed){
            state.cells = state.cells.map(cell => {
                if(cell.active){
                    cell.active = false
                    if(guessed){
                        cell.guessed = true
                    }
                }
                return cell
            })

            state.currentActiveNumbers = []
        },
        initializeRandomOrderNumbers(state){
            const numbers = state.sourceNumbers.concat(state.sourceNumbers).sort(() => Math.random() - 0.5)

            if(state.cells.length){
                state.cells = []
            }

            numbers.forEach((num, i) => {
                const newCell = {
                    value: num,
                    id: i,
                    active: false,
                    guessed: false
                }

                state.cells = ([...state.cells, newCell])
            })
        },


        updateCells(state, cells){
            state.cells = cells
        },
        updateCurrentActiveNumbers(state, numbers){
            state.currentActiveNumbers = numbers
        }
    },
    getters: {
        sourceNumbers(state){
            return state.sourceNumbers
        },
        boardSize(state){
            return state.boardSize
        },
        cells(state){
            return state.cells
        },
        currentActiveNumbers(state){
            return state.currentActiveNumbers
        },
        isWon(state){
            return state.cells.every(cell => cell.guessed)
        }
    },
}