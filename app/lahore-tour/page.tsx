'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';

const LahoreTourPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false);
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
	const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
	const [showAllPackages, setShowAllPackages] = useState(false);
	const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

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
			setIsLight(scrollY > heroHeight * 0.8);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Intersection Observer for scroll animations
	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const targetId = entry.target.getAttribute('data-section-id');
					if (targetId) {
						setVisibleSections((prev) => new Set(prev).add(targetId));
					}
				}
			});
		}, observerOptions);

		// Observe all sections with data-section-id
		const sections = document.querySelectorAll('[data-section-id]');
		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	// Animated Background Component
	const AnimatedBackground = ({ variant = 'default' }: { variant?: 'default' | 'orange' | 'dark' | 'light' }) => {
		return null;
	};

	return (
		<div className="relative min-h-screen font-sans overflow-x-hidden">
			
			{/* --- Two-Tier Navbar --- */}
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
							<div className="flex items-center gap-0.5">
								<a 
									href="https://www.facebook.com/nayetalash" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
									aria-label="Facebook"
								>
									<Facebook className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
								</a>
								<a 
									href="https://www.instagram.com/nayetalash" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
									aria-label="Instagram"
								>
									<Instagram className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
								</a>
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

			{/* Main Navigation Bar */}
			<header className={`fixed top-[32px] sm:top-[36px] left-0 right-0 z-[100] backdrop-blur-sm transition-all duration-300 ${
				isLight 
					? 'bg-white/95 border-b border-gray-200 shadow-[0_6px_12px_rgba(0,0,0,0.06)]' 
					: 'bg-transparent border-b border-transparent shadow-none'
			}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between py-2 sm:py-2.5">
						{/* Logo */}
						<Link href="/" className="flex items-center">
							<Image 
								src={logoImage}
								alt="Nayi Talaash Logo"
								width={160}
								height={50}
								className="h-10 sm:h-12 w-auto object-contain"
							/>
						</Link>

						{/* Desktop Navigation Links */}
						<nav className="hidden lg:flex items-center gap-1">
							<Link href="/" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>HOME</Link>
							<div className="relative group">
								<Link href="/#tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative flex items-center gap-1 ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									PAKISTAN TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</Link>
								<div className="absolute top-full left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
									<div className="bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden">
										<ul className="py-1">
											<li>
												<Link href="/swat-kalam" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Swat Kalam Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/hunza" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Hunza Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/skardu" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Skardu Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/nathia-gali-murree" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Nathia Gali And Murree Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/neelum-valley" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Neelum Valley Azad Kashmir Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/kumrat-valley" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Kumrat Valley Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/naran-kaghan" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Naran Kaghan Tour Packages
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* CITY TOURS with Dropdown */}
							<div className="relative group">
								<Link href="/#city-tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative flex items-center gap-1 ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									CITY TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</Link>
								
								{/* Dropdown Menu */}
								<div className="absolute top-full left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
									<div className="bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden">
										<ul className="py-1">
											<li>
												<Link href="/karachi-tour" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Karachi Tour
												</Link>
											</li>
											<li>
												<Link href="/lahore-tour" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Lahore Tour
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<Link href="/group-tours" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>GROUP TOUR</Link>
							<Link href="/#destination" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>DESTINATION</Link>
							<Link href="/about" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>ABOUT US</Link>
							<Link href="/contact" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>CONTACT US</Link>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
							style={{ color: isLight ? secondaryBlack : 'white' }}
							aria-label="Toggle menu"
						>
							{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Side Menu */}
			<div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[120] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className="flex flex-col h-full">
					{/* Close Button */}
					<button
						onClick={() => setIsMenuOpen(false)}
						className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
						style={{ color: secondaryBlack }}
					>
						<X className="w-6 h-6" />
					</button>

					{/* Logo */}
					<div className="mt-12 mb-8">
						<Link href="/" onClick={() => setIsMenuOpen(false)}>
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
						
						<div>
							<button
								onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'pakistan-tours' ? null : 'pakistan-tours')}
								className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg"
							>
								<span>PAKISTAN TOURS</span>
								<ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen === 'pakistan-tours' ? 'rotate-180' : ''}`} />
							</button>
							{mobileDropdownOpen === 'pakistan-tours' && (
								<div className="pl-4 pr-2 py-2 space-y-1">
									<Link href="/swat-kalam" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Swat Kalam Tour Packages
									</Link>
									<Link href="/hunza" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Hunza Tour Packages
									</Link>
									<Link href="/skardu" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Skardu Tour Packages
									</Link>
									<Link href="/nathia-gali-murree" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Nathia Gali And Murree Tour Packages
									</Link>
									<Link href="/neelum-valley" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Neelum Valley Azad Kashmir Tour Packages
									</Link>
									<Link href="/kumrat-valley" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Kumrat Valley Tour Packages
									</Link>
									<Link href="/naran-kaghan" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Naran Kaghan Tour Packages
									</Link>
								</div>
							)}
						</div>

						<div>
							<button
								onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'city-tours' ? null : 'city-tours')}
								className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg"
							>
								<span>CITY TOURS</span>
								<ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen === 'city-tours' ? 'rotate-180' : ''}`} />
							</button>
							{mobileDropdownOpen === 'city-tours' && (
								<div className="pl-4 pr-2 py-2 space-y-1">
									<Link href="/karachi-tour" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Karachi Tour
									</Link>
									<Link href="/lahore-tour" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										Lahore Tour
									</Link>
								</div>
							)}
						</div>

						<Link href="/group-tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
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
			
			{/* Backdrop Overlay */}
			{isMenuOpen && (
				<div 
					className="fixed inset-0 bg-black/50 z-[115] lg:hidden"
					onClick={() => setIsMenuOpen(false)}
				></div>
			)}

			{/* ====================== HERO SECTION ====================== */}
			<section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-[100px] sm:pt-[104px]" style={{ backgroundColor: secondaryBlack }}>
				{/* Background Image */}
				<div 
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ 
						backgroundImage: "url('/images/lahore.jpg')",
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
								Lahore Tour
							</span>
							<br />
							<span className="block mt-4" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Discover the Heart of Pakistan
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
							Experience the rich history, vibrant culture, and stunning architecture of Lahore. From Mughal monuments to bustling bazaars, discover why Lahore is called the cultural capital of Pakistan.
						</p>
						<div className="mt-8">
							<button 
								onClick={handleWhatsAppClick}
								className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
								style={{ 
									backgroundColor: primaryOrange, 
									color: secondaryBlack
								}}
							>
								Book Your Tour
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== LAHORE GUIDED CITY TOURS 2025 ====================== */}
			<section 
				data-section-id="guided-tours"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('guided-tours') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Lahore Guided City Tours 2025
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							These Lahore City Tour, Walled City Lahore Tour and Lahore City Guided Tours are curated for you to have the real essence of the Walled City of Lahore. You can enjoy the Rangeela Rickshaw Ride in Lahore, the Lahore Old City Bus Tour, Heritage Walk through Old Streets of Lahore, the Walking Tour of Lahore City, the British Colonial Architecture Lahore Tour, the Old Lahore Historical Tour, the Sufi Heritage Tour Lahore, the Sikh Heritage Tour Lahore, the Mughal History Tour Lahore, the Lahore Food Street Tour and the Androon Lahore Food Tour with these Lahore City Tour Packages. You can also customize them to your requirements as needed.
						</p>
					</div>

					{/* Tour Packages Grid - 3 columns top row, 2 columns bottom row */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{/* Package 1: 1 Day Walking Tour of Mughal and Sikh Era Walled City of Lahore */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/lahore.jpg"
									alt="1 Day Walking Tour of Mughal and Sikh Era Walled City of Lahore"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day Walking Tour of Mughal and Sikh Era Walled City of Lahore
									</h3>
								</div>
							</div>
						</div>

						{/* Package 2: 1 Day Lahore Guided Walled City Tour and Wahga Border Flag Raising Ceremony */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/lahore.jpg"
									alt="1 Day Lahore Guided Walled City Tour and Wahga Border Flag Raising Ceremony"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day Lahore Guided Walled City Tour and Wahga Border Flag Raising Ceremony
									</h3>
								</div>
							</div>
						</div>

						{/* Package 3: 1 Day Heritage Walk Through the Royal Route and Old Streets of Walled City Lahore */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/lahore.jpg"
									alt="1 Day Heritage Walk Through the Royal Route and Old Streets of Walled City Lahore"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day Heritage Walk Through the Royal Route and Old Streets of Walled City Lahore
									</h3>
								</div>
							</div>
						</div>

						{/* Package 4: British Colonial Architecture Lahore City Tour Package */}
						<div className="relative group cursor-pointer lg:col-start-2 lg:col-end-3">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/lahore.jpg"
									alt="British Colonial Architecture Lahore City Tour Package"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										British Colonial Architecture Lahore City Tour Package
									</h3>
								</div>
							</div>
						</div>

						{/* Package 5: Modern Day Lahore City Tour Package */}
						<div className="relative group cursor-pointer lg:col-start-3 lg:col-end-4">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/lahore.jpg"
									alt="Modern Day Lahore City Tour Package"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										Modern Day Lahore City Tour Package
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== TOP PLACES TO VISIT IN LAHORE ====================== */}
			<section 
				data-section-id="destinations"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('destinations') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Top Places to Visit in Lahore
						</h2>
						<p className="leading-normal max-w-4xl mx-auto" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Lahore is a city rich in history, culture, and architectural marvels. Here are the must-visit attractions included in our tours:
						</p>
					</div>
					
					<div className="space-y-8">
						{[
							{ 
								title: 'Lahore Fort (Shahi Qila)', 
								image: '/images/lahore.jpg',
								description: 'A UNESCO World Heritage Site, this magnificent fort was built during the Mughal era. It features beautiful palaces, gardens, and the iconic Sheesh Mahal (Palace of Mirrors).',
								imageLeft: true
							},
							{ 
								title: 'Badshahi Mosque', 
								image: '/images/lahore.jpg',
								description: 'One of the largest mosques in the world, built by Emperor Aurangzeb in 1673. It can accommodate up to 100,000 worshippers and offers stunning views of the Lahore Fort.',
								imageLeft: false
							},
							{ 
								title: 'Walled City of Lahore', 
								image: '/images/lahore.jpg',
								description: 'The historic heart of Lahore, featuring narrow streets, ancient gates, bustling bazaars, and traditional architecture that tells stories of centuries past.',
								imageLeft: true
							},
							{ 
								title: 'Shalimar Gardens', 
								image: '/images/lahore.jpg',
								description: 'A UNESCO World Heritage Site, these beautiful Mughal gardens were built by Emperor Shah Jahan in 1641. They feature terraced gardens, fountains, and stunning architectural elements.',
								imageLeft: false
							},
							{ 
								title: 'Lahore Museum', 
								image: '/images/lahore.jpg',
								description: 'One of Pakistan\'s oldest museums, housing an impressive collection of artifacts, including the famous "Fasting Buddha" sculpture and Mughal era relics.',
								imageLeft: true
							},
							{ 
								title: 'Minar-e-Pakistan', 
								image: '/images/lahore.jpg',
								description: 'A national monument built at the site where the Lahore Resolution was passed in 1940. It stands as a symbol of Pakistan\'s independence movement.',
								imageLeft: false
							},
							{ 
								title: 'Wagah Border', 
								image: '/images/lahore.jpg',
								description: 'The only road border crossing between Pakistan and India. Visitors can witness the daily flag-lowering ceremony, a colorful and patriotic display.',
								imageLeft: true
							},
							{ 
								title: 'Food Street (Fort Road)', 
								image: '/images/lahore.jpg',
								description: 'A vibrant street food destination offering traditional Lahori cuisine including nihari, paye, and kebabs, with a stunning view of the Badshahi Mosque.',
								imageLeft: false
							},
							{ 
								title: 'Anarkali Bazaar', 
								image: '/images/lahore.jpg',
								description: 'One of the oldest markets in South Asia, named after Anarkali. It offers everything from traditional clothing to jewelry, spices, and local handicrafts.',
								imageLeft: true
							},
							{ 
								title: 'Lahore Zoo', 
								image: '/images/lahore.jpg',
								description: 'One of the largest zoos in Pakistan, established in 1872. It houses a variety of animals and is a popular family destination.',
								imageLeft: false
							},
							{ 
								title: 'Jahangir\'s Tomb', 
								image: '/images/lahore.jpg',
								description: 'The mausoleum of the fourth Mughal Emperor Jahangir, located in Shahdara Bagh. It features beautiful Persian-style architecture and gardens.',
								imageLeft: true
							},
							{ 
								title: 'Lahore Railway Station', 
								image: '/images/lahore.jpg',
								description: 'A magnificent example of British colonial architecture, built in the 1860s. It\'s one of the most beautiful railway stations in South Asia.',
								imageLeft: false
							},
						].map((destination, idx) => (
							<div 
								key={idx} 
								className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center"
								style={{
									opacity: visibleSections.has('destinations') ? 1 : 0,
									transition: `opacity 0.8s ease-out ${idx * 0.15}s`
								}}
							>
								<div 
									className={`${destination.imageLeft ? 'lg:order-1' : 'lg:order-2'} ${idx % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}
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
									<div className="relative h-40 lg:h-56 max-w-[80%] mx-auto overflow-hidden rounded-lg">
										<Image 
											src={destination.image}
											alt={destination.title}
											fill
											className="object-cover transition-transform duration-700 hover:scale-110"
										/>
									</div>
								</div>
								
								<div 
									className={`${destination.imageLeft ? 'lg:order-2' : 'lg:order-1'} ${idx % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}
									style={{
										opacity: visibleSections.has('destinations') ? 1 : 0,
										transform: visibleSections.has('destinations') 
											? 'translateX(0)' 
											: destination.imageLeft 
												? 'translateX(60px)' 
												: 'translateX(-60px)',
										transition: `opacity 0.8s ease-out ${idx * 0.15 + 0.2}s, transform 0.8s ease-out ${idx * 0.15 + 0.2}s`
									}}
								>
									<div className="max-w-[80%] mx-auto">
										<h3 className={`text-xl md:text-2xl font-bold mb-3 capitalize ${destination.imageLeft ? 'text-left' : 'text-right'}`} style={{ color: secondaryBlack }}>
											{destination.title}
										</h3>
										<p className={`leading-normal ${destination.imageLeft ? 'text-left' : 'text-right'}`} style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
											{destination.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== HISTORICAL SITES IN LAHORE ====================== */}
			<section 
				data-section-id="historical-sites"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('historical-sites') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="w-full">
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Some Other Historical and Heritage Sites in Lahore:
						</h3>

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
							{[
								'Hazuri Bagh',
								'Naulakha Pavilion',
								'Lahore Fort Gates',
								'Delhi Gate',
								'Roshnai Gate',
								'Bhatti Gate',
								'Mochi Gate',
								'Taxali Gate',
								'Gulabi Bagh Gateway',
								'Chauburji',
								'Tomb of Allama Iqbal',
								'Masjid Wazir Khan',
							].map((item, idx) => (
								<div 
									key={idx} 
									className="transition-all duration-500 cursor-pointer group rounded-lg w-full scroll-reveal-fade-up"
									style={{ 
										backgroundColor: 'white',
										border: `2px solid ${primaryOrange}`,
										height: '56px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										paddingLeft: '2rem',
										paddingRight: '2rem',
										minWidth: '100%',
										opacity: visibleSections.has('historical-sites') ? 1 : 0,
										transform: visibleSections.has('historical-sites') ? 'translateY(0)' : 'translateY(20px)',
										transitionDelay: `${idx * 0.05}s`
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = primaryOrange;
										e.currentTarget.style.transform = 'translateY(-2px)';
										const pElement = e.currentTarget.querySelector('p') as HTMLParagraphElement;
										if (pElement) pElement.style.color = secondaryBlack;
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'white';
										e.currentTarget.style.transform = 'translateY(0)';
										const pElement = e.currentTarget.querySelector('p') as HTMLParagraphElement;
										if (pElement) pElement.style.color = secondaryBlack;
									}}
								>
									<p className="leading-normal transition-colors duration-300 text-center capitalize" style={{ color: secondaryBlack, fontSize: '14px', lineHeight: '1.5' }}>
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ====================== FREQUENTLY ASKED QUESTIONS ====================== */}
			<section 
				data-section-id="faq"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('faq') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
					<div className="text-center mb-6">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Frequently Asked Question
						</h2>
					</div>
					
					<div className="space-y-0">
						{[
							{
								question: 'What is the best time to visit Lahore?',
								answer: 'Lahore can be visited throughout the year, but the best time is during winter (October to March) when the weather is pleasant and cool.'
							},
							{
								question: 'How many days are enough to explore Lahore?',
								answer: 'A minimum of 2-3 days is recommended to explore the major attractions, but 4-5 days allow for a more relaxed and comprehensive experience.'
							},
							{
								question: 'Is Lahore safe for tourists?',
								answer: 'Yes, Lahore is generally safe for tourists. It\'s advisable to follow local guidelines and use reputable tour operators for guided tours.'
							},
							{
								question: 'What should I wear while visiting Lahore?',
								answer: 'Dress modestly, especially when visiting religious sites. Light, comfortable clothing in summer and warm layers in winter are recommended.'
							},
							{
								question: 'Can I visit the Walled City on my own?',
								answer: 'Yes, but we highly recommend a guided tour to fully appreciate the history, architecture, and hidden gems of the Walled City.'
							},
							{
								question: 'What is included in the tour packages?',
								answer: 'Tour packages typically include transportation, professional guide, entrance fees to monuments, and sometimes meals, depending on the package selected.'
							},
							{
								question: 'Are photography and videography allowed?',
								answer: 'Yes, photography is allowed at most tourist sites. Some places may have restrictions or require additional fees for professional photography.'
							},
							{
								question: 'What local dishes should I try in Lahore?',
								answer: 'Don\'t miss nihari, paye, kebabs, biryani, and traditional sweets. Food Street near Badshahi Mosque is a must-visit for authentic Lahori cuisine.'
							},
							{
								question: 'Do you offer custom tour packages?',
								answer: 'Yes, all our tour packages can be customized according to your preferences, schedule, and interests.'
							},
							{
								question: 'How do I book a tour?',
								answer: 'You can book through our website, contact us via WhatsApp, email, or phone. We also offer online booking options for convenience.'
							},
						].map((faq, idx) => (
							<div 
								key={idx} 
								className="border-b border-gray-300 scroll-reveal-fade-up"
								style={{
									opacity: visibleSections.has('faq') ? 1 : 0,
									transform: visibleSections.has('faq') ? 'translateY(0)' : 'translateY(20px)',
									transition: `opacity 0.6s ease-out ${idx * 0.1}s, transform 0.6s ease-out ${idx * 0.1}s`
								}}
							>
								<button
									onClick={() => setOpenFAQIndex(openFAQIndex === idx ? null : idx)}
									className="w-full flex items-center justify-between py-3 text-left transition-all duration-300 hover:opacity-80"
								>
									<span className="flex items-center gap-3 flex-1">
										<ChevronDown 
											className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${openFAQIndex === idx ? 'rotate-180' : ''}`}
											style={{ color: secondaryBlack }}
										/>
										<span className="font-medium leading-normal text-left" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
											{faq.question}
										</span>
									</span>
								</button>
								{openFAQIndex === idx && (
									<div className="pb-3 pl-7 animate-fadeIn text-left" style={{ animation: 'fadeIn 0.3s ease-in' }}>
										<p className="leading-normal whitespace-pre-line text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== MORE ABOUT LAHORE CITY ====================== */}
			<section 
				data-section-id="more-about-lahore"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('more-about-lahore') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: secondaryBlack }}>
							<span style={{ color: primaryOrange }}>MORE ABOUT</span> <span style={{ color: secondaryBlack }}>LAHORE CITY</span>
						</h2>
						<div className="space-y-4">
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
								Lahore, one of the oldest and most historically rich cities in South Asia, boasts a legacy spanning over 3000-3500 years. Despite facing numerous challenges throughout its history, Lahore has always emerged stronger, earning the nickname "Zinda Dilan e Lahore" (Lahore with Lively Hearts). Today, it stands as a vibrant metropolis, known for its bustling streets, lively markets, magnificent architecture, and the warm hospitality of its people.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
								The city has witnessed the rise and fall of countless empires, each leaving behind a unique architectural and cultural imprint. From ancient Hindu mythology to Mughal grandeur, from Sikh rule to British colonialism, Lahore has absorbed diverse influences, creating a rich tapestry of history, culture, and heritage that continues to thrive in the modern era.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== A BRIEF HISTORY OF THE WALLED CITY OF LAHORE ====================== */}
			<section 
				data-section-id="walled-city-history"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('walled-city-history') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							A BRIEF HISTORY OF THE WALLED CITY OF LAHORE
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
							According to ancient Hindu mythology, the Walled City of Lahore was founded by Lav (Loh), one of the twin sons of the Hindu god Ram. It is said that Lav established Lavapuri (the present-day Walled City of Lahore), while his brother Kusha founded the nearby city of Kasur. However, this origin story is widely considered a myth, as concrete historical evidence only dates back to the 11th century when <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Mahmood Ghaznavi</span> became victorious and established Muslim rule in the region.
						</p>
						<p className="leading-normal text-justify mt-4" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
							The Walled City, with its ancient gates, narrow alleys, and historic structures, has been the heart of Lahore for centuries. Its fortifications, originally built for defense, now serve as a living testament to the city's rich and complex history, attracting historians, archaeologists, and tourists from around the world.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== OTHER HISTORICAL NAMES OF LAHORE CITY ====================== */}
			<section 
				data-section-id="historical-names"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('historical-names') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							OTHER HISTORICAL NAMES OF LAHORE CITY
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
							Throughout its long history, Lahore has been known by various names. Some of the historical names associated with the city include:
						</p>
						<ul className="list-disc list-inside mt-4 space-y-2">
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Mehmood Puri</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Lohpur</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Lavapuri</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Lohawar</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Lohkot</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Lavakot</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Lavapur</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ====================== RULERS AND DYNASTIES THAT RULED OVER LAHORE ====================== */}
			<section 
				data-section-id="rulers-dynasties"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('rulers-dynasties') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							RULERS AND DYNASTIES THAT RULED OVER THE LAHORE CITY
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
							{/* Image on the left */}
							<div className="lg:col-span-1">
								<div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
									<Image 
										src="/images/lahore.jpg"
										alt="Historical Ruler of Lahore"
										fill
										className="object-cover"
									/>
								</div>
							</div>
							
							{/* Content on the right */}
							<div className="lg:col-span-2 space-y-4">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
									Lahore has been ruled by numerous powerful dynasties and empires throughout its history. The Hindu Shahis were among the earliest known rulers, with Raja Jayapal being defeated by <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Mahmud Ghaznavi</span> in 1021, marking the beginning of Muslim rule in the region.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
									The city experienced a golden era under Malik Ahmed Ayyaz, but Ghazni rule was eventually overthrown by <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Shahabuddin Ghori</span>. This was followed by a succession of Muslim dynasties that shaped Lahore's destiny.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
									The Sultans under <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Qutubuddin Albak</span> established their presence, followed by the Turco-Afghan Dynasty under <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Jalaludin Firoz Khilji</span>. The Tughlaq Dynasty, led by <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Ghiyasudin Tughlaq</span>, and the Sadaat under <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Khizer Khan</span>, also left their mark. The Lodhi Dynasty, with <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Ibrahim Lodhi</span> at the helm, preceded the arrival of the Mughals.
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
								The Mughal era, beginning with <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Zahirudin Babar</span>, marked a period of unprecedented architectural and cultural development. The Mughals contributed some of the most magnificent architectural marvels, including the Lahore Fort, Badshahi Mosque, and Shalimar Gardens, which continue to attract millions of visitors today.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
								After the decline of the Mughal Empire, Lahore saw brief periods under <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Raghunath Rao</span> of the Marathas, <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Nadir Shah</span> and <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Ahmad Shah Abdali</span> of the Durrani Empire. The Sikh Empire, under the legendary <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Maharaja Ranjit Singh</span>, established Lahore as the capital of the Sikh Kingdom, adding another rich layer to the city's heritage.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
								The British took control of Lahore after the fall of the Sikh Empire, introducing Victorian-style <span style={{ color: '#16a34a', fontWeight: 'bold' }}>British Colonial Architecture</span> that stands alongside the magnificent <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Mughal Architecture</span>. This architectural fusion created a unique urban landscape that reflects Lahore's complex historical journey.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
								After colonial rule, Lahore became part of Pakistan, and today it stands as a vibrant cultural and intellectual hub. The city continues to evolve while preserving its rich historical legacy, serving as a bridge between its glorious past and its promising future.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== 13 GATES OF THE WALLED CITY OF LAHORE ====================== */}
			<section 
				data-section-id="gates"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('gates') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							13 GATES OF THE WALLED CITY OF LAHORE
						</h3>
						<p className="leading-normal text-justify mb-4" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
							The Walled City of Lahore was once enclosed by 13 grand gates, each serving as a magnificent entry point to this historic city. While some of these gates still stand proudly as testaments to Lahore's rich architectural heritage, others were unfortunately destroyed over time. These gates, commissioned during the Mughal era, not only served as defensive structures but also as symbols of the city's grandeur and historical significance.
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Delhi Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Bhatti Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Lohari Gate or Lahori Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Mori Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Sheranwala Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Taxali Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Roshnai Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Mochi Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Shah Alam Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Akbari Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Masti Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Kashmiri Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Yakki Gate</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== THE COLORFUL BAZAARS OF LAHORE CITY ====================== */}
			<section 
				data-section-id="bazaars"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('bazaars') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							THE COLORFUL BAZAARS OF LAHORE CITY
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
							{/* Content on the left */}
							<div className="lg:col-span-2 space-y-4">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
									Lahore's bazaars are among the most vibrant and bustling markets in Pakistan, offering visitors a chance to experience the true essence of the city and its people. From the biggest market in Asia to the narrowest streets filled with shops, and from traditional bazaars to luxurious modern malls, Lahore's shopping scene is as diverse as its culture.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
									These markets are characterized by narrow streets with shops lining both sides, offering everything from unique handicrafts and traditional jewelry to shiny and traditional clothes, fancy and casual footwear, household accessories, home decor, local and branded groceries, homeopathic and herbal medicines, aromatic spices, and small food stalls serving delicious local treats.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>
									A walking tour is the best way to explore these bazaars and truly immerse yourself in the Lahori bustle. Alternatively, you can experience the vibrant atmosphere through a Lahore Rickshaw Tour, which offers a unique and colorful way to navigate through these historic markets.
								</p>
								
								<div className="mt-4">
									<p className="leading-normal mb-3 font-semibold" style={{ color: secondaryBlack, fontSize: '16px' }}>
										Some famous markets in Lahore include:
									</p>
									<ul className="list-disc list-inside space-y-2">
										<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Anarkali Bazaar</li>
										<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Ichhra Bazaar</li>
										<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Shah Alami Market</li>
										<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Rang Mahal Bazaar</li>
										<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.6' }}>Liberty Market</li>
									</ul>
								</div>
							</div>
							
							{/* Image on the right */}
							<div className="lg:col-span-1">
								<div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
									<Image 
										src="/images/lahore.jpg"
										alt="Colorful Bazaar of Lahore"
										fill
										className="object-cover"
									/>
								</div>
							</div>
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
							<h2 className="text-3xl md:text-4xl font-bold" style={{ color: primaryOrange }}>Plan your trips with us</h2>
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
									<a href="/#tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Pakistan Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/#city-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>City Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/group-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Group Tour</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/#destination" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Destination</a>
								</li>
								<li className="pb-2">
									<Link href="/about" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>About Us</Link>
								</li>
								<li className="pb-2">
									<Link href="/contact" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Contact Us</Link>
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
									<Link href="/group-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Group Tours</Link>
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

export default LahoreTourPage;
