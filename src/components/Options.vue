<template>
  <div class="panel">
    <button 
        :disabled="!gameIsStarted"
        class="restartBtn"
        @click="restartGame"
    >Restart</button>
    <div class="boardSize">
        <span>Board size: </span>
        <button
            :class="{active: this.boardSize === '4x3'}"
            @click="changeBoardSize('4x3')"
        >4x3</button>
        <button
            :class="{active: this.boardSize === '4x4'}"
            @click="changeBoardSize('4x4')"
        >4x4</button>
        <button
            :class="{active: this.boardSize === '5x4'}"
            @click="changeBoardSize('5x4')"
        >5x4</button>
        <button
            :class="{active: this.boardSize === '6x5'}"
            @click="changeBoardSize('6x5')"
        >6x5</button>
        <button
            :class="{active: this.boardSize === '6x6'}"
            @click="changeBoardSize('6x6')"
        >6x6</button>
    </div>
  </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'Options',
        methods: {
            ...mapMutations(['updateBoardSize', 'clearMoves', 'clearTimer', 'endGame']),
            restartGame(){
                this.$emit('restart')
            },
            changeBoardSize(size){
                this.$emit('boardSizeIsChanged')

                this.updateBoardSize(size)

                this.clearMoves()
                this.clearTimer()

                this.endGame()
                setTimeout(() => {
                    this.$emit('boardSizeIsChanged')
                }, 0)
                
            }
        },
        computed: mapGetters(['gameIsStarted', 'boardSize']),
    }
</script>

<style scoped>
    .panel{
        padding: 40px 15px;
    }
    .restartBtn{
        background-color: #f8a412;
        border: 2px solid #f88412;
        color: #fff;
        outline: none;
        padding: 5px 15px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        transition: all ease .2s;
    }
    .restartBtn:hover{
        background-color: #f88412;
    }
    .restartBtn:disabled{
        background-color: rgb(158, 158, 158);
        border: 2px solid rgb(133, 133, 133);
        cursor: default;
    }
    .boardSize{
        margin-top: 15px;
    }
    .boardSize span{
        margin-right: 10px;
    }
    .boardSize button{
        background-color: rgb(51, 51, 51);
        border: 1px solid rgb(0, 0, 0);
        color: #fff;
        outline: none;
        padding: 5px 15px;
        font-size: 18px;
        cursor: pointer;
        margin-right: 5px;
    }

    .boardSize button.active{
        background-color: #4e17a9;
        border: 1px solid #2d056f;
        color: #fff;
    }
</style>    