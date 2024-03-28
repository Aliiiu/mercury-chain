import relatedArticles from '@/constant/related-articles';
import Image from 'next/image';
import React from 'react';

const RelatedArticle = () => {
	return (
		<div className='border-t border-white/25 py-12'>
			<h2 className='text-white/90 font-semibold'>RELATED ARTICLES</h2>
			<div className='grid grid-cols-3 gap-6'>
				{relatedArticles.map((item, index) => (
					<div key={index} className='py-5 px-1 flex gap-5'>
						<div className='relative w-[85px] h-[85px]'>
							<Image
								src={item.imageUrl}
								alt={item.altText}
								fill
								className=' bg-contain'
							/>
						</div>
						<div className=''>
							<h4 className='text-lg font-medium text-white/90'>
								{item.title}
							</h4>
							<p className='text-white/80 max-w-[240px]'>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RelatedArticle;
