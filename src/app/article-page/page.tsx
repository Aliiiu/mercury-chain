import { GoogleIcon, PolygonLogo } from '@/components/icons';
import RelatedArticle from '@/components/sections/RelatedArticle';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { latestItems } from '@/constant/latest-news';
import { Add, Google, Play, Polygon } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';
import QRCode from 'react-qr-code';

const ArticlePage = () => {
	return (
		<div className='relative'>
			<div className='absolute bg-white/10 backdrop-blur-lg top-0 bottom-0 right-0 left-0 z-10 container flex justify-center'>
				<div className='flex flex-col items-center bg-white/80 rounded-lg h-fit text-black p-10 mt-20'>
					<h2 className='text-2xl font-semibold'>Welcome</h2>
					<p>Login to your account</p>
					<div className='flex mt-5 gap-5'>
						<Dialog>
							<DialogTrigger>
								<button className='flex hover:bg-white/70 items-center gap-1 rounded-md px-2 py-1 bg-white'>
									<Polygon color='purple' />
									<span className='text-sm'>Polygon ID</span>
								</button>
							</DialogTrigger>
							<DialogContent className='sm:max-w-[425px] bg-white'>
								<DialogHeader>
									<DialogTitle className='text-black'>
										Scan the QR code below
									</DialogTitle>
								</DialogHeader>
								<div className='w-full'>
									<QRCode
										level='Q'
										// style={{ width: 256 }}
										className='mx-auto'
										value={'hey'}
										viewBox={`0 0 256 256`}
									/>
								</div>
							</DialogContent>
						</Dialog>
						<button className='flex hover:bg-white/70 items-center gap-1 rounded-md px-2 py-1 bg-white'>
							<Google variant='Bulk' />
							<span className='text-sm'>Google</span>
						</button>
					</div>
				</div>
			</div>
			<div className='container flex gap-10 py-16'>
				<div className='flex-1'>
					<div className='flex gap-2'>
						<span className='w-10 h-10 rounded-full bg-white/20'></span>
						<div className='text-sm flex flex-col gap-1'>
							<span>ALiu Urek</span>
							<span>
								35 min ago | Published 12:26 PM EDT, Thu March 21, 2024
							</span>
						</div>
					</div>
					<h2 className='font-semibold text-6xl mt-2'>
						Exclusive Interview with the CEO of IQ.wiki
					</h2>
					<div className='relative w-full mt-8 h-[516px]'>
						<Image src='/images/banner.png' alt='banner' fill />
					</div>
					<section className='flex flex-col gap-7 mt-7'>
						<div className='flex flex-col gap-5'>
							<h2 className='text-white/90 text-4xl font-semibold'>
								Theodor Forselius
							</h2>
							<p className='text-white/80'>
								Theodor Mauritz Forselius is a Swedish Internet entrepreneur and
								programmer. He co-founded IQ.wiki, formerly known as Everipedia,
								at the age of 19. He is currently the Chief Executive Officer
								of Brainfund, the parent company of IQ.wiki, where he oversees
								the company’s overall vision and strategic goals.
							</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='text-white/90 text-4xl font-semibold'>Career</h2>
							<p className='text-white/80'>
								IQ.wiki formerly Everipedia Theodor and Sam Kazemian originally
								met through a mutual acquaintance in 2013. But it wasn&apos;t
								until the summer of 2014, when Theodor was visiting Sam
								Kazemian at UCLA, that the two began discussing the original
								idea behind what would later become Everipedia. A few months
								later during the fall, the two decided to officially start
								working on the project and Theodor traveled to Los Angeles,
								California to pursue Everipedia full-time. During the spring of
								2015, Mahbod Moghadam and Travis Moore joined as co-founders and
								together they raised a seed investment from Mucker Capital. In
								December 2017, Everipedia announced that Wikipedia
								Co-Founder Larry Sanger had joined the company as its new Chief
								Information Officer. After the announcement, Theodor was
								featured on the front page of WIRED alongside Larry
								Sanger and Travis Moore. In February 2018, it was announced that
								Everipedia had raised $30 million from Galaxy Digital. The news
								was covered in a vast number of prominent publications such
								as Fortune Magazine, Reuters, Business Insider, and a featured
								interview with Theodor in Swedish Business Magazine Dagens
								Industri. Since then Everipedia&apos;s vision has grown. In
								2020, Everipedia launched OraQles, the leading first-party
								oracle service which has been used by the likes such as The
								Associated Press to
							</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='text-white/90 text-4xl font-semibold'>
								Early Life
							</h2>
							<p className='text-white/80'>
								heodor grew up in Jönköping, Sweden. When he was 11 years old he
								founded an online gaming community that hosted online servers
								for in-game franchises such as Battlefield, Call of Duty,
								and Minecraft. The community eventually grew into a social
								networking service specifically tailored to gamers. Theodor
								dropped out of high school to pursue the social networking idea
								but ended up being offered an internship at a Swedish IT company
								where he began working at the age of 16. Less than a year later,
								Theodor landed a full-time position at the same company where he
								continued working until 2014.
							</p>
						</div>
					</section>
				</div>
				<div className='flex flex-col gap-24 flex-1 max-w-[369px]'>
					<div>
						<span className='uppercase font-semibold text-lg'>
							OPenNews Podcast
						</span>
						<div className='border border-white/35 mt-4 bg-player rounded-lg p-3'>
							<div className='flex gap-3'>
								<div className='w-full flex flex-col justify-center h-[140px] flex-1 bg-iq-code rounded-lg '>
									<div className='relative w-full h-[56px]'>
										<Image src={'/iq-code.svg'} alt='iq-code' fill />
									</div>
								</div>
								<div className='flex-1'>
									<span className='text-xs'>IQ Code news Updates</span>
									<p className='font-medium text-sm mt-2'>
										IQ Code an upcoming  smart contract coding tool with AI
										features specifically tailored for smart contracts.
									</p>
								</div>
							</div>
							<div className='flex gap-6 mt-6'>
								<button className='bg-transparent border px-3 py-2 rounded flex gap-2 items-center border-white/25'>
									<Play size='24' color='#FFFFFF' />
									<span>Start Playing</span>
								</button>
								<button className='bg-transparent border px-3 py-2 rounded border-white/25 flex gap-2 items-center'>
									<Add size='24' color='#FFFFFF' />
									<span>Follow</span>
								</button>
							</div>
						</div>
					</div>
					<div>
						<h3>Latest News</h3>
						<div className='flex flex-col'>
							{latestItems.map((item, index) => (
								<>
									{index !== 0 && <Separator className='bg-white/25' />}
									<div className='py-6'>
										<span>{item.title}</span>
									</div>
								</>
							))}
						</div>
					</div>
					<div>
						<h3>Popular News</h3>
						<div className='flex flex-col'>
							{latestItems.map((item, index) => (
								<>
									{index !== 0 && <Separator className='bg-white/25' />}
									<div className='py-6'>
										<span>{item.title}</span>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<RelatedArticle />
			</div>
		</div>
	);
};

export default ArticlePage;
