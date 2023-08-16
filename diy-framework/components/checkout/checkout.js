import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

const Checkout = ({store}) => {
    const [productId, setProductId] = useState(0)
    useEffect(() => {
        store.productId.subscribe({
            next: (val) => {
                setProductId(val)
            }
        })
    }, [])
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