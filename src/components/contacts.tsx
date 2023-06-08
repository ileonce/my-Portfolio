import React from 'react';
import Image from 'next/image';
import EMAIL from '../images/envelope-regular.svg';
import GITHUB from '../images/github.svg';
import LINKEDIN from '../images/linkedin-in.svg';

function Contacts() {
	return (
		<div>
			<div className='bg-blue-300 text-white p-6 text-5xl font-thin'>
				<p>Contacts</p>
			</div>
			<ul className='m-4'>
				<li className='flex items-center'>
					<div className='bg-blue-300 rounded-full p-2 m-2'>
						<Image
							src={EMAIL}
							alt={'email'}
							width={30}
							height={30}
						/>
					</div>
					<p className='text-blue-900 font-thin'>
						<span className='font-medium text-xl'>Phone: </span>
						+250785732113
					</p>
				</li>
				<li className='flex items-center'>
					<div className='bg-blue-300 rounded-full p-2 m-2'>
						<Image
							src={GITHUB}
							alt={'GITHUB'}
							width={30}
							height={30}
						/>
					</div>
					<p className='text-blue-900 font-thin'>
						<span className='font-medium text-xl'>Github: </span>
						https://github.com/ileonce
					</p>
				</li>
				<li className='flex items-center'>
					<div className='bg-blue-300 rounded-full p-2 m-2'>
						<Image
							src={LINKEDIN}
							alt={'email'}
							width={30}
							height={30}
						/>
					</div>
					<p className='text-blue-900 font-thin'>
						<span className='font-medium text-xl'>Linkedin: </span>
						Leonceiranyumva
					</p>
				</li>
			</ul>
		</div>
	);
}

export default Contacts;
