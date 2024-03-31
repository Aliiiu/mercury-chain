import Link from 'next/link'
import React from 'react'
import { RiPlayFill } from 'react-icons/ri'

const Banner = () => {
  return (
    <div className="py-16 border-t border-white/25">
      <Link
        href={'article-page'}
        className="rounded-xl px-10 py-10 w-full h-[705px] bg-cover bg-banner flex items-end"
      >
        <div className="bg-black/40 w-fit px-1 py-2 rounded relative">
          <span className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#EC4D4D] absolute -top-5 -right-5">
            <RiPlayFill size={24} color="#FFFFFF" />
          </span>
          <h2 className="font-semibold max-w-[370px] text-white text-3xl">
            Exclusive Interview with the CEO of IQ.wiki
          </h2>
          <p className="text-white/90 mt-2 max-w-[420px]">
            Bridging Realities: Theodor’s Vision for Web3 Unveiled in Exclusive
            Interview
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Banner
