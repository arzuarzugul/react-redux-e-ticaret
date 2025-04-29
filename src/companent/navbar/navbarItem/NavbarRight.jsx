import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

export const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const {itemCount} = useSelector(state => state.carts); // 
console.log(itemCount)
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none' type="text" placeholder='Arama Yapiniz' />
        <FaSearch size={25} />
      </div>
      <CiHeart size={28} />
      <div className='relative'>
        <div onClick={()=>navigate("cart")} className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>
        {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};
