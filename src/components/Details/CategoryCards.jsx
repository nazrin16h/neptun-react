import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import CategoryCard from './CategoryCard'
import { getProductsBySubID } from '../../services/api'
import { Pagination } from 'antd'
import { scrollYuxari } from '../../utils/scrollTop'
import { Link, useParams } from 'react-router-dom'
import { PiSquaresFourFill } from "react-icons/pi"
import { IoMenu } from "react-icons/io5"

function CategoryCards({ setData: setFilterdata, filter }) {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(12)
    const [obj, setObj] = useState([])
    const [page, setPage] = useState(1)
    const [filterCrd, setFilterCrd] = useState([])

    useEffect(() => {
        getProductsBySubID(id, limit, page).then(mehsul => {
            setObj(mehsul)
            setData(mehsul.products)
            setFilterCrd(mehsul.products)
            setFilterdata(mehsul.products)
        })
    }, [id, limit, page])

    useEffect(() => {
        const yeniArr = filterCrd.filter((item) => {
            return item.price >= filter[0] && item.price <= filter[1]
        })
        setData(yeniArr)
    }, [filter])

    return (
        <div className='w-full md:w-[90%] lg:w-[96%] w-[40%] gap-10 '>
            <div className='flex flex-col md:flex-row justify-between gap-[20px] items-start md:items-center'>
                <div className='text-gray-500 text-[28px] flex gap-[10px] px-2 md:px-[20px]'>
                    <span className='text-[#ff8300] hover:text-white'><PiSquaresFourFill /></span>
                    <span className='text-[#ff8300] hover:text-white'><IoMenu /></span>
                </div>
                <div className='flex flex-row  sm:flex-row flex-wrap gap-4 md:gap-[30px] py-[20px]'>
                    <div>
                        <span className='text-[14px]'>Sırala: </span>
                        <select className='py-[7px] px-[10px] rounded-[20px] bg-white text-[12px]' name="" id="">
                            <option className='font-extrabold' value="">Əsas</option>
                            <option value="">Ad(A-Z)</option>
                            <option value="">Ad(Z-A)</option>
                            <option value="">Qiymət(Aşağıdan ᐳ yuxarı)</option>
                            <option value="">Qiymət(Yuxarı ᐳ aşağı)</option>
                            <option value="">Reytinq(Yuxarı)</option>
                            <option value="">Reytinq(Aşağı)</option>
                            <option value="">Model(A-Z)</option>
                            <option value="">Model(Z-A)</option>
                        </select>
                    </div>
                    <div>
                        <span className='text-[14px]'>Göstər: </span>
                        <select
                            onChange={(e) => { setLimit(e.target.value) }}
                            className='py-[7px] px-[10px] rounded-[20px] bg-white text-[12px]' name="" id="">
                            <option className='font-extrabold' value="12">12</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <button className='bg-[#FF8300] text-white rounded-[20px] py-[5px] px-[15px] flex items-center gap-1 text-[14px]'>
                        <span className="group">
                            <FontAwesomeIcon className="text-white transition-transform duration-300 group-hover:rotate-180" icon={faArrowsRotate} />
                        </span>
                        <span>Müqayisə et</span>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[20px] justify-items-center'>
                {data.map(item => (
                    <Link key={item.id} to={`/filterle/${item.id}`}>
                        <CategoryCard {...item} />
                    </Link>
                ))}
            </div>

            <div className='my-[30px]'>
                <Pagination
                    onChange={(cur) => {
                        setPage(cur)
                        scrollYuxari()
                    }}
                    total={obj?.totalProducts}
                    current={obj?.currentPage}
                    defaultPageSize={limit}
                />
            </div>
        </div>
    )
}

export default CategoryCards
