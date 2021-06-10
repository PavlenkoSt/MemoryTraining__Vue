<template>
  <div id="app">
    <Header/>
    <div class="container">
      <Board 
        :gameIsStarted="this.gameIsStarted"
        @startGame="updateGameIsStarted($event)"
      />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Board from './components/Board.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Board
    },
    data: () => ({
      gameIsStarted: false
    }),
    methods: {
      updateGameIsStarted(bool){
        this.gameIsStarted = bool
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
    grid-template-columns: 460px 1fr;
  }
</style>
