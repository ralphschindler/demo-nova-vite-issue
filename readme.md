# Issue between Vite HMR components and webpacked global instances

```console
cd thirdparty
npm run dev
```

open `index.html` in chrome, with dev tools. upon clicking button will
get the issue with resolveComponent()

![Error Screenshot](./error-screenshot.png)

### Notes

Nova's structure is mocked in this particular case.  The one substantial change
is that what is normally liftOff is wrapped in a window event so that the vite
based `type="module"` is loaded before liftOff would be called (this change would
have to happen in Nova).

#### Digging Deeper

I've searched all of discord (Vue Land, #Vite) and don't see an immediate solution to something a few others have brought up. Specifically the `resolveComponent` can only be used in `render()` and `setup()`, when trying to use/consume a global component that was registered to a primary/main/base vue instance from a separately bundled library (even with globals declared) exposed via vite / hot modules.

This is only an issue when using HMR (`vite build` and `vite build --watch` work).

I've distilled the problem down into a repository:

https://github.com/ralphschindler/demo-nova-vite-issue

Ultimately, I think it is that the Hot Modules are using their own vue, as evident of this in the compiled hot file served from vite: 

```
import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, ... } from "/node_modules/.vite/deps/vue.js?v=5ac55cb0"
```

Which means the `_sfc_render` function (later in that compiled file) is using a vite specific bundle's `resolveComponent` (not the primary/main/base one) and thus `currentRenderingInstance` and `currentInstance` are null inside this one, and that is why it cannot resolve the primary/main/base shared global component.

Is there a solution to this scenario?

This is all to say that `vite build --watch` works because I believe it uses rollup which is resolving the shared global vues as per the configuration.
