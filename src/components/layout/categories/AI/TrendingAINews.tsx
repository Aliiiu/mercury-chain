import { Separator } from '@/components/ui/separator';
import { popularNews } from '@/constant/latest-news';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TProps = { trendingSrc?: string; trendingTitle?: string };
const TrendingAINews = ({ trendingSrc, trendingTitle }: TProps) => {
	return (
		<div className='grid grid-cols-3 mt-28 pb-14 gap-5'>
			<div className='flex gap-4 col-span-2'>
				<div className='w-[386px] shrink-0 h-full relative'>
					<Image
						src={trendingSrc || '/images/ai-cat.png'}
						alt='ai-cat'
						fill
						className=' object-cover'
					/>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='text-xs text-white flex divide-x gap-1'>
						<div className='flex gap-1 items-center'>
							<span className='w-[10px] h-[10px] shrink-0 rounded-full bg-blog-pointer' />{' '}
							<span>AI</span>
						</div>
						<span className='pl-1'>3 min read</span>
					</div>
					<Link href={'article-page'} className='font-semibold text-xl'>
						{trendingTitle ||
							'AI crypto traders take profits pushing tokens down up to 20% after scorching 2024 ra...'}
					</Link>
					<p>
						After a face-melting rally in the AI crypto sector over the past few
						months, investors appear to have taken a profit-taking approach over
						the past few days. The sector soared past $10 billion in
						mid-February, buoyed by Bittensor’s remarkable climb to a $4 billion
						market cap with an increase of over 220% in 2024. By March, the
						sector had exploded to over $25 billion in market cap.
					</p>
				</div>
			</div>
			<div className='flex flex-col cols-span-1'>
				{popularNews.map((item, index) => (
					<>
						<div className='flex gap-3'>
							<div className='relative shrink-0 w-[178px] h-[150px]'>
								<Image src={item.src || ''} alt='' fill />
							</div>
							<div className='flex flex-col justify-between'>
								<Link href={'article-page'} className='hover:underline'>
									{item.title}
								</Link>
								<div className='text-xs text-white flex divide-x gap-1'>
									<div className='flex gap-1 items-center'>
										<span className='w-[10px] h-[10px] shrink-0 rounded-full bg-blog-pointer' />{' '}
										<span>{item.category}</span>
									</div>
									<span className='pl-1'>{item.timePosted}</span>
								</div>
							</div>
						</div>
						{index === 0 && <Separator className='my-3 bg-white/25' />}
					</>
				))}
			</div>
		</div>
	);
};

export default TrendingAINews;
