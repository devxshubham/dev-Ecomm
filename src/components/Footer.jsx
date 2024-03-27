

export const Footer = () => {


    return <div className="relative bottom-0 left-0 right-0 h-[400px] text-white bg-black">
        <div className="flex justify-around gap-8  px-[50px] py-[50px] mx-auto">
            <div className="flex flex-col gap-6">
                <div>
                    <div className="text-[24px] bold">DevStore</div>
                    <div>Subscribe</div>
                </div>
                <div>Get 10% of on your first order</div>
                <div className="flex items-center justify-between border rounded max-w-[220px]">
                    <input className="bg-transparent py-2" type="text" placeholder="Enter your email"/>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div>
                        <div className="text-[24px] bold">DevStore</div>
                        <div>Sector-17, Chandigarh</div>
                    </div>
                    <div>devstore@gmail.com</div>
                    <div>+88015-88888-9999</div>
                </div>
            <div className="flex flex-col gap-4">
                <div className="text-[24px] bold">Acount</div>
                <div>My Acount</div>
                <div>Login / Register</div>
                <div>Cart</div>
                <div>Wishlist</div>
                <div>shop</div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-[24px] bold">Quick Links</div>
                <div>Privacy Policy</div>
                <div>Terms Of Use</div>
                <div>FAQ</div>
                <div>Contact</div>
            </div>
            
            <div></div>
        </div>
    </div>
}