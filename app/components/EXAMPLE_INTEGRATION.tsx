/**
 * EXAMPLE: How to integrate 360° view into your destination cards
 * 
 * This file shows you exactly how to modify your existing destination sections
 * to include 360-degree views.
 */

'use client';

import React from 'react';
import DestinationCard360 from './DestinationCard360';
import Image from 'next/image';

// ========================================
// EXAMPLE 1: Replace existing Image component with DestinationCard360
// ========================================

export const ExampleBefore = ({ destination }: { destination: any }) => {
	// BEFORE: Your current implementation
	return (
		<div className="relative h-40 lg:h-56 max-w-[80%] mx-auto overflow-hidden rounded-lg">
			<Image
				src={destination.image}
				alt={destination.title}
				fill
				className="object-cover transition-transform duration-700 hover:scale-110"
			/>
		</div>
	);
};

export const ExampleAfter = ({ destination }: { destination: any }) => {
	// AFTER: With 360° view support
	return (
		<DestinationCard360
			title={destination.title}
			image={destination.image}
			image360={destination.image360} // Add this property to your destination data
			description={destination.description}
			imageLeft={destination.imageLeft}
		/>
	);
};

// ========================================
// EXAMPLE 2: Updated destination data structure
// ========================================

export const ExampleDestinationData = [
	{
		title: '1. Lahore Fort (Shahi Qila)',
		image: '/images/lahore.jpg',
		// ADD THESE OPTIONAL FIELDS:
		image360: '/images/360/lahore-fort-360.jpg', // Self-hosted 360 image
		// OR use iframe360 for embedded tours:
		// iframe360: 'https://kuula.co/share/collection/XXXXX',
		description: 'A UNESCO World Heritage Site...',
		imageLeft: true
	},
	{
		title: '2. Badshahi Mosque',
		image: '/images/lahore.jpg',
		image360: '/images/360/badshahi-mosque-360.jpg', // Add 360 image
		description: 'One of the largest mosques...',
		imageLeft: false
	},
	// If you don't have 360 image, just omit image360/iframe360
	// The component will work normally without the 360 button
	{
		title: '3. Wazir Khan Mosque',
		image: '/images/lahore.jpg',
		// No image360 - will display as regular image
		description: 'Beautiful 17th century mosque...',
		imageLeft: true
	}
];

// ========================================
// EXAMPLE 3: Complete destination section integration
// ========================================

export const ExampleCompleteSection = ({ destinations, visibleSections }: any) => {
	return (
		<div className="space-y-8">
			{destinations.map((destination: any, idx: number) => (
				<div
					key={idx}
					className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center"
					style={{
						opacity: visibleSections.has('destinations') ? 1 : 0,
						transition: `opacity 0.8s ease-out ${idx * 0.15}s`
					}}
				>
					{/* Image Section - REPLACE THIS WITH DestinationCard360 */}
					<div
						className={`${destination.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
						style={{
							opacity: visibleSections.has('destinations') ? 1 : 0,
							transform: visibleSections.has('destinations')
								? 'translateX(0)'
								: destination.imageLeft
									? 'translateX(-60px)'
									: 'translateX(60px)',
							transition: `opacity 0.8s ease-out ${idx * 0.15 + 0.1}s, transform 0.8s ease-out ${idx * 0.15 + 0.1}s`
						}}
					>
						{/* CHANGE THIS: */}
						{/* FROM: <Image src={...} /> */}
						{/* TO: */}
						<DestinationCard360
							title={destination.title}
							image={destination.image}
							image360={destination.image360}
							iframe360={destination.iframe360}
							description={destination.description}
							imageLeft={destination.imageLeft}
							className="w-full"
						/>
					</div>

					{/* Description Section - stays the same */}
					<div className={`${destination.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
						<h3 className="text-xl md:text-2xl font-bold mb-3">
							{destination.title}
						</h3>
						<p>{destination.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

// ========================================
// QUICK START CHECKLIST:
// ========================================
/**
 * 1. Import DestinationCard360 component:
 *    import DestinationCard360 from '@/app/components/DestinationCard360';
 * 
 * 2. Add image360 or iframe360 to your destination data objects
 * 
 * 3. Replace <Image> component with <DestinationCard360>
 * 
 * 4. Add 360 images to /public/images/360/ folder (if using self-hosted)
 * 
 * 5. Test by hovering over destination images - you'll see "360° View" button
 * 
 * 6. Click the button to open the 360 viewer modal
 * 
 * 7. Use fullscreen button, drag to look around, or close with X/Escape
 */

