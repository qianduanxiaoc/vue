<template>
    <div class="game">
        <span v-for="(row, j) in (rows * cols)" :key="j" class="row" :style="itemColor(i, j)">&nbsp;</span>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                //方格数量
                cols: 6,
                rows: 6,
                colorList: [{
                    main: '#0bb27a',
                    light: '#b4e7d4'
                }, {
                    main: '#2d8cf0',
                    light: '#bfdeff'
                }, {
                    main: '#6076e3',
                    light: '#d2d4f9'
                }, {
                    main: '#e56281',
                    light: '#ffd2df'
                }]
            }
        },
        computed: {
        },
        methods: {
            itemColor(i, j) {
                //[0,3]
                let index = Math.ceil(Math.random()*(this.colorList.length - 1))
                return {
                    background: this.colorList[index].light,
                    border: `1px solid ${this.colorList[index].main}`
                }
            }
        },
        created() {
            //生成方格
        }
    }
</script>
<style lang="scss">
$row: 6;
$width: 30px;
.game {
    display: flex;
    width: $width * $row + 6px;
    flex-wrap: wrap;
    .row {
        margin: 0 1px 1px 0;
        height: $width;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: $width;
        border-radius: 4px;
    }
}
</style>