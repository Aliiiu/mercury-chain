// Define the News Item interface
export interface NewsItem {
	category: string;
	timePosted: string;
	title: string;
	summary: string;
	src?: string;
}

export const latestItems: NewsItem[] = [
	{
		category: 'Technology',
		timePosted: '52 min ago',
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		summary:
			'After a face-melting rally in the AI crypto sector over the past few months, investors she',
	},
	{
		category: 'Technology',
		timePosted: '52 min ago',
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		summary:
			'After a face-melting rally in the AI crypto sector over the past few months, investors she',
	},
	{
		category: 'Technology',
		timePosted: '52 min ago',
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		summary:
			'After a face-melting rally in the AI crypto sector over the past few months, investors she',
	},
	{
		category: 'Technology',
		timePosted: '52 min ago',
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		summary:
			'After a face-melting rally in the AI crypto sector over the past few months, investors she',
	},
	{
		category: 'Technology',
		timePosted: '52 min ago',
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		summary:
			'After a face-melting rally in the AI crypto sector over the past few months, investors she',
	},
];

export const popularNews: NewsItem[] = [
	{
		category: 'Technology',
		timePosted: '52 min ago',
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		summary:
			'After a face-melting rally in the AI crypto sector over the past few months, investors she',
		src: '/images/binance.png',
	},
	{
		category: 'Technology',
		timePosted: '52 min ago',
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		summary:
			'After a face-melting rally in the AI crypto sector over the past few months, investors she',
		src: '/images/solana.png',
	},
];
