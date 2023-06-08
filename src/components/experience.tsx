import React from 'react';
import Image from 'next/image';
import AOS from '../images/aos.png';

const Experience = () => {
	return (
		<div className=''>
			<p className='bg-blue-300 text-white p-4 text-5xl font-thin'>
				Experience
			</p>
			<div className='m-12 flex flex-col justify-center items-center'>
				<div className='w-11/12 px-5 bg-white rounded-xl mb-8'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-12'>
							<Image
								src={AOS}
								alt='home-page'
								width={80}
								height={80}
							/>
							<p className='text-2xl text-gray-500'>AOS Ltd</p>
						</div>
						<p className='text-2xl text-gray-500'>
							Software Quality Assurance Engineer
						</p>
					</div>
					<hr />
					<div className='my-4'>
						<p className='text-md font-medium text-gray-500 py-2 italic'>
							Transforming ICT in Africa
						</p>
						<p className='text-xl font-thin py-2'>RESPONSIBILITIES</p>
						<ul className='list-disc ml-5'>
							<li>
								Test Case Creation and Execution: Develop and execute
								comprehensive test cases to verify software functionality,
								usability, and performance, ensuring all scenarios are covered.
							</li>
							<li className='mt-3'>
								Issue Reporting and Collaboration: Identify and report software
								issues, bugs, and defects to the development team, working
								closely with them to communicate insights and find effective
								solutions.
							</li>
							<li className='mt-3'>
								Documentation and Reporting: Document test results, including
								steps performed, expected outcomes, and actual results,
								providing clear evidence of software behavior for reference and
								analysis.
							</li>
							<li className='mt-3'>
								User Manual Development: Assist in creating user manuals and
								documentation that provide clear instructions for end-users,
								ensuring they can effectively use the software.
							</li>
							<li className='mt-3'>
								Quality Assurance and Improvement: Contribute to product quality
								by actively participating in testing, suggesting improvements,
								and ensuring the software meets the desired quality standards.
							</li>
						</ul>
					</div>
				</div>
				<div className='w-11/12 px-5 bg-white rounded-xl mb-8'>
					<div className='flex items-center justify-between py-6'>
						<div className='flex items-center space-x-12'>
							<Image
								src={AOS}
								alt='home-page'
								width={80}
								height={80}
							/>
							<p className='text-2xl text-gray-500'>AOS Ltd</p>
						</div>
						<p className='text-2xl text-gray-500'>Software Tester Engineer</p>
					</div>
					<hr />
					<div className='my-4'>
						<p className='text-md font-medium text-gray-500 py-2 italic'>
							Transforming ICT in Africa
						</p>
						<p className='text-xl font-thin py-2'>RESPONSIBILITIES</p>
						<ul className='list-disc ml-5'>
							<li>
								Identified and reported software defects: I actively found
								issues in the software and promptly reported them to the
								developers.
							</li>
							<li className='mt-3'>
								Created detailed bug reports: I provided clear and comprehensive
								information about the defects, including their impact and steps
								to reproduce them.
							</li>
							<li className='mt-3'>
								Designed effective test cases: I carefully analyzed the software
								requirements and designed test cases to cover all necessary
								scenarios, ensuring thorough testing.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
