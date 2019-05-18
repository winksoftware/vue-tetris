<template>
    <div>
        <p v-show="$store.state.joystick.isArrowDownKeyPressed !== 0">Down arrow key pressed!</p>
        <p v-show="$store.state.joystick.isArrowUpKeyPressed !== 0">Up arrow key pressed!</p>
        <p v-show="$store.state.joystick.isArrowLeftKeyPressed !== 0">Left arrow key pressed!</p>
        <p v-show="$store.state.joystick.isArrowRightKeyPressed !== 0">Right arrow key pressed!</p>
    </div>
</template>

<script>
    export default {
        name: "Joystick",
        mounted() {
            let self = this;
            this.$store.watch(function (state) {
                return state.joystick.isArrowRightKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('position/moveRight')
            });

            this.$store.watch(function (state) {
                return state.joystick.isArrowLeftKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('position/moveLeft')
            });

            this.$store.watch(function (state) {
                return state.joystick.isArrowDownKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('position/moveDown')
            });

            this.$store.watch(function (state) {
                return state.joystick.isArrowUpKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('position/moveUp')
            });
        }
    }
</script>

<style scoped>

</style>
