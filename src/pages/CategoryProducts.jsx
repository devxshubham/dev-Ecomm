import { Navbar } from "../components/Navbar";

import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

import { Image } from "../components/Image";

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
                return <div className="flex cursor-pointer hover:scale-110 hover:rounded-lg transition-transform ease-in-out duration-200 delay-0 mb-[10px] flex-col w-[300px] max-h-[320px]" key={prod.id}
                    onClick={()=>{
                        navigate(`/product/${prod.id}`)
                    }}>
                    <div className="bg-[#F5F5F5] max-w-[90%] h-[90%] rounded p-5 ">
                        <Image  src={prod.thumbnail} alt="" />
                    </div>
                    <div>
                        <div className="font-medium">{prod.brand} {prod.title}</div>
                        <div>
                            <div className="text-[#DB4444]">&#8377; {prod.price*100}</div>
                        </div>
                    </div>
                </div>
            })}
        </main>
    </div>
    
    
}