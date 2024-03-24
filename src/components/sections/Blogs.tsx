import newsFeed from '@/constant/newsletter';
import Image from 'next/image';
import React from 'react';

const Blogs = () => {
	return (
		<div className='pb-28 pt-16 container border-t border-white/25 grid grid-cols-4 gap-11'>
			{newsFeed.map((item) => (
				<div className='flex flex-col gap-4 h-full' key={item.imageUrl}>
					<Image
						width={277}
						height={170}
						alt={'article-image'}
						src={item.imageUrl}
						className='rounded-lg'
					/>
					<div className='flex flex-col gap-2 h-full justify-between'>
						<span className='text-white/90 font-medium'>{item.title}</span>
						<div className='text-xs text-white flex divide-x gap-1'>
							<div className='flex gap-1 items-center'>
								<span className='w-[10px] h-[10px] shrink-0 rounded-full bg-blog-pointer' />{' '}
								<span>{item.category}</span>
							</div>
							<span className='pl-1'>{item.timePosted}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Blogs;
