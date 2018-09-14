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
        }
    ]
})
