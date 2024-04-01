import { Navbar } from "../components/Navbar";

import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

import { Image } from "../components/Image";
import { SingleProduct } from "../components/SingleProduct";

export const CategoryProducts = () => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();
    const param = useParams();
    const category = param.name

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${category}`)
        .then( (response) => {
            setProducts(response.data.products)
        })
    },[])
    
    return <div>
        <Navbar></Navbar>
        <main className="mt-[50px] grid grid-cols-3 gap-10 max-w-[1000px] mx-auto">
            {products.map( prod => {
                return <SingleProduct prod={prod}/>
            })}
        </main>
    </div>
    
    
}