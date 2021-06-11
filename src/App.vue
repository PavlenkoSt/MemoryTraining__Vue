<template>
  <div id="app">
    <Header
      ref="headerRef"
    />
    <div class="container">
      <Board 
        ref="boardRef"
      />
      <Options
        @restart="restartGame"
        @boardSizeIsChanged="rerenderBoard"
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
    methods: {
      restartGame(){
        this.$refs.boardRef.restartGame()
      },
      rerenderBoard(){
        this.$refs.boardRef.initializeRandomOrderNumbers()
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
