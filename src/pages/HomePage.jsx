import '../App.css'
import { Navbar } from '../components/Navbar'

import { BrowseCategory } from '../components/BrowseCategory'

export const HomePage = () => {


    return <div>
            <Navbar></Navbar>
            <div className='flex flex-col gap-[100px] max-w-[1300px] mx-auto'>
                <div className="myRadient">
                    <div className='absolute hover:rotate-12 hover:scale-105 transition-transform duration-500 ease-in-out delay-0 top-[1px] right-[7%] max-h-[500px] max-w-[500px]'>
                        <img className='object-cover ' src="https://ik.imagekit.io/vewzaaue0/DevStore/headphone.webp?updatedAt=1711307562148" alt="" />
                    </div>
                    <div className=' flex flex-col gap-5 py-10 px-8'>
                        <div className='text-[#00FF66] text-[20px]'>Categories</div>
                        <div className='text-white text-[48px] font-semibold'>Enhance your <br />Music Experience</div>
                        <div className='flex gap-5'>
                            <div className='text-center  h-[65px] w-[65px] bg-white rounded-full'>
                                <h1 className='pt-1 font-bold'>05</h1>
                                <p>Days</p>
                            </div>
                            <div className='text-center h-[65px] w-[65px] bg-white rounded-full'>
                                <h1 className='pt-1 font-bold'>23</h1>
                                <p>Hours</p>
                            </div>
                            <div className='text-center h-[65px] w-[65px] bg-white rounded-full'>
                                <h1 className='pt-1 font-bold'>59</h1>
                                <p>Minutes</p>
                            </div>
                            <div className='text-center h-[65px] w-[65px] bg-white rounded-full'>
                                <h1 className='pt-1 font-bold'>35</h1>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <button className='bg-[#00FF66] rounded h-[50px] w-[170px] text-white'>Buy Now</button>
                        
                    </div>
                </div>

            <BrowseCategory></BrowseCategory>
            
        </div>
    </div>
}