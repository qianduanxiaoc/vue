<template>
    <div id="app">
        <div class="menu">
            <menu-list></menu-list>
        </div>
        <div class="content">
<<<<<<< HEAD
=======
            <!-- <span @click="add">+</span>{{percent}}
            <span @click="del">-</span>
            <circle-demo
                :percent="percent"
                :size="size"
                :strokeLinecap="strokeLinecap"
                :strokeWidth="strokeWidth"
                :strokeColor="strokeColor"
                :trailWidth="trailWidth"
                :trailColor="trailColor"
                :trailBgc="trailBgc"
                :dashboard="dashboard"
            >
            </circle-demo> -->
>>>>>>> 表格驱动
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import menuList from './components/menu.vue'
export default {
    name: 'app',
    components: {
        menuList
    },
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style lang="scss" scope>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
    }
    .menu {
        min-height: 100vh;
        flex-basis: 200px;
        flex-grow: 0;
        flex-shrink: 0;
        border-right: 1px solid #e1e6eb;
    }
    .content {
        padding: 32px;
        flex-basis: calc(100% - 200px);
    }
</style>
