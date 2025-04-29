import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const maxQuantity = productDetail?.rating?.count || 1;

  const increment = () => {
    if (quantity < maxQuantity) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
 
  const addBasket = () => {
   
    dispatch(addToCart({
      id: productDetail.id,
      title: productDetail.title,
      image: productDetail.image,
      price: productDetail.price,
      quantity,
    }));
  };
  

  return (
    <div className='flex flex-col lg:flex-row gap-10 my-10 p-4'>
      <img
        className='w-full lg:w-[700px] h-[500px] object-contain'
        src={productDetail.image}
        alt={productDetail.title}
      />
      
      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='text-3xl font-bold mb-2'>{productDetail.title}</h1>
          <p className='text-gray-700 mb-4'>{productDetail.description}</p>
          <p className='text-red-600 font-semibold'>Rating: {productDetail.rating?.rate}</p>
          <p className='text-red-600 font-semibold'>Stok: {productDetail.rating?.count}</p>
          <p className='text-4xl font-bold my-4'>{productDetail.price} <span className='text-base'>TL</span></p>
        </div>

        <div className='flex items-center gap-4'>
          <button onClick={decrement} className='text-3xl px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'>-</button>
          <input
            type='text'
            value={quantity}
            readOnly
            className='w-12 text-center text-2xl border rounded'
          />
          <button onClick={increment} className='text-3xl px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'>+</button>
        </div>

        <button
          onClick={addBasket}
          className='mt-6 w-[200px] bg-blue-500 text-white py-3 rounded text-xl hover:bg-blue-600'
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};


export default DetailComp;
