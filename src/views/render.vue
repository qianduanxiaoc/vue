
<script>
    export default {
        render(createElement) {
          return createElement('h1', 'asdf')
        },
        mounted() {


   //      	function Timer() {
			//   this.s1 = 0
			//   this.s2 = 0
			//   // 箭头函数
			//   setInterval(() => {
			//   	this.s1++
			//   	console.log('s1---------', this.s1)
			//   }, 1000)
			//   // 普通函数
			//   setInterval(function () {
			//     this.s2++
			//   	console.log('s2--------', this === window)
			//   }, 1000)
			// }

			// var timer = new Timer()

			// setTimeout(() => console.log('s1: ', timer.s1), 3100)
			// setTimeout(() => console.log('s2: ', timer.s2), 3100)
        }
    }
</script>