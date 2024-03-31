'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';

const Hero = () => {
	// To unsleep the backend server
	useEffect(() => {
		fetch('https://wikiid.onrender.com/getAuthRequest');
	});
	return (
		<div className='bg-black/80 w-full'>
			<div className='bg-cover bg-hero relative container pt-28 pb-11'>
				<div className='flex flex-col gap-4'>
					<span className='text-quotes text-xs'>March 20, 2024</span>
					<div className='max-w-[490px] bg-black/40 p-1'>
						<h2 className='text-white/90 font-semibold text-4xl'>
							Vision Pro takes the World by Storm: What You Need to Know
						</h2>
						<p className='mt-2 text-xl text-white/80'>
							Unveiling the Phenomenon: Insights into Vision Pro&apos;s Global
							Impact
						</p>
					</div>
					<Link
						href={'article-page'}
						className='py-3 px-2 bg-gradient-button rounded-md text-white max-w-[188px] w-full flex justify-center font-medium'
					>
						Read More
					</Link>
				</div>
				<div className='p-6 bg-footer max-w-[370px] absolute -bottom-36 z-10 border border-white/25 right-10 rounded-xl'>
					<p className='text-white/80'>
						Fun Fact about Vision Pro: Despite its high-tech image, the original
						inspiration for the name &ldquo;Vision Pro&rdquo; actually came from
						a childhood hobby of one of the co-founders, who was an avid
						collector of vintage View-Master stereoscopes.{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
