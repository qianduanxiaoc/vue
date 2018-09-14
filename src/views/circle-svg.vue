<template>
    <div class="wraperCircle">
        <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" :class="{svg: true, dashboard: dashboard}">

            <!-- 进度环背景 -->
            <circle :cx="radius" :stroke-linecap="strokeLinecap" :cy="radius" :r="circleRadius" :stroke="trailColor" :stroke-width="trailWidth" :fill="trailBgc" :style="trailStyle"/>

            <!-- 进度环 -->
            <circle :cx="radius" :stroke-linecap="strokeLinecap" :cy="radius" :r="circleRadius" :stroke="strokeColorCal" :stroke-width="strokeWidth" fill="transparent" :style="strokeStyle"/>

        </svg>

        <div class="circleInner">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            percent: {
                type: Number,
                default: 10,
                validator: function (value) {
                    return value <= 100
                }
            },
            // 图表宽高
            size: {
                type: Number,
                default: 60,
                validator: function (value) {
                    return value > 0
                }
            },
            // 不建议修改--当为round、square时，看起来会比实际的比例大，尤其图表较小时
            strokeLinecap: {
                type: String,
                default: 'butt',
                validator: function (value) {
                    return ['butt', 'round', 'square'].includes(value)
                }
            },
            // 进度环线宽
            strokeWidth: {
                type: Number,
                default: 10,
                validator: function (value) {
                    return value > 0
                }
            },
            // 进度环色
            strokeColor: {
                type: String
            },
            // 进度环背景色
            trailWidth: {
                type: Number,
                default: 10,
                validator: function (value) {
                    return value > 0
                }
            },
            // 进度环背景色
            trailColor: {
                type: String,
                default: '#e1e6eb'
            },
            // 进度环底盘色-默认transparent
            trailBgc: {
                type: String,
                default: 'transparent'
            },
            // 是否为仪表盘
            dashboard: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            //圆半径
            radius() {
                return this.size / 2
            },
            dashboardRate() {
                return this.dashboard ? 0.75 : 1
            },
            //圆环半径-- 根据环宽，取环较宽的半径
            circleRadius() {
                if(this.strokeWidth > this.trailWidth) {
                    return this.radius - this.strokeWidth / 2
                } else {
                    return this.radius - this.trailWidth / 2
                }
            },
            //周长
            len() {
                return Math.PI * 2 * this.circleRadius
            },
            // 进度环css
            strokeStyle() {
                let percentLen = this.percent / 100 * this.len * this.dashboardRate
                return {
                    strokeDasharray: `${percentLen} ${this.len}`
                }
            },
            // 进度环颜色--优先使用strokeColor, 否则根据percent显示
            strokeColorCal() {
                if(this.strokeColor) {
                    return this.strokeColor
                } else if (this.percent < 50) {
                    return '#ed3f14'
                } else if (this.percent === 100) {
                    return '#2d8cf0'
                } else {
                    return '#04af71'
                }
            },
            //背景环
            trailStyle() {
                return {
                    strokeDasharray: `${this.len * this.dashboardRate} ${this.len}`
                }
            }
        },
    }
</script>
<style lang="scss">
    .wraperCircle {
        position: relative;
        display: inline-block;

        .svg{
            transform: rotate(-90deg);
            circle {
                stroke-dasharray: 0 0;
                transition: stroke-dasharray 0.5s, stroke 0.5s;
            }
            &.dashboard {
                transform: rotate(-225deg);
            }
        }

        .circleInner {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
        }
    }

</style>