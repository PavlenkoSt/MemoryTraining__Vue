<template>
    <div 
        class="trigger"
        :class="{active: isActive || guessed}"
        @click="activateCell"
    >
        <div class="cell">
            <div class="front"></div>
            <div class="back">{{ number }}</div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        name: 'BoardCell',
        props: {
            number: {
                type: Number,
                required: true
            },
            isActive: {
                type: Boolean,
                required: true
            },
            id: {
                type: Number,
                required: true
            },
            guessed: {
                type: Boolean,
                required: true
            }
        },
        computed: mapGetters(['currentActiveNumbers']),
        methods: {
            ...mapMutations(['clearActiveCell', 'incrementMoves', 'setActiveCell']),
            activateCell(){
                if(!this.isActive && !this.guessed){
                    this.cellHandler(this.id)
                }
            },
            cellHandler(id){
                if(this.currentActiveNumbers.length < 2){
                    this.setActiveCell(id)
                    if(this.currentActiveNumbers.length === 2){
                        const guessed = this.currentActiveNumbers[0].value === this.currentActiveNumbers[1].value

                        setTimeout(() => {
                            this.clearActiveCell(guessed)
                            this.incrementMoves()
                        }, 1000)
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .cell{
        width: 100px;
        height: 100px;
        justify-self: center;
        transition: all ease .8s;
        position: relative;
        transform-style: preserve-3d;
        border-radius: 4px;
    }
    .trigger{
        width: 100px;
        height: 100px;
        border-radius: 4px;
        cursor: pointer;
    }
    .trigger.active .cell{
        transform: rotateY(-180deg);
    }
    .front{
        background-color: rgb(0, 73, 231);
        transform: rotateY(0);
        z-index: 2;
        backface-visibility: hidden;
        box-shadow: 0 2px 3px #333;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
    .back{
        background-color: rgb(238, 238, 238);
        width: 100%;
        height: 100%;
        perspective: 400px;
        transform: rotateY(-180deg);
        z-index: 1;
        box-shadow: 0 2px 3px #333;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 26px;
        font-weight: 700;
        border-radius: 4px;
    }
</style>