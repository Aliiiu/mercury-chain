import Banner from '@/components/sections/Banner';
import Blogs from '@/components/sections/Blogs';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='container min-h-screen'>
			<Banner />
			<Blogs />
		</main>
	);
}
