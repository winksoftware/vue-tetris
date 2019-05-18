<template>
    <div>
        <div class="row" v-for="i in rows" :key="i">
            <EmptyBlock v-for="j in columns" v-bind:is-empty="!(i === $store.state.position.currentPosition.x && j === $store.state.position.currentPosition.y)" :key="i+''+j"></EmptyBlock>
        </div>
    </div>
</template>

<script>
    import EmptyBlock from "./EmptyBlock";
    export default {
        name: "Board",
        components: {EmptyBlock},
        data() {
            return {
                rows: this.$store.state.board.boardSize.rows,
                columns: this.$store.state.board.boardSize.columns
            }
        }
    }
</script>

<style scoped>
div.row{
    margin-bottom: -4px;
}
</style>
