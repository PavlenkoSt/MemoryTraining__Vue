<template>
  <header class="header">
      <div class="moves">
          Moves: {{ moves }}
      </div>
      <div class="time">
          Time: <span>
              {{ time === 0 ? '00:00' : '' }} {{ time !== 0 ? time : '' | moment('mm:ss')}}
            </span>
      </div>
  </header>
</template>

<script>
    export default {
        name: 'Header',
        data: () => ({
            moves: 0,
            time: 0,
            timerFunc: null
        }),
        methods: {
            incrementMoves(){
                this.moves += 1
            },
            clearMoves(){
                this.moves = 0
            },
            startTimer(){
                this.timerFunc = setInterval(() => {
                    this.time += 1
                }, 1000)
            },
            stopTimer(){
                clearInterval(this.timerFunc)
                this.timerFunc = null
            },
            restartTimer(){
                this.stopTimer()
                this.time = 0
                this.startTimer()
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        padding: 20px 15px;
        display: flex;
        justify-content: space-between;
        background-color: #a5a5a5;
    }
    .moves{
        padding: 10px 15px;
        background-color: #442a8f;
        color: #fff;
        border-radius: 10px;
    }
    .time{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .time span{
        padding: 10px 15px;
        background-color: #442a8f;
        color: #fff;
        border-radius: 10px;
        margin-left: 10px;
    }
</style>