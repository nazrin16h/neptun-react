import { createContext, useContext, useState } from 'react';

export const BASKET = createContext()

function BasketContext({ children }) {

    const initial = JSON.parse(localStorage.getItem('basket')) || [];
    const [basketArr, setBasketArr] = useState(initial)

    function addToBasket(item) {
        const index = (basketArr.findIndex(elem => elem.id == item.id))
        if (index != -1) {
            basketArr[index].count += item.count
            setBasketArr([...basketArr])
        }
        else {
            setBasketArr([...basketArr, item])

        }
        localStorage.setItem('basket', JSON.stringify(basketArr))
    }

    function clearWishList() {
        localStorage.removeItem("wishlist")
        setBasketArr([])

    }

    return (
        <>
            <BASKET.Provider value={{ addToBasket, basketArr, setBasketArr, clearWishList }}>
                {children}
            </BASKET.Provider>
        </>
    )
}

export default BasketContext