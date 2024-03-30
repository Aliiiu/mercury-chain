import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import { Polygon, Google } from 'iconsax-react';
import QRCode from 'react-qr-code';
import { TRequestObject } from '@/app/article-page';

type TAuthenticator = {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	authReq: TRequestObject | null;
	getAuthReq: () => void;
};

const Authenticator = ({
	isOpen,
	setIsOpen,
	authReq,
	getAuthReq,
}: TAuthenticator) => {
	return (
		<div className='flex flex-col items-center bg-white/80 rounded-lg h-fit text-black p-10 mt-20'>
			<h2 className='text-2xl font-semibold'>Welcome</h2>
			<p>Login to your account</p>
			<div className='flex mt-5 gap-5'>
				<Dialog open={isOpen} onOpenChange={setIsOpen}>
					<DialogTrigger
						onClick={() => getAuthReq()}
						className='flex hover:bg-white/70 items-center gap-1 rounded-md px-2 py-1 bg-white'
					>
						<Polygon color='purple' />
						<span className='text-sm'>Polygon ID</span>
					</DialogTrigger>
					<DialogContent className='sm:max-w-[425px] bg-white'>
						<DialogHeader>
							<DialogTitle className='text-black'>
								Scan the QR code below
							</DialogTitle>
						</DialogHeader>
						{authReq && authReq.request ? (
							<div className='w-full'>
								<QRCode
									level='Q'
									className='mx-auto'
									value={JSON.stringify(authReq.request)}
									viewBox={`0 0 256 256`}
								/>
							</div>
						) : (
							<span className='text-black'>Fetching QR Code...</span>
						)}
					</DialogContent>
				</Dialog>
				<button className='flex hover:bg-white/70 items-center gap-1 rounded-md px-2 py-1 bg-white'>
					<Google variant='Bulk' />
					<span className='text-sm'>Google</span>
				</button>
			</div>
		</div>
	);
};

export default Authenticator;
