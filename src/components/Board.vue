<template>
    <div class="board">
        <BoardCell
            v-for="cell in cells"
            :key="cell.id"
            :id="cell.id"
            :number="cell.value"
            :isActive="cell.active"
            :guessed="cell.guessed"
            @setActiveCell="cellHandler($event)"
        />
        <div 
            class="overlay" 
            v-if="!this.$props.gameIsStarted || isWon"
        >
            <div 
                v-if="!this.$props.gameIsStarted"
                class="message"
                @click="startGame"
            >Start game</div>

            <div 
                v-if="isWon"
                class="message"
                @click="restartGame"
            >
                <div>You won!</div>
                <div>Play again</div>
            </div>
        </div>
    </div>
</template>

<script>
    import BoardCell from './BoardCell.vue'

    export default {
        name: 'Board',
        data: () => ({
            cells: [],
            currentActiveNumbers: []
        }),
        components: {
            BoardCell
        },
        props: {
            gameIsStarted: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            startGame(){
                this.$emit('startGame', true)
            },
            restartGame(){
                this.initializeRandomOrderNumbers()
            },
            initializeRandomOrderNumbers(){
                const sourceNumbers = [1, 2, 3, 4, 5, 6]
                const numbers = sourceNumbers.concat(sourceNumbers).sort(() => Math.random() - 0.5)

                if(this.cells.length){
                    this.cells = []
                }

                numbers.forEach((num, i) => {
                    this.cells.push({
                        value: num,
                        id: i,
                        active: false,
                        guessed: false
                    })
                })
            },
            cellHandler(id){
                if(this.currentActiveNumbers.length < 2){
                    this._setActiveCell(id)
                    if(this.currentActiveNumbers.length === 2){
                        const guessed = this.currentActiveNumbers[0].value === this.currentActiveNumbers[1].value
                        this._clearActiveCell(guessed)
                    }
                }
            },
            _setActiveCell(id){
                this.cells = this.cells.map(cell => {
                    if(cell.id === id){
                        cell.active = true
                        this.currentActiveNumbers.push(cell)
                    }
                    return cell
                })
            },
            _clearActiveCell(guessed){
                setTimeout(() => {
                    this.cells = this.cells.map(cell => {
                        if(cell.active){
                            cell.active = false
                            if(guessed){
                                cell.guessed = true
                            }
                        }
                        return cell
                    })
                    this.currentActiveNumbers = []
                }, 1000)
            }
        },
        computed:{
            isWon(){
                return this.cells.every(cell => cell.guessed)
            }
        },
        mounted(){
            this.initializeRandomOrderNumbers()
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
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        border: 2px solid rgb(70, 70, 70);
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
    .message{
        width: 200px;
        padding: 50px 15px;
        border-radius: 10px;
        background-color: #06000e;
        border: 2px solid #fff;
        color: #fff;
        font-size: 22px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>