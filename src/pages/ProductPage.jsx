import { ProductDetail } from "../components/ProductDetail"
import { ProdImage } from "../components/prodImage"

import { productId } from "../store/atoms/productId"

import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import axios from 'axios'
import { useParams } from "react-router-dom"

export const ProductPage = () => {

    const param = useParams();
    
    // const [id,setId] = useRecoilState(productId)
    const [prod, setProd] = useState("")

    useEffect( ()=> {
        axios.get(`https://dummyjson.com/products/${param.id}`)
        .then( (res) => {
            setProd(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    },[param.id])

    if(prod) return <div className="flex justify-between gap-10 mx-[30px] my-[50px]">
        <ProdImage prod={prod}></ProdImage>
        <ProductDetail prod={prod}></ProductDetail>
    </div>
}