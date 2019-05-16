<template>
    <div>
        <div class="row" v-for="i in rows" :key="i">
            <EmptyBlock v-for="j in columns" :key="j" />
        </div>
    </div>
</template>

<script>
    import EmptyBlock from "./EmptyBlock";
    export default {
        name: "Board",
        components: {EmptyBlock},
        data: () => {
            return {
                rows: 20,
                columns: 10
            }
        }
    }
</script>

<style scoped>
div.row{
    margin-bottom: -4px;
}
</style>
