import React from 'react'
import ReactDOM from 'react-dom'

const Checkout = ({productId}) => {
    return (
        <div>
            <h1>Checkout</h1>
            <p>Product ID: {productId}</p>
            <div>
                <button>Change image</button>
            </div>
            <div>
                <button>Add to cart</button>
            </div>
        </div>

    )
}

global.diy.registerComponent('checkout', {
    create(node, props){
        ReactDOM.render(<Checkout {...props} />, node)
    }
})

export default Checkout