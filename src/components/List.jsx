import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import {useProducts} from '../contexts/ProductsProvider.jsx'
import Sidebar from './Sidebar';
import Card from "./Card.jsx";


export default function List() {
  const [allProducts, setAllProducts, filteredProducts, setFilteredProducts] = useProducts();
  const [potd, setPotd] = useState();
  const location = useLocation().pathname;

  useEffect(() => {
    (async()=>{
      let response = await axios.get('https://fakestoreapi.com/products');
      response = response.data.map(item => {return {...item, count: 0}})
      setAllProducts(response)
      setPotd(response[Math.floor(Math.random() * response.length)]);
          })();
  }, [setAllProducts])
  
  return (
    <main>
      <Sidebar></Sidebar>
      <div className="products">
        {filteredProducts && location === "/" && filteredProducts.map(product => <Card key={product.id} product={product}/> )}
        {potd && location === "/potd" && (<Card key={potd.id} product={potd}/>)}
      </div>
    </main>
  )
}
