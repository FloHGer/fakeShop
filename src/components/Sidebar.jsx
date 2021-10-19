import { useProducts } from '../contexts/ProductsProvider';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sidebar() {
  const [allProducts, setAllProducts, filteredProducts, setFilteredProducts] = useProducts()
  const [categories, setCategories] = useState([]);


  const sortHandler = type => {
    const sortIt = [...allProducts]
    sortIt.sort((a, b) => {
      if(a[type] > b[type]) return 1;
      if(a[type] < b[type]) return -1;
      return 0;
    })
    setAllProducts(sortIt);
  }

  const filterHandler = category => {
    const filterIt = [...allProducts];
    const filtered = filterIt.filter(product => product.category === category)
    setFilteredProducts(filtered)
  }

  useEffect(() =>{
    (async()=>{
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    })()
  }, [])

  return (
    <aside>
      <label htmlFor='sort'>Sort by:</label>
      <select name='sort' id='sort' onChange={e => sortHandler(e.target.value)}>
        <option value=''>select</option>
        <option value='title'>Name</option>
        <option value='price'>Price</option>
        <option value='category'>Category</option>
      </select>

      <label htmlFor='category'>Filter Category:</label>
      <select name="category" id="category" onChange={e => filterHandler(e.target.value)}>
        <option value="">select category</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
      
      <label htmlFor='price'>Filter Price:</label>
      <select name="price" id="price">
        <option value="">select price</option>
        <option value="20"> 0 -   20€</option>
        <option value="100">21 -  100€</option>
        <option value="1000">101 - 1000€</option>
      </select>
    </aside>
  )
}
