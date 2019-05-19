<template>
    <div id="app">
        <p>Super tetris in VueJS</p>
        <Board :board="board"/>
        <Joystick/>
        <button v-on:click="startGame">Start</button> <button>End</button>
    </div>
</template>

<script>
    import Board from "./components/Elements/Board";
    import Joystick from "./components/Console/Joystick";
    import Game from './lib/game';
    import BoardLogic from './lib/console/board';

    export default {
        name: 'app',
        components: {
            Joystick,
            Board
        },
        data() {
            return {
                board: new BoardLogic(this.$store.state.board.boardSize.rows, this.$store.state.board.boardSize.columns),
                game: null
            }
        },
        methods: {
            startGame() {
                this.game = new Game(this.board);
                this.game.start();
            }
        },
        mounted() {
            // this.startGame();
            // console.log(this.board.cells)
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
