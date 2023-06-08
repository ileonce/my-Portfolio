import React from 'react';

const Awards = () => {
	return (
		<div>
			<div className='bg-blue-300 text-white p-6 text-5xl font-thin'>
				<p>AWARDS</p>
			</div>
			<div className='flex flex-col w-2/5 p-8 m-8 bg-white'>
				<p className='text-blue-500 text-2xl pb-4'>Lorem Ipsum</p>
				<p className='text-lg text-orange-800 font-medium pb-4'>
					Lorem Ipsum - Rwanda Winner | 01 JAN 2023
				</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
			</div>
		</div>
	);
};

export default Awards;
