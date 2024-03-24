type NewsItem = {
	title: string;
	imageUrl: string;
	category: string;
	timePosted: string;
};

type NewsFeed = NewsItem[];

const newsFeed: NewsFeed = [
	{
		title:
			'Binance Labs spun-off into independent entity outside the Binance group umbrella',
		imageUrl: '/images/binance.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
	{
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		imageUrl: '/images/solana.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
	{
		title: 'Radix: Project Ignition Liftoff Confirmed',
		imageUrl: '/images/radix.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
	{
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		imageUrl: '/images/solana-2.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
	{
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		imageUrl: '/images/binance-2.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
	{
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		imageUrl: '/images/binance-3.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
	{
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		imageUrl: '/images/solana-2.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
	{
		title:
			'Solana defies overall market trend to hit new all-time high market cap',
		imageUrl: '/images/solana-3.png',
		category: 'Technology',
		timePosted: '52 min ago',
	},
];

export default newsFeed;
