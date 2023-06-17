import React from 'react';
import Image from 'next/image';
import Whatsapp from '../images/whatsapp.svg';
import GITHUB from '../images/github.svg';
import LINKEDIN from '../images/linkedin2.svg';
import EMAIL from '../images/envelope-regular.svg';
import Phone from '../images/phone-volume-solid.svg';
import Link from 'next/link';

function Contacts() {
	return (
		<div>
			<div className='bg-blue-300 text-white p-4 text-3xl font-thin'>
				<p>CONTACTS</p>
			</div>
			<ul className='mx-4 sm:mx-12 my-8'>
				<li className='flex items-center pb-2'>
					<div className='m-2'>
						<Image
							src={Phone}
							alt={'email'}
							width={30}
							height={30}
						/>
					</div>
					<div className='flex items-center space-x-2'>
						<span className='text-blue-900 font-medium text-md md:text-xl'>
							Phone:
						</span>
						<a
							href='tel:+250785732113'
							className='cursor-pointer text-blue-900 font-thin mt-1 hover:text-blue-900 hover:font-medium'
						>
							+250785732113
						</a>
					</div>
				</li>
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
						<span className='text-blue-900 font-medium text-md md:text-xl'>
							Whatsapp:
						</span>
						<p
							className='cursor-pointer text-blue-900 font-thin mt-1 hover:text-blue-900 hover:font-medium'
							onClick={() => {
								window.open('https://wa.me/250785732113', '_blank');
							}}
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
						<span className='text-blue-900 font-medium text-md md:text-xl'>
							Email:
						</span>
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
							<span className='text-blue-900 font-medium  text-md md:text-xl'>
								Github:
							</span>
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
							<span className='text-blue-900 font-medium text-md md:text-xl'>
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
