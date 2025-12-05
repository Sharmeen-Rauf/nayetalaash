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
								Lahore City Tour
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
							Explore the ancient Walled City, taste the famous Food Street flavors, and feel the history of the Mughals. Your unforgettable Pakistan adventure starts here.
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
							Lahore Guided City Tours
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							These Lahore City Tours and Walled City Guided Tours are carefully designed to give you the real heart of the old city. You can choose from unique experiences like a fun Rangeela Rickshaw Ride, a Heritage Bus Tour, or deep dives into history. You can also customize these packages to focus on Sufi Heritage, Sikh History, or an intense Food Street Tour based on your interests.
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
							We have compiled a list of the most prominent and famous places to visit in Lahore. Our city tours are structured to ensure you see all the best sites:
						</p>
					</div>
					
					<div className="space-y-6">
						{[
							{ 
								title: '1. Lahore Fort (Shahi Qila)', 
								image: '/images/lahore.jpg',
								description: 'A UNESCO World Heritage Site and the crown jewel of Mughal Lahore. Explore the stunning Sheesh Mahal, the magnificent Picture Wall, and the grand Alamgiri Gate. The fort holds centuries of history within its royal chambers and ancient walls.',
								imageLeft: true
							},
							{ 
								title: '2. Badshahi Mosque', 
								image: '/images/lahore.jpg',
								description: 'One of the largest and most architecturally beautiful mosques in the world. Its striking red sandstone exterior and pristine white marble interior are truly spectacular. The mosque reflects the immense glory and power of Emperor Aurangzeb\'s historical era.',
								imageLeft: false
							},
							{ 
								title: '3. Wazir Khan Mosque', 
								image: '/images/lahore.jpg',
								description: 'This beautiful mosque was built in the 17th century by Ilm-ud-Din Ansari (known as Wazir Khan), the Governor of Lahore under Emperor Shah Jahan. Located on the Royal Route (Shahi Guzargah), it is famous for its intricate Kashi Kari (tile work) and delicate Fresco Paintings. Its entrance includes a unique market area, historically known as the Calligrapher\'s Market.',
								imageLeft: true
							},
							{ 
								title: '4. Hazuri Bagh & Baradari', 
								image: '/images/lahore.jpg',
								description: 'Hazuri Bagh is a significant garden located between the Lahore Fort\'s Alamgiri Gate and the Badshahi Mosque. At its center stands a Bara Dari (Twelve-Door Pavilion), which was built by Maharaja Ranjit Singh using white marble from dismantled Mughal structures. The garden also holds the Tombs of Sir Allama Mohammad Iqbal (National Poet) and Sikandar Hayat Khan.',
								imageLeft: false
							},
							{ 
								title: '5. Shahi Hammam', 
								image: '/images/lahore.jpg',
								description: 'This is a Mughal era public bathhouse, inspired by Turkish designs, also commissioned by Wazir Khan near the Delhi Gate. It provided comprehensive services, including hot, warm, and cold water sections, a sauna, and separate areas for men and women. After being restored in 2013, its beautiful frescoes and hidden water channels were uncovered, making it a key historical site.',
								imageLeft: true
							},
							{ 
								title: '6. Shalimar Gardens', 
								image: '/images/lahore.jpg',
								description: 'Referred to as Shah Jahan\'s "Heaven on Earth" for its meticulous design. The gardens feature stunning water terraces, numerous fountains, and elegant pavilions. They perfectly embody the symmetry and planning characteristic of Mughal landscape design.',
								imageLeft: false
							},
							{ 
								title: '7. Lahore Museum', 
								image: '/images/lahore.jpg',
								description: 'A true treasure house preserving rare artifacts from across many eras of history. Its collection spans the Gandhara, Mughal, Sikh, and British periods. It is an essential stop for anyone interested in the cultural heritage of the region.',
								imageLeft: true
							},
							{ 
								title: '8. Gali Surjan Singh', 
								image: '/images/lahore.jpg',
								description: 'A meticulously restored historic street nestled deep within old Lahore. It is filled with tangible heritage, vibrant culture, and charming architecture. This alley offers a uniquely beautiful setting perfect for photography and exploration.',
								imageLeft: false
							},
							{ 
								title: '9. Minar-e-Pakistan', 
								image: '/images/lahore.jpg',
								description: 'The towering place where the landmark Pakistan Resolution was formally passed in 1940. This monument is an unmistakable and powerful symbol of the nation\'s identity and birth. It is a crucial site of historical and patriotic significance for the country.',
								imageLeft: true
							},
							{ 
								title: '10. Wahga Border Ceremony', 
								image: '/images/lahore.jpg',
								description: 'A thrilling and popular daily flag lowering military ceremony between Pakistan and India. The event is a highly energetic spectacle, generating intense national pride and patriotism. It is an unmissable cultural and theatrical experience for visitors to Lahore.',
								imageLeft: false
							},
							{ 
								title: '11. Data Darbar', 
								image: '/images/lahore.jpg',
								description: 'One of the most important and largest Sufi shrines found across all of South Asia. It is a spiritual center rich with deep historical and cultural significance. The shrine draws millions of pilgrims and followers seeking blessings and peace.',
								imageLeft: true
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

			{/* ====================== MORE ABOUT LAHORE CITY ====================== */}
			<section 
				data-section-id="more-about-lahore"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('more-about-lahore') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-4">
						<h2 className="text-2xl md:text-3xl font-bold mb-3 text-center" style={{ color: secondaryBlack }}>
							More About Lahore City
						</h2>
						<div className="space-y-2">
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								With a history spanning perhaps 3,000 to 3,500 years, Lahore is much more than a city; it is a narrator of history. This resilient metropolis has survived the rise and fall of countless empires, conflicts, and natural disasters, yet it always stands tall, emerging stronger than before.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								Present-day Lahore is proud of its lively streets, fantastic architecture, echoing food streets, and vibrant, loving people, known locally as "Zinda Dilan e Lahore" (Lahore with Lively Hearts). Every door and alleyway tells a story of endurance, evolution, and timeless charm.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== HISTORY OF LAHORE ====================== */}
			<section 
				data-section-id="history-lahore"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('history-lahore') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							History Of Lahore
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Lahore is an ancient city, often called the "City of Gardens," with a history stretching back over a thousand years. It became truly magnificent under the Mughal emperors, who built stunning palaces and mosques like the Lahore Fort and Badshahi Mosque, making it an imperial cultural center. It also served as the capital during the Sikh era. Critically, Lahore is the symbolic birthplace of modern Pakistan, where the resolution for an independent nation was passed, blending its deep historical roots with its modern status as the country's vibrant, beating heart.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== A BRIEF HISTORY OF THE WALLED CITY OF LAHORE ====================== */}
			<section 
				data-section-id="walled-city-history"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('walled-city-history') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							A Brief History of the Walled City of Lahore
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							According to ancient Hindu mythology, the Walled City of Lahore was founded by Lav (Loh), one of the twin sons of the Hindu god Ram. It is said that Lav established Lavapuri (the present-day Walled City of Lahore), while his brother Kusha founded the nearby city of Kasur. However, this origin story is widely considered a myth, as concrete historical evidence only dates back to the 11th century when Mahmood Ghaznavi became victorious and established Muslim rule in the region.
						</p>
						<p className="leading-normal text-justify mt-2" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							The Walled City, with its ancient gates, narrow alleys, and historic structures, has been the heart of Lahore for centuries. Its fortifications, originally built for defense, now serve as a living testament to the city's rich and complex history, attracting historians, archaeologists, and tourists from around the world.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== OTHER HISTORICAL NAMES OF LAHORE CITY ====================== */}
			<section 
				data-section-id="historical-names"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('historical-names') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Other Historical Names of Lahore City
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Throughout its long history, Lahore has been known by various names. Some of the historical names associated with the city include:
						</p>
						<ul className="list-disc list-inside mt-2 space-y-1">
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Mehmood Puri</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohpur</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lavapuri</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohawar</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohkot</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lavakot</li>
							<li className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lavapur</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ====================== RULERS AND DYNASTIES THAT RULED OVER LAHORE ====================== */}
			<section 
				data-section-id="rulers-dynasties"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('rulers-dynasties') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-3 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Rulers and Dynasties That Ruled Over the Lahore City
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
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
							<div className="lg:col-span-2 space-y-2">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Lahore has been ruled by numerous powerful dynasties and empires throughout its history. The Hindu Shahis were among the earliest known rulers, with Raja Jayapal being defeated by Mahmud Ghaznavi in 1021, marking the beginning of Muslim rule in the region.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									The city experienced a golden era under Malik Ahmed Ayyaz, but Ghazni rule was eventually overthrown by Shahabuddin Ghori. This was followed by a succession of Muslim dynasties that shaped Lahore's destiny.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									The Sultans under Qutubuddin Albak established their presence, followed by the Turco-Afghan Dynasty under Jalaludin Firoz Khilji. The Tughlaq Dynasty, led by Ghiyasudin Tughlaq, and the Sadaat under Khizer Khan, also left their mark. The Lodhi Dynasty, with Ibrahim Lodhi at the helm, preceded the arrival of the Mughals.
								</p>
							</div>
						</div>

						<div className="space-y-2">
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								The Mughal era, beginning with Zahirudin Babar, marked a period of unprecedented architectural and cultural development. The Mughals contributed some of the most magnificent architectural marvels, including the Lahore Fort, Badshahi Mosque, and Shalimar Gardens, which continue to attract millions of visitors today.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								After the decline of the Mughal Empire, Lahore saw brief periods under Raghunath Rao of the Marathas, Nadir Shah and Ahmad Shah Abdali of the Durrani Empire. The Sikh Empire, under the legendary Maharaja Ranjit Singh, established Lahore as the capital of the Sikh Kingdom, adding another rich layer to the city's heritage.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								The British took control of Lahore after the fall of the Sikh Empire, introducing Victorian-style British Colonial Architecture that stands alongside the magnificent Mughal Architecture. This architectural fusion created a unique urban landscape that reflects Lahore's complex historical journey.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								After colonial rule, Lahore became part of Pakistan, and today it stands as a vibrant cultural and intellectual hub. The city continues to evolve while preserving its rich historical legacy, serving as a bridge between its glorious past and its promising future.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== 13 GATES OF THE WALLED CITY OF LAHORE ====================== */}
			<section 
				data-section-id="gates"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('gates') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							13 Gates of the Walled City of Lahore
						</h3>
						<p className="leading-normal text-justify mb-3" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							The historic Walled City was once fortified by 13 grand gates, commissioned by the Mughals, each serving as a key entry point. Many still stand today, including:
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Delhi Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Bhatti Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohari Gate or Lahori Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Mori Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Sheranwala Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Taxali Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Roshnai Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Mochi Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Shah Alam Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Akbari Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Masti Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Kashmiri Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Yakki Gate</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== THE COLORFUL BAZAARS OF LAHORE CITY ====================== */}
			<section 
				data-section-id="bazaars"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('bazaars') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							The Colorful Bazaars of Lahore City
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
							{/* Content on the left */}
							<div className="lg:col-span-2 space-y-2">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Lahore boasts some of the most vibrant and bustling bazaars in Pakistan. Exploring these markets is the best way to witness the city's true life and culture. They feature everything from traditional jewelry and handicrafts to aromatic spices and appealing food stalls.
								</p>
								<div className="mt-2">
									<p className="leading-normal mb-2" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										Famous markets include: Anarkali Bazaar, Ichhra Bazaar, Shah Alami Market, Rang Mahal Bazaar, and Liberty Market. For a true Lahori experience, you can take a colorful Rangeela Rickshaw Tour through these busy streets!
									</p>
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

			{/* ====================== LAHORE'S FOOD STREET AND VIBRANT CULTURE ====================== */}
			<section 
				data-section-id="food-street"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('food-street') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Lahore's Food Street and Vibrant Culture
						</h3>
						<p className="leading-normal text-justify mb-3" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							No trip is complete without a Lahore Food Street Tour.
						</p>
						<ul className="space-y-2 mb-3">
							<li className="flex items-start gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
								<div>
									<p className="leading-normal font-semibold" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										Fort Road Food Street:
									</p>
									<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										Located next to the Lahore Fort, it offers delicious food with a stunning view of the Fort and Badshahi Mosque. Old Havelis here have been converted into unique restaurants for fine dining.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
								<div>
									<p className="leading-normal font-semibold" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										Androon Lahore Food Tour:
									</p>
									<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										This is the heart of desi food. Lahoris specialize in classics like Paaye, Nihari, Karahis, and Chanay Kulchy. Our food tours will help you find the best of this rich culinary heritage.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ====================== GUIDED LAHORE TOUR PACKAGES / LAHORE CITY TOUR ====================== */}
			<section 
				data-section-id="guided-lahore-tour-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('guided-lahore-tour-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					{/* Main Title */}
					<div className="text-center mb-6 py-3" style={{ backgroundColor: '#4a5568' }}>
						<h2 className="text-xl md:text-2xl font-bold text-white">
							Guided Lahore Tour Packages / Lahore City Tour
						</h2>
					</div>

					{/* Three Column Layout: Image - List - Image */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start max-w-7xl mx-auto mt-4">
						{/* Left Image */}
						<div className="lg:col-span-4 hidden lg:block">
							<div className="relative w-full h-[400px] rounded overflow-hidden">
								<Image 
									src="/images/lahore.jpg"
									alt="Lahore Architecture"
									fill
									className="object-cover"
								/>
							</div>
						</div>

						{/* Center Content */}
						<div className="lg:col-span-4">
							<div className="bg-white rounded">
								{[
									'Old Lahore Historical Tour',
									'British Colonial Architecture Lahore City Tour',
									'Mughal History Lahore City Tour',
									'Sufi Heritage Lahore City Tour',
									'Lahore Street Food Tour',
									'Androon Lahore Food Tour',
									'Lahore Rickshaw Tour',
									'Lahore Rangeela Rickshaw Tour',
									'Lahore City Bus Tour',
									'Walking Lahore City Tour',
								].map((tour, idx) => (
									<div 
										key={idx}
										className="py-2 px-3"
										style={{ 
											backgroundColor: idx % 2 === 0 ? '#e5e7eb' : 'white',
										}}
									>
										<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
											{tour} | Lahore City Tour
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Right Image */}
						<div className="lg:col-span-4 hidden lg:block">
							<div className="relative w-full h-[400px] rounded overflow-hidden">
								<Image 
									src="/images/lahore.jpg"
									alt="Lahore Architecture"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== PLAN YOUR LAHORE CITY TOUR ====================== */}
			<section 
				data-section-id="plan-tour"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('plan-tour') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-3 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Plan Your Lahore City Tour with Nayi Talaash
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Whether you want to explore the rich history, the vibrant culture, the bustling bazaars, the religious sites or the flavorful desi cuisine, Nayi Talaash is here to guide you. Contact us now to plan your unforgettable Lahore City Tour!
						</p>
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
							FAQs – Lahore City Tour (Nayi Talaash)
						</h2>
					</div>
					
					<div className="space-y-0">
						{[
							{
								question: '1. What is included in the Lahore City Tour?',
								answer: 'Our tours include guided visits to major landmarks, transportation, entry assistance and a curated experience based on the theme you choose.'
							},
							{
								question: '2. Can I customize my Lahore tour?',
								answer: 'Yes! You can add or remove destinations, extend the tour or create a fully custom city tour according to your preference.'
							},
							{
								question: '3. How long is the Lahore City Tour?',
								answer: 'It depends on the package. We offer half day, full day, and multi day Lahore tours.'
							},
							{
								question: '4. Do you provide pickup and drop-off?',
								answer: 'Yes, we provide convenient pickup and drop-off from your hotel or preferred location.'
							},
							{
								question: '5. Are entry tickets included?',
								answer: 'Some tours include tickets, while others may require on spot purchase. Full details are provided before booking.'
							},
							{
								question: '6. Is the tour suitable for families?',
								answer: 'Absolutely! Our tours are family friendly and safe for all age groups.'
							},
							{
								question: '7. What should I wear during the tour?',
								answer: 'Comfortable clothing and shoes are recommended. For mosques or religious sites, modest dressing is appreciated.'
							},
							{
								question: '8. Do you offer food tours?',
								answer: 'Yes, our Lahore Food Street & Androon Lahore Food Tour lets you enjoy authentic Lahori cuisine.'
							},
							{
								question: '9. Is the Wahga Border Parade included?',
								answer: 'Yes, it can be added as part of your tour. We provide guided assistance for the ceremony.'
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
