
import { useEffect, useState } from "react";
import { Image } from "./Image"

let i = 1;
export const ProdImage = ( {prod} ) => {

    const [mainImg, setMainImg] = useState("")

    useEffect( ()=>{
        setMainImg(prod.images[0])
    },[prod])

    return <div className="flex gap-5 m-5 p-5">
        <div className="flex flex-col justify-between">
            {prod.images.map( img => {
                i++;
            return <div key={i} className="bg-[#F5F5F5] hover:cursor-pointer max-w-[170px] max-h-[138px]" onClick={()=>{
                setMainImg(img)
            }}>
                <Image src = {img}></Image>
            </div>
        })}
        </div>
        <div className=" w-[500px] h-[600px]">
            <Image src = {mainImg}></Image>
        </div>
    </div>
}