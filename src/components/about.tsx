import React from 'react';
import Image from 'next/image';
import PC1 from '../images/pc5.jpg';
import TextRotator from './textRotate';
import BACKGROUND from '../images/bg.png';

const About = () => {
	return (
		<section className='relative '>
			<Image
				src={PC1}
				alt='home-page'
				className='w-full'
			/>
			<div className='absolute top-72 lg:top-80 xl:top-96'>
				<div className=' hidden md:block text-white h-40 p-6 text-4xl font-serif bg-black opacity-40 m-4 lg:text-5xl lg:h-52'>
					<TextRotator />
				</div>
			</div>
			<div className='bg-blue-300 text-white p-4 text-3xl font-thin'>
				<p>ABOUT LEONCE IRANYUMVA</p>
			</div>
			<div className='mx-1 md:mx-6  p-6 rounded-lg'>
				<span className='text-lg font-bold md:text-2xl text-amber-800'>
					| Software Engineer | QA Engineer | Designer
				</span>
				<p className='text-lg font-thin py-4'>
					<span className='font-semibold text-lg text-gray-500 mr-2'>
						Leonce iranyumva:
					</span>
					Is a passionate software engineer with a strong focus on frontend
					development. I believe that the user interface is the gateway to a
					successful software application, and I am dedicated to creating
					seamless, intuitive, and visually appealing experiences for users.
					With my expertise in frontend technologies and my creative
					problem-solving skills, I strive to build innovative and user-centric
					solutions. In this rapidly evolving digital landscape, I am constantly
					keeping up with the latest trends and advancements in frontend
					development to deliver cutting-edge applications.
				</p>
				<p className='text-lg font-thin py-4'>
					<span className='font-semibold text-lg text-gray-500 mr-2'>
						Leonce iranyumva:
					</span>
					Is also a highly skilled and detail-oriented quality assurance
					engineer with 2 years of hands-on experience. Proven track record in
					designing and implementing robust testing methodologies to ensure
					product quality and customer satisfaction. Strong expertise in
					conducting comprehensive test plans, identifying defects, and
					collaborating with cross-functional teams to drive continuous
					improvement.
				</p>
				<p className='text-lg font-thin py-4 text-blue-900'>
					<span className='font-semibold text-lg text-gray-500 mr-2'>
						Current focus:
					</span>
					Is dedicated to pursuing a UX/UI design.
				</p>
			</div>
		</section>
	);
};

export default About;
