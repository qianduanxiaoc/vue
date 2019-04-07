<template>
    <div class="logo">
        <img src="./images/filter2.png" class="logo2">
        <img src="./images/filter1.png" class="logo1">
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        }
    }
</script>
<style lang="scss">
.logo {
    position: relative;
    >img {
        cursor: pointer;
        position: absolute;
        opacity: 0;
        transition: all 0.2s;
    }
    .logo2 {
        opacity: 1;
    }
    &:hover {
        .logo2 {
            opacity: 0;
        }
        .logo1 {
            opacity: 1;
        }
    }
}
</style>