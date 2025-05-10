import React, { useContext, useEffect, useState } from 'react'
import { getProductsById } from '../../services/api'
import { useParams } from 'react-router-dom'
import ProductDetailSkeleton from './ProductDetailSkeleton'
import { Rate } from 'antd';
import { WISHLIST } from '../../context/WishContext';
import { BASKET } from '../../context/BasketContext';


function ProductsDetail() {
    const [data, setData] = useState()
    const { id } = useParams()
    const { addWishList } = useContext(WISHLIST)
    const { addToBasket } = useContext(BASKET)
    const [count, setCount] = useState(1)

    useEffect(() => {
        getProductsById(id).then(res => setData(res))

    }, [id])

    if (!data) return <> <ProductDetailSkeleton /> </>
    const { name, img, price, categoryName } = data;


    function incDec(x) {
        if (count + x) {

            setCount(count + x)
        }
    }

    return (
        <>
            <div className='bg-[#f2f2f2]'>
                <div className='container mx-auto px-4'>
                    <div className="flex flex-col lg:flex-row p-4 lg:p-6 gap-6">
                        <div className="sm:w-full lg:w-1/4">
                            <img src={data.img[0]} alt="" className="rounded-xl w-full object-cover max-h-[400px]" />
                            <div className="flex space-x-2 mt-4">
                                <img src={data.img[0]} className="w-20 h-20 object-cover rounded" alt="photo" />
                                <img src={data.img[0]} className="w-20 h-20 object-cover rounded" />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-xl font-bold mb-2">{data.name}</h2>

                            <div className="flex items-center mb-2 space-x-1">
                                <Rate allowHalf defaultValue={2.5} />
                                <span className="text-sm text-gray-600">0 şərh | Şərh yaz</span>
                            </div>

                            <div className="text-sm text-gray-600 mb-1">
                                Model: <span className="font-semibold">101123</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-4">
                                Mövcudluq: <span className="text-green-600 font-semibold">✔</span>
                            </div>

                            <div className="text-3xl text-orange-500 font-bold mb-4">{data.price}</div>

                            <div className="flex items-center mb-4">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        incDec(-1)
                                    }}
                                    className="w-8 h-8 bg-gray-200 rounded-full text-xl">-</button>
                                <span className="px-4">{count}</span>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        incDec(1)
                                    }}
                                    className="w-8 h-8 bg-gray-200 rounded-full text-xl">+</button>
                                <span className="ml-2">Ədəd</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToBasket({ id, img, name, price, categoryName, count })
                                    }}
                                    className="bg-orange-500 text-white px-6 py-2 rounded-full">
                                    Səbətə At
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        addWishList({ id, img, name, price, categoryName })
                                    }}
                                    className="text-orange-500 text-2xl">
                                    ♡
                                </button>
                                <button className="text-orange-500 text-2xl">↻</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 lg:p-6 mt-8 rounded-xl">
                        <h2 className="text-xl font-bold text-orange-600 mb-2">Şərhlər (0)</h2>
                        <p className="text-sm mb-4">Bu məhsul üçün şərh yazılmayıb.</p>

                        <h3 className="text-lg font-semibold mb-2">Şərh yaz</h3>

                        <input type="text" placeholder="Adınız" className="w-full p-3 rounded-full mb-4 bg-gray-50" />
                        <textarea placeholder="Şərh" className="w-full p-4 rounded-xl h-40 resize-y mb-4 bg-gray-50"></textarea>

                        <p className="text-sm text-red-500 mb-2">Qeyd: <span className="text-black">HTML etiketləri işləmir!</span></p>

                        <div className="mb-4">
                            <Rate />
                        </div>

                        <input type="text" placeholder="Aşağıdakı kodu daxil edin **" className="w-full p-3 rounded-full mb-4" />

                        <img src="data:image/png;base64,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" alt="captcha" className="mb-4 max-w-[200px]" />

                        <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Davam Et</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ProductsDetail