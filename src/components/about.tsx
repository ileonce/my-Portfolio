import React from 'react';
import Image from 'next/image';
import PC1 from '../images/pc1.jpeg';
import TextRotator from './textRotate';

const About = () => {
	return (
		<div className='relative'>
			<Image
				src={PC1}
				alt='home-page'
				className='w-full'
			/>
			<div className='absolute top-96'>
				<div className='text-white w-full h-52 p-6 text-5xl font-serif bg-black opacity-40 m-4'>
					<TextRotator />
				</div>
			</div>
			<div className='bg-blue-300 text-white p-6 text-5xl font-thin'>
				<p>ABOUT LEONCE IRANYUMVA</p>
			</div>
			<div className='mx-12 my-4'>
				<span className='text-2xl text-amber-800'>
					| Software engineer | Entrepreneur | Designer
				</span>
				<p className='text-2xl font-thin py-4'>
					<span className='font-semibold text-2xl text-gray-500 mr-2'>
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
				<p className='text-2xl font-thin py-4'>
					<span className='font-semibold text-2xl text-gray-500 mr-2'>
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
				<p className='text-2xl font-thin py-4 text-blue-900'>
					<span className='font-semibold text-2xl text-gray-500 mr-2'>
						Current focus:
					</span>
					Is dedicated to pursuing a UX/UI design.
				</p>
			</div>
		</div>
	);
};

export default About;
