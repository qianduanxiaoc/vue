<template>
    <div class="wrap">
        <div>
            <div class="margin">
                margin
                <div class="border">
                    border
                    <div class="padding">
                        padding
                        <div class="content">content</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="./images/shapes.jpg" class="shapes">
            <p>关关雎鸠，在河之洲</p>
            <p>窈窕淑女，君子好逑</p>
            <p>参差荇菜，左右流之</p>
            <p>窈窕淑女，寤寐求之</p>
            <p>求之不得，寤寐思服</p>
            <p>悠哉悠哉，辗转反侧</p>
            <p>参差荇菜，左右采之</p>
            <p>窈窕淑女，琴瑟友之</p>
            <p>参差荇菜，左右芼之</p>
            <p>窈窕淑女，钟鼓乐之</p>
        </div>
        <div>
            <div class="shapes2"></div>
            <p>关关雎鸠，在河之洲</p>
            <p>窈窕淑女，君子好逑</p>
            <p>参差荇菜，左右流之</p>
            <p>窈窕淑女，寤寐求之</p>
            <p>求之不得，寤寐思服</p>
            <p>悠哉悠哉，辗转反侧</p>
            <p>参差荇菜，左右采之</p>
            <p>窈窕淑女，琴瑟友之</p>
            <p>参差荇菜，左右芼之</p>
            <p>窈窕淑女，钟鼓乐之</p>
        </div>
        <div>
            <div class="shapes4"></div>
            <p>关关雎鸠，在河之洲</p>
            <p>窈窕淑女，君子好逑</p>
            <p>参差荇菜，左右流之</p>
            <p>窈窕淑女，寤寐求之</p>
            <p>求之不得，寤寐思服</p>
            <p>悠哉悠哉，辗转反侧</p>
            <p>参差荇菜，左右采之</p>
            <p>窈窕淑女，琴瑟友之</p>
            <p>参差荇菜，左右芼之</p>
            <p>窈窕淑女，钟鼓乐之</p>
        </div>
        <div>
            <div class="shapes3">
                <img src="./images/shape-img.png">
            </div>
            <p>关关雎鸠，在河之洲</p>
            <p>窈窕淑女，君子好逑</p>
            <p>参差荇菜，左右流之</p>
            <p>窈窕淑女，寤寐求之</p>
            <p>求之不得，寤寐思服</p>
            <p>悠哉悠哉，辗转反侧</p>
            <p>参差荇菜，左右采之</p>
            <p>窈窕淑女，琴瑟友之</p>
            <p>参差荇菜，左右芼之</p>
            <p>窈窕淑女，钟鼓乐之</p>
        </div>

    </div>
</template>
<script>
    export default {
        components: {},
        props: {
        },
        data() {
            return {}
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
    .wrap {
        >div {
            margin-bottom: 30px;
        }
    }
    .shapes {
        float: left;
        width: 200px;
        height: 200px;
        shape-outside: circle(50%);
        shape-margin: 2px;
    }

    .shapes2 {
        float: left;
        width: 200px;
        height: 200px;
        shape-outside: polygon(0 0, 100% 100%, 0 100%);
    }

    .shapes3 {
        float: left;
        width: 400px;
        height: 207px;
        shape-outside: url(./images/shape-img.png);
    }

    .shapes4 {
        float: left;
        width: 200px;
        height: 200px;
        shape-outside: inset(72px 88px);
    }

    .margin {
        padding: 20px;
        font-size: 16px;
        background: #dec3ee;
    }

    .margin div {
        padding: 20px;
        margin: 16px 32px 32px;
    }

    .border {
        background: #c4a8d5;
    }

    .padding {
        background: #916ea5;
    }

    .content {
        background: #fff;
    }
</style>