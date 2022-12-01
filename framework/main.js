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

        console.log('Booting ' + bootingCallbacks.length + ' callbacks')
        bootingCallbacks.forEach(callback => {
            console.log('booting callback ', callback)
            callback(app, {})
        })

        app.mount(el)
    }
}

window.Framework = Framework
