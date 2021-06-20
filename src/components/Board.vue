<template>
    <div 
        class="board"
        :class=boardSizeClass
    >
        <BoardCell
            v-for="cell in cells"
            :key="cell.id"
            :id="cell.id"
            :number="cell.value"
            :isActive="cell.active"
            :guessed="cell.guessed"
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
                v-if="won()"
                class="message"
                @click="generateRestart"
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
            ...mapMutations(['startGame', 'endGame', 'setTimer', 'stopTimer']),
            letsStartGame(){
                this.startGame()
                this.setTimer()
            },
            generateRestart(){
                this.$emit('restart')
            },
            won(){
                if(this.isWon){
                    this.stopTimer()
                    this.endGame()
                }
                return this.isWon
            }
        },
        computed:{
            ...mapGetters(['gameIsStarted', 'boardSize', 'cells', 'isWon']),
            boardSizeClass(){
                return this.boardSize === '4x3' ? 'size4x3' : 
                this.boardSize === '4x4' ? 'size4x4' :
                this.boardSize === '5x4' ? 'size5x4' : 
                this.boardSize === '6x5' ? 'size6x5' : 
                this.boardSize === '6x6' ? 'size6x6' :
                null
            }
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