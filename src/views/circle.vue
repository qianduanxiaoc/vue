<template>
    <div>
        <div>
            <span @click="add" class="btn">+</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{percent}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span @click="percent -= 10" class="btn">-</span>
        </div>
        <div class="wraper" :style="wraperStyle">
            <div class="circle circle2 stroke" :style="circleStyle"></div>
            <div class="circle circle1" :style="Object.assign({}, circleMask, circleMask2)"></div>
            <div class="circle circle2" :style="Object.assign({}, circleMask, circleMask1)"></div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                /*百分百*/
                percent: 0,
                /* 圆环直径 */
                circleWidth: 120,
                /* 进度环背景宽度 */
                trailWidth: 20,
                /*进度环背景色*/
                trailColor: '#e1e6eb',
                /* 进度环的线宽 */
                strokeWidth: 18,
                /* 进度环的颜色 */
                strokeColor: '#0bb27a'
            }
        },
        computed: {
            /*背景环*/
            wraperStyle() {
                let width = this.circleWidth
                return {
                    width: `${width}px`,
                    height: `${width}px`
                }
            },
            /*进度环*/
            circleStyle() {
                let width = this.circleWidth
                let pos = this.strokeWidth - this.trailWidth
                return {
                    width: `${width}px`,
                    height: `${width}px`,
                    top: `${pos}px`,
                    left: `${pos}px`,
                    borderWidth: `${this.strokeWidth}px`,
                    borderColor: `${this.strokeColor}`,
                    transform: `rotate(${360 * this.percent / 100}deg)`,
                    zIndex: this.percent >= 50 ? 3 : 2
                }
            },
            /*遮罩环*/
            circleMask() {
                let width = this.circleWidth
                let pos = this.strokeWidth - this.trailWidth
                return {
                    width: `${width}px`,
                    height: `${width}px`,
                    top: `${pos}px`,
                    left: `${pos}px`,
                    borderWidth: `${this.trailWidth}px`,
                    borderColor: `${this.trailColor}`
                }
            },
            circleMask1() {
                return {
                    zIndex: this.percent >= 50 ? 2 : 3
                }
            },
            circleMask2() {
                return {
                    zIndex: 1
                }
            }
        },
        methods: {
            add() {
                if(this.percent < 100) {
                    this.percent += 10
                }
            },
            del() {
                if(this.percent > 0) {
                    this.percent -= 10
                }
            }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scope>
    .wraper {
        position: relative;
        background: transparent;
        transform: rotate(45deg);
    }
    .circle {
        position: absolute;
        border-radius: 50%;
        border-style: solid;
        &.circle1 {
            border-bottom-color: transparent !important;
            border-left-color: transparent !important;
        }
        &.circle2 {
            border-top-color: transparent !important;
            border-right-color: transparent !important;
        }
        &.stroke {
            transition: transform 0.2s;
        }
    }
    .btn {
        display: inline-block;
        padding: 0 12px;
        line-height: 32px;
        cursor: pointer;
        border: 1px solid #0bb27a;
    }