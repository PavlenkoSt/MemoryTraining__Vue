<template>
  <div class="panel">
    <button 
        :disabled="!gameIsStarted"
        class="restart-btn"
        @click="generateRestart"
    >Restart</button>
    <div class="board-size">
        <span>Board size: </span>
        <button 
            v-for="button in buttons" 
            :key="button"
            :class="{active: boardSize === button}"
            @click="changeBoardSize(button)"
            class="btn"
        >{{button}}</button>
    </div>
  </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'Options',
        data: () => ({
            buttons: ['4x3', '4x4', '5x4', '6x5', '6x6']
        }),
        methods: {
            ...mapMutations(['updateBoardSize', 'clearMoves', 'clearTimer', 'endGame']),
            changeBoardSize(size){
                this.updateBoardSize(size)

                this.clearMoves()
                this.clearTimer()

                this.endGame()

                setTimeout(() => {
                   this.$emit('reinitializeBoard')
                }, 0)
            },
            generateRestart(){
                this.$emit('restart')
            }
        },
        computed: mapGetters(['gameIsStarted', 'boardSize']),
    }
</script>

<style scoped>
    .panel{
        padding: 40px 15px;
    }
    .restart-btn{
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
    .restart-btn:hover{
        background-color: #f88412;
    }
    .restart-btn:disabled{
        background-color: rgb(158, 158, 158);
        border: 2px solid rgb(133, 133, 133);
        cursor: default;
    }
    .board-size{
        margin-top: 15px;
    }
    .board-size span{
        margin-right: 10px;
    }
    .board-size button{
        background-color: rgb(51, 51, 51);
        border: 1px solid rgb(0, 0, 0);
        color: #fff;
        outline: none;
        padding: 5px 15px;
        font-size: 18px;
        cursor: pointer;
        margin-right: 5px;
    }

    .btn.active{
        background-color: #4e17a9;
        border: 1px solid #2d056f;
        color: #fff;
    }
</style>    