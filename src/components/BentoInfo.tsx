import { Laptop, GraduationCap, Briefcase } from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import IconCloud from '@/components/magicui/icon-cloud';
import { DATA } from '@/data/resume';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const cloudIcons = [
	'typescript',
	'javascript',
	'java',
	'react',
	'html5',
	'css3',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'amazonaws',
	'postgresql',
	'firebase',
	'nginx',
	'vercel',
	'jest',
	'cypress',
	'docker',
	'git',
	'jira',
	'github',
	'gitlab',
	'visualstudiocode',
	'androidstudio',
	'figma',
];

const features = [
	{
		Icon: Laptop,
		name: 'Skills',
		description: 'Full Stack Web Developer',
		href: '/',
		cta: 'Learn more',
		background: (
			<div className="absolute md:-top-10 left-1/2 transform -translate-x-1/2 h-full w-full ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_50%)] group-hover:scale-105 p-3 content-center">
				<IconCloud iconSlugs={cloudIcons} />
			</div>
		),
		className: 'md:col-start-1 md:col-end-2 md:row-span-2',
	},
	{
		Icon: Briefcase,
		name: 'Experience',
		description: 'Software Engineer',
		href: '/',
		cta: 'Learn more',
		background: (
			<div className="absolute w-full flex flex-col space-y-6 p-10 group-hover:scale-105 [mask-image:linear-gradient(to_top,transparent_0%,#000_20%)]">
				{DATA.work.map((work, id) => (
					<ResumeCard
						key={work.company}
						logoUrl={work.logoUrl}
						altText={work.company}
						title={work.company}
						subtitle={work.title}
						href={work.href}
						badges={work.badges}
						period={`${work.start} - ${work.end ?? 'Present'}`}
						description={work.description}
					/>
				))}
			</div>
		),
		className: 'md:col-start-2 md:col-span-2 md:row-start-1 md:row-end-3',
	},
	{
		Icon: GraduationCap,
		name: 'Education',
		description: 'University of California, San Diego',
		href: '/',
		cta: 'Learn more',
		background: (
			<div className="absolute md:left-64 flex min-h-0 flex-row space-x-2 items-center px-8 md:px-10 py-10 md:py-8 group-hover:scale-105">
				<Avatar className="border size-28 m-auto bg-muted-background dark:bg-foreground">
					<AvatarImage
						src="/images/ucsd.png"
						alt="University of California, San Diego"
						className="object-contain"
					/>
					<AvatarFallback>University of California, San Diego</AvatarFallback>
				</Avatar>
				<div className="flex flex-col space-y-2">
					{DATA.education.map((education, idx) => (
						<div key={idx} className="flex flex-col items-start justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-start justify-center font-semibold leading-none text-xs sm:text-sm">
								{education.degree}
							</h3>
							<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{`${education.start} - ${education.end}`}</div>
						</div>
					))}
				</div>
			</div>
		),
		className: 'md:col-start-1 md:col-span-3 md:min-h-[180px]',
	},
];

export default function BentoInfo() {
	return (
		<BentoGrid className="md:grid-rows-3">
			{features.map((feature) => (
				<BentoCard key={feature.name} {...feature} />
			))}
		</BentoGrid>
	);
}
