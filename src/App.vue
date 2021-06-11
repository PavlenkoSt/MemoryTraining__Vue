<template>
  <div id="app">
    <Header
      ref="headerRef"
    />
    <div class="container">
      <Board 
        :_restartGame="_restartGame"
      />
      <Options
        :_restartGame="_restartGame"
        :_initializeRandomOrderNumbers="_initializeRandomOrderNumbers"
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
    methods: {
      ...mapMutations(['generateNumbers', 'initializeRandomOrderNumbers', 'updateCurrentActiveNumbers', 
        'clearMoves', 'restartTimer', 'startGame']),
      _restartGame(){
        this.updateCurrentActiveNumbers([])
        this._initializeRandomOrderNumbers()
        this.clearMoves()

        this.restartTimer()
        this.startGame()
      },
      _initializeRandomOrderNumbers(){
        this.generateNumbers()
        this.initializeRandomOrderNumbers()
      }
    },
    mounted(){
        this._initializeRandomOrderNumbers()
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
