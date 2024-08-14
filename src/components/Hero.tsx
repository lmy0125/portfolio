'use client';
import React from 'react';
import Link from 'next/link';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { DATA } from '@/data/resume';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

export default function Hero({ fadeDelay }: { fadeDelay: number }) {
	const handleSendEmail = () => {
		window.location.href = `mailto:miliu@ucsd.edu?subject=Nice to meet you!&body=`;
	};

	return (
		<section id="hero" className="min-h-[350px] flex items-center">
			{/* <div className="h-96 p-10">
					<ThreeDScene />
				</div> */}
			<div className="mx-auto w-full space-y-8">
				<div className="flex space-x-4 items-center">
					<div className="flex-col flex space-y-1">
						<BlurFadeText
							delay={fadeDelay}
							className="text-4xl sm:text-6xl xl:text-8xl font-semibold tracking-tighter"
							yOffset={8}
							text={`${DATA.name} `}
						/>
						<BlurFadeText className="max-w-[600px] text-2xl" delay={fadeDelay} text={DATA.role} />
						<BlurFadeText
							className="max-w-[600px] text-lg text-gray-500"
							delay={fadeDelay}
							text={DATA.description}
						/>
						<BlurFade delay={fadeDelay} className="flex flex-row space-x-1">
							<Link
								href="https://github.com/lmy0125"
								className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-10')}
								rel="noopener noreferrer"
								target="_blank">
								<Icons.github className="size-6" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/mingyang-liu-891148196/"
								className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-10')}
								rel="noopener noreferrer"
								target="_blank">
								<Icons.linkedin className="size-6" />
							</Link>
							<Button onClick={handleSendEmail} variant="ghost" size="icon">
								<Icons.email className="size-6" />
							</Button>
						</BlurFade>
					</div>
					<BlurFade delay={fadeDelay}>
						<Avatar className="sm:size-48 size-40 border">
							<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
							<AvatarFallback>{DATA.initials}</AvatarFallback>
						</Avatar>
					</BlurFade>
				</div>
			</div>
		</section>
	);
}
