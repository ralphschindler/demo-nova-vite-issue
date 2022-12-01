import HelloWorld from './HelloWorld.vue'

Framework.booting((theVue) => {
    theVue.component('hello-world', HelloWorld)
})

