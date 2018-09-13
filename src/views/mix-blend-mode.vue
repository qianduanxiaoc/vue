<template>
    <div class="wraper" >
        <p>mix-blend-mode：multiply;从图像中删除白色背景</p>
        <div class="bg">
            <p class="text text1">文字 color 颜色 使用内容的色调和饱和度以及背景的亮度创建颜色</p>
            <p class="text text2">文字 color-burn 颜色加深 这会使背景变暗以反映内容的自然色</p>
            <p class="text text3">文字 color-dodge 颜色减淡 此属性使背景颜色变亮以反映内容的颜色</p>
            <p class="text text4">文字 darken 变暗 背景将替换为内容较暗的内容，否则保持原样</p>
            <p class="text text5">文字 difference 差值 这会从最浅的颜色中减去两种颜色中较暗的颜色</p>
            <p class="text text6">文字 exclusion 排除 类似difference但对比度较低</p>
            <p class="text text7">文字 hard-light 强光 取决于内容的颜色，此属性将筛选或乘以它</p>
            <p class="text text8">文字 hue 色相 创建一种颜色，其内容的色调与背景的饱和度和亮度相结合</p>
            <p class="text text9">文字 inherit 继承</p>
            <p class="text text10">文字 lighten 变亮 背景将替换为内容较轻的内容</p>
            <p class="text text11">文字 luminosity 亮度 使用内容的亮度以及背景的色调和饱和度创建颜色。这是color属性的反转</p>
            <p class="text text12">文字 multiply 正片叠底 元素乘以背景并替换背景颜色。生成的颜色始终与背景一样暗</p>
            <p class="text text13">文字 normal  正常 此属性不应用任何混合</p>
            <p class="text text14">文字 overlay 叠加 根据背景颜色倍增或屏幕内容。这是hard-light混合模式的反转</p>
            <p class="text text15">文字 saturation 饱和度 创建一种颜色，其内容饱和度与背景的色调和亮度相结合</p>
            <p class="text text16">文字 screen 滤色 将背景和内容相乘，然后补充结果。这将导致内容比背景颜色更亮</p>
            <p class="text text17">文字 soft-light 柔光 根据内容的颜色，这将使其变暗或变亮</p>
            <p class="text text18">文字 unset 复原 从元素中删除当前混合模式</p>
        </div>

    </div>
</template>
<script>
    export default {
        temName: '混合',
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
<style scope> 
        .wraper {
            background: aquamarine;
        }
        .bg {
            color: #000;
        }
        .text {
            color: #fff;
            font-size: 30px;
        }
        .text1 {
            mix-blend-mode: color;
        }
        .text2 {
            mix-blend-mode: color-burn;
        }
        .text3 {
            mix-blend-mode: color-dodge;
        }
        .text4 {
            mix-blend-mode: darken;
        }
        .text5 {
            mix-blend-mode: difference;
        }
        .text6 {
            mix-blend-mode: exclusion;
        }
        .text7 {
            mix-blend-mode: hard-light;
        }
        .text8 {
            mix-blend-mode: hue;
        }
        .text9 {
            mix-blend-mode: inherit;
        }
        .text10 {
            mix-blend-mode: lighten;
        }
        .text11 {
            mix-blend-mode: luminosity;
        }
        .text12 {
            mix-blend-mode: multiply;
        }
        .text13 {
            mix-blend-mode: normal;
        }
        .text14 {
            mix-blend-mode: overlay;
        }
        .text15 {
            mix-blend-mode: saturation;
        }
        .text16 {
            mix-blend-mode: screen;
        }
        .text17 {
            mix-blend-mode: soft-light;
        }
        .text18 {
            mix-blend-mode: unset;
        }
</style>