import React from 'react';
import { useParams } from 'react-router-dom';
import Finalize from "./components/Finalize";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RequestSection from "./components/RequestSection";
import UspSection from "./components/UspSection";
import ProductDetail from "./components/ProductDetail";
import productFinalizeContent from "./data/productFinalizeContent";
import productsData from './data/productsData';

const ProductPage = () => {
    const { productId } = useParams();
    const product = productsData[productId];

    if (!product) {
        return <p className='text-center py-20'>Product not found!</p>;
    }

    return (
        <>
            <ProductDetail product={product} />
            <Finalize
                title={productFinalizeContent.title}
                description={productFinalizeContent.description}
                buttons={productFinalizeContent.buttons}
            />
            <RequestSection />
            <div className='w-full h-fit bg-lightGray py-24 px-2 md:px-24'>
                <UspSection />
            </div>
        </>
    );
};

export default ProductPage;
