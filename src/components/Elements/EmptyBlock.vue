<template>
    <img v-bind:src="image">
</template>

<script>
    import imageBlock from '../../assets/empty-block.png'

    export default {
        name: "EmptyBlock",
        data: () => {
            return {
                image: imageBlock
            }
        }
    }
</script>

<style scoped>
img{
    width: 15px;
}
</style>
