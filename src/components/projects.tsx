import React from 'react';
import Image from 'next/image';
import PROJECT from '../images/project.jpg';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const Projects = () => {
	const projects = [1, 2, 3];

	return (
		<div className=''>
			<div className='bg-blue-300 text-white p-6 text-5xl font-thin'>
				<p>PROJECTS</p>
			</div>
			<div className='grid grid-cols-3 mx-12 mt-6'>
				{projects.map((project) => (
					<div
						key={project}
						className='w-80 bg-white my-8'
					>
						<Image
							src={PROJECT}
							alt='home-page'
							className='w-full'
						/>
						<div className='flex items-center justify-between px-8 pt-16'>
							<p className='text-blue-400 text-xl'>Project{project}</p>
							<EllipsisVerticalIcon className='w-6 h-6 text-blue-400 font-bold' />
						</div>
						<p className='px-8 py-4'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever since the 1500s.
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
