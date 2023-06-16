import React from 'react';
import Image from 'next/image';
import HTML5 from '../images/html5.png';
import CSS3 from '../images/css3.png';
import JAVASCRIPT from '../images/javascript.png';
import NEXTJS from '../images/nextjs.png';
import BOOTSTRAP from '../images/bootstrap.png';
import REACT from '../images/react.png';
import NODEJS from '../images/nodejs.png';
import MYSQL from '../images/mysql.png';
import VSCODE from '../images/vscode.svg';
import PHOTOSHOP from '../images/photoshop.png';
import ADOBE from '../images/adobexd.png';

const Skills = () => {
	return (
		<div>
			<div className='bg-blue-300 text-white p-4 text-3xl font-thin'>
				<p>SKILLS</p>
			</div>
			<div className='mx-12 my-8 bg-white px-8 py-5 rounded-lg'>
				<p className='pb-4 text-3xl text-orange-900 font-thin'>FRONT-END</p>
				<hr />
				<div className='flex flex-wrap justify-between mt-6'>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={HTML5}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-1 font-medium text-sm'>HTML5</h2>
					</div>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={CSS3}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-2 font-medium text-sm'>CSS3</h2>
					</div>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={JAVASCRIPT}
							alt='home-page'
							height={90}
							width={90}
						/>
						<h2 className='mt-2 font-medium text-sm'>Javascript</h2>
					</div>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={NEXTJS}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-2 font-medium text-sm'>Next.JS</h2>
					</div>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={BOOTSTRAP}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-2 font-medium text-sm'>Bootstrap</h2>
					</div>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={REACT}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-2 font-medium text-sm'>React</h2>
					</div>
				</div>
			</div>
			<div className='mx-12 my-8 bg-white pb-3 px-8 mt-8 rounded-lg'>
				<p className='py-4 text-3xl text-orange-900 font-thin'>BACK-END</p>
				<hr />
				<div className='flex flex-wrap space-x-10 mt-6'>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={NODEJS}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-2 font-medium text-sm'>Node.JS</h2>
					</div>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={MYSQL}
							alt='home-page'
							height={100}
							width={100}
							className='mt-4'
						/>
						<h2 className='mt-10 font-medium text-sm'>MySQL</h2>
					</div>
				</div>
			</div>
			<div className='mx-12 my-8 bg-white px-8 pb-3 mt-8 rounded-lg'>
				<p className='py-4 text-3xl text-orange-900 font-thin'>
					DEVELOPMENT TOOLS
				</p>
				<hr />
				<div className='flex flex-wrap mt-6'>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={VSCODE}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-2 font-medium text-sm'>VS-Code</h2>
					</div>
				</div>
			</div>
			<div className='mx-12 my-8 bg-white mt-8 px-8  pb-3 rounded-lg'>
				<p className='py-4 text-3xl text-orange-900 font-thin'>
					GRAPHIC DESIGN
				</p>
				<hr />
				<div className='flex flex-wrap space-x-10 mt-6'>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={PHOTOSHOP}
							alt='home-page'
							height={100}
							width={100}
						/>
						<h2 className='mt-2 font-medium text-sm'>Photoshop</h2>
					</div>
					<div className='flex flex-col items-center w-32 mb-6'>
						<Image
							src={ADOBE}
							alt='home-page'
							height={100}
							width={100}
						/>
						<p className='mt-2 font-medium text-sm'>Adobe-XD</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
