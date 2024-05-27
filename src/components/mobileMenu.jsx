import React from 'react'
import Link from 'next/link'
// icnos
import { IoMdClose } from 'react-icons/io'
import { IoLogoTwitter } from 'react-icons/io'
import { BiLogoTelegram } from 'react-icons/bi'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaTiktok } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import Icon from '../assets/icon'
import SocialIcon2 from '../assets/social-icon-2'

const NAV_LINKS = [
  {
    icon: <IoLogoTwitter />,
    linkPath: '',
  },
  {
    icon: <BiLogoTelegram />,
    linkPath: '',
  },
  {
    icon: <SocialIcon2 />,
    linkPath: '',
  },
  {
    icon: <IoLogoInstagram />,
    linkPath: '',
  },
  {
    icon: <FaTiktok />,
    linkPath: '',
  },
  {
    icon: <FaYoutube />,
    linkPath: '',
  },
  {
    icon: <Icon />,
    linkPath: '',
  },
]
export default function MobileMenu({ setMenuShow }) {
  const HandleClose = () => {
    setMenuShow(false)
  }

  return (
    <div className='fixed h-[100vh] z-50 right-0 top-0 bg-black w-[300px] text-white py-10 px-5 animation'>
      <span
        className='absolute top-7 right-7'
        onClick={HandleClose}
      >
        <IoMdClose />
      </span>
      <div className='pl-10 mt-10'>
        <div className='flex flex-wrap items-center gap-3'>
          {NAV_LINKS.map((item, idx) => (
            <Link
            href={`${item.linkPath}`}
            key={idx}
            >
              <span className='w-7 h-7 flex items-center justify-center rounded-full bg-white text-[#247EDF]'>
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
        <div className='lg:hidden flex flex-col gap-5 mt-6'>
          {/* <button className='bg-white text-black px-5 py-3.5 rounded-full'>
            Connect Wallet
          </button> */}

          
          <a
            hrefLang=''
            className='!capitalize underline text-white font-semibold'
          >
            Back to Website
          </a>
        </div>
      </div>
    </div>
  )
}
