<template>
  <div>
      <div>
          Moves: {{ moves }}
      </div>
      <div>
          Time: {{ time === 0 ? '00:00' : '' }} {{ time !== 0 ? time : '' | moment('mm:ss')}}
      </div>
  </div>
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

</style>