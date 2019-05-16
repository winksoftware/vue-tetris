<template>
    <div>
        <p v-show="$store.state.isArrowDownKeyPressed">Down arrow key pressed!</p>
        <p v-show="$store.state.isArrowUpKeyPressed">Up arrow key pressed!</p>
        <p v-show="$store.state.isArrowLeftKeyPressed">Left arrow key pressed!</p>
        <p v-show="$store.state.isArrowRightKeyPressed">Right arrow key pressed!</p>
    </div>
</template>

<script>
    export default {
        name: "Joystick"
    }
</script>

<style scoped>

</style>
