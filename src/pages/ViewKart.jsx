import { useRecoilValue } from "recoil"
import { Navbar } from "../components/Navbar"
import { kartIdAtom } from "../store/atoms/KartIdAtom"
import { KartItem } from "../components/KartItem"
import { totalPriceAtom } from "../store/atoms/totalPriceAtom"

export const ViewKart = () => {
    const kartId = useRecoilValue(kartIdAtom)
    const totalPrice = useRecoilValue(totalPriceAtom)

    return <>
        <Navbar></Navbar>
        <div className="flex flex-col gap-10 my-[50px] max-w-[800px] mx-auto">
            <table className="table w-full ">
                <thead>
                    <tr className="shadow-md">
                        <th className="px-8 py-[15px] text-left">Product</th>
                        <th className=" py-[15px] text-left">Price</th>
                        <th className=" py-[15px] text-left">Quantity</th>
                        <th className=" py-[15px] text-left">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {kartId.map( id => {
                        console.log(id)
                        return <KartItem id={id}/>
                    })}
                </tbody>
            </table>
           <div className="flex justify-between gap-10">
                <div>
                    <div className="flex gap-5 ">
                        <input className="px-3 py-3 border border-2px border-black rounded" type="text" placeholder="Coupon code"/>
                        <button className="px-5 py-3 text-white rounded bg-[#DB4444]">Apply Coupon</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[40%] px-4 py-4 border rounded border-black">
                    <div className="text-[20px] font-medium">Cart Total</div>
                    <div className="">
                        <div className="flex py-2 border-b-2 justify-between">
                            <div>SubTotal</div>
                            <div>{totalPrice}</div>
                        </div>
                        <div className="flex py-2 border-b-2 justify-between">
                            <div>Shipping</div>
                            <div>Free</div>
                        </div>
                        <div className="flex py-2  justify-between">
                            <div>Total</div>
                            <div>{totalPrice}</div>
                        </div>
                    </div>
                    <button className="px-4 text-white rounded py-2 bg-[#DB4444]">Proceed To Checkout</button>
                </div>
           </div>
        </div>
    </>
}