import React from 'react'
import { useCart } from '../contexts/CartProvider.jsx'

export default function Card({product, isCart}) {
  const [cart, dispatch, ACTION] = useCart();

  return (
    <div className='card'>
      <img src={`${product.image}`} alt={product.title} />
      <h3 >{product.title.slice(0,15)}</h3>
      <h4>{product.price.toFixed(2)}€</h4>
      <p>{product.description.slice(0,50)}</p>
      {!isCart && <button className="cardButtons" onClick={() => 
        dispatch({'type': ACTION.add, 'payload': product})}>ADD to Cart</button>}
      {isCart && 
        <>
          <p>{product.count}</p>
          <div className="cardButtons">
            <button onClick={() =>
              dispatch({'type': ACTION.decrease, 'payload': product})}
            > - </button>

            <button onClick={() =>
              dispatch({'type': ACTION.remove, 'payload': product})}
            >REMOVE</button>

            <button onClick={() =>
              dispatch({'type': ACTION.increase, 'payload': product})}
            > + </button>
          </div>
        </>}
    </div>
  )
}
