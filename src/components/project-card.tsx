import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Icons } from '@/components/icons';

interface Props {
	title: string;
	route: string;
	description: string;
	dates: string;
	tags: readonly string[];
	image?: string;
	video?: string;
	href?: string;
	github?: string;
	className?: string;
}

export function ProjectCard({ title, route, description, dates, tags, href, github, image, video, className }: Props) {
	return (
		<Card
			className={'flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full'}>
			<Link href={`/projects/${route}`} className={cn('block cursor-pointer', className)}>
				{video && (
					<video
						src={video}
						autoPlay
						loop
						muted
						playsInline
						className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
					/>
				)}
				{image && (
					<div className="relative h-40 w-full overflow-hidden object-cover object-top ">
						<div className="absolute top-2 bottom-0 left-2 right-2">
							<Image src={image} alt={title} fill />
						</div>
					</div>
				)}
			</Link>
			<CardHeader className="px-2">
				<div className="space-y-1">
					<Link href={`/projects/${route}`}>
						<CardTitle className="mt-1 text-base">{title}</CardTitle>
					</Link>

					<time className="font-sans text-xs">{dates}</time>
					<Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
						{description}
					</Markdown>
				</div>
			</CardHeader>
			<CardContent className="mt-auto flex flex-col px-2">
				{tags && tags.length > 0 && (
					<div className="mt-2 flex flex-wrap gap-1">
						{tags?.map((tag) => (
							<Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="px-2 pb-2">
				<div className="flex flex-row flex-wrap items-start gap-1">
					{href && (
						<Link href={href} target="_blank">
							<Badge className="flex gap-2 px-2 py-1 text-[10px]">
								<Icons.globe className="size-3" />
								Website
							</Badge>
						</Link>
					)}
					{github && (
						<Link href={github} target="_blank">
							<Badge className="flex gap-2 px-2 py-1 text-[10px]">
								<Icons.github className="size-3" />
								Source
							</Badge>
						</Link>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
