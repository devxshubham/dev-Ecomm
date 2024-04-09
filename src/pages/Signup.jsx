import { Image } from "../components/Image"
import { InputBox } from "../components/Inputbox"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Signup = () => {
    

    return <>
        <Navbar></Navbar>
        <div className="flex gap-[100px] my-12 mx-auto max-w-[1000px] justify-center items-center">
            <div className="h-[600px]">
                <Image src="https://ik.imagekit.io/vewzaaue0/DevStore/login.png?updatedAt=1711620613140"></Image>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="text-[36px] font-medium">Create An Account</h1> 
                    <p>Enter your details below</p> 
                </div>
                <div className="flex flex-col gap-3 items-start">
                    <InputBox type="text" placeholder="Name"/>
                    <InputBox type="text" placeholder="Email or Phone Number"/>
                    <InputBox type="password" placeholder="Password"/>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <button className="bg-[#DB4444] text-white w-full py-3 rounded">Create Acount</button>
                    <p>already have an account ? <a className="underline" href="/login">login</a></p>
                </div>
            </div>
        </div>

        <Footer/>
    </>
}