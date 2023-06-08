import {
	AcademicCapIcon,
	ArrowTrendingUpIcon,
	ChartBarIcon,
	DocumentArrowDownIcon,
	EnvelopeIcon,
	StarIcon,
	TableCellsIcon,
	UserIcon,
} from '@heroicons/react/24/solid';
import { scroller } from 'react-scroll';
const SideBar = () => {
	const scrollToComponent = (name: string) => {
		scroller.scrollTo(name, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
		});
	};

	const handleCVClick = () => {
		window.location.href =
			'https://drive.google.com/file/d/1O-noZcpLQ1gO8eP3goWOCiNT-S2cKMV5/view?usp=drive_link';
	};
	return (
		<div className='h-screen w-1/6 fixed'>
			<div className='bg-gray-50 p-4'>
				<p className='text-3xl font-thin text-blue-800 px-4'>
					Leonce Iranyumva
				</p>
				<p className='text-sm px-4 py-2 text-gray-500'>Software Engineer</p>
			</div>
			<hr />
			<ul className='text-gray-500 bg-white h-screen'>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-blue-500 border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						onClick={() => scrollToComponent('about')}
					>
						<UserIcon className='w-6 h-6 mr-4 text-blue-500 font-bold' />
						About
					</li>
				</div>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-teal-400 border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						onClick={() => scrollToComponent('experience')}
					>
						<ArrowTrendingUpIcon className='w-6 h-6 mr-4 text-teal-400 font-bold' />
						Experience
					</li>
				</div>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-blue-500  border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						// onClick={() => scrollToComponent('projects')}
					>
						<TableCellsIcon className='w-6 h-6 mr-4 text-blue-500 font-bold' />
						Projects
					</li>
				</div>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-fuchsia-900  border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						onClick={() => scrollToComponent('skills')}
					>
						<ChartBarIcon className='w-6 h-6 mr-4 text-fuchsia-900 font-bold' />
						Skills
					</li>
				</div>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-red-500  border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						// onClick={() => scrollToComponent('awards')}
					>
						<StarIcon className='w-6 h-6 mr-4 text-red-500 font-bold' />
						Awards
					</li>
				</div>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-orange-500  border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						onClick={() => scrollToComponent('education')}
					>
						<AcademicCapIcon className='w-6 h-6 mr-4 text-orange-500 font-bold' />
						Education
					</li>
				</div>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-amber-900  border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						onClick={() => scrollToComponent('contacts')}
					>
						<EnvelopeIcon className='w-6 h-6 mr-4 text-amber-900 font-bold' />
						Contact
					</li>
				</div>
				<div className='cursor-pointer hover:bg-gray-50 hover:border-black  border-l-4 border-transparent transition duration-300'>
					<li
						className='mx-4 flex items-center space-x-2 py-3'
						onClick={() => handleCVClick()}
					>
						<DocumentArrowDownIcon className='w-6 h-6 mr-4 font-bold' />
						CV
					</li>
				</div>
			</ul>
		</div>
	);
};

export default SideBar;
