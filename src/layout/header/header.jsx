import React from 'react'
import { LikeIcon } from '../../assets/icons/like-icon'
import { MessageIcon } from '../../assets/icons/message-icon'
import { PhoneIcon } from '../../assets/icons/phone-icon'
import { UserIcon } from '../../assets/icons/user-icon'
import { CartIcon } from '../../assets/icons/cart-icon'
import { Navbar } from '../../components/navbar'

export const Header = () => {
  return (
    <div>
      <div className='bg-[#7E33E0] flex justify-between items-center py-5 text-white container'>
        <div className='flex gap-5'>
          <p className='flex gap-2 items-center'>
            <MessageIcon />
            mhhasanul@gmail.com
          </p>

          <p className='flex gap-2 items-center'>
            <PhoneIcon />
            (12345)67890
          </p>
        </div>

        <div className='flex gap-5 items-center'>
          <select className='bg-[#7E33E0]'>
            <option value="English">English</option>
            <option value="Uzbek">Uzbek</option>
            <option value="Rus">Rus</option>
          </select>

          <select className='bg-[#7E33E0]'>
            <option value="USD">USD</option>
            <option value="UZS">UZS</option>
            <option value="RUBL">RUBL</option>
          </select>

          <p className='flex gap-2 items-center'>
            Login
            <UserIcon />
          </p>

          <p className='flex gap-2 items-center'>
            Wishlist
            <LikeIcon />
          </p>

          <p>
            <CartIcon />
          </p>
        </div>
      </div>

      <div>
        <Navbar/>
      </div>
    </div>
  )
}
