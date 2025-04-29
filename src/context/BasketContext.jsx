import { createContext, useState } from 'react';

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
        console.log(basketArr);
        localStorage.setItem('basket', JSON.stringify(basketArr))
    }

    return (
        <>
            <BASKET.Provider value={{ addToBasket, basketArr,setBasketArr }}>
                {children}
            </BASKET.Provider>
        </>
    )
}

export default BasketContext