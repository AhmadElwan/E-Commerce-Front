import React, { useEffect, useState } from 'react'
import { useShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { useParams } from 'react-router-dom'

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useShopContext();
    const {productId} = useParams();
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            productsCopy = productsCopy.filter((item) => item._id !== productId);
            setRelated(productsCopy.slice(0,5));
        }
    }, [products, productId])


  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                related.map((product, index) => (
                    <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts