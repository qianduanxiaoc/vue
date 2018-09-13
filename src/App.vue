<template>
    <div id="app">
        <div class="menu">
            <menu-list></menu-list>
        </div>
        <div class="content">
            <span @click="add">+</span>{{percent}}
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
            </circle-demo>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import menuList from './components/menu.vue'
import circleDemo from './views/circle-svg.vue'
export default {
    name: 'app',
    components: {
        menuList,
        circleDemo
    },
    data() {
        return {
            step: 10,
            percent: 0,
            size: 120,
            strokeLinecap: 'butt',
            strokeWidth: 20,
            strokeColor: '#0bb27a',
            trailBgc: 'transparent',
            trailColor: '#e1e6eb',
            trailWidth: 20,
            dashboard: true
        }
    },
    methods: {
        add() {
            if(this.percent < 100) {
                this.percent += this.step
            }
        },
        del() {
            if(this.percent > 0) {
                this.percent -= this.step
            }
        }
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