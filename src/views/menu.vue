<template>
    <div>
        <router-link :to="{name: item.name}" :key="i" v-for="(item, i) in menuList" tag="div" class="list">{{item.title}}</router-link>
    </div>
</template>
<script>
    export default {
        components: {},
        props: {
               /*当前模板*/
            temp: {
                type: String
            }
        },
        data() {
            return {
                menuList: [
                    {
                        name: 'intersectionObserver',
                        title: '无限滚动'
                    },
                    {
                        name: 'mixBlendMode',
                        title: '混合'
                    },
                    {
                        name: 'animateSearch',
                        title: '有意思的动画'
                    }
                ]
            }
        },
        computed: {
        },
        methods: {
        },
        mounted() {
        }
    }
</script>
<style lang="scss">
    .list {
        padding: 4px 10px;
        line-height: 32px;
        cursor: pointer;
        font-size: 14px;
        &.router-link-active {
            color: #0bb27a;
        }
    }
</style>