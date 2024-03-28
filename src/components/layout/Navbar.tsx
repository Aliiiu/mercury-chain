import { ArrowDown2, SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';

export default function NavBar() {
	return (
		<nav className='sticky z-30 w-full'>
			<div className='container py-5 flex justify-between items-center'>
				<Image src={'/logo.svg'} alt='app logo' width={185} height={44} />
				<div className='flex items-center gap-4'>
					<div className='flex items-center text-white gap-1'>
						<SearchNormal1 size={18} color='#FFFFFF' className=' shrink-0' />
						<input
							type='text'
							placeholder='Search'
							className='outline-none text-sm bg-transparent'
						/>
					</div>
					<button className='py-2 text-sm flex items-center gap-1'>
						<span className='font-medium text-white/90 '>EN</span>
						<ArrowDown2 color='#FFFFFF' size={14} className=' shrink-0' />
					</button>
				</div>
			</div>
		</nav>
	);
}
