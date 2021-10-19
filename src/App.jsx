import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import ProductsProvider from './contexts/ProductsProvider.jsx';
import CartProvider from './contexts/CartProvider.jsx';

import Header from './components/Header';
import List from './components/List';
import Cart from './components/Cart';

import './App.css';

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/' exact>
              <List></List>
            </Route>
            <Route path='/potd' exact>
              <List></List>
            </Route>
            <Route path='/cart' exact>
              <Cart></Cart>
            </Route>
            <Redirect to='/'></Redirect>
          </Switch>
        </BrowserRouter>

      </CartProvider>
    </ProductsProvider>
  );
}
