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
        name: "Joystick",
        mounted() {
            let self = this;
            this.$store.watch(function (state) {
                return state.isArrowRightKeyPressed;
            }, function () {
                self.$store.commit('moveRight')
            });

            this.$store.watch(function (state) {
                return state.isArrowLeftKeyPressed;
            }, function () {
                self.$store.commit('moveLeft')
            });

            this.$store.watch(function (state) {
                return state.isArrowDownKeyPressed;
            }, function () {
                self.$store.commit('moveDown')
            });

            this.$store.watch(function (state) {
                return state.isArrowUpKeyPressed;
            }, function () {
                self.$store.commit('moveUp')
            });
        }
    }
</script>

<style scoped>

</style>
