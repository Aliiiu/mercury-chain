import Hero from '@/components/landing/Hero';
import Categories from '@/components/layout/categories';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Hero />
			<Categories />
		</main>
	);
}
