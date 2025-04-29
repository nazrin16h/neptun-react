import { children, createContext, useState } from 'react';
export const WISHLIST = createContext([])

function WishContext({ children }) {
    const initial = JSON.parse(localStorage.getItem("wishlist")) || []

    const [wish, setWish] = useState(initial)


    function addWishList(item) {
        setWish([...wish, item])

        localStorage.setItem("wishlist", JSON.stringify([...wish, item]))
    }

    function clearWishList() {
        localStorage.removeItem("wishlist")
        setWish([])

    }

    function delWishList(id) {
        const yeniArr = wish.filter(item => item.id != id)
        setWish(yeniArr)
        localStorage.setItem("wishlist", JSON.stringify(yeniArr))

    }

    return (
        <WISHLIST.Provider value={{ wish, setWish, addWishList, clearWishList ,delWishList}}>
            {children}
        </WISHLIST.Provider>
    )

}
export default WishContext