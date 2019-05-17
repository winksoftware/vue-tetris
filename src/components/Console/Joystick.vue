<template>
    <div>
        <p v-show="$store.state.isArrowDownKeyPressed !== 0">Down arrow key pressed!</p>
        <p v-show="$store.state.isArrowUpKeyPressed !== 0">Up arrow key pressed!</p>
        <p v-show="$store.state.isArrowLeftKeyPressed !== 0">Left arrow key pressed!</p>
        <p v-show="$store.state.isArrowRightKeyPressed !== 0">Right arrow key pressed!</p>
    </div>
</template>

<script>
    export default {
        name: "Joystick",
        mounted() {
            let self = this;
            this.$store.watch(function (state) {
                return state.isArrowRightKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('moveRight')
            });

            this.$store.watch(function (state) {
                return state.isArrowLeftKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('moveLeft')
            });

            this.$store.watch(function (state) {
                return state.isArrowDownKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('moveDown')
            });

            this.$store.watch(function (state) {
                return state.isArrowUpKeyPressed;
            }, function (newValue) {
                if (newValue !== 0) self.$store.commit('moveUp')
            });
        }
    }
</script>

<style scoped>

</style>
