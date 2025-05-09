import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { IoMdHeartEmpty, IoMdHeart, IoIosArrowDown } from "react-icons/io";
import NavCategoriesForMobile from "./NavCategoriesForMobile";
import NavCategories from "./NavCategories";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import ShoppingList from "./ShoppingList";
import { FaBars, FaLock, FaHeart, FaRegHeart, FaArrowRotateRight } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";



function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarOpen2, setSidebarOpen2] = useState(false);
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <header className="bg-[#FF8300] py-[10px]  mt-[10px] sticky top-0 z-50 px-[10px] shadow-[0_6px_12px_rgba(0,0,0,0.2)]">
                <div className="mx-auto py-3 flex container justify-between items-center">
                    <div className="flex justify-between gap-[50px] px-[17px] container mx-auto pt-[40px] ">
                        <div className="absolute">
                            <NavCategories />
                        </div>
                        <nav className="hidden xl:flex space-x-6 items-center justify-end">
                            <div className="w-[250px]"></div>
                            <a href="#" className="transition text-[12px] text-white font-bold whitespace-nowrap">Ana Səhifə</a>
                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Haqqımızda
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-40 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100">Siyasətimiz</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100">Yeniliklər</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Aksiyalar
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-40 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Kampaniyalar</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Neptun bonus kart</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Elektron kataloq</a>
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Supermarketlər
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-52 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Mağazalarımız</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">İrad və təkliflər</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Alıcıların nəzərinə</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Partnyorluq</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Supermarketdə reklam</a>
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    Karyera
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-48 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">İşə qəbul proseduru</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">Vakansiyalar</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-pink-100 capitalize">CV yerləşdirin</a>
                                </div>
                            </div>
                            <a href="#" className="transition text-[12px] text-white font-bold">Əlaqə</a>
                        </nav>
                        <div className="flex items-center justify-between w-full mx-0">
                            <div className="flex xl:hidden">
                                <span className="text-[20px] text-white" onClick={() => setSidebarOpen(true)}>
                                    <HiMenuAlt2 />
                                </span>
                            </div>
                            <NavCategoriesForMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                            <div className="sm:inline-block lg:hidden">
                                <FaBars className="text-[#ff8300]" />
                            </div>
                            <div className="text-[12px] font-bold flex items-center border-r border-white pr-[12px]">
                                <FaLock className="text-white" />
                                <span
                                    onClick={handleLoginClick}
                                    className="text-white ml-[5px] cursor-pointer">Giriş</span>
                            </div>

                            <div className="relative group mx-3">
                                <button className="flex items-center text-[12px] text-white font-bold transition">
                                    <span
                                        onClick={handleLoginClick}
                                        className="hidden sm:flex">Hesabım</span>
                                    <span className="flex sm:hidden"></span>
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute text-[12px] rounded-b-xl top-[22px] mt-2 w-48 bg-white shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Hesabım</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Əməliyyatlar</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Yükləmələr</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FF8300] capitalize">Sifarişi rəsmiləşdir</a>
                                </div>
                            </div>

                            <Link to={'/wishlist'} className="text-[19px] px-[12px] group cursor-pointer">
                                <IoMdHeartEmpty className="text-white text-[23px] group-hover:hidden" />
                                <IoMdHeart className="hidden text-white text-[23px] group-hover:block" />
                            </Link>
                            <span className="text-[19px] px-[12px] transition-transform duration-300 hover:rotate-180">
                                <FaArrowsRotate className="text-white text-[18px] transition-transform duration-300 group-hover:rotate-180" />
                            </span>
                            <span className="text-[19px] px-[12px]">
                                <ShoppingList />
                            </span>
                        </div>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                        <Menu className="h-6 w-6 text-white" />
                    </button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2 max-h-[80vh] overflow-y-auto bg-white shadow-md rounded-b-xl transition-all duration-300">
                        <a href="#" className="block text-sm text-gray-700 font-medium py-1">Ana Səhifə</a>

                        <details>
                            <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                                Haqqımızda <ChevronDown className="h-4 w-4" />
                            </summary>
                            <div className="pl-4 mt-1 space-y-1">
                                <a href="#" className="block">Siyasətimiz</a>
                                <a href="#" className="block">Yeniliklər</a>
                            </div>
                        </details>

                        <details>
                            <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                                Aksiyalar <ChevronDown className="h-4 w-4" />
                            </summary>
                            <div className="pl-4 mt-1 space-y-1">
                                <a href="#" className="block">Kampaniyalar</a>
                                <a href="#" className="block">Neptun bonus kart</a>
                                <a href="#" className="block">Elektron kataloq</a>
                            </div>
                        </details>

                        <details>
                            <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                                Supermarketlər <ChevronDown className="h-4 w-4" />
                            </summary>
                            <div className="pl-4 mt-1 space-y-1">
                                <a href="#" className="block">Mağazalarımız</a>
                                <a href="#" className="block">İrad və təkliflər</a>
                                <a href="#" className="block">Alıcıların nəzərinə</a>
                                <a href="#" className="block">Partnyorluq</a>
                                <a href="#" className="block">Supermarketdə reklam</a>
                            </div>
                        </details>

                        <details>
                            <summary className="cursor-pointer flex justify-between items-center text-sm text-gray-700 py-1">
                                Karyera <ChevronDown className="h-4 w-4" />
                            </summary>
                            <div className="pl-4 mt-1 space-y-1">
                                <a href="#" className="block">İşə qəbul proseduru</a>
                                <a href="#" className="block">Vakansiyalar</a>
                                <a href="#" className="block">CV yerləşdirin</a>
                            </div>
                        </details>
                    </div>
                )}
            </header>
        </div>

    );
}

export default HeaderNav;
