<template>
    <div class="info">
        <p class="step1">正在加载</p>
        <p class="step2">加载完成</p>
        <p class="step3">这是标题</p>
        <p class="step4">这是描述</p>
    </div>
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
<style lang="scss">
$step1Timer: 2s;
$step2Timer: 2s;
$step3Timer: 2s;
$step4Timer: 2s;
@mixin center() {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
    .info {
        position: relative;
        border: 1px solid #000;
        height: 150px;
        .step1 {
            @include center;
            animation: step1 $step1Timer linear forwards;
            -webkit-animation: step1 $step1Timer linear forwards;
        }
        .step2 {
            @include center;
            opacity: 0;
            font-size: 24px;
            font-weight: bold;
            height: 0;
            line-height: 30px;
            animation: step2 $step2Timer linear forwards $step1Timer;
            -webkit-animation: step2 $step2Timer linear forwards $step1Timer;
        }
        .step3 {
            @include center;
            opacity: 0;
            height: 0;
            font-size: 24px;
            font-weight: bold;
            line-height: 30px;
            animation: step3 $step3Timer linear forwards ($step1Timer + $step2Timer);
            -webkit-animation: step3 $step3Timer linear forwards ($step1Timer + $step2Timer);
        }
        .step4 {
            padding-top: 30px;
            opacity: 0;
            height: 0;
            line-height: 30px;
            animation: step4 $step4Timer linear forwards ($step1Timer + $step2Timer + $step3Timer);
            -webkit-animation: step4 $step4Timer linear forwards ($step1Timer + $step2Timer + $step3Timer);
        }
    }
    @keyframes step1 {
        0% {
            height: 30px;
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        99.9% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            height: 0;
        }
    }
    @keyframes step2 {
        0% {
            height: 30px;
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        99.9% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            height: 0;
        }
    } 
    @keyframes step3 {
        0% {
            height: 30px;
        }
        50% {
            opacity: 1;
        }
        100% {
            left: 0;
            transform: translateX(0); 
            font-size: 18px;
            height: 30px;
            opacity: 1;
        }
    } 
    @keyframes step4 {
        0% {
            height: 60px;
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    } 
</style>