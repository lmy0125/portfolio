'use client';
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const pathname = usePathname();

	const navItems = [
		{ label: 'Home', href: '/' },
		// { label: 'Projects', href: '/projects' },
		// { label: 'Blogs', href: '/blogs' },
		{ label: 'Resume', href: '/resume' },
	];

	return (
		// <nav className="bg-white shadow-sm">
			<nav className="relative max-w-7xl mx-auto flex justify-center h-16">
				<div className="flex items-center space-x-8">
					{/* <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">Logo</span>
            </div> */}
					<div className="sm:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'inline-flex items-center pt-1 border-b-2 text-sm font-medium',
									pathname === item.href
										? 'border-[#408AF8] text-gray-900'
										: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
								)}>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</nav>
		// </nav>
	);
};

export default NavBar;
