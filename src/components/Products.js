import UspSection from './UspSection'
import Product from './Product'
import productsData from '../data/productImage'

const Products = () => {
    return (
        <div className="w-full h-fit bg-lightGray py-16 px-4 md:px-24">
            {/* USP Section */}
            <UspSection />

            {/* Divider */}
            <hr className="border-gray-300 my-16" />

            {/* Products Section */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-sm mb-4 font-saira font-medium text-blue uppercase tracking-wide">
                    Our product offerings
                </h1>
                <h2 className="text-2xl md:text-[43px] font-saira font-medium text-black leading-snug max-w-4xl">
                    Complete your space with our industry-leading solutions
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mt-12">
                    {productsData.map((item, idx) => (
                        <Product key={idx} path={item.path} title={item.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
