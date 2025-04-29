


import React, { useEffect, useState } from 'react' // useState'i ekledim
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct, getProducts } from '../../redux/ProductSlice'
import Loading from '../Loading'
import Products from './Products'
import ReactPaginate from 'react-paginate';

const Product = ({category, sort}) => {
  const dispatch = useDispatch();
  const { product, productsStatus } = useSelector(state => state.products);

  const [itemOffset, setItemOffset] = useState(0); // useState tanımlandı

  const itemsPerPage = 6; // Tüm yerlerde tutarlı olsun diye itemsPerPage'i küçük harfe çektim
  const endOffset = itemOffset + itemsPerPage;
  
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  
  // product array'ini kullanarak currentItems'ı alıyoruz
  const currentItems = product.slice(itemOffset, endOffset);
  
  const pageCount = Math.ceil(product.length / itemsPerPage);

  // Sayfa değiştirildiğinde çalışacak fonksiyon
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if(category){
      dispatch(getCategoryProduct(category))
    }else
    {
      
    }
    dispatch(getProducts());
  }, [dispatch,category]);

  console.log(product);

  return (
    <div>
      {
        productsStatus === "LOADING" ? <Loading /> :
        <>
          <div className='flex flex-wrap'>
            {
              currentItems?.sort((a,b)=>sort==="inc"? a.price-b.price : sort==="dec" ? b.price-a.price : null).map((product, i) => (
                <Products key={i} product={product} />
              ))
            }
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </>
      }
    </div>
  );
}

export default Product;
