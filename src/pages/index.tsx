import SideBar from '@/components/sideBar';
import About from '../components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Education from '@/components/education';
import Contacts from '@/components/contacts';
import { Element } from 'react-scroll';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MenuModal from '@/components/menuModal';
import { useState } from 'react';
import BACKGROUND from '../images/bg.png';

export default function Home() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<header className='fixed top-0 left-0 bg-white z-50 w-full flex items-center p-3 border-b-2 border-blue-400 lg:hidden'>
				<div className='w-full flex justify-center '>
					<Bars3Icon
						className='w-10 h-10 cursor-pointer ml-4 absolute top-2 left-0 text-blue-400'
						onClick={() => setIsOpen(true)}
					/>
					<div className='text-center'>
						<p className='text-xl font-bold text-blue-400'>Leonce Iranyumva</p>
						<p className='text-sm text-gray-500 '>Software Engineer</p>
					</div>
				</div>
			</header>
			<main className='flex'>
				<div className='w-1/6  hidden lg:block'>
					<SideBar />
				</div>
				<div className='w-6/6 mt-16 lg:mt-0 overflow-y-auto lg:w-5/6'>
					<Element name='about'>
						<About />
					</Element>
					<Element name='experience'>
						<Experience />
					</Element>
					<Element name='projects'>{/* <Projects /> */}</Element>
					<Element name='skills'>
						<Skills />
					</Element>
					<Element name='awards'>{/* <Awards /> */}</Element>
					<Element name='education'>
						<Education />
					</Element>
					<Element name='contacts'>
						<Contacts />
					</Element>
				</div>
			</main>
			<MenuModal
				isVisible={isOpen}
				onClose={closeModal}
			/>
		</div>
	);
}
