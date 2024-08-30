import Head from 'next/head';
import Footer from '../components/Footer';
import { HackathonCard } from '@/components/hackathon-card';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';
import ThreeDScene from '@/components/ThreeDScene';
import Meteors from '@/components/magicui/meteors';
import Hero from '@/components/Hero';
import BentoInfo from '@/components/BentoInfo';

const BLUR_FADE_DELAY = 0.06;

export default function Home() {
	return (
		<main className="overflow-hidden relative">
			<Meteors number={10} />
			<div className="flex flex-col min-h-[100dvh] space-y-10 flex-grow px-8 py-8 max-w-4xl mx-auto ">
				<Hero fadeDelay={BLUR_FADE_DELAY} />

				<section id="skills">
					<div className="flex min-h-0 flex-col">
						<BlurFade delay={BLUR_FADE_DELAY * 5}>
							<div className="flex flex-col items-center justify-center text-center mb-4">
								<div className="space-y-2">
									<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1">
										About Me
									</div>
									<p className="text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										I am a master graduate from UCSD with skill sets in web development.
									</p>
								</div>
							</div>
						</BlurFade>
						<BlurFade delay={BLUR_FADE_DELAY * 8}>
							<BentoInfo />
						</BlurFade>
					</div>
				</section>

				<section id="projects">
					<div className="w-full py-12">
						<BlurFade delay={BLUR_FADE_DELAY * 11}>
							<div className="flex flex-col items-center justify-center text-center">
								<div className="space-y-2 mb-4">
									<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1">
										My Projects
									</div>
									{/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2> */}
									<p className="text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										I&apos;ve worked on a variety of projects, from simple websites to complex web
										applications.
									</p>
								</div>
							</div>
						</BlurFade>
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mx-auto">
							{projects.map((project, id) => (
								<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
									<ProjectCard
										route={project.slug}
										key={project.title}
										title={project.title}
										description={project.description}
										dates={project.dates}
										tags={project.stack}
										image={project.image}
										video={project.video}
										href={project.href}
										github={project.github}
									/>
								</BlurFade>
							))}
						</div>
					</div>
				</section>
				{/* <section id="hackathons">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 13}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									Hackathons
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									During my time in university, I attended {DATA.hackathons.length}+ hackathons. People from
									around the country would come together and build incredible things in 2-3 days. It was
									eye-opening to see the endless possibilities brought to life by a group of motivated and
									passionate individuals.
								</p>
							</div>
						</div>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 14}>
						<ul className="mb-4 ml-4 divide-y divide-dashed border-l">
							{DATA.hackathons.map((project, id) => (
								<BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
									<HackathonCard
										title={project.title}
										description={project.description}
										location={project.location}
										dates={project.dates}
										image={project.image}
										links={project.links}
									/>
								</BlurFade>
							))}
						</ul>
					</BlurFade>
				</div>
			</section>
			<section id="contact">
				<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className="space-y-3">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								Contact
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
							<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Want to chat? Just shoot me a dm{' '}
								<Link href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">
									with a direct question on twitter
								</Link>{' '}
								and I&apos;ll respond whenever I can. I will ignore all soliciting.
							</p>
						</div>
					</BlurFade>
				</div>
			</section> */}
			</div>
		</main>
	);
}
