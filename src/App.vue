<template>
  <div id="app">
    <Header
      ref="headerRef"
    />
    <div class="container">
      <Board 
        :gameIsStarted="this.gameIsStarted"
        :boardSize="this.boardSize"
        @startGame="updateGameIsStarted($event)"
        @movesChange="movesHandler"
        @timerChange="timerHandler"
        ref="boardRef"
      />
      <Options
        :gameIsStarted="this.gameIsStarted"
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

  export default {
    name: 'App',
    components: {
      Header,
      Board,
      Options
    },
    data: () => ({
      gameIsStarted: false,
      boardSize: '4x3'
    }),
    methods: {
      updateGameIsStarted(bool){
        this.gameIsStarted = bool
      },
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
        this.gameIsStarted = false

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
