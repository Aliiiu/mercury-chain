import Banner from '@/components/landing/Banner';
import Blogs from '@/components/landing/Blogs';
import Headline from '@/components/landing/Headline';
import LastestNPopularNews from '@/components/landing/LastestNPopularNews';
import React from 'react';
import TrendingAINews from '../AI/TrendingAINews';

const NFTTab = () => {
	return (
		<div>
			<TrendingAINews
				trendingSrc='/images/solana.png'
				trendingTitle='NFTs defies overall market trend to hit new all-time high market cap'
			/>

			<LastestNPopularNews />
			<Headline />
			<Banner />
			<Blogs />
		</div>
	);
};

export default NFTTab;
