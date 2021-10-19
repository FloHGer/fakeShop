import {useCart} from '../contexts/CartProvider'

import Card from '../components/Card.jsx'


export default function Cart() {
  const [cart, dispatch, ACTION] = useCart();
  return (
    <main>
      {cart.length === 0 && <h2>CART EMPTY</h2>}
        {cart.length > 0 && <button onClick={() => dispatch({'type': ACTION.empty})}>EMPTY CART</button>}
      <div className="cartList">
        {cart.map(product => {
          return <Card key={product.id} product={product} isCart='true'/>
        })}
      </div>
      {cart.length > 0 && <button onClick={() => dispatch({'type': ACTION.empty})}>EMPTY CART</button>}
    </main>
  )
}
