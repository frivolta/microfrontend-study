import {BehaviorSubject} from 'rxjs'
global.diy = {
    store: {productId: new BehaviorSubject(345),},
    components: {
    },
    loadComponent(name){
        console.log('loading component', name, document)
        document.querySelectorAll(`diy-component[name=${name}]`).forEach(el => {
            const props = {
                store: this.store
            }
            Array.from(el.attributes).forEach(attr => {
                console.log("attirbute", attr)
                props[attr.name] = attr.value
            })
            this.components[name].create(el, props)
        })
    },
    registerComponent(name, info){
        console.log('registering component', name, info, this.components)
        this.components[name] = info
        this.loadComponent(name)
    }
}