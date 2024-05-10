import { ProductDetail } from "../components/ProductDetail"
import { ProdImage } from "../components/prodImage"
import { RelatedProduct } from "../components/RelatedProducts";

import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

import { useEffect, useState } from "react"
import axios from 'axios'
import { useRef } from 'react'
import { useParams } from "react-router-dom"

export const ProductPage = () => {

    const contactRef = useRef()

    const param = useParams();

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

    if(prod) return <>
        <Navbar contactRef={contactRef}></Navbar>
        <section className="flex flex-col gap-10 mx-auto w-[90vw] max-w-[1050px] my-12">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-10  my-[50px]">
                <ProdImage prod={prod}></ProdImage>
                <ProductDetail prod={prod}></ProductDetail>
                
            </div>
            <RelatedProduct category={prod.category}></RelatedProduct>
        </section>

        <Footer contactRef={contactRef}></Footer>
    </>
}