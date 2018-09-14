<template>
    <div class="animate">
        <span @click="search" >
            se<span :class="{circle: true, active: isSearch}">
                <input type="text" v-if="isSearch" v-focus>
            </span>rch
        </span>
    </div>
</template>
<script>
    export default {
        temName: '有意思的动画',
        components: {},
        data() {
            return {
                isSearch: false
            }
        },
        computed: {

        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        methods: {
            search(e) {
                if(!this.isSearch) {
                    this.isSearch = !this.isSearch
                }
            }
        }
    }
</script>
<style lang="scss" scope>
    .animate {
        >span {
            display: inline-block;
            font-size: 40px;
            color: #0bb27a;
            cursor: pointer;
        }
        .circle {
            position: relative;
            display: inline-block;
            width: 22px;
            height: 22px;
            border-radius: 11px;
            transition: width 0.2s;
            border: 3px solid #0bb27a;
            >input {
                position: absolute;
                width: 100px;
                top: 0;
                left: 11px;
                border: none;
                outline: none;
            }
            &::after {
                position: absolute;
                content: '';
                right: -4px;
                top: -2px;
                display: block;
                width: 3px;
                height: 21px;
                background: #0bb27a;
            }
            &.active  {
                width: 122px;
                padding: 0 11px;
            }
        }
    }
</style>