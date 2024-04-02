import { Navbar } from "../components/Navbar";

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"


import { SingleProduct } from "../components/SingleProduct";
import { Footer } from "../components/Footer"

export const CategoryProducts = () => {

    const [products, setProducts] = useState([]);

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
        <main className="max-w-[1000px] mx-auto my-12 ">
            <div className="flex my-4 text-[25px]">Showing Results for : <div className=" mx-2  font-bold">{category}</div></div>
            <div className="mt-[50px] grid grid-cols-3 gap-10 ">
                {products.map( prod => {
                    return <SingleProduct prod={prod}/>
                })}
            </div>
        </main>
        <Footer></Footer>
    </div>
    
    
}