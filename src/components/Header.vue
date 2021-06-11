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
    import { mapGetters } from 'vuex'

    export default {
        name: 'Header',
        computed: mapGetters(['time', 'moves'])
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