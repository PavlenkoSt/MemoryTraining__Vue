<template>
  <div id="app">
    <Header
      ref="headerRef"
    />
    <div class="container">
      <Board 
        :boardSize="this.boardSize"
        @startGame="updateGameIsStarted"
        @movesChange="movesHandler"
        @timerChange="timerHandler"
        ref="boardRef"
      />
      <Options
        :boardSize="this.boardSize"
        @restart="restartGame"
        @changeBoardSize="changeBoardSize"
      />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Board from './components/Board.vue'
  import Options from './components/Options.vue'
  import { mapMutations } from 'vuex'

  export default {
    name: 'App',
    components: {
      Header,
      Board,
      Options
    },
    data: () => ({
      boardSize: '4x3'
    }),
    methods: {
      ...mapMutations(['updateGameIsStarted']),
      movesHandler(needToClear = false){
        if(needToClear){
          this.$refs.headerRef.clearMoves()
        }else{
          this.$refs.headerRef.incrementMoves()
        }
      },
      timerHandler(action){
        switch(action){
          case 'stop': {
            this.$refs.headerRef.stopTimer()
            break
          }
          case 'restart': {
            this.$refs.headerRef.restartTimer()
            break
          }
          case 'clear': {
            this.$refs.headerRef.clearTimer()
            break
          }
          case 'start': {
            this.$refs.headerRef.startTimer()
            break
          } 
        }
      },
      restartGame(){
        this.$refs.boardRef.restartGame()
      },
      changeBoardSize(size){
        this.boardSize = size

        this.movesHandler(true)
        this.timerHandler('clear')

        this.updateGameIsStarted(false)
        setTimeout(() => {
          this.$refs.boardRef.initializeRandomOrderNumbers()
        }, 0)
      }
    }
  }
</script>

<style>
  *, *::before, *::after{
    box-sizing: border-box;
  }
  html, body{
    margin: 0;
    background-color: rgb(231, 231, 231);
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .container{
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>
