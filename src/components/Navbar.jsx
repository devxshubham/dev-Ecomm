import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { kartAtom } from "../store/atoms/kartAtom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export const Navbar = ()=>{
    const navigate = useNavigate();

    const kart = useRecoilValue(kartAtom)
    

    return <div className="flex z-10 bg-white p-5 sticky top-0 items-center justify-between flex-grow border-b-[2px] gap-1">
        <div className="flex justify-between max-w-[50%] gap-5 flex-grow">
            <div className="text-2xl font-bold text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-600" onClick={()=>{
                navigate('/home')
            }}>
                DevStore
            </div>
            <div className="flex items-center flex-end gap-7 ">
                <button className="buttonUnderline px-2 py-1 hover:bg-[#e6e6e6] text-[20px] font-medium" onClick={()=>{
                    navigate('/')
                }}>Home</button>
                <button className=" buttonUnderline px-2 py-1 hover:bg-[#e6e6e6] text-[20px] font-medium">contact</button>
                <button className="buttonUnderline px-2 py-1 hover:bg-[#e6e6e6] text-[20px] font-medium">About</button>
                <button className="buttonUnderline px-2 py-1 hover:bg-[#e6e6e6] text-[20px] font-medium whitespace-nowrap" onClick={()=>{
                    navigate('/signup')
                }}>Sign Up</button>
            </div>
        </div>
        <div className="flex items-center cursor-pointer gap-4 md:gap-4">
            <div className="flex items-center gap-1 bg-[#F5F5F5] py-[7px] rounded px-[15px]">
                <input className="bg-[#F5F5F5] hidden md:block" placeholder="What are you looink for ?" type="text" />
                <BsSearch size={20} />
            </div>
            <div>
                <AiOutlineHeart size={30} />
            </div>
            <div className="relative cursor-pointer p-2" onClick={()=>{
                navigate('/product/kart')
            }}>
                {(kart>0) ? <div className="flex justify-center  items-center absolute top-0 right-0 bg-[#DB4444] rounded-full size-5 text-white">{kart}</div> : <></>}
                <AiOutlineShoppingCart size={30} />

            </div>
            <div className="cursor-pointer bg-[#DB4444] text-white p-2 rounded-full">
                <AiOutlineUser size={25} />
            </div>
        </div>
    </div>
}