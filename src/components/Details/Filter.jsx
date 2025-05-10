import { FaChevronDown } from 'react-icons/fa'
import { Slider } from 'antd'
import { useEffect, useState } from 'react'

function Filter({ data, setFilter }) {
    const [minMax, setMinMax] = useState([0, 25])

    useEffect(() => {
        const sortByProd = data?.sort((a, b) => a.price - b.price)
        const min = sortByProd[0]?.price || 0
        const max = sortByProd.at(-1)?.price || 100
        setMinMax([min, max])
    }, [data])

    return (
        <div className="bg-[#F7F7F7] p-5 rounded-xl w-full lg:w-[100%] my-[40px] mx-[5px]">
            <h3 className="text-lg font-bold mb-4">Filtr</h3>

            <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center cursor-pointer font-semibold text-[16px]">
                    Alt Kateqoriya
                    <FaChevronDown className="text-sm" />
                </div>
            </div>

            <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center cursor-pointer font-semibold text-[16px] mb-3">
                    Markası
                    <FaChevronDown className="text-sm" />
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-[14px] h-[14px] bg-[#FF8203] rounded-sm"></div>
                    <span className="text-[14px] font-medium">NEPTUN-MEYVETEREVEZ</span>
                    <span className="text-[#FF8203] ml-auto font-semibold">5</span>
                </div>
            </div>

            <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center cursor-pointer font-semibold text-[16px] mb-3">
                    Qiymət
                    <FaChevronDown className="text-sm" />
                </div>
                <Slider
                    onChange={(elem) => setFilter(elem)}
                    range={{ draggableTrack: true }}
                    defaultValue={[minMax[0], minMax[1]]}
                    step={0.01}
                    min={minMax[0]}
                    max={minMax[1]}
                />
            </div>

            <div className="pt-2">
                <button className="w-full py-2 rounded-full bg-[#FF8203] text-white font-bold text-[15px]">
                    Hamısını Sıfırla
                </button>
            </div>
        </div>
    )
}

export default Filter
