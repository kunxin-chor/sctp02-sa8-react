
import {useState, createContext, useEffect} from 'react';
import axios from 'axios'

// create a product context
export const ProductContext = createContext();

export function ProductContextData(props) {
    // when a state variable changes, the component will redraw itself
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get("https://3000-kunxinchor-sctp02modern-l4xxrmv8d2j.ws-us110.gitpod.io/api/products")
            setProducts(response.data.products);
        }
        fetchData();
    }, []);

    const dataOperations = {
        getProducts: () => {
            return products;
        },
        addProduct: async(productName, description, price, stock) => {
            const response = await axios.post("https://3000-kunxinchor-sctp02modern-l4xxrmv8d2j.ws-us110.gitpod.io/api/products", {
                product_name: productName,
                description: description,
                price: price,
                stock_quantity: stock
            });
            const newId = response.data.results[0].insertId
            const newProduct = {
                product_id: newId,
                product_name: productName,
                description: description,
                price: price,
                stock: stock
            } 
            setProducts([...products, newProduct]);
        }
    }

    return (
        <ProductContext.Provider value={dataOperations}>
            {props.children}
        </ProductContext.Provider>
    )
}

