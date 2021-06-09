<template>
    <div class="board">
        <BoardCell
            v-for="i in 12" 
            :key="i"
        />
        <div 
            class="overlay" 
            v-if="!this.$props.gameIsStarted"
        >
            <div 
                class="start"
                @click="startGame"
            >Start game</div>
        </div>
    </div>
</template>

<script>
    import BoardCell from './BoardCell.vue'

    export default {
        name: 'Board',
        components: {
            BoardCell
        },
        props: {
            gameIsStarted: {
                type: Boolean,
                required: true
            },
            gameIsStartedChange: {
                type: Function,
                required: true
            }
        },
        methods: {
            startGame(){
                this.$props.gameIsStartedChange(true)
            }
        },
        mounted(){
            console.log(this.$props.gameIsStarted);
        }
    }
</script>

<style scoped>
    .board{
        background-color: rgba(0, 0, 0, 0.4);
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(4, 1fr);
        gap: 10px;
        padding: 10px;
        box-shadow: 0 0 3px #333;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .start{
        width: 200px;
        height: 100px;
        border-radius: 10px;
        background-color: #06000e;
        border: 2px solid #fff;
        color: #fff;
        font-size: 22px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>