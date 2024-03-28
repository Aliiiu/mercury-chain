import React from 'react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { latestItems } from '@/constant/latest-news';
import { Separator } from '../ui/separator';

const LastestNPopularNews = () => {
	return (
		<div className='container border-t border-white/25 py-16'>
			<div className='flex gap-10'>
				<div className='flex flex-col gap-5'>
					<h3 className='text-white/80 font-semibold text-lg uppercase'>
						latest news
					</h3>
					<ScrollArea className='h-[442px] w-fit'>
						{latestItems.map((item, index) => (
							<>
								<div key={index} className='flex flex-col gap-2'>
									<div className='text-xs text-white flex divide-x gap-1'>
										<div className='flex gap-1 items-center'>
											<span className='w-[10px] h-[10px] shrink-0 rounded-full bg-blog-pointer' />{' '}
											<span>{item.category}</span>
										</div>
										<span className='pl-1'>{item.timePosted}</span>
									</div>
									<h2 className={'text-white/90 font-medium'}>{item.title}</h2>
									<p className='text-xs text-white/80'>{item.summary}</p>
								</div>
								<Separator className='my-3 ' />
							</>
						))}
						<ScrollBar className='p-0 bg-scroll-area' />
					</ScrollArea>
				</div>
				<div className='rounded-xl w-full h-[442px] bg-cover bg-latest-news mt-14'></div>
				<div className='flex flex-col gap-5'>
					<h3 className='text-white/80 font-semibold text-lg uppercase'>
						popular news
					</h3>
					<ScrollArea className='h-[442px] w-fit'>
						{latestItems.map((item, index) => (
							<>
								<div key={index} className='flex flex-col gap-2'>
									<div className='text-xs text-white flex divide-x gap-1'>
										<div className='flex gap-1 items-center'>
											<span className='w-[10px] h-[10px] shrink-0 rounded-full bg-blog-pointer' />{' '}
											<span>{item.category}</span>
										</div>
										<span className='pl-1'>{item.timePosted}</span>
									</div>
									<h2 className={'text-white/90 font-medium'}>{item.title}</h2>
									<p className='text-xs text-white/80'>{item.summary}</p>
								</div>
								<Separator className='my-3 ' />
							</>
						))}
						<ScrollBar className='p-0 bg-scroll-area' />
					</ScrollArea>
				</div>
			</div>
		</div>
	);
};

export default LastestNPopularNews;
