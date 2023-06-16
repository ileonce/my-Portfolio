import React from 'react';
import Image from 'next/image';
import Parul from '../images/parul.jpg';

function Education() {
	return (
		<div>
			<div className='bg-blue-300 text-white p-4 text-3xl font-thin'>
				<p>EDUCATION</p>
			</div>
			<div className='flex flex-wrap justify-between mx-12 my-8'>
				<div className='p-6 bg-white rounded-lg border-4 border-gray-100'>
					<div className='flex items-center space-x-3'>
						<Image
							src={Parul}
							alt={'school-logo'}
							width={50}
							height={50}
						/>
						<p className='text-2xl pb-4'>Parul Univeristy</p>
					</div>
					<ul className='text-gray-500 mt-2'>
						<li>Sep 2017 - May 2020</li>
						<li>Degree: Bachelors in Computer Application</li>
						<li>Major: Programming</li>
						<li>Minor: Network</li>
						<li>CGPA: 7.44</li>
					</ul>
				</div>
				<div className='p-6 bg-white rounded-lg border-4 border-gray-100'>
					<p className='text-2xl pb-4'>Group Scolaire Des Parents</p>
					<ul className='text-gray-500 mt-2'>
						<li>Feb 2014 - Nov 2016</li>
						<li>Workforce Development Authority (WDA)</li>
						<li>A2 Level: Compunter and Electronics (CEL)</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Education;
