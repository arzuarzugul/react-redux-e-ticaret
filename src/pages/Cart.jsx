import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartComp from '../companent/cart/CartComp';
import { getCartTotal } from '../redux/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  if (!carts) return <p>Loading...</p>;

  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">
            TOPLAM TUTAR :
            <span className="font-bold text-3xl ml-2">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-xl font-bold text-gray-500">Kartınız Boş...</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
