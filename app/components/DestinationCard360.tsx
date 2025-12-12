'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import View360 from './View360';
import { Globe } from 'lucide-react';

interface DestinationCard360Props {
	title: string;
	image: string;
	description: string;
	image360?: string; // Optional 360 image URL
	iframe360?: string; // Optional iframe URL for 360 tour (Kuula, Roundme, etc.)
	imageLeft?: boolean;
	className?: string;
}

const DestinationCard360: React.FC<DestinationCard360Props> = ({
	title,
	image,
	description,
	image360,
	iframe360,
	imageLeft = false,
	className = ''
}) => {
	const [is360Open, setIs360Open] = useState(false);
	const has360View = !!(image360 || iframe360);

	return (
		<>
			<div className={`relative group ${className}`}>
				<div className="relative h-40 lg:h-56 max-w-[80%] mx-auto overflow-hidden rounded-lg">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover transition-transform duration-700 hover:scale-110"
					/>
					
					{/* 360 View Button Overlay */}
					{has360View && (
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
							<button
								onClick={() => setIs360Open(true)}
								className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-[#f99621] hover:bg-[#e8851a] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
								style={{ backgroundColor: '#f99621', color: '#211f20' }}
							>
								<Globe className="w-5 h-5" />
								<span>360° View</span>
							</button>
						</div>
					)}

					{/* 360 Badge */}
					{has360View && (
						<div className="absolute top-2 right-2 bg-[#f99621] text-[#211f20] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-20" style={{ backgroundColor: '#f99621', color: '#211f20' }}>
							<Globe className="w-3.5 h-3.5" />
							<span>360°</span>
						</div>
					)}
				</div>
			</div>

			{/* 360 Viewer Modal */}
			{has360View && (
				<View360
					imageUrl={image360}
					iframeUrl={iframe360}
					title={title}
					isOpen={is360Open}
					onClose={() => setIs360Open(false)}
				/>
			)}
		</>
	);
};

export default DestinationCard360;

