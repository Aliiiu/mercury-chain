import { Add, Play } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

const SpotifyPlayer = () => {
  return (
    <div>
      <span className="uppercase font-semibold text-lg">OPenNews Podcast</span>
      <div className="border border-white/35 mt-4 bg-player rounded-lg p-3">
        <div className="flex gap-3">
          <div className="w-full flex flex-col justify-center h-[140px] flex-1 bg-iq-code rounded-lg ">
            <div className="relative w-full h-[56px]">
              <Image src={'/iq-code.svg'} alt="iq-code" fill />
            </div>
          </div>
          <div className="flex-1">
            <span className="text-xs">IQ Code news Updates</span>
            <p className="font-medium text-sm mt-2">
              IQ Code an upcoming  smart contract coding tool with AI features
              specifically tailored for smart contracts.
            </p>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <button
            type="button"
            className="bg-transparent border px-3 py-2 rounded flex gap-2 items-center border-white/25"
          >
            <Play size="24" color="#FFFFFF" />
            <span>Start Playing</span>
          </button>
          <button
            type="button"
            className="bg-transparent border px-3 py-2 rounded border-white/25 flex gap-2 items-center"
          >
            <Add size="24" color="#FFFFFF" />
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpotifyPlayer
