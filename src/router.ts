import Vue from 'vue'
import Router from 'vue-router'
import intersectionObserver from './views/intersection-observer.vue'
import mixBlendMode from './views/mix-blend-mode.vue'
import animateSearch from './views/animate.vue'
import renderDemo from './views/render.vue'
import circleCss3 from './views/circle.vue'
import circleSvg from './views/circle-svg.vue'
import timeLine from './views/animate-time-line.vue'
import newFunction from './views/new-function.vue'
import animateLine from './views/animate-line.vue'
import game from './views/game.vue'
import filter from './views/filter.vue'
import shapes from './views/shapes.vue'
import shapesExp from './views/shapes-exp.vue'
import textAlign from './views/text-align.vue'
import dataTable from './views/data-table.vue'
import dataTable2 from './views/data-table2.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/intersectionObserver',
            name: 'intersectionObserver',
            component: intersectionObserver
        }, {
            path: '/mixBlendMode',
            name: 'mixBlendMode',
            component: mixBlendMode
        }, {
            path: '/animateSearch',
            name: 'animateSearch',
            component: animateSearch
        }, {
            path: '/renderDemo',
            name: 'renderDemo',
            component: renderDemo
        }, {
            path: '/circleCss3',
            name: 'circleCss3',
            component: circleCss3
        }, {
            path: '/circleSvg',
            name: 'circleSvg',
            component: circleSvg
        }, {
            path: '/timeLine',
            name: 'timeLine',
            component: timeLine
        }, {
            path: '/newFunction',
            name: 'newFunction',
            component: newFunction
        }, {
            path: '/animateLine',
            name: 'animateLine',
            component: animateLine
        }, {
            path: '/game',
            name: 'game',
            component: game
        }, {
            path: '/filter',
            name: 'filter',
            component: filter
        }, {
            path: '/shapes',
            name: 'shapes',
            component: shapes
        }, {
            path: '/shapes-exp',
            name: 'shapesExp',
            component: shapesExp
        }, {
            path: '/text-align',
            name: 'textAlign',
            component: textAlign
        }, {
            path: '/data-table',
            name: 'dataTable',
            component: dataTable
        }, {
            path: '/data-table2',
            name: 'dataTable2',
            component: dataTable2
        }
    ]
})
