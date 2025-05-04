import React, { children, useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASKET } from '../../context/BasketContext';

function ShoppingList() {

    const [isOpen, setIsOpen] = useState(false);
    const { basketArr, setBasketArr,clearWishList } = useContext(BASKET);


    function clearBasketList(id) {
        const silenArr = basketArr.filter(item => item.id != id)
        setBasketArr(silenArr)
        localStorage.setItem("basket", JSON.stringify(silenArr))

    }
    return (
        <BASKET.Provider value={{ clearBasketList, basketArr }}>
            {children}
            <div className="relative">
                <FontAwesomeIcon
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white cursor-pointer"
                    icon={faCartShopping}
                />

                {isOpen && (
                    <div className="absolute right-0 top-12 w-106 bg-white shadow-lg rounded-lg p-4 z-50 text-[12px]">
                        {basketArr.length === 0 ? (
                            <p className="text-center text-gray-500">Səbət boşdur</p>
                        ) : (
                            <>
                                {basketArr.map(item => (
                                    <div key={item.id} className="flex items-center justify-between border-b py-2">
                                        <div className="flex items-center space-x-3">
                                            <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                            <div className='flex flex-row gap-10'>
                                                <div className="text-sm font-normal w-[200px] text-gray-500 hover:text-orange-400">
                                                    {item.name}
                                                </div>
                                                <div className="text-xs">x {item.count}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div>{(item.price * item.count).toFixed(2)}₼</div>
                                            <FaTrash
                                                onClick={() => clearBasketList(item.id)}
                                                className="text-gray-500 cursor-pointer hover:text-amber-500" />
                                        </div>
                                    </div>
                                ))}

                                <div className="flex justify-end gap-1 mt-4 m-5 font-semibold">
                                    <span className='font-bold'>Ümumi məbləğ:</span>
                                    <span>{basketArr.reduce((sum, item) => sum + item.price * item.count, 0).toFixed(2)}₼</span>
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button 
                                    onClick={clearWishList}
                                    className="bg-gray-600 text-white px-4 py-2 rounded-3xl hover:bg-orange-400 transition-all duration-300">
                                        Səbəti sifirla
                                    </button>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-3xl hover:bg-orange-600 transition-all duration-300">
                                        Sifarişi rəsmiləşdir
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </BASKET.Provider>
    );
}

export default ShoppingList;
