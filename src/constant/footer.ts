export interface FooterLinks {
	[category: string]: string[];
}

export const socials = [
	{
		href: '#',
		src: '/facebook-fill.svg',
		name: 'facebook',
	},
	{
		href: '#',
		src: '/twitter-fill.svg',
		name: 'twitter',
	},
	{
		href: '#',
		src: '/discord-fill.svg',
		name: 'discord',
	},
	{
		href: '#',
		src: '/github-fill.svg',
		name: 'github',
	},
	{
		href: '#',
		src: '/instagram-fill.svg',
		name: 'instgram',
	},
	{
		href: '#',
		src: '/telegram-fill.svg',
		name: 'telegram',
	},
];

export const footerLinks: FooterLinks = {
	Marketplace: [
		'All NFTs',
		'Abstract',
		'Art',
		'Docu',
		'Metaverse',
		'Music',
		'Photography',
		'Videos',
		'Virtual',
	],
	MyAccount: [
		'Profile',
		'Favourites',
		'Watchlist',
		'My Collections',
		'Settings',
		'Stats',
		'Ranking',
		'Activities',
	],
	KnowledgeVault: [
		'Help centre',
		'How-Tos',
		'beginners Manual',
		'Gas-free Marketplace',
		'Metaverse',
		'Blog',
	],
	company: ['About', 'Partnership', 'Careers'],
};

export default footerLinks;
