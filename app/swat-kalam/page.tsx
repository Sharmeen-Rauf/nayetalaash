'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';

const SwatKalamPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
	const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

	// Theme Colors
	const primaryOrange = '#f99621';
	const secondaryBlack = '#211f20';
	
	// Dynamic logo based on scroll position
	const logoImage = isLight ? '/images/Final....png' : '/images/logo landscape(white).png';
	
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

	return (
		<div className="relative min-h-screen font-sans overflow-x-hidden">
			{/* --- 1. Two-Tier Navbar --- */}
			{/* Top Bar - Dark Background with Contact & Social */}
			<div className="fixed top-0 left-0 right-0 z-[110] bg-[#211f20]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between py-1 sm:py-1.5">
						{/* Left: Contact Info */}
						<div className="flex items-center gap-2 sm:gap-4 text-white text-[10px] sm:text-xs">
							<a href="tel:+92331438251" className="flex items-center gap-1 hover:text-[#f99621] transition-colors">
								<Phone className="w-3 h-3" style={{ color: '#f99621' }} />
								<span className="hidden sm:inline">+92 331 438251</span>
								<span className="sm:hidden">+92 331...</span>
							</a>
							<a href="mailto:info@nayitalaash.com" className="flex items-center gap-1 hover:text-[#f99621] transition-colors">
								<Mail className="w-3 h-3" style={{ color: '#f99621' }} />
								<span className="hidden md:inline">info@nayitalaash.com</span>
								<span className="md:hidden text-[9px]">info@...</span>
							</a>
						</div>

						{/* Right: Social Media Icons & Customize Button */}
						<div className="flex items-center gap-1.5">
							{/* Social Media Icons - Round with Hover Effects */}
							<div className="flex items-center gap-0.5">
								{/* Facebook */}
								<a 
									href="https://www.facebook.com/nayetalash" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
									aria-label="Facebook"
								>
									<Facebook className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
								</a>
								
								{/* Instagram */}
								<a 
									href="https://www.instagram.com/nayetalash" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
									aria-label="Instagram"
								>
									<Instagram className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
								</a>
								
								{/* YouTube */}
								<a 
									href="https://www.youtube.com/@nayetalash" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
									aria-label="YouTube"
								>
									<Youtube className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
								</a>
							</div>

							{/* Customize A Tour Button */}
							<button
								onClick={handleWhatsAppClick}
								className="px-2 py-1 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-bold text-[#211f20] hover:bg-[#e8851a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f99621]/50 ml-0.5"
								style={{ backgroundColor: '#f99621' }}
							>
								<span className="hidden sm:inline">CUSTOMIZE A TOUR</span>
								<span className="sm:hidden">CUSTOMIZE</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation Bar - Reduced Height */}
			<header className={`fixed top-[32px] sm:top-[36px] left-0 right-0 z-[100] backdrop-blur-sm transition-all duration-300 ${
				isLight 
					? 'bg-white/95 border-b border-gray-200 shadow-[0_6px_12px_rgba(0,0,0,0.06)]' 
					: 'bg-transparent border-b border-transparent shadow-none'
			}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between py-2 sm:py-2.5">
						{/* Logo */}
						<div className="flex items-center">
							<Link href="/">
								<Image 
									src={logoImage}
									alt="Nayi Talaash Logo"
									width={160}
									height={50}
									className="h-10 sm:h-12 w-auto object-contain"
								/>
							</Link>
						</div>

						{/* Desktop Navigation Links */}
						<nav className="hidden lg:flex items-center gap-1">
							<Link href="/" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>HOME</Link>
							{/* PAKISTAN TOURS with Dropdown */}
							<div className="relative group">
								<Link href="/#tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative flex items-center gap-1 ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									PAKISTAN TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</Link>
								
								{/* Dropdown Menu */}
								<div className="absolute top-full left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
									<div className="bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden">
										<ul className="py-1">
											<li>
												<Link href="/swat-kalam" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Swat Kalam Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/#tours" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Hunza Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/#tours" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Skardu Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/#tours" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Nathia Gali And Murree Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/#tours" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Neelum Valley Azad Kashmir Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/#tours" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Kumrat Valley Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/#tours" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Naran Kaghan Tour Packages
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<Link href="/#city-tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative group ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
								<span className="flex items-center gap-1">
									CITY TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</span>
							</Link>
							<Link href="/#group-tours" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>GROUP TOUR</Link>
							<Link href="/#destination" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>DESTINATION</Link>
							<Link href="/about" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>ABOUT US</Link>
							<Link href="/contact" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>CONTACT US</Link>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden p-2 rounded-lg transition-colors"
							style={{ color: isLight ? secondaryBlack : 'white' }}
							aria-label="Toggle navigation menu"
						>
							{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Side Navigation Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-full max-w-sm z-[115] shadow-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
				style={{ backgroundColor: '#f8f9fa' }}
			>
				{/* Clickable Overlay to close menu */}
				{isMenuOpen && (
					<div 
						className="fixed inset-0 bg-black/50 z-[-1] backdrop-blur-sm" 
						onClick={() => setIsMenuOpen(false)}
						aria-hidden="true"
					/>
				)}
				<div className="p-6 sm:p-8 flex flex-col h-full">
					{/* Close Button */}
					<button
						onClick={() => setIsMenuOpen(false)}
						className="absolute top-6 right-6 p-2 rounded-full text-white transition-colors hover:bg-[#e8851a]"
						style={{ backgroundColor: '#f99621' }}
						aria-label="Close navigation menu"
					>
						<X className="w-6 h-6" />
					</button>

					{/* Logo */}
					<div className="mt-12 mb-8">
						<Link href="/">
							<Image 
								src={logoImage}
								alt="Nayi Talaash Logo"
								width={150}
								height={50}
								className="h-12 w-auto object-contain"
							/>
						</Link>
					</div>

					{/* Nav Links */}
					<nav className="flex flex-col space-y-2 flex-grow">
						<Link href="/" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
							HOME
						</Link>
						<Link href="/#tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
							PAKISTAN TOURS
						</Link>
						<Link href="/#city-tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
							CITY TOURS
						</Link>
						<Link href="/#group-tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
							GROUP TOUR
						</Link>
						<Link href="/#destination" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
							DESTINATION
						</Link>
						<Link href="/about" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
							ABOUT US
						</Link>
						<Link href="/contact" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
							CONTACT US
						</Link>
					</nav>

					{/* Footer Info in Menu */}
					<div className="mt-auto pt-6 border-t border-gray-300">
						<div className="flex items-center gap-3 mb-3">
							<a href="https://www.facebook.com/nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
								<Facebook className="w-5 h-5 text-white stroke-[white]" />
							</a>
							<a href="https://www.instagram.com/nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
								<Instagram className="w-5 h-5 text-white stroke-[white]" />
							</a>
							<a href="https://www.youtube.com/@nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
								<Youtube className="w-5 h-5 text-white stroke-[white]" />
							</a>
						</div>
						<p className="text-gray-600 text-sm">
							Explore the unknown with us.
						</p>
						<p className="text-gray-500 text-xs mt-2">
							© 2024 Nayi Talaash. All rights reserved.
						</p>
					</div>
				</div>
			</div>

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

				{/* Main Content */}
				<div className="relative z-10 h-full flex items-center justify-center">
					<div className="text-center px-4">
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
							<span className="hero-text-reveal hero-text-delay-1" 
								style={{ 
									color: primaryOrange, 
									display: 'inline-block'
								}}>
								Swat Kalam Tour Packages
							</span>
						</h1>
						<p className="text-sm sm:text-xs md:text-base text-white font-medium max-w-2xl mx-auto leading-relaxed hero-text-reveal hero-text-delay-2">
							Discover the breathtaking beauty of Swat Valley and Kalam - Switzerland of Pakistan with our carefully crafted tour packages.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== CUSTOMIZED SWAT TOUR PACKAGES 2025 ====================== */}
			<section className="py-6 md:py-8 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Customized Swat Tour Packages 2025
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							These Kalam Swat Tour Packages can be custom-built for you to have the experience you expect from us as professional Tour Operators in Pakistan. You can choose from the list below or customize your Swat Kalam Tours according to your requirements.
						</p>
					</div>
					
					{/* 8 Tour Packages Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 md:px-8">
						{[
							{ 
								title: '4 Days Kalam, Mahodand Lake, Malam Jabba, and Green Top Tour',
								image: '/images/swat.jpg'
							},
							{ 
								title: '3 Days Kalam, Mahudand Lake, and Malam Jabba Tour',
								image: '/images/swat.jpg'
							},
							{ 
								title: '5 Days Relaxed Kalam, Mahodand Lake, Malam Jabba, Green Top, and Blue Water Tour',
								image: '/images/swat.jpg'
							},
							{ 
								title: '5 Days Kalam, Mahudand Lake, Malam Jabba, and Desan Top Tour',
								image: '/images/swat.jpg'
							},
							{ 
								title: '7 Days Malam Jabba, Kalam, and Nathia Gali Tour',
								image: '/images/swat.jpg'
							},
							{ 
								title: '7 Days Malam Jabba, Kalam, Swat to Kumrat Valley Tour',
								image: '/images/swat.jpg'
							},
							{ 
								title: '10 Days Malam Jabba, Kalam, and Hunza Valley Gilgit Tour',
								image: '/images/swat.jpg'
							},
							{ 
								title: '2 Days Malam Jabba Swat Tour',
								image: '/images/swat.jpg'
							},
						].map((item, idx) => (
							<div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
								<div className="relative w-full aspect-[2/1] overflow-hidden">
									<Image 
										src={item.image}
										alt={item.title}
										fill
										className="object-cover hover:scale-110 transition-transform duration-500"
									/>
								</div>
								<div className="p-3">
									<p className="font-medium leading-normal" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										{item.title}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== PUBLIC SWAT KALAM TOUR PACKAGES 2025 ====================== */}
			<section className="py-6 md:py-8 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					{/* Main Heading and Intro */}
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Public Swat Kalam Tour Packages 2025
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							Nayi Talaash offers these swat tour packages to Swat Kalam Valley throughout the year. You can join them as per your schedule, individually or with your group. Here are the Swat Kalam Valley Tours that you can choose from.
						</p>
					</div>

					{/* Two Tour Package Images */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/swat.jpg"
									alt="3 Days Malam Jabba, Kalam Swat Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									3 Days Malam Jabba, Kalam Swat Tour
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/swat.jpg"
									alt="2 Days Malam Jabba Swat Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									2 Days Malam Jabba Swat Tour
								</p>
							</div>
						</div>
					</div>

					{/* Client Category Section */}
					<div className="max-w-4xl mx-auto mb-8">
						<h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Client Category of Customized Swat Tours:
						</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
									Swat Tour Packages / Couple Tours / Honeymoon Tour are designed to help the newlyweds cherish the new life together with all the luxury and solitude, surrounded by the beautiful nature.
								</p>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
									Swat Family Tour Packages are designed to create a fun, luxurious, and secure environment for your loved ones to intensify the blood bond and acquire memories for a lifetime.
								</p>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
									Swat Students Tours / Friends Group Tour Packages are designed to have all the fun engaging activities and games for laughing together, dancing together, and more importantly exploring the adventurous destinations together without the hassle of planning all the bits of the tour. You only have to decide what to pack for that memorable tour with your besties.
								</p>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
									Swat Corporate Groups Tour Packages are designed to create an environment for the employees to develop a closer connection with each other, enhance their potential for team building, and entertain themselves with nature outside their usual office environment.
								</p>
							</li>
						</ul>
					</div>

					{/* Departure Cities Section */}
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: secondaryBlack, fontSize: '24px' }}>
							We have
						</h3>
						<ul className="space-y-2 mb-4">
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
									Swat Tour Packages from Lahore
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
									Swat Tour Packages from Karachi
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
									Swat Tour Packages from Islamabad
								</p>
							</li>
						</ul>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							You can also customize these tours from other cities in Pakistan.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== MOST POPULAR DESTINATIONS AND ATTRACTIONS IN SWAT VALLEY ====================== */}
			<section className="py-6 md:py-8 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Most Popular Destinations and Attractions to Visit in Swat Valley:
						</h2>
						<p className="leading-normal max-w-4xl mx-auto" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							Swat Valley is blessed with beautiful valleys, waterfalls, and lakes. We have created a list of some famous tourist places to visit in Swat Kalam and a little Swat Kalam Valley travel guide.
						</p>
					</div>
					
					{/* 18 Destinations with Alternating Layout */}
					<div className="space-y-8">
						{[
							{ 
								title: 'Kalam Valley', 
								image: '/images/swat.jpg',
								description: 'Kalam Valley, meaning "Blue Water" in Pashto, is located in the Hindukush mountain range. It serves as the gateway to the upper valleys of Swat and Dir, offering excellent views of Falaksar Peak. The valley provides comfortable accommodations, delicious food, and welcomes tourists in both summer and winter.',
								imageLeft: true
							},
							{ 
								title: 'Malam Jabba', 
								image: '/images/swat.jpg',
								description: 'Malam Jabba is located northwest of Mingora City, about 1-2 hours journey from Mingora. It is a hilltop skiing resort that offers winter adventure sports including skiing, chair lift, and zip lining when the slope is snow-covered. Hotels are available for accommodation.',
								imageLeft: false
							},
							{ 
								title: 'Ushu Forest (Ushu Valley)', 
								image: '/images/swat.jpg',
								description: 'Ushu Forest is located 8 km northeast of Kalam. It features a dense Deodar forest and is easily accessible without a vehicle. Along the way, you can find tuck shops, hotels, campsites, and restaurants.',
								imageLeft: true
							},
							{ 
								title: 'Matiltan Waterfall and Chashma-e-Shifa', 
								image: '/images/swat.jpg',
								description: 'The Ushu road leads to Matiltan Village at 9,000 ft. The main attractions include Matiltan Waterfall and Kalam Glacier (seasonal). Hotels and restaurants are available. Chashma-e-Shifa, meaning "Healing Fountain," is believed to have healing properties due to minerals or local stories.',
								imageLeft: false
							},
							{ 
								title: 'Mahudand Lake', 
								image: '/images/swat.jpg',
								description: 'Mahudand Lake is a glacial lake formed by melting waters from the Hindukush Range. It appears broader, denser, and calmer than a river. The lake is popular for summer tourism but closes in winter due to heavy snowfall and the Kalam Glacier blocking the road. Tuck shops, restaurants, and meadows for camping are available.',
								imageLeft: true
							},
							{ 
								title: 'Saifullah Lake', 
								image: '/images/swat.jpg',
								description: 'Saifullah Lake is further into Ushu Valley, approximately 30-45 minutes from Mahudand. It is accessible by foot or 4x4 vehicle.',
								imageLeft: false
							},
							{ 
								title: 'Desan Meadows', 
								image: '/images/swat.jpg',
								description: 'Desan Meadows is located near Kalam Valley and is accessible by jeep from Kalam or Utror Valley. It features lush green meadows and heavenly views of surrounding valleys and lakes such as Godar Lake, Dararo Lake, and Zahro Lake.',
								imageLeft: true
							},
							{ 
								title: 'Green Top', 
								image: '/images/swat.jpg',
								description: 'Green Top, also known as "Kalam View Point," is popular for mesmerizing views. It is accessible by jeeps or hiking. A small village called Boyun Village is located at the top, known for its lush green surroundings in summer.',
								imageLeft: false
							},
							{ 
								title: 'Utror Valley', 
								image: '/images/swat.jpg',
								description: 'Utror Valley (also Utror or Aror) serves as a center point or base camp for exploring various less-explored valleys like Swat KPK, Gabral Valley, Kumrat Valley, Dhan Valley, and Kalam Valley. Nearby lakes include Kundol Lake, Spinkhwar (Spinkhor) Lake, and the twin lakes of Pari and Paristan.',
								imageLeft: true
							},
							{ 
								title: 'Gabral Valley', 
								image: '/images/swat.jpg',
								description: 'Gabral Valley is located northwest of Swat Valley and Utror Valley, touching the foothills of the Himalayas. Going deep into the valley leads to Chota Banda Meadows and Shahi Bagh. Gabral Valley is another heaven for tourists.',
								imageLeft: false
							},
							{ 
								title: 'Blue Water Kalam Swat', 
								image: '/images/swat.jpg',
								description: 'Blue Water is approximately 10-15 km from Kalam-Bazaar, accessible by jeep, taking about 2 hours from Kalam. It is a summer destination that gained fame after the former Prime Minister of Pakistan, Mr. Imran Khan, visited the place.',
								imageLeft: true
							},
							{ 
								title: 'Badgoi Pass', 
								image: '/images/swat.jpg',
								description: 'Badgoi is a mountain pass between Kalam and Upper Dir District, leading to Thal in Upper Dir, located on the Utror-Dir road. Hawa ka Darra and Dasht-e-Lalla top are "heavenly places" on this road, accessible by jeep from Kalam, Kumrat, or Thal, taking 4-5 hours.',
								imageLeft: false
							},
							{ 
								title: 'Shangla Top', 
								image: '/images/swat.jpg',
								description: 'Shangla Top is a breathtaking hilltop destination in Swat Valley, approximately 20 kilometers from Khwazakhela City. It is located on the N90 Highway, which connects Kohistan with Swat Valley. Economical and luxury hotels are available. Spring and Summer are the best time to visit.',
								imageLeft: true
							},
							{ 
								title: 'Khwazakhela to Besham Route', 
								image: '/images/swat.jpg',
								description: 'The N90 Highway connects Swat with Kohistan, starting from Khwazakhela City in Swat and ending at Besham City in Kohistan. The highway is approximately 65-70 km long and is mostly used by traders and tourists.',
								imageLeft: false
							},
							{ 
								title: 'Bahrain', 
								image: '/images/swat.jpg',
								description: 'Bahrain is located on the Chakdara Kalam highway at the confluence of the Daral and Swat Rivers. It was a beautiful tourist destination with hotels and a market, but was severely affected by floods in 2022. Daral and Saidgai Lakes can be reached from Bahrain.',
								imageLeft: true
							},
							{ 
								title: 'Swat River', 
								image: '/images/swat.jpg',
								description: 'The biggest tributaries of the Swat River are the Gabral, Utror, and Ushu Rivers, which are formed by glacial waters of the Hindukush Mountains. The river travels throughout the Swat Valley, joins the Panjkora River, and finally flows into Peshawar.',
								imageLeft: false
							},
							{ 
								title: 'Swat Expressway', 
								image: '/images/swat.jpg',
								description: 'The Swat Highway (also known as N95 Highway or Chakdara-Kalam Highway) begins at Chakdara City of Swat and ends at Kalam. It was completed in 2019 and has played a significant role in boosting tourism.',
								imageLeft: true
							},
							{ 
								title: 'White Palace Swat', 
								image: '/images/swat.jpg',
								description: 'The White Palace was built in 1940 by the ruler (Wali) of Swat Valley at Marghazar, about 13 kilometers from Saidu Sharif (the capital of Swat). The palace is now a hotel that welcomes guests annually.',
								imageLeft: false
							},
						].map((destination, idx) => (
							<div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-2 items-center`}>
								{/* Image */}
								<div className={`${destination.imageLeft ? 'lg:order-1' : 'lg:order-2'} ${idx % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}>
									<div className="relative h-40 lg:h-56 max-w-[80%] mx-auto overflow-hidden">
										<Image 
											src={destination.image}
											alt={destination.title}
											fill
											className="object-cover"
										/>
									</div>
								</div>
								
								{/* Text Content */}
								<div className={`${destination.imageLeft ? 'lg:order-2' : 'lg:order-1'} ${idx % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
									<h3 className={`text-xl md:text-2xl font-bold mb-3 capitalize ${destination.imageLeft ? 'text-left' : 'text-right'}`} style={{ color: secondaryBlack }}>
										{destination.title}
									</h3>
									<p className={`leading-normal ${destination.imageLeft ? 'text-left' : 'text-right'}`} style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
										{destination.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== HISTORICAL SITES IN SWAT VALLEY ====================== */}
			<section className="py-4 md:py-5 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl ml-0 md:ml-8 lg:ml-12">
						<p className="leading-normal mb-4" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							Alongside natural beauty, Swat also has many historical sites. It has attracted many archeologists worldwide due to its historical importance. There are around 400 Buddhist historical sites in the valley, including Buddhist stupas and rock carvings of Buddha.
						</p>

						<h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Some other historical and archeological sites in Swat Valley are as follows:
						</h3>

						<ul className="space-y-2">
							{[
								'Mahmood Ghaznavi Masjid',
								'Oba Ghar and Khazana Ghar Rock Carving',
								'Dune of Darkot',
								'Ram Takht at Mount Ilum',
								'Panr Jambil Khwar Archaeology',
								'Jehanabad Buddha Statue',
								'Tokar Dara Najigram Stupa and Monastery',
								'Amluk Dara Stupa',
								'Shingardar Stupa',
								'Gumbatona Stupa',
								'Ghaligay Buddha Statue and Archaeological Remains',
								'Shahkot Pass Elephant Paw and Queen\'s Throne',
								'Nemogram Stupa and Monastery',
								'Butkara I Stupa and Archaeological Remains',
								'Butkara II Stupa and Archaeological Remains',
							].map((item, idx) => (
								<li key={idx} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
									<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
										{item}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* ====================== CULTURE OF SWAT VALLEY ====================== */}
			<section className="py-4 md:py-5 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl ml-0 md:ml-8 lg:ml-12">
						<h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Culture of Swat Valley:
						</h3>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The people of Kalam Swat Valley are known for their rich culture. Both men and women take part in the making of their hand-woven fabrics, embroidery, and carpets. These people are also blessed with wood carving talent; their furniture and strong wood are famous worldwide. They also specialize in producing uniquely designed ornamental jewelry.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== THE ECONOMY OF KALAM SWAT VALLEY ====================== */}
			<section className="py-4 md:py-5 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl ml-0 md:ml-8 lg:ml-12">
						<h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: secondaryBlack, fontSize: '24px' }}>
							The Economy of Kalam Swat Valley:
						</h3>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The economy of Kalam Swat Valley is primarily based on agriculture, tourism, and small-scale industries. The valley produces yummy apples, apricots, and potatoes.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== EDUCATIONAL IN KALAM SWAT VALLEY ====================== */}
			<section className="py-4 md:py-5 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl ml-0 md:ml-8 lg:ml-12">
						<h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Educational in Kalam Swat Valley:
						</h3>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							Several educational institutions in Kalam Swat Valley include primary and secondary schools, colleges, and universities. The University of Swat, located in the nearby city of Mingora, also serves the students of Kalam Swat Valley.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== THINGS TO DO IN KALAM SWAT ====================== */}
			<section className="py-6 md:py-8 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: secondaryBlack }}>
							Things To Do In <span style={{ borderBottom: `2px solid ${primaryOrange}`, display: 'inline-block', paddingBottom: '2px' }}>Kalam Swat</span>
						</h2>
					</div>
					
					{/* 5 Images Vertical Collage - Attached */}
					<div className="flex flex-row max-w-7xl mx-auto overflow-hidden">
						{[
							'/images/swat.jpg',
							'/images/swat.jpg',
							'/images/swat.jpg',
							'/images/swat.jpg',
							'/images/swat.jpg',
						].map((image, idx) => (
							<div 
								key={idx} 
								className={`relative h-[400px] md:h-[500px] overflow-hidden transition-all duration-500 ease-in-out ${
									hoveredImageIndex === idx 
										? 'flex-[2]' 
										: hoveredImageIndex !== null 
											? 'flex-[0.5]' 
											: 'flex-1'
								}`}
								onMouseEnter={() => setHoveredImageIndex(idx)}
								onMouseLeave={() => setHoveredImageIndex(null)}
							>
								<Image 
									src={image}
									alt={`Activity ${idx + 1} in Kalam Swat`}
									fill
									className="object-cover transition-transform duration-500"
									style={{ transform: hoveredImageIndex === idx ? 'scale(1.1)' : 'scale(1)' }}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== FREQUENTLY ASKED QUESTIONS ====================== */}
			<section className="py-6 md:py-8 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
					<div className="text-center mb-6">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Frequently Asked Question
						</h2>
					</div>
					
					<div className="space-y-0">
						{[
							{
								question: 'What is the best time to visit Swat and Kalam?',
								answer: 'The best time to visit Swat and Kalam is from April to October. Summer months (May-September) offer pleasant weather, lush green valleys, and accessible tourist spots. Winter (December-February) is ideal for snowfall and skiing at Malam Jabba.'
							},
							{
								question: 'How do I book a Swat Kalam tour package?',
								answer: 'You can book a Swat Kalam tour package by contacting us via WhatsApp (+92 331 438251), email (info@nayitalaash.com), or by filling out the contact form on our website. We offer both customized and public group tour packages.'
							},
							{
								question: 'What should I pack for a trip to Swat Kalam?',
								answer: 'Pack warm clothes (especially for evenings), comfortable hiking shoes, rain gear, sunscreen, sunglasses, and a camera. For winter visits, bring heavy jackets, gloves, and winter boots. Also carry basic medicines and personal toiletries.'
							},
							{
								question: 'Are hotels and accommodations available in Swat and Kalam?',
								answer: 'Yes, there are various hotels, guest houses, and resorts available in Swat and Kalam ranging from budget to luxury options. We help arrange accommodation based on your preferences and budget. Advance booking is recommended during peak season.'
							},
							{
								question: 'Is it safe to travel to Swat and Kalam?',
								answer: 'Yes, Swat and Kalam are safe destinations for tourists. The region has seen significant improvements in security. We ensure safe travel routes, verified accommodations, and experienced local guides. We also provide 24/7 support during your trip.'
							},
						].map((faq, idx) => (
							<div key={idx} className="border-b border-gray-300">
								<button
									onClick={() => setOpenFAQIndex(openFAQIndex === idx ? null : idx)}
									className="w-full flex items-center justify-between py-3 text-left"
								>
									<span className="flex items-center gap-3 flex-1">
										<ChevronDown 
											className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${openFAQIndex === idx ? 'rotate-180' : ''}`}
											style={{ color: secondaryBlack }}
										/>
										<span className="font-medium leading-normal" style={{ color: secondaryBlack, fontSize: '14px', lineHeight: '1.4' }}>
											{faq.question}
										</span>
									</span>
								</button>
								{openFAQIndex === idx && (
									<div className="pb-3 pl-7">
										<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== READY FOR AN UNFORGETTABLE TOUR! ====================== */}
			<section className="py-6 md:py-8 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
				<div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-[2]">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="px-4 md:px-6">
							<p className="text-white text-3xl font-autography mb-2">Ready for an unforgettable tour!</p>
							<h2 className="text-3xl md:text-4xl font-bold" style={{ color: primaryOrange }}>Plan your trips with us</h2>
						</div>
						<div className="px-4 md:px-6">
							<button
								onClick={handleWhatsAppClick}
								className="px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
								style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
							>
								GET YOUR FREE QUOTE NOW!
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== FOOTER ====================== */}
			<footer className="py-8 md:py-12 bg-white border-t relative overflow-hidden" style={{ borderColor: `${primaryOrange}30` }}>
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
									<a href="/" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Home</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/#tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Pakistan Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/#city-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>City Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/#group-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Group Tour</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/#destination" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Destination</a>
								</li>
								<li className="pb-2">
									<a href="/about" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>About Us</a>
								</li>
								<li className="pb-2">
									<a href="/contact" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Contact Us</a>
								</li>
							</ul>
						</div>

						{/* Column 3: What We Do */}
						<div>
							<h3 className="font-bold mb-4 text-base" style={{ color: secondaryBlack }}>What We Do</h3>
							<ul className="space-y-2">
								<li className="border-b border-gray-200 pb-2">
									<a href="#" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Custom Tour Packages</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="#" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Family Tour Packages</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="#" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Honeymoon Trips</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="#" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Group Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="#" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Adventure Tours</a>
								</li>
								<li className="pb-2">
									<a href="#" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Cultural Experiences</a>
								</li>
							</ul>
						</div>

						{/* Column 4: Connect */}
						<div>
							<h3 className="font-bold mb-4 text-base" style={{ color: secondaryBlack }}>Connect</h3>
							<div className="flex gap-3 mb-6">
								<a 
									href="https://www.facebook.com/nayetalash" 
									target="_blank" 
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
								>
									<Facebook className="w-5 h-5 text-white" />
								</a>
								<a 
									href="https://www.instagram.com/nayetalash" 
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
		</div>
	);
};

export default SwatKalamPage;

