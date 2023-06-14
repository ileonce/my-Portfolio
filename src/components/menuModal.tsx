import React, { useEffect } from 'react';
import { useRef } from 'react';
import { scroller } from 'react-scroll';
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

const MenuModal = ({
	isVisible,
	onClose,
}: {
	isVisible: boolean;
	onClose: () => void;
}) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [onClose]);

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

	if (!isVisible) {
		return null;
	}
	return (
		<div className='z-50 fixed inset-0 bg-black bg-opacity-40 flex justify-start '>
			<div
				ref={modalRef}
				className='w-44 flex flex-col'
			>
				<div>
					<ul className='text-gray-500 bg-white h-screen hidden sm:block'>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-blue-500 border-l-4 border-transparent transition duration-300'>
							<li
								className='mx-4 flex items-center space-x-2 py-3'
								onClick={() => scrollToComponent('about')}
							>
								<UserIcon className='w-6 h-6 mr-4 text-blue-500 font-bold' />
								About
							</li>
						</div>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-teal-400 border-l-4 border-transparent transition duration-300 md:pt-8'>
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
			</div>
		</div>
	);
};

export default MenuModal;
