import React, { useContext } from 'react'
import { WISHLIST } from '../../context/WishContext'

function Wishlist() {
    const { wish, clearWishList, delWishList } = useContext(WISHLIST)

    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6 text-[12px] my-4">
            <div className="flex-1 my-10">
                <h1 className="text-2xl md:text-3xl font-semibold mb-6">Arzu siyahısı</h1>
                <button
                    onClick={clearWishList}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 my-4 rounded-full text-sm md:text-lg"
                >
                    Arzularivi sil
                </button>

                <div className="overflow-x-auto">
                    <table className="min-w-[600px] w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-3 px-2 text-left">Şəkil</th>
                                <th className="py-3 px-2 text-left">Məhsulun adı</th>
                                <th className="py-3 px-2 text-left">Anbar</th>
                                <th className="py-3 px-2 text-left">Qiyməti</th>
                                <th className="py-3 px-2 text-left">Hərəkət</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wish.map((product) => (
                                <tr key={product.id} className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-2">
                                        <img
                                            src={product.img?.[0] || '/placeholder.png'}
                                            alt={product.name}
                                            className="w-14 h-14 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="py-2 px-2 font-medium">{product.name}</td>
                                    <td className="py-2 px-2">{"product.stock"}</td>
                                    <td className="py-2 px-2 text-orange-500 font-semibold">{product.price}</td>
                                    <td className="py-2 px-2 flex gap-2">
                                        <button className="bg-orange-400 hover:bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
                                            🛒
                                        </button>
                                        <button
                                            onClick={() => delWishList(product.id)}
                                            className="bg-red-400 hover:bg-white hover:text-red-400 px-2 py-1 rounded-full text-sm"
                                        >
                                            ❌
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 flex justify-end my-5">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm md:text-lg">
                        Davam et
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/4 bg-white p-4 rounded-md shadow-md h-auto md:h-[500px] m-2 mt-30 mb-10">
                <h3 className="text-lg font-semibold mb-4">Hesab</h3>
                <ul className="space-y-2 text-sm text-gray-800 ">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Giriş / Qeydiyyat
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Şifrənizi unutmusunuz?
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Hesabım
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Ünvan kitabçası
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Arzu siyahısı
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Sifariş tarixçəsi
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Təkrarlanan ödəmələr
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Bonus xalları
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Geri qaytarma
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Əməliyyatlar
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Xəbər bülleteni
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Wishlist
