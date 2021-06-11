<template>
  <div id="app">
    <Header
      ref="headerRef"
    />
    <div class="container">
      <Board 
        @startGame="updateGameIsStarted"
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
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'App',
    components: {
      Header,
      Board,
      Options
    },
    computed: mapGetters(['boardSize']),
    methods: {
      ...mapMutations(['updateGameIsStarted', 'updateBoardSize', 'clearMoves', 'clearTimer']),
      restartGame(){
        this.$refs.boardRef.restartGame()
      },
      changeBoardSize(size){
        this.updateBoardSize(size)

        this.clearMoves()
        this.clearTimer()

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
