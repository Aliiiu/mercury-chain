import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import AITab from './AI';

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
				<h2>Cryptocurrency</h2>
			</TabsContent>
			<TabsContent value='nfts'>
				<h2>NFTs</h2>
			</TabsContent>
			<TabsContent value='technology'>
				<h2>Technology</h2>
			</TabsContent>
		</Tabs>
	);
};

export default Categories;
