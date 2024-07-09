import Head from 'next/head';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
	const projects = [
		{
			title: 'Project One',
			description: 'This is a description of project one.',
			link: '#',
		},
		{
			title: 'Project Two',
			description: 'This is a description of project two.',
			link: '#',
		},
	];

	return (
		<div>
			<Head>
				<title>My Portfolio</title>
				<meta name="description" content="Personal portfolio using Next.js, Tailwind CSS, and Shadcn." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Hero />

			<section className="container mx-auto p-6 mt-20">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-slide-up">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<Project key={index} title={project.title} description={project.description} link={project.link} />
					))}
				</div>
			</section>

			<Footer />
		</div>
	);
}
