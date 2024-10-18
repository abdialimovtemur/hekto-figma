import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../assets/icons/search-icon'


export const Navbar = () => {
    return (
        <div className='flex justify-between items-ceter py-5 container'>
            <div className='flex gap-20 items-center'>

                <div>
                    <img src={logo} alt="" />
                </div>

                <div className='flex gap-4 items-center'>
                    <select className='border-none outline-none text-[#FB2E86 ]'>
                        <option>Home</option>
                        <option>Dom</option>
                    </select>

                    <div className='flex gap-4'>
                        <Link>Pages</Link>
                        <Link>Products</Link>
                        <Link>Blog </Link>
                        <Link>Shop</Link>
                        <Link>Contact</Link>
                    </div>
                </div>
            </div>

            <div className=' flex items-center h-[40px] w-[317px]'>
                <input type="text" className='border-2 border-[#E7E6EF] outline-none h-full w-full'/>
                <div className='bg-[#FB2E86] h-full items-center flex px-3'>
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}
