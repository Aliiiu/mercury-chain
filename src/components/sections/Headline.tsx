import Image from 'next/image';
import React from 'react';

const Headline = () => {
	return (
		<div className='py-16 container border-t border-white/25'>
			<div className='flex items-start'>
				<p className='max-w-[740px] mt-16 relative'>
					<span className='text-quotes text-[80px] absolute -top-8 -left-3'>
						&ldquo;
					</span>
					<span className='font-semibold text-4xl text-white'>
						Cake meme reflects coronavirus absurdity in a world where nothing is
						what it seems.
					</span>
					<span className='text-quotes text-xl absolute bottom-0 -right-10'>
						-UN Secretary-General
					</span>
				</p>
				<div className='relative flex-1 max-w-[460px] h-[136px]'>
					<Image src={'/images/headline.png'} alt='headline' fill />
				</div>
			</div>
		</div>
	);
};

export default Headline;
