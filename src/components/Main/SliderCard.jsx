import React, { useContext, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { BASKET } from '../../context/BasketContext';

function SliderCard({ item, discount }) {
    const { addToBasket, basketArr } = useContext(BASKET)
    const { id, img, name, price, categoryName } = item

    const [count, setCount] = useState(1)
    function incDec(x) {
        if (count + x > 0) {
            setCount(count + x)
        }
    }


    return (
        <div className="xl:w-[191px] w-[170px] px-[10px] h-[375px] pb-[17px] rounded-[7px] flex flex-col items-center text-center  relative">            <div className='absolute top-[10px] right-[10px] text-[#FF8203] text-[20px]'><i className="fa-regular fa-heart"></i></div>
            <div className='max-w-[120px] h-[155px]  '>
                <img src={img[0]} alt="" className="object-cover object-center w-full" />
            </div>
            <div>
                <h4 className='text-[10px] font-noto uppercase text-[#222] w-[100px] h-[50px] font-semibold w-[103px]' >{name}</h4>
            </div>
            {
                discount ?
                    <div className='flex items-center mb-[10px]'>
                        <div className='bg-[#ffd9c0] transition-[0.4s] group-hover:text-[#fff] group-hover:bg-[#FF8203] py-[18px] px-[19px] rounded-[50%] text-[#4e4e4e] text-[12px] font-[700] mr-[8px] w-[20px] h-[10px] flex justify-center items-center'>
                            <span>-{discount}%</span>
                        </div>
                        <div className='flex flex-col items-start'>
                            <span className='line-through text-[#999] text-[16px] font[400] mb-[3px]'>{price} ₼</span>
                            <span className='text-[#181818] text-[22px] font-[700] leading-[23px]'>{(price * ((100 - discount) / 100)).toFixed(2)} ₼</span>
                        </div>
                    </div> :
                    <div className='flex items-center mb-[10px]'>
                        <div className='flex flex-col items-start'>
                            <span className='text-[#181818] text-[22px] font-[700] leading-[23px]'>{price} ₼</span>
                        </div>
                    </div>
            }

            <div>
                <div className='flex items-center justify-between'>
                    <button

                        onClick={(e) => {
                            e.stopPropagation();
                            incDec(-1)
                        }}
                        disabled={count === 1}
                        className='border-none text-[#FF8203] py-[6px] px-[12px] text-[14px]'>
                        <FaMinus />
                    </button>
                    <span className='text-[11px]'>{count} eded</span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            incDec(1)
                        }}

                        className='border-none text-[#FF8203] py-[6px] px-[12px] text-[14px]'>
                        <FaPlus />
                    </button>
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToBasket({ id, img, name, price, categoryName, count })
                }} className='px-[21px] py-[2px] text-[#fff] rounded-[16px] bg-[#FF8203] transition-[0.4s] hover:bg-[#DE7201] mt-[10px] mb-[6px]'>Səbətə at</button>
            </div>
        </div>
    )
}

export default SliderCard