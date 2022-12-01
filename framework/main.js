import { createApp } from 'vue'
import App from './App'
import ReusableThing from './ReusableThing'

const bootingCallbacks = []

const Framework = {
    booting: (callback) => {
        bootingCallbacks.push(callback)
    },

    start: (el) => {

        const app = createApp(App)
        app.component('reusable-thing', ReusableThing)

        console.log(bootingCallbacks.length)
        bootingCallbacks.forEach(callback => {
            console.log('going through boot')
            callback(app, {})
        })

        app.mount(el)
    }
}

window.Framework = Framework
