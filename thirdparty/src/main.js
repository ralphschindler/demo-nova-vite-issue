import HelloWorld from './HelloWorld.vue'

console.log(window.Framework)

Framework.booting((theVue) => {
    theVue.component('hello-world', HelloWorld)
})

