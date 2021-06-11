<template>
    <div 
        class="board"
        :class="{
            size4x3: this.boardSize === '4x3',
            size4x4: this.boardSize === '4x4',
            size5x4: this.boardSize === '5x4',
            size6x5: this.boardSize === '6x5',
            size6x6: this.boardSize === '6x6'
        }"
    >
        <BoardCell
            v-for="cell in cells"
            :key="cell.id"
            :id="cell.id"
            :number="cell.value"
            :isActive="cell.active"
            :guessed="cell.guessed"
            @setActiveCell="cellHandler($event)"
        />
        <div 
            class="overlay" 
            v-if="!gameIsStarted || isWon"
        >
            <div 
                v-if="!gameIsStarted && !isWon"
                class="message"
                @click="letsStartGame"
            >Start game</div>

            <div 
                v-if="isWon"
                class="message"
                @click="restartGame"
            >
                <div>You won!</div>
                <div>Play again</div>
            </div>
        </div>
    </div>
</template>

<script>
    import BoardCell from './BoardCell.vue'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'Board',
        components: {
            BoardCell
        },
        methods: {
            ...mapMutations(['startGame', 'endGame', 'updateCells', 'updateCurrentActiveNumbers', 'incrementMoves', 'clearMoves', 
            'setTimer', 'restartTimer', 'stopTimer']),
            letsStartGame(){
                this.startGame()
                this.setTimer()
            },
            restartGame(){
                this.initializeRandomOrderNumbers()
                this.clearMoves()

                this.restartTimer()
                this.startGame()
            },
            initializeRandomOrderNumbers(){
                const sourceNumbers = this.generateNumbers
                const numbers = sourceNumbers.concat(sourceNumbers).sort(() => Math.random() - 0.5)

                if(this.cells.length){
                    this.updateCells([])
                }

                numbers.forEach((num, i) => {
                    const newCell = {
                        value: num,
                        id: i,
                        active: false,
                        guessed: false
                    }

                    this.updateCells([...this.cells, newCell])
                })
            },
            cellHandler(id){
                if(this.currentActiveNumbers.length < 2){
                    this._setActiveCell(id)
                    if(this.currentActiveNumbers.length === 2){
                        const guessed = this.currentActiveNumbers[0].value === this.currentActiveNumbers[1].value
                        this._clearActiveCell(guessed)
                    }
                }
            },
            _setActiveCell(id){
                const cells = this.cells.map(cell => {
                    if(cell.id === id){
                        cell.active = true
                        this.updateCurrentActiveNumbers([...this.currentActiveNumbers, cell])
                    }
                    return cell
                })

                this.updateCells(cells)
            },
            _clearActiveCell(guessed){
                setTimeout(() => {
                    const cells = this.cells.map(cell => {
                        if(cell.active){
                            cell.active = false
                            if(guessed){
                                cell.guessed = true
                            }
                        }
                        return cell
                    })

                    this.updateCells(cells)

                    this.updateCurrentActiveNumbers([])
                    this.incrementMoves()
                }, 1000)
            }
        },
        computed:{
            ...mapGetters(['gameIsStarted', 'boardSize', 'cells', 'currentActiveNumbers']),
            isWon(){
                if(this.cells.every(cell => cell.guessed)){
                    this.stopTimer()
                    this.endGame()
                    return true
                }
                return false
            },
            generateNumbers(){
                const sourceNumbers = []
                let iterations = 0

                switch(this.boardSize){
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
                    sourceNumbers.push(i)
                }
                return sourceNumbers
            }
        },
        mounted(){
            this.initializeRandomOrderNumbers()
        }
    }
</script>

<style scoped>
    .board{
        background-color: rgba(0, 0, 0, 0.4);
        display: grid;
        gap: 10px;
        padding: 10px;
        position: relative;
        border-radius: 8px;
        border-top-left-radius: 0;
        overflow: hidden;
        border: 2px solid rgb(70, 70, 70);
    }
    .board.size4x3{
        grid-template: repeat(3, 1fr) / repeat(4, 1fr);
    }
    .board.size4x4{
        grid-template: repeat(4, 1fr) / repeat(4, 1fr);
    }
    .board.size5x4{
        grid-template: repeat(4, 1fr) / repeat(5, 1fr);
    }
    .board.size6x5{
        grid-template: repeat(5, 1fr) / repeat(6, 1fr);
    }
    .board.size6x6{
        grid-template: repeat(6, 1fr) / repeat(6, 1fr);
    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .message{
        width: 200px;
        padding: 50px 15px;
        border-radius: 10px;
        background-color: #06000e;
        border: 2px solid #fff;
        color: #fff;
        font-size: 22px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>