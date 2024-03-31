import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Headline = () => {
	return (
		<div className='py-16 border-t border-white/25'>
			<div className='flex items-start'>
				<p className='max-w-[740px] mt-16 relative'>
					<span className='text-quotes text-[80px] -z-10 absolute -top-8 -left-3'>
						&ldquo;
					</span>
					<Link
						href={'article-page'}
						className='font-semibold text-4xl text-white'
					>
						Cake meme reflects coronavirus absurdity in a world where nothing is
						what it seems.
					</Link>
					<span className='text-quotes text-xl absolute font-medium bottom-0 -right-10'>
						-UN Secretary-General
					</span>
				</p>
				<div className='relative flex-1 max-w-[460px] h-[136px]'>
					<Image src={'/images/headline.webp'} alt='headline' fill />
				</div>
			</div>
		</div>
	);
};

export default Headline;
