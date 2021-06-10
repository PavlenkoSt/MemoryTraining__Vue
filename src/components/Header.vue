<template>
  <div>
      <div>
          Moves: {{ moves }}
      </div>
      <div>
          Timer
      </div>
  </div>
</template>

<script>
    export default {
        name: 'Header',
        data: () => ({
            moves: 0
        }),
        methods: {
            incrementMoves(){
                this.moves += 1
            },
            clearMoves(){
                this.moves = 0
            }
        }
    }
</script>

<style scoped>

</style>