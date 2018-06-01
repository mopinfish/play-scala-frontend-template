import Vue from 'vue'

let app: Vue = new Vue({
  el: '#app',
  render: (h)=>h('p', 'Hello, world.')
});
let message: string = 'hello, vue world';
console.log(message);
