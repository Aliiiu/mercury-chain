import footerLinks, { socials } from '@/constant/footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container relative py-32">
        <div className="absolute top-5">
          <Image
            src={'/user.svg'}
            width={349}
            height={391}
            alt="user illustration"
          />
        </div>
        <div className="bg-white/10 py-14 rounded-xl pl-[340px]">
          <div className="flex items-end gap-5">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-2xl text-white">
                Stay in the loop
              </span>
              <p className="text-sm text-white/80 max-w-[370px]">
                OpenNews will bring every News down to You!Never Miss any of the
                Trendy News.
              </p>
            </div>
            <div className="border rounded-md w-full border-white/25 p-1 flex justify-between max-w-[340px]">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-transparent text-sm text-white font-semibold px-2 w-full outline-none"
              />
              <button
                type="button"
                className="py-3 px-2 bg-gradient-button rounded-md text-white max-w-[108px] w-full font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-white py-16">
        <div className="flex justify-between">
          <div className="flex flex-col gap-14">
            <div className="text-white/80">
              <Image src="/logo.svg" alt="OpenNews" width={185} height={44} />
              <p className="mt-3 max-w-[307px]">
                The largest digital marketplace for crypto collectibles and
                non-fungible tokens (NFTs). Buy, sell, and discover amazing
                digital items.
              </p>
            </div>
            <div className="">
              <span className="font-semibold text-sm">Join our community</span>
              <div className="gap-2 flex mt-2">
                {socials.map((item) => (
                  <Link
                    key={item.name}
                    href={'#'}
                    className="border border-solid border-image-source w-12 h-12 flex justify-center items-center "
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="mb-4">
                <h5 className="text-sm text-white/90 font-bold mb-3">
                  {category}
                </h5>
                <ul className="text-sm">
                  {links.map((link) => (
                    <li key={link} className="mb-2">
                      <Link href="#" className="text-white/80 hover:underline">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-[0.5px] pb-14 border-white py-5">
        <div className="container">
          <p className="text-xs text-center text-white/80">
            &copy; OpenSource by Dewalz. 2024. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
