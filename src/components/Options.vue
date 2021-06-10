<template>
  <div class="panel">
    <button 
        :disabled="!this.$props.gameIsStarted"
        class="restartBtn"
        @click="restartGame"
    >Restart</button>
  </div>
</template>

<script>
    export default {
        name: 'Options',
        methods: {
            restartGame(){
                this.$emit('restart')
            }
        },
        props: {
            gameIsStarted: {
                type: Boolean,
                retquired: true
            }
        }
    }
</script>

<style scoped>
    .panel{
        padding: 20px 15px;
    }
    .restartBtn{
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
    .restartBtn:hover{
        background-color: #f88412;
    }
    .restartBtn:disabled{
        background-color: rgb(158, 158, 158);
        border: 2px solid rgb(133, 133, 133);
        cursor: default;
    }
</style>    