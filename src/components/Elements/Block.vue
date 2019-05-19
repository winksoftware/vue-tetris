<template>
    <img v-bind:src="imageSource">
</template>

<script>
    import imageEmptyBlock from '../../assets/empty-block.png'
    import imageBlock from '../../assets/block.png'

    export default {
        name: "Block",
        props: {
            isFull: {
                default: false,
                type: Boolean
            }
        },
        computed: {
            imageSource() {
                return this.isFull ? imageBlock : imageEmptyBlock;
            }
        }
    }
</script>

<style scoped>
    img {
        width: 15px;
    }
</style>
