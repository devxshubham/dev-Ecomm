import { atom, selector } from 'recoil'
import axios from 'axios'

export const singleProductAtom = atom({
    key : 'singleProductAtom',
    default : selector({
        key : 'singleProductSelector',
        get : async() => {
            const res = await axios.get("https://dummyjson.com/products/10");
            return res.data;
        }
    })
})