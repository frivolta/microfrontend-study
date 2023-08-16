global.diy = {
    registerComponent(name, info){
        console.log('registerComponent', info)
        info.create(document.getElementById('checkoutSlot'), {productId: 123})
    }
}