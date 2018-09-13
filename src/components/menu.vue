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
                    },
                    {
                        name: 'renderDemo',
                        title: 'render'
                    },
                    {
                        name: 'circleCss3',
                        title: '进度环-css3'
                    },
                    {
                        name: 'circleSvg',
                        title: '进度环-svg'
                    },
                    {
                        name: 'timeLine',
                        title: '时间轴动画'
                    },
                    {
                        name: 'newFunction',
                        title: 'new实例'
                    },
                    {
                        name: 'animateLine',
                        title: '蚂蚁线'
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
<style lang="scss" scope>
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