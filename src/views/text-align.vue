<template>
    <div>
        {{xxx | testss}}
        <div v-for="(item, i) in list" :key="i" class="item">
            <span class="label" >{{item.label}}</span>：
            <span class="value">{{item.value}}</span>
        </div>
    </div>
</template>
<script>
    import filter from './json/filter.json'
    export default {
        components: {},
        data() {
            return {
                xxx: 111,
                list: [{
                    label: '姓名',
                    value: '小王'
                }, {
                    label: '出生年月',
                    value: '1994-01'
                }, {
                    label: '性别',
                    value: '女'
                }]
            }
        },
        filters: {
            testss: (val)=>{
                console.log(filter,111)
                return val
            }
        },
        computed: {
        },
        methods: {
            test() {
                console.log(this)
            }
        },
        created() {
            this.test()
        }
    }
</script>
<style lang="scss">
.item {
    margin-bottom: 8px;
    .label {
        height: 100%;
        display: inline-block;
        min-width: 100px;
        text-align: justify;
        text-align-last: justify;
    /*    &::after {
            display: inline-block;
            width: 100%;
            content: '';
            height: 0;
        }*/
    }
    .value {
        padding-right: 10px;
    }
}
</style>