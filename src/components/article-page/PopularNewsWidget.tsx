import { latestItems } from '@/constant/latest-news';
import React from 'react';
import { Separator } from '../ui/separator';

const PopularNewsWidget = () => {
	return (
		<div>
			<h3>Popular News</h3>
			<div className='flex flex-col'>
				{latestItems.map((item, index) => (
					<div key={index}>
						{index !== 0 && <Separator className='bg-white/25' />}
						<div className='py-6'>
							<span>{item.title}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularNewsWidget;
