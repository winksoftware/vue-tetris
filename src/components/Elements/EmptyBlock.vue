<template>
    <img v-bind:src="imageSource">
</template>

<script>
    import imageEmptyBlock from '../../assets/empty-block.png'
    import imageBlock from '../../assets/block.png'

    export default {
        name: "EmptyBlock",
        props: {
            isEmpty: {
                default: true,
                type: Boolean
            }
        },
        computed: {
            imageSource(){
                return this.isEmpty ? imageEmptyBlock : imageBlock
            }
        }
    }
</script>

<style scoped>
img{
    width: 15px;
}
</style>
