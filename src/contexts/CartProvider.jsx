import { createContext, useContext, useReducer } from "react"

const CartContext = createContext();
export function useCart(){
  return useContext(CartContext)
}

const ACTION = {
  add: 'add',
  remove: 'remove',
  empty: 'empty',
  increase: 'increase',
  decrease: 'decrease',
}

const reducer = (cart, action) => {
  switch(action.type){
    case ACTION.add:
    case ACTION.increase: {
      const filtered = cart.filter(item => item.title === action.payload.title)
      if(!filtered.length) cart = [...cart, action.payload]
      return cart.map(item => item.title === action.payload.title ? {...item, count: item.count + 1} : item)
    }
    case ACTION.decrease: return cart.map(item => item.title === action.payload.title ? {...item, count: item.count > 1 ? item.count - 1 : item.count} : item)
    case ACTION.remove: return cart.filter(product => product.id !== action.payload.id)
    case ACTION.empty: return []
    default: return cart;
  }
}

export default function CartProvider({children}) {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={[cart, dispatch, ACTION]}>
      {children}
    </CartContext.Provider>
  )
}
