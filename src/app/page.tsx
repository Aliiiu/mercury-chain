import Banner from '@/components/sections/Banner';
import Blogs from '@/components/sections/Blogs';
import Headline from '@/components/sections/Headline';
import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/categories';
import LastestNPopularNews from '@/components/sections/LastestNPopularNews';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Hero />
			<Categories />
			<LastestNPopularNews />
			<Headline />
			<Banner />
			<Blogs />
		</main>
	);
}
