import React from "react";
import { removeFromCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({cart}) => {
    const dispatch=useDispatch()
  return (
    <div className="my-10 mt-5 flex items-center justify-between ">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
      <div className="text-xl ">
        {cart?.title}
        <div>{cart?.description}</div>
      </div></div>
      <div className="font-bold text-2xl ">
        {cart?.price}TL{cart?.quantitiy}
      </div>
      <div onClick={()=>dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-whitw w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center">
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
