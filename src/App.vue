<template>
    <div id="app">
        <p>Super tetris in VueJS</p>
        <Board/>
        <Joystick/>
    </div>
</template>

<script>
    import Board from "./components/Elements/Board";
    import Joystick from "./components/Console/Joystick";

    export default {
        name: 'app',
        components: {
            Joystick,
            Board
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
