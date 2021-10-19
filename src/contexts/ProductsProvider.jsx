import { useState, createContext, useContext, useEffect} from "react";

const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);


export default function ProductsProvider({children}){
  const [allProducts, setAllProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts])

  return(
    <ProductsContext.Provider value={[allProducts, setAllProducts, filteredProducts, setFilteredProducts]}>
        {children}
    </ProductsContext.Provider>
  );
}
