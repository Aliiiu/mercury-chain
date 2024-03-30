import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import AITab from './AI';
import CryptocurrencyTab from './CryptoCurrency';
import NFTTab from './NFTs';
import TechnologyTab from './Technology';

const Categories = () => {
	return (
		<Tabs defaultValue='ai' className='container py-16'>
			<TabsList className='grid grid-cols-4 gap-5 w-fit bg-transparent'>
				<TabsTrigger
					value='ai'
					className='bg-[#25003F] data-[state=active]:bg-black data-[state-active]:text-white/90 data-[state=active]:font-medium data-[state=active]:border-2 data-gradient-button text-quotes border border-white/25'
				>
					AI
				</TabsTrigger>
				<TabsTrigger
					value='cryptocurrency'
					className='bg-[#25003F] data-[state=active]:bg-black data-[state-active]:text-white/90 data-[state=active]:font-medium data-[state=active]:border-2 data-gradient-button text-quotes border border-white/25'
				>
					Cryptocurrency
				</TabsTrigger>
				<TabsTrigger
					value='nfts'
					className='bg-[#25003F] data-[state=active]:bg-black data-[state-active]:text-white/90 data-[state=active]:font-medium data-[state=active]:border-2 data-gradient-button text-quotes border border-white/25'
				>
					NFTs
				</TabsTrigger>
				<TabsTrigger
					value='technology'
					className='bg-[#25003F] data-[state=active]:bg-black data-[state-active]:text-white/90 data-[state=active]:font-medium data-[state=active]:border-2 data-gradient-button text-quotes border border-white/25'
				>
					Technology
				</TabsTrigger>
			</TabsList>
			<TabsContent value='ai'>
				<AITab />
			</TabsContent>
			<TabsContent value='cryptocurrency'>
				<CryptocurrencyTab />
			</TabsContent>
			<TabsContent value='nfts'>
				<NFTTab />
			</TabsContent>
			<TabsContent value='technology'>
				<TechnologyTab />
			</TabsContent>
		</Tabs>
	);
};

export default Categories;
