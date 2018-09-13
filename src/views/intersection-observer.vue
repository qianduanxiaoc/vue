<template>
    <div>
        <p>比如无限滚动</p>
        <p class="add">添加</p>
        <div class="scrollerFooter">
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p>asdf</p>
            <p class="observer">11111111</p>
        </div>
    </div>
</template>
<script>
    export default {
        temName: '测试',
        components: {},
        data() {
            return {}
        },
        computed: {
        },
        methods: {
            callback(entries) {
                //If intersectionRatio is 0, the target is out of view
                //and we do not need to do anything
                if (entries[0].intersectionRatio <= 0) return
                this.loadItems()
            },
            loadItems() {
                let wraper = document.querySelector('.scrollerFooter')
                let listItem = document.querySelector('.add').cloneNode(true)
                wraper.append(listItem)
            }
        },
        mounted() {
            const options = { 
                root: document.querySelector('#scrollArea'),
                rootMargin: '40px',
                threshold: 1.0 
            }
            var intersectionObserver = new IntersectionObserver(entries => this.callback(entries), options)
            // start observing
            intersectionObserver.observe(document.querySelector('.observer'))
        }
    }
</script>
<style scope> 
    .scrollerFooter {
        height: 200px;
        overflow-y: auto;
    }
</style>