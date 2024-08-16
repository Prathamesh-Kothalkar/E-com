import { useMemo, useState } from "react"
import {data} from "../data"
import { Button, TextField } from "@mui/material";
import { Delete } from "@mui/icons-material";
export default function Cart(){
    var count=0;
    const totalSum=useMemo(()=>{
        return data.reduce((acc, item) => acc + item.price, 0);

    },data)
    return(
        <>
           {
            data.map((e)=>{
               return <>
                <CartItem 
                key={count++}
                img_src={e.img_url}
                name={e.name}
                desc={e.desc}
                price={e.price}
                count={count}
                />
               </>
            })
           }
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">
      Price Details ({count} {count === 1 ? "item" : "items"})
    </h1>
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-700">Subtotal</span>
      <span className="text-gray-900 font-semibold">₹{totalSum}.00</span>
    </div>
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-700">Discount</span>
      <span className="text-red-600 font-semibold">-₹00</span>
    </div>
    <hr className="border-t-2 border-gray-200 my-4" />
    <div className="flex justify-between items-center">
      <span className="text-xl text-gray-900 font-bold">You Pay</span>
      <span className="text-xl text-green-600 font-bold">₹{totalSum}.00</span>
    </div>
  </div>
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <div className="mb-4">
      <div className="text-xl font-semibold italic text-gray-800">
        Have a Promo Code?
      </div>
      <div className="flex mt-3">
        <TextField 
          size="small" 
          label="Promo code" 
          variant="outlined" 
          className="flex-grow"
        />
        <Button 
          variant="contained" 
          color="success" 
          className="ml-3"
        >
          Submit
        </Button>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div>
        <span className="text-gray-700">Cart Value</span>
        <div className="font-bold text-xl text-gray-900">
          ₹{totalSum}.00
        </div>
      </div>
      <Button 
        variant="contained" 
        color="error"
        className="text-white"
      >
        Checkout
      </Button>
    </div>
  </div>
</div>

        </>
    )
}

function CartItem({img_src,name,desc,price,count}){
    return (
        <>
            <div className="flex p-4 m-4 bg-white rounded-lg shadow-lg justify-around">
            <img
                src={img_src}
                alt="product-image"
                className="rounded-lg object-cover"
                style={{ width: "150px", height: "150px" }}
            />
            <div className="ml-6 flex flex-col justify-between">
                <div>
                    <div className="text-lg font-semibold text-slate-800">
                        {name}
                    </div>
                    <div className="text-xl font-bold text-gray-900 mt-2">
                        ₹{price}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                        {desc}
                    </div>
                    <div className="text-md text-gray-700">Quantity: {count}</div>
                </div>
                    
                <div className="flex items-center mt-4">
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<Delete />}
                        className="ml-auto"
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}