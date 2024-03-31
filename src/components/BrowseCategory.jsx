import { useNavigate } from "react-router-dom"

import { BsLaptop, BsHandbag, BsSmartwatch   } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { TbPerfume } from "react-icons/tb";
import { GrRestroomWomen } from "react-icons/gr";
import { AiOutlineBulb } from "react-icons/ai";
import { PiWatch } from "react-icons/pi";
import { LiaTshirtSolid } from "react-icons/lia";
import { GiBallerinaShoes } from "react-icons/gi";
import { GiSunglasses } from "react-icons/gi";
import { PiMotorcycleFill } from "react-icons/pi";


const categoryArray = [
    {
        name : "smartphones",
        icon : <SlScreenSmartphone size={35}/>
    },
    {
        name  : "laptops",
        icon : <BsLaptop size={35}/>
    },
    {
        name : "mens-watches",
        icon :   <BsSmartwatch  size={35}/>
    },
    {
        name : "TbPerfume",
        icon :   <TbPerfume size={35}/>
    },
    {
        name : "womens-bags",
        icon : <BsHandbag  size={35}/>
    },
    {
        name : "womens-dresses",
        icon : <GrRestroomWomen size={35}/>
    },
    {
        name : "lighting",
        icon : <AiOutlineBulb size={35}/>
    },
    {
        name : "womens-watches",
        icon :   <PiWatch  size={35}/>
    },
    {
        name : "mens-shirts",
        icon : <LiaTshirtSolid size={35}/>
    },
    {
        name : "womens-shoes",
        icon : <GiBallerinaShoes size={35}/>
    },
    {
        name : "sunglasses",
        icon : <GiSunglasses size={35}/>
    },
    {
        name : "motorcycle",
        icon : <PiMotorcycleFill size={35}/>
    },
    
]

export const BrowseCategory = () => {
    const navigate = useNavigate()
    
    return <div className="flex flex-col gap-5">
        <div>
            <div>
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div className=" text-[#DB4444] font-semibold">Categories</div>
            </div>
            <div className="text-[36px] font-semibold">
                Browse By Category
            </div>
        </div>

        <div className="categories">
            <div className=" marquee  ">
                {categoryArray.map( cat => {
                    return <div className="flex flex-col cursor-pointer items-center hover:scale-110 transition-transform ease-in-out duration-200 delay-0  justify-center min-w-[170px] h-[140px] border-[3px] rounded hover:bg-[#DB4444] hover:text-white hover:border-0 hover:rounded-md" key={cat.name}
                        onClick={()=>{
                            navigate(`/category/${cat.name}`)
                        }}>
                        <div className="flex items-center justify-center h-[56px] w-[56px]">{cat.icon}</div>
                        <div className="whitespace-nowrap">{cat.name}</div>
                    </div>
                })}
            </div>
            <div className=" marquee ">
                {categoryArray.map( cat => {
                    return <div className="flex flex-col cursor-pointer items-center hover:scale-110 transition-transform ease-in-out duration-200 delay-0  justify-center min-w-[170px] h-[140px] border-[3px] rounded hover:bg-[#DB4444] hover:text-white hover:border-0 hover:rounded-md" key={cat.name}
                        onClick={()=>{
                            navigate(`/category/${cat.name}`)
                        }}>
                        <div className="flex items-center justify-center h-[56px] w-[56px]">{cat.icon}</div>
                        <div className="whitespace-nowrap">{cat.name}</div>
                    </div>
                })}
            </div>
        </div>
    </div>
}