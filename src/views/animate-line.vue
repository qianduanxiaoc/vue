<template>
    <div class="animate-line"></div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {
        },
        methods: {
        }
    }
</script>
<style module="s">
    .animate-line {
    width: 200px;
    height:200px;
    padding:1em;
    border: 1px solid transparent;
    background: linear-gradient(white,white) padding-box, repeating-linear-gradient( -45deg, black 0, black 25%, white 0, white 50%) 0 /.6em;
    animation:ants 12s linear infinite;
    }
    @keyframes ants {
        to { background-position:100% }
    }
</style>