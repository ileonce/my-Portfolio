import React from 'react';
import Image from 'next/image';
import Whatsapp from '../images/whatsapp.svg';
import GITHUB from '../images/github.svg';
import LINKEDIN from '../images/linkedin2.svg';
import EMAIL from '../images/envelope-regular.svg';
import Link from 'next/link';

function Contacts() {
	return (
		<div>
			<div className='bg-blue-300 text-white p-4 text-3xl font-thin'>
				<p>CONTACTS</p>
			</div>
			<ul className='m-6'>
				<li className='flex items-center pb-2'>
					<div className='m-2'>
						<Image
							src={Whatsapp}
							alt={'email'}
							width={30}
							height={30}
						/>
					</div>
					<div className='flex items-center space-x-2'>
						<span className='text-blue-900 font-medium text-xl'>Phone:</span>
						<p
							className='cursor-pointer text-blue-900 font-thin mt-1 hover:text-blue-900 hover:font-medium'
							onClick={() =>
								window.open('https://web.whatsapp.com/send?phone=250785732113')
							}
						>
							+250785732113
						</p>
					</div>
				</li>
				<li className='flex items-center pb-2'>
					<div className='m-2'>
						<Image
							src={EMAIL}
							alt={'GITHUB'}
							width={30}
							height={30}
						/>
					</div>
					<div className='flex items-center space-x-2'>
						<span className='text-blue-900 font-medium text-xl'>Email:</span>
						<p className='text-blue-900 font-thin hover:text-blue-900 hover:font-medium mt-1 hover:underline'>
							leonceiranyumva@gmail.com
						</p>
					</div>
				</li>
				<li className='flex items-center pb-2'>
					<div className='m-2'>
						<Image
							src={GITHUB}
							alt={'GITHUB'}
							width={30}
							height={30}
						/>
					</div>
					<Link href={'https://github.com/ileonce'}>
						<div className='flex items-center space-x-2'>
							<span className='text-blue-900 font-medium text-xl'>Github:</span>
							<p className='text-blue-900 font-thin hover:text-blue-900 hover:font-medium mt-1 hover:underline'>
								https://github.com/ileonce
							</p>
						</div>
					</Link>
				</li>
				<li className='flex items-center'>
					<div className='m-2'>
						<Image
							src={LINKEDIN}
							alt={'email'}
							width={30}
							height={30}
						/>
					</div>
					<Link
						href={'https://www.linkedin.com/in/leonce-iranyumva-714584208/'}
					>
						<div className='flex items-center space-x-2'>
							<span className='text-blue-900 font-medium text-xl'>
								Linkedin:{' '}
							</span>
							<p className='text-blue-900 font-thin hover:text-blue-900 mt-1 hover:font-medium hover:underline'>
								Leonceiranyumva
							</p>
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Contacts;
