import React from 'react';
import TrendingAINews from '../AI/TrendingAINews';
import LastestNPopularNews from '../../LastestNPopularNews';
import Headline from '../../Headline';
import Banner from '../../Banner';
import Blogs from '../../Blogs';

const CryptocurrencyTab = () => {
	return (
		<div>
			<TrendingAINews
				trendingSrc='/images/crypto-cat.png'
				trendingTitle='Solana defies overall market trend to hit new all-time high market cap'
			/>

			<LastestNPopularNews />
			<Headline />
			<Banner />
			<Blogs />
		</div>
	);
};

export default CryptocurrencyTab;
