'use client';
import { Project } from '@/types/project';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const SingleProduct = ({ project }: { project: Project }) => {
	const [activeImage, setActiveImage] = useState<StaticImageData | string>(project.image ?? '');
	return (
		<div className="bt-2 pb-20">
			<div className="flex lg:flex-row justify-between items-center flex-col mb-8">
				<h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight pb-1 text-neutral-700">
					{project.title}
				</h1>
				<div className="mt-3 sm:mt-0">
					{project.github && (
						<Link
							href={project.github}
							target="__blank"
							className="mr-3 inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left">
							Github
						</Link>
					)}
					{project.href && (
						<Link
							href={project.href}
							target="__blank"
							className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left">
							Live Preview
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
								<path d="M5 12l14 0"></path>
								<path d="M13 18l6 -6"></path>
								<path d="M13 6l6 6"></path>
							</svg>
						</Link>
					)}
				</div>
			</div>
			<motion.div
				initial={{
					opacity: 0,
					y: 30,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.5,
				}}
				key={project.slug}
				className="relative">
				{project.video ? (
					<video
						autoPlay
						loop
						controls
						muted
						playsInline
						className="z-10 mx-auto w-11/12 object-cover object-top" // needed because random black line at bottom of video
					>
						<source src={project.video} type="video/mp4" />
						Your browser does not support the video.
					</video>
				) : (
					<div className="relative h-64 md:h-96 overflow-hidden w-11/12 mx-auto">
						<Image src={project.image!} alt="thumbnail" fill className="object-cover object-top" />
					</div>
				)}
				{/* <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" /> */}
			</motion.div>
			{/* <div className="flex flex-row justify-center my-8 flex-wrap">
				{project.images?.map((image, idx) => (
					<button onClick={() => setActiveImage(image)} key={`image-thumbnail-${idx}`}>
						<Image
							src={image}
							alt="product thumbnail"
							height="1000"
							width="1000"
							className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
						/>
					</button>
				))}
			</div> */}
			<div className="max-w-2xl mx-auto mt-5">
				<div className="flex flex-wrap gap-2 md:mb-1 mt-2 md:mt-0">
					{project.stack?.map((stack: string) => (
						<Badge className="px-1 py-0 text-xs" variant="secondary" key={stack}>
							{stack}
						</Badge>
					))}
				</div>
				<div>
					<div className="lg:text-lg max-w-3xl text-neutral-500 mt-4">{project.description}</div>
				</div>
				<div className="prose lg:prose-lg max-w-none prose-stone text-neutral-900">{project?.content}</div>
			</div>
		</div>
	);
};
