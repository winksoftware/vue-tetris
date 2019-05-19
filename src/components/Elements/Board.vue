<template>
    <div>
        <div class="row" v-for="(i, iIndex) in board.rows" :key="i">
            <Block v-for="(j, jIndex) in board.columns" :is-full="board.isCurrentPositionFull(iIndex, jIndex)"
                   :key="iIndex+''+jIndex"></Block>
        </div>
    </div>
</template>

<script>
    import Block from "./Block";
    import BoardLogic from '../../lib/console/board'

    export default {
        name: "Board",
        components: {Block},
        props: {
            board: {
                type: BoardLogic
            }
        }
    }
</script>

<style scoped>
    div.row {
        margin-bottom: -4px;
    }
</style>
