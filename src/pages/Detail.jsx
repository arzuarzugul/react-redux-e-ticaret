import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../redux/ProductSlice';
import DetailComp from '../companent/detail/DetailComp';
import Loading from '../companent/Loading';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  
  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
