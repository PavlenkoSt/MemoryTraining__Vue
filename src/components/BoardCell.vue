<template>
    <div class="trigger">
        <div class="cell">
            <div class="front"></div>
            <div class="back">1</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BoardCell'
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
    }
    .trigger:hover .cell{
        transform: rotateY(-180deg);
    }
    .front{
        background-color: rgb(23, 108, 235);
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
        background-color: #fff;
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
        font-size: 20px;
        font-weight: 700;
        border-radius: 4px;
    }
</style>