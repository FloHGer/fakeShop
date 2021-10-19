import { Link } from 'react-router-dom'

import {useCart} from '../contexts/CartProvider'

export default function Nav() {
  const [cart] = useCart()
  return (
    <nav>
      <ul>
        <li><Link to='/'>All Products</Link></li>
        <li><Link to='/potd'>Product of the Day</Link></li>
        <li><Link to='/cart'><img src='https://cdna2.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/resize=fit:max,width:1200//auto_image/compress/https://s3.amazonaws.com/zcom-media/sites/a0i0L00000TM7fPQAT/media/catalog/product/1/0/103-172-red-45-degree-view.jpg' alt="cart" /></Link></li>
      </ul>
      {cart.length > 0 && <p>{cart.reduce((prev, curr) => prev + curr.count, 0)}</p>}
      {cart.length > 0 && <p>{cart.reduce((prev, curr) => prev + curr.count * curr.price, 0).toFixed(2)}</p>}
    </nav>
  )
}
