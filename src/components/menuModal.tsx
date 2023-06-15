import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
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
					<ul className='text-gray-500 bg-white h-screen lg:hidden'>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-blue-500 border-l-4 border-transparent transition duration-300'>
							<Link
								to='about'
								spy={true}
								smooth='easeInOutQuart'
								duration={800}
								offset={-70}
								onClick={onClose}
								className='mx-4 flex items-center space-x-2 py-3'
							>
								<UserIcon className='w-6 h-6 mr-4 text-blue-500 font-bold' />
								About
							</Link>
						</div>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-teal-400 border-l-4 border-transparent transition duration-300'>
							<Link
								to='experience'
								spy={true}
								smooth='easeInOutQuart'
								duration={800}
								offset={-70}
								onClick={onClose}
								className='mx-4 flex items-center space-x-2 py-3'
							>
								<ArrowTrendingUpIcon className='w-6 h-6 mr-4 text-teal-400 font-bold' />
								Experience
							</Link>
						</div>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-blue-500  border-l-4 border-transparent transition duration-300'>
							<Link
								to='projects'
								spy={true}
								smooth='easeInOutQuart'
								duration={800}
								offset={-70}
								onClick={onClose}
								className='mx-4 flex items-center space-x-2 py-3'
							>
								<TableCellsIcon className='w-6 h-6 mr-4 text-blue-500 font-bold' />
								Projects
							</Link>
						</div>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-fuchsia-900  border-l-4 border-transparent transition duration-300'>
							<Link
								to='skills'
								spy={true}
								smooth='easeInOutQuart'
								duration={800}
								offset={-70}
								onClick={onClose}
								className='mx-4 flex items-center space-x-2 py-3'
							>
								<ChartBarIcon className='w-6 h-6 mr-4 text-fuchsia-900 font-bold' />
								Skills
							</Link>
						</div>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-red-500  border-l-4 border-transparent transition duration-300'>
							<Link
								to='awards'
								spy={true}
								smooth='easeInOutQuart'
								duration={800}
								offset={-70}
								onClick={onClose}
								className='mx-4 flex items-center space-x-2 py-3'
							>
								<StarIcon className='w-6 h-6 mr-4 text-red-500 font-bold' />
								Awards
							</Link>
						</div>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-orange-500  border-l-4 border-transparent transition duration-300'>
							<Link
								to='education'
								spy={true}
								smooth='easeInOutQuart'
								duration={800}
								offset={-70}
								onClick={onClose}
								className='mx-4 flex items-center space-x-2 py-3'
							>
								<AcademicCapIcon className='w-6 h-6 mr-4 text-orange-500 font-bold' />
								Education
							</Link>
						</div>
						<div className='cursor-pointer hover:bg-gray-50 hover:border-amber-900  border-l-4 border-transparent transition duration-300'>
							<Link
								to='contacts'
								spy={true}
								smooth='easeInOutQuart'
								duration={800}
								offset={-70}
								onClick={onClose}
								className='mx-4 flex items-center space-x-2 py-3'
							>
								<EnvelopeIcon className='w-6 h-6 mr-4 text-amber-900 font-bold' />
								Contact
							</Link>
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
