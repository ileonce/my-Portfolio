import SideBar from '@/components/sideBar';
import About from '../components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Awards from '@/components/awards';
import Education from '@/components/education';
import Contacts from '@/components/contacts';
import { Element } from 'react-scroll';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Leonce-Portfolio</title>
			</Head>
			<div className='flex'>
				<div className='w-1/6'>
					<SideBar />
				</div>
				<div className='w-5/6 bg-gray-100'>
					<Element name='about'>
						<About />
					</Element>
					<Element name='experience'>
						<Experience />
					</Element>
					<Element name='projects'>
						<Projects />
					</Element>
					<Element name='skills'>
						<Skills />
					</Element>
					<Element name='awards'>
						<Awards />
					</Element>
					<Element name='education'>
						<Education />
					</Element>
					<Element name='contacts'>
						<Contacts />
					</Element>
				</div>
			</div>
		</>
	);
}
