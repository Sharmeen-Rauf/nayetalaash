'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, CalendarDays, MapPin, ShieldCheck, CheckCircle2, Search, FileText, Mountain, MessageCircle, Phone, Mail, Facebook, Instagram, Youtube, X } from 'lucide-react';
import Navbar from '@/app/components/Navbar';

const GroupToursPage = () => {
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle - starts transparent
	const [showFloatingWidget, setShowFloatingWidget] = useState(true);

	// Theme Colors
	const primaryOrange = '#f99621';
	const secondaryBlack = '#211f20';
	
	// WhatsApp click handler
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/923311438251', '_blank');
	};

	// Scroll detection for navbar transparency
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;
			const heroHeight = window.innerHeight;
			// Set isLight to true when scrolled past hero section
			setIsLight(scrollY > heroHeight * 0.8);
		};

		// Set initial state
		handleScroll();
		
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);


	// Animated Background Component
	const AnimatedBackground = ({ variant = 'default' }: { variant?: 'default' | 'orange' | 'dark' | 'light' }) => {
		return null;
	};

	return (
		<div className="relative min-h-screen font-sans overflow-x-hidden">
			<Navbar isLight={isLight} />

			{/* ====================== HERO SECTION ====================== */}
			<section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-[100px] sm:pt-[104px]" style={{ backgroundColor: secondaryBlack }}>
				{/* Background Image */}
				<div 
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ 
						backgroundImage: "url('/images/Home Banner - Idea.jpg')",
						filter: "brightness(0.3)",
					}}
				></div>

				{/* Theme Color Overlay */}
				<div className="absolute inset-0 z-[2]" style={{ background: `linear-gradient(135deg, ${secondaryBlack}90 0%, transparent 50%, ${primaryOrange}30 100%)` }}></div>

				{/* Animated Background Elements */}
				<div className="absolute inset-0 z-[3]">
					<AnimatedBackground variant="dark" />
				</div>

				{/* Main Content */}
				<div className="relative z-10 h-full flex items-center justify-center">
					<div className="text-center px-4">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
							<span className="font-autography" style={{ display: 'inline-block' }}>
								Group Tours
							</span>
							<br />
							<span className="block mt-4" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Travel Together, Explore Better
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
						Explore Pakistan’s rich history, culture and landscapes with our group packages covering the North, South, and Central regions.						</p>
					</div>
				</div>
			</section>

			{/* ====================== WEEKLY GROUP TOURS SECTION ====================== */}
			<section className="bg-white relative overflow-x-hidden pt-20 pb-8 md:pt-24 md:pb-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-8 px-2 sm:px-4">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							All Pakistan Group Tour Packages
						</h2>
						<p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed mt-4" style={{ color: `${secondaryBlack}90` }}>
							Explore Pakistan's diverse history, culture, and nature with our comprehensive group packages that cover the North, South, and Central regions.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Tour Package 1 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/group tour package 1.jpg"
									alt="3 Days – Murree, Patriata & Nathia Gali Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									3 Days – Murree, Patriata & Nathia Gali Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 2 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 2.jpg"
									alt="4 Days – Swat, Malam Jabba, Kalam & Mahodand Lake Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									4 Days – Swat, Malam Jabba, Kalam & Mahodand Lake Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 3 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 3.jpg"
									alt="5 Days – Kalam, Mahodand, Gabral & Shahi Bagh Adventure Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									5 Days – Kalam, Mahodand, Gabral & Shahi Bagh Adventure Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 4 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 4.jpg"
									alt="5 Days – Hunza, Attabad Lake & Khunjerab Pass Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									5 Days – Hunza, Attabad Lake & Khunjerab Pass Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 5 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 5.jpg"
									alt="7 Days – Hunza & Skardu Multi-Valley Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									7 Days – Hunza & Skardu Multi-Valley Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 6 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 6.jpg"
									alt="8 Days – Fairy Meadows, Hunza & Naltar Valley Group Expedition"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									8 Days – Fairy Meadows, Hunza & Naltar Valley Group Expedition
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 7 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 7.jpg"
									alt="4 Days – Neelum Valley, Taobat & Arang Kel Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									4 Days – Neelum Valley, Taobat & Arang Kel Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 8 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 8.png"
									alt="5 Days – Azad Kashmir (Keran, Sharda, Arang Kel, Ratti Gali) Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									5 Days – Azad Kashmir (Keran, Sharda, Arang Kel, Ratti Gali) Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 9 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 9.jpg"
									alt="5 Days – Skardu, Deosai Plains, Cold Desert & Khaplu Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									5 Days – Skardu, Deosai Plains, Cold Desert & Khaplu Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 10 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group tour package 10.jpg"
									alt="3 Days – Balochistan Coastal Belt (Ormara, Kund Malir, Hingol) Group Trip"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									3 Days – Balochistan Coastal Belt (Ormara, Kund Malir, Hingol) Group Trip
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 11 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group Tour package 11.png"
									alt="5 Days – Fairy Meadows & Nanga Parbat Base Camp Trek Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									5 Days – Fairy Meadows & Nanga Parbat Base Camp Trek Group Tour
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 12 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/Group Tour package 12.jpg"
									alt="7 Days – Gilgit, Hunza, Naltar & Khunjerab Group Explorer"
									fill
									className="object-cover hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: secondaryBlack }}>
									7 Days – Gilgit, Hunza, Naltar & Khunjerab Group Explorer
								</h3>
								<a 
									href="#" 
									className="font-medium transition-colors"
									style={{ color: primaryOrange }}
									onMouseEnter={(e) => { e.currentTarget.style.color = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.color = primaryOrange; }}
									onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
								>
									Read More
								</a>
							</div>
						</div>

						{/* Tour Package 13 - Empty slot, keeping structure for future */}
					</div>
				</div>
			</section>

			{/* ====================== HOW IT WORKS SECTION ====================== */}
			<section className="py-8 md:py-10 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-8 px-2 sm:px-4">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							How it works?
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Step 1 */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: primaryOrange }}>
								<Search className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>
								FIND A DESTINATION
							</h3>
							<p className="text-sm" style={{ color: `${secondaryBlack}80` }}>
								Look through our list of amazing tours updated regularly on the 'Tours' page or on this list.
							</p>
						</div>

						{/* Step 2 */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: primaryOrange }}>
								<FileText className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>
								PICK-UP
							</h3>
							<p className="text-sm" style={{ color: `${secondaryBlack}80` }}>
								Select the fixed-departure trip that best suits your requirements, budget, and schedule.
							</p>
						</div>

						{/* Step 3 */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: primaryOrange }}>
								<Phone className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>
								CONTACT US
							</h3>
							<p className="text-sm" style={{ color: `${secondaryBlack}80` }}>
								Call, email, or message us to confirm your booking or to customize a private tour tailored exactly to your group's needs.
							</p>
						</div>

						{/* Step 4 */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: primaryOrange }}>
								<Mountain className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>
								GO & EXPLORE NOW
							</h3>
							<p className="text-sm" style={{ color: `${secondaryBlack}80` }}>
								Get ready, pack your bags, and ENJOY your memorable journey with Nayi Talaash!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== OUR JOURNEYS SECTION ====================== */}
			<section className="py-8 md:py-10 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-8 px-2 sm:px-4">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Our Journeys
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
						{/* Journey Image 1 */}
						<div className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<Image 
								src="/images/skardu 2.jpg"
								alt="Group tour journey 1"
								fill
								className="object-cover hover:scale-110 transition-transform duration-300"
							/>
						</div>

						{/* Journey Image 2 */}
						<div className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<Image 
								src="/images/Hunza.jpg"
								alt="Group tour journey 2"
								fill
								className="object-cover hover:scale-110 transition-transform duration-300"
							/>
						</div>

						{/* Journey Image 3 */}
						<div className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<Image 
								src="/images/fairy meadows 2.jpg"
								alt="Group tour journey 3"
								fill
								className="object-cover hover:scale-110 transition-transform duration-300"
							/>
						</div>

						{/* Journey Image 4 */}
						<div className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<Image 
								src="/images/naran and kaghan.jpg"
								alt="Group tour journey 4"
								fill
								className="object-cover hover:scale-110 transition-transform duration-300"
							/>
						</div>

						{/* Journey Image 5 */}
						<div className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<Image 
								src="/images/azad kashmir.jpg"
								alt="Group tour journey 5"
								fill
								className="object-cover hover:scale-110 transition-transform duration-300"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== READY FOR TOUR CTA ====================== */}
			<section className="py-8 md:py-12 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
				<div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-[2]">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="px-4 md:px-6">
							<p className="text-white text-3xl font-autography mb-2">Ready for an unforgettable tour!</p>
							<h2 className="text-3xl md:text-4xl font-bold" style={{ color: primaryOrange }}>Plan your group trip with us</h2>
						</div>
						<div className="px-4 md:px-6">
							<button
								onClick={handleWhatsAppClick}
								className="px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
								style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
							>
								Customize A Tour
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== FOOTER ====================== */}
			<footer className="py-8 md:py-12 bg-white border-t relative overflow-hidden" style={{ borderColor: `${primaryOrange}30` }}>
				<AnimatedBackground variant="light" />
				
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 overflow-x-hidden">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
						{/* Column 1: Company Information */}
						<div>
							<Image 
								src="/images/Final....png"
								alt="Nayi Talaash Logo"
								width={200}
								height={80}
								className="h-16 sm:h-20 w-auto object-contain mb-4"
							/>
							<p className="text-sm mb-4 leading-relaxed" style={{ color: `${secondaryBlack}80` }}>
								Nayi Talaash helps travelers discover the beauty, culture, and hospitality of Pakistan through unforgettable journeys, expert tour guidance, and personalized travel experiences.
							</p>
							<div className="space-y-3">
								<div className="flex items-start gap-2">
									<Image 
										src="/images/flag.png"
										alt="Pakistan Flag"
										width={24}
										height={24}
										className="w-6 h-6 object-contain flex-shrink-0 mt-0.5"
									/>
									<p className="text-sm" style={{ color: `${secondaryBlack}80` }}>F-36 PECHS BLOCK 6,<br />Karachi, Pakistan</p>
								</div>
								<div className="flex items-center gap-2">
									<Mail className="w-4 h-4" style={{ color: primaryOrange }} />
									<a href="mailto:info@nayitalaash.com" className="text-sm transition-colors" style={{ color: `${secondaryBlack}80` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}80`}>
										info@nayitalaash.com
									</a>
								</div>
							</div>
						</div>

						{/* Column 2: Quick Links */}
						<div>
							<h3 className="font-bold mb-4 text-base" style={{ color: secondaryBlack }}>Quick Links</h3>
							<ul className="space-y-2">
								<li className="border-b border-gray-200 pb-2">
									<Link href="/" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Home</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/swat-kalam" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Pakistan Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/lahore-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>City Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/astore-diamer" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Destination</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/about" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>About Us</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/contact" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Contact Us</Link>
								</li>
							</ul>
						</div>

						{/* Column 3: What We Do */}
						<div>
							<h3 className="font-bold mb-4 text-base" style={{ color: secondaryBlack }}>What We Do</h3>
							<ul className="space-y-2">
								<li className="border-b border-gray-200 pb-2">
									<Link href="/customize-a-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Custom Tour Packages</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/group-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Family Tour Packages</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/customize-a-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Honeymoon Trips</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/skardu" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Adventure Tours</Link>
								</li>
								<li className="pb-2">
									<Link href="/lahore-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Cultural Experiences</Link>
								</li>
							</ul>
						</div>

						{/* Column 4: Connect */}
						<div>
							<h3 className="font-bold mb-4 text-base" style={{ color: secondaryBlack }}>Connect</h3>
							<div className="flex gap-3 mb-6">
								<a 
									href="https://www.facebook.com/share/1KDWBkecr5/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
								>
									<Facebook className="w-5 h-5 text-white" />
								</a>
								<a 
									href="https://www.instagram.com/nayi.talaash?igsh=OGd4dXViMDBxd3B2" 
									target="_blank" 
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
								>
									<Instagram className="w-5 h-5 text-white" />
								</a>
								<a 
									href="https://www.youtube.com/@nayetalash" 
									target="_blank" 
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
								>
									<Youtube className="w-5 h-5 text-white" />
								</a>
							</div>
							<p className="text-sm mb-4 leading-relaxed" style={{ color: `${secondaryBlack}80` }}>
								Keep up to date with latest news and updates about Nayi Talaash, simply subscribe with your email address.
							</p>
							<div className="flex gap-2">
								<input 
									type="email" 
									placeholder="Email address" 
									className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
									style={{ color: secondaryBlack }}
								/>
								<button 
									className="px-4 py-2 rounded transition-colors"
									style={{ backgroundColor: primaryOrange, color: 'white' }}
									onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8851a'; }}
									onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = primaryOrange; }}
								>
									<ArrowRight className="w-5 h-5" style={{ color: 'white' }} />
								</button>
							</div>
						</div>
					</div>

					{/* Copyright */}
					<div className="text-center pt-8 border-t" style={{ borderColor: `${primaryOrange}30` }}>
						<p className="text-sm" style={{ color: `${secondaryBlack}70` }}>© 2025 Nayi Talaash. All rights reserved.</p>
					</div>
				</div>
			</footer>

			{/* Floating Contact Widget - Left Side */}
			{showFloatingWidget && (
				<div className="fixed bottom-6 left-6 z-[90] flex flex-col items-center gap-3">
					{/* Phone Button */}
					<a
						href="tel:+923311438251"
						className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50 group"
						aria-label="Call us"
						style={{
							boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
						}}
					>
						<Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
					</a>
					
					{/* WhatsApp Button with Text Bubble */}
					<div className="relative group">
						<a
							href="https://wa.me/923311438251"
							target="_blank"
							rel="noopener noreferrer"
							className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50"
							aria-label="Contact us on WhatsApp"
							style={{
								boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
							}}
						>
							<MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
						</a>
						{/* Text Bubble - Always visible, changes text on hover */}
						<div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap">
							<div className="bg-white rounded-lg px-4 py-2 shadow-lg relative">
								<span className="text-sm font-medium text-gray-800 block group-hover:hidden">Contact us</span>
								<span className="text-sm font-medium text-gray-800 hidden group-hover:block">WhatsApp</span>
								{/* Arrow pointing to button */}
								<div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
							</div>
						</div>
					</div>
					
					{/* Close/Hide Button */}
					<button
						onClick={() => setShowFloatingWidget(false)}
						className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 hover:bg-gray-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
						aria-label="Hide contact widget"
					>
						<X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
					</button>
				</div>
			)}
			
			{/* Show Widget Button (when hidden) */}
			{!showFloatingWidget && (
				<button
					onClick={() => setShowFloatingWidget(true)}
					className="fixed bottom-6 left-6 z-[90] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
					aria-label="Show contact widget"
					style={{
						boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
					}}
				>
					<MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
				</button>
			)}
		</div>
	);
};

export default GroupToursPage;


