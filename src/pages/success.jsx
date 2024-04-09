import Confetti from 'react-confetti'
import { useNavigate } from "react-router-dom"



export const Success = () => {
    const navigate = useNavigate();

    return <div className='flex justify-center items-center text-white bg-gradient-to-b from-red-700  to-orange-500 h-screen w-screen'>
        <Confetti
        width={3000}
        height={1000}
        />
        <div className='flex flex-col items-center gap-3'>
            <div className='text-[40px] font-bold'>Order Placed</div>
            <div className='text-[25px] font-semibold'>Thankyou for ordering from DevStore</div>
            <button className='px-3 py-1 bg-white border-black text-black border-[2px] text-[20px] rounded'
                onClick={()=>{
                    navigate('/')
                }}
            >Continue Shopping</button>

        </div>
    </div>
}