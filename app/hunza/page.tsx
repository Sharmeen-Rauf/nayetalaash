'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';

const HunzaPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
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
			// Set isLight to true when scrolled past hero section
			setIsLight(scrollY > heroHeight * 0.8);
		};

		// Set initial state
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
							<Link href="/#city-tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative group ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
								<span className="flex items-center gap-1">
									CITY TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</span>
							</Link>
							<Link href="/group-tours" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>GROUP TOUR</Link>
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
						
						{/* PAKISTAN TOURS with Dropdown */}
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

						{/* CITY TOURS with Dropdown */}
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
									<Link href="/#city-tours" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
										City Tour Packages
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

			{/* ====================== HERO SECTION ====================== */}
			<section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-[100px] sm:pt-[104px]" style={{ backgroundColor: secondaryBlack }}>
				{/* Background Image */}
				<div 
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ 
						backgroundImage: "url('/images/Hunza.jpg')",
						filter: "brightness(0.3)",
					}}
				></div>

				{/* Theme Color Overlay */}
				<div className="absolute inset-0 z-[2]" style={{ background: `linear-gradient(135deg, ${secondaryBlack}90 0%, transparent 50%, ${primaryOrange}30 100%)` }}></div>

				{/* Main Content */}
				<div className="relative z-10 h-full flex items-center justify-center">
					<div className="text-center px-4">
						<h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-white">
							<span className="font-autography hero-text-reveal block mb-2 text-white" style={{ display: 'inline-block', fontSize: '48px', color: 'white' }}>
								Hunza Tour Packages
							</span>
							<br />
							<span className="block hero-text-reveal hero-text-delay-1"
								  style={{
									  color: primaryOrange,
									  display: 'inline-block',
									  fontSize: '48px'
								  }}>
								Explore the Gem of the North with Nayi Talaash
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-normal hero-text-reveal hero-text-delay-2 mb-6">
						At Nayi Talaash, we offer the finest Hunza Tour Packages for families, couples, students, corporate groups and adventure lovers.						</p>
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hero-text-reveal hero-text-delay-3"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Book Your Adventure
						</button>
					</div>
				</div>
			</section>

			{/* ====================== CUSTOMIZED SWAT TOUR PACKAGES 2025 ====================== */}
			<section 
				data-section-id="customized-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('customized-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Hunza Customized Tour Packages
						</h2>
						<div className="space-y-4">
							<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								Hunza Valley is one of Pakistan's most stunning travel destinations famous for its mighty mountains, crystal blue lakes, ancient forts, warm hearted people and vibrant culture.
							</p>
							<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								All tours are customizable, ensuring comfort, flexibility and an unforgettable travel experience.
							</p>
							<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								Choose from our ready-made tours or build a trip exactly the way you want:
							</p>
						</div>
					</div>
					
					{/* Tour Packages Data */}
					{(() => {
						const allPackages = [
							{ 
								title: '4 Days – Hunza, Gilgit & Khunjerab Pass',
								description: 'A quick journey exploring Gilgit, Hunza Valley highlights and the Pak China border at Khunjerab Pass.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '5 Days – Hunza & Khunjerab Pass Tour',
								description: 'A short but complete journey to Altit Fort, Baltit Fort, Attabad Lake and the Pak China border.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '6 Days – Minapin, Gojal & Naltar Valley',
								description: 'Explore the beautiful Minapin village, Gojal region and the colorful lakes of Naltar Valley.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '6 Days – Hunza, Naltar & Khunjerab Tour',
								description: 'Includes Naltar Valley\'s colorful lakes plus the classic Hunza experience.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '7 Days – Hunza, Nagar & Minapin Tour',
								description: 'Ideal for those who want to explore both Hunza and the scenic Nagar region.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '8 Days – Naran, Shogran & Hunza Tour',
								description: 'Perfect for first time travelers who want to see the best of Kaghan and Hunza together.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '8 Days – Hunza & Skardu Valley Tour',
								description: 'A dual-valley adventure covering the top attractions of both Hunza and Skardu.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '10 Days – Hunza, Skardu Premium Journey',
								description: 'A long, scenic expedition through glaciers, lakes, forts and the most iconic northern valleys.',
								image: '/images/Hunza.jpg'
							},
							{ 
								title: '15 Days – Fairy Meadows, Hunza & Skardu Expedition',
								description: 'Perfect for adventure seekers who want to experience everything mountains, meadows, lakes and cultural villages.',
								image: '/images/Hunza.jpg'
							},
						];
						
						const visiblePackages = allPackages;
						
						return (
							<>
								{/* 9 Tour Packages Grid */}
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 md:px-8">
									{visiblePackages.map((item, idx) => (
							<div 
								key={idx} 
								className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-700"
								style={{
									animationDelay: `${idx * 0.1}s`,
									opacity: visibleSections.has('customized-packages') ? 1 : 0,
									transform: visibleSections.has('customized-packages') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
									transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
								}}
							>
								<div className="relative w-full aspect-[2/1] overflow-hidden">
									<Image 
										src={item.image}
										alt={item.title}
										fill
										className="object-cover hover:scale-110 transition-transform duration-500"
									/>
								</div>
								<div className="p-3">
									<p className="font-medium leading-normal mb-2" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										{item.title}
									</p>
									{item.description && (
										<p className="text-sm leading-normal" style={{ color: `${secondaryBlack}80`, fontSize: '14px', lineHeight: '1.4' }}>
											{item.description}
										</p>
									)}
								</div>
							</div>
									))}
								</div>
								
							</>
						);
					})()}
				</div>
			</section>

			{/* ====================== PUBLIC SWAT KALAM TOUR PACKAGES 2025 ====================== */}
			<section 
				data-section-id="public-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('public-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					{/* Main Heading and Intro */}
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Hunza Group Tour Packages
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Join our fixed departure group tours, perfect for students, solo travelers and families.
						</p>
					</div>

					{/* Two Tour Package Images */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/Hunza.jpg"
									alt="5 Days Hunza Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									5 Days Hunza Group Tour
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/Hunza.jpg"
									alt="8 Days Hunza & Skardu Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									8 Days Hunza & Skardu Group Tour
								</p>
							</div>
						</div>
					</div>

					{/* Who Are These Tours For Section */}
					<div className="max-w-4xl mx-auto mb-8">
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Who Are These Tours For?
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Couples / Honeymooners
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Private stays, peaceful views and romantic moments.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Families
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Safe, comfortable and enjoyable for all age groups.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Students & Friends
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Adventure activities, bonfires, trekking and group fun.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Corporate Teams
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Team building retreats, adventure breaks and fully managed tours.
								</p>
							</div>
						</div>
					</div>

					{/* Swat Tour Packages From Major Cities Section */}
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Hunza Tour Packages From Major Cities
						</h3>
						<p className="text-left mb-4" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							We provide tours from:
						</p>
						<ul className="space-y-3 mb-4">
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Lahore
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Karachi
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Islamabad
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Custom departures available for other cities as well.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ====================== MOST POPULAR DESTINATIONS AND ATTRACTIONS IN SWAT VALLEY ====================== */}
			<section 
				data-section-id="destinations"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('destinations') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Top Attractions in Hunza Valley
						</h2>
					</div>
					
					{/* Destinations with Alternating Layout */}
					<div className="space-y-8">
						{[
							{ 
								title: 'Hunza Valley', 
								image: '/images/Hunza.jpg',
								description: 'Located in Gilgit Baltistan, Hunza is a district blessed with sky-high, heavenly mountains and turquoise lakes. It offers rich history, thrilling adventure spots, and famously welcoming people. Hunza\'s history may date back to Alexander the Great and it shares borders with China and Afghanistan.',
								imageLeft: true
							},
							{ 
								title: 'Karakoram Highway (KKH)', 
								image: '/images/Hunza.jpg',
								description: 'The Karakoram Highway, often called the "8th Wonder of the World," is one of the most scenic roads on the planet. It winds through towering mountains, deep valleys, and crystal clear rivers, offering breathtaking views throughout the journey to Hunza. Traveling on KKH is an experience in itself, filled with dramatic landscapes and unforgettable moments.',
								imageLeft: false
							},
							{ 
								title: 'Altit Fort', 
								image: '/images/Hunza.jpg',
								description: 'This nearly 1100-year-old fort sits on a massive rock and was the home of the Hunza Rulers (Mirs). It features a 200-meter-high watch tower that overlooked the ancient Silk Route. It has been beautifully restored and offers guided tours and a wonderful local women-run café at its base.',
								imageLeft: true
							},
							{ 
								title: 'Baltit Fort', 
								image: '/images/Hunza.jpg',
								description: 'An ancient, stunning fort in Karimabad, estimated to be 700 to 800 years old. It was built higher than Altit to act as a watchtower over the Silk Route for trade and protection. Now a beautifully preserved UNESCO World Heritage site, it offers extraordinary views of the valley.',
								imageLeft: false
							},
							{ 
								title: 'Attabad Lake', 
								image: '/images/Hunza.jpg',
								description: 'Attabad Lake is famous worldwide for its bright turquoise water. Formed after a natural landslide in 2010, the lake has become a major attraction where travelers enjoy boating, jet skiing, dining at lakeside cafes and capturing stunning photographs. The magical blue color makes this lake one of the most iconic spots of Hunza.',
								imageLeft: true
							},
							{ 
								title: 'Attabad Tunnels', 
								image: '/images/Hunza.jpg',
								description: 'The Attabad Tunnels add a modern touch to the region\'s natural beauty. These long tunnels cut directly through the mountains and provide a smooth, scenic drive connecting Lower Hunza with the Upper Hunza region. The contrast of engineering brilliance with natural landscapes makes this stretch unforgettable.',
								imageLeft: false
							},
							{ 
								title: 'Khunjerab Pass', 
								image: '/images/Hunza.jpg',
								description: 'Khunjerab Pass, located at an altitude of 4,693 meters, is the world\'s highest paved international border crossing between Pakistan and China. The journey to the pass is filled with breathtaking glacier views, snow-covered mountains, and chances of spotting wildlife like ibex and marmots. The cold, fresh air and open landscapes make it a must visit destination.',
								imageLeft: true
							},
							{ 
								title: 'Hussaini Suspension Bridge', 
								image: '/images/Hunza.jpg',
								description: 'The Hussaini Suspension Bridge is often called one of the most thrilling bridges in the world. With its wooden planks and dramatic setting over the river, it offers a unique adventure. Despite its looks, it is safe to cross and provides excellent views of the majestic Passu Cones rising sharply in the background.',
								imageLeft: false
							},
							{ 
								title: 'Eagle\'s Nest Viewpoint', 
								image: '/images/Hunza.jpg',
								description: 'Eagle\'s Nest in Duikar is the best place in Hunza to witness magical sunrises and sunsets. From this viewpoint, travelers can see panoramic views of Rakaposhi, Golden Peak, Ultar Sar and other surrounding mountains. The scenery transforms beautifully with changing light, making it a must see location for photographers.',
								imageLeft: true
							},
							{ 
								title: 'Karimabad Bazar', 
								image: '/images/Hunza.jpg',
								description: 'Karimabad Bazar is the cultural and shopping hub of Hunza. Visitors can explore local gemstones, traditional handicrafts, handmade wool clothing, dry fruits, and authentic Hunzai food. The lively atmosphere, combined with friendly locals and scenic views, makes shopping here a pleasure.',
								imageLeft: false
							},
							{ 
								title: 'Passu Cones', 
								image: '/images/Hunza.jpg',
								description: 'These mountains are famous for their sharp, pyramid like structure and are also known as Passu Cathedral. They stand at 6106 meters and dominate the backdrop of the peaceful Passu Village on the KKH. Passu is a quiet destination, offering panoramic, serene views perfect for contemplation and photos.',
								imageLeft: true
							},
							{ 
								title: 'Passu Glacier', 
								image: '/images/Hunza.jpg',
								description: 'Located just south of the mighty Passu Cones, you can spot this glacier easily from the KKH. It stretches over 1.5 sq km and is connected to the massive Batura Glacier behind it. You can trek from Borith Lake for 1-2 hours to get closer to this impressive ice mass.',
								imageLeft: false
							},
							{ 
								title: 'Batura Glacier', 
								image: '/images/Hunza.jpg',
								description: 'This is the neighboring glacier to Passu Glacier and is incredibly important. It is the longest and largest glacier outside the polar regions and the third largest in all of Pakistan. Stretching for almost 57 km, it sits at the base of the Batura and Passu Peaks.',
								imageLeft: true
							},
							{ 
								title: 'Hopper Valley (Nagar)', 
								image: '/images/Hunza.jpg',
								description: 'Hopper Valley in Nagar offers a quieter, peaceful escape filled with lush greenery, historical villages, and the famous Hopper Glacier. The contrast of white glaciers with green fields creates a stunning landscape, perfect for nature lovers who want to experience untouched beauty.',
								imageLeft: false
							},
							{ 
								title: 'Gulmit Village', 
								image: '/images/Hunza.jpg',
								description: 'Known locally as Gul-e-Gulmit (Flower of Gulmit), this is a very peaceful spot along the KKH. It offers tourist accommodations and is stunning during the peak Cherry Blossom and Autumn seasons. Gulmit is a quiet destination with historical importance, located just past Attabad Lake.',
								imageLeft: true
							},
							{ 
								title: 'Ondra Poygah Gulmit', 
								image: '/images/Hunza.jpg',
								description: 'Ondra was the site of an old fort in Gulmit and Poygah means stairs in the local language. Local volunteers built nearly 1655 stone stairs to reach the fort ruins at the top. From the fort, you get expansive views of Attabad Lake, the Passu Cones, and the surrounding villages.',
								imageLeft: false
							},
							{ 
								title: 'Borith Lake', 
								image: '/images/Hunza.jpg',
								description: 'Borith Lake is a calm, serene freshwater lake surrounded by mountains. It\'s ideal for peaceful walks, short hikes and photography. The area offers stunning views and a refreshing environment, making it a great stop for travelers looking to relax.',
								imageLeft: true
							},
							{ 
								title: 'Old Ganish Village', 
								image: '/images/Hunza.jpg',
								description: 'Old Ganish Village is one of the oldest settlements in Hunza, over 1,000 years old and recognized by UNESCO for its cultural preservation. The village features ancient mosques, old houses and beautifully restored architecture that represents the deep history of the region.',
								imageLeft: false
							},
							{ 
								title: 'Rainbow Suspension Bridge', 
								image: '/images/Hunza.jpg',
								description: 'The Rainbow Suspension Bridge is a colorful, scenic attraction perfect for light adventure and photography. Surrounded by mountains and vibrant landscapes, this bridge adds a playful and picturesque element to any Hunza trip.',
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
								{/* Image */}
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
								
								{/* Text Content */}
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


			{/* ====================== CULTURE OF SWAT VALLEY ====================== */}
			<section 
				data-section-id="culture"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('culture') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl ml-0 md:ml-8 lg:ml-12">
						<h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Culture of Hunza Valley:
						</h3>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The people of Hunza Valley are known for their rich culture and longevity. Both men and women take part in traditional crafts, including hand-woven fabrics, embroidery, and unique jewelry making. The Hunza people are famous for their hospitality, traditional music, and unique architectural style.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== THE ECONOMY OF KALAM SWAT VALLEY ====================== */}
			<section 
				data-section-id="economy"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('economy') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl ml-0 md:ml-8 lg:ml-12">
						<h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: secondaryBlack, fontSize: '24px' }}>
							The Economy of Hunza Valley:
						</h3>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The economy of Hunza Valley is primarily based on agriculture, tourism, and small-scale industries. The valley produces delicious apricots, apples, and other fruits.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== EDUCATIONAL IN KALAM SWAT VALLEY ====================== */}
			<section 
				data-section-id="educational"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('educational') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl ml-0 md:ml-8 lg:ml-12">
						<h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Educational in Hunza Valley:
						</h3>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							Several educational institutions in Hunza Valley include primary and secondary schools, colleges, and universities. The region has a strong focus on education and literacy.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== THINGS TO DO IN KALAM SWAT ====================== */}
			<section 
				data-section-id="things-to-do"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('things-to-do') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: secondaryBlack }}>
							Things to Do in Hunza
						</h2>
					</div>
					
					{/* 5 Images Vertical Collage - Attached */}
					<div className="flex flex-row max-w-7xl mx-auto overflow-hidden rounded-lg">
						{[
							{
								image: '/images/boating.jpg',
								title: 'Boating & jet skiing at Attabad Lake',
								description: 'Enjoy thrilling water activities on the stunning turquoise waters of Attabad Lake'
							},
							{
								image: '/images/Hiking to lakes & waterfalls.jpg',
								title: 'Trekking & hiking (Passu, Ondra Poygah, Eagle\'s Nest)',
								description: 'Explore scenic trails and trekking routes offering breathtaking mountain views'
							},
							{
								image: '/images/camping.jpg',
								title: 'Camping, bonfires & stargazing',
								description: 'Experience magical nights under the stars with bonfires in beautiful locations'
							},
							{
								image: '/images/boating.jpg',
								title: 'Fishing & boating',
								description: 'Enjoy peaceful fishing and boating experiences in pristine mountain lakes'
							},
							{
								image: '/images/picture forest.jpg',
								title: 'Photography & drone shots',
								description: 'Capture stunning landscapes, mountains, and valleys with photography and drone shots'
							},
						].map((item, idx) => (
							<div 
								key={idx} 
								className={`relative h-[300px] md:h-[350px] overflow-hidden transition-all duration-700 ease-in-out scroll-reveal-fade-in cursor-pointer ${
									hoveredImageIndex === idx 
										? 'flex-[2.5]' 
										: hoveredImageIndex !== null 
											? 'flex-[0.6]' 
											: 'flex-1'
								} ${visibleSections.has('things-to-do') ? 'revealed' : ''}`}
								style={{
									transitionDelay: `${idx * 0.1}s`
								}}
								onMouseEnter={() => setHoveredImageIndex(idx)}
								onMouseLeave={() => setHoveredImageIndex(null)}
							>
								<Image 
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-500"
									style={{ transform: hoveredImageIndex === idx ? 'scale(1.1)' : 'scale(1)' }}
								/>
								{/* Overlay with content */}
								<div 
									className={`absolute inset-0 transition-all duration-500 ${
										hoveredImageIndex === idx 
											? 'bg-black/50' 
											: 'bg-black/20'
									}`}
								></div>
								{/* Content Overlay */}
								<div 
									className={`absolute inset-0 flex flex-col justify-center items-center text-white transition-all duration-500 ${
										hoveredImageIndex === idx 
											? 'opacity-100 translate-y-0' 
											: 'opacity-0 translate-y-4'
									}`}
								>
									<div className="text-center px-4">
										<div className="w-12 h-0.5 bg-white mx-auto mb-3"></div>
										<h3 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">
											{item.title}
										</h3>
										<div className="w-12 h-0.5 bg-white mx-auto mb-3"></div>
										<p className="text-sm md:text-base opacity-90 max-w-xs">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== HUNZA'S MUST-TRY TRADITIONAL FOOD ====================== */}
			<section 
				data-section-id="traditional-food"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('traditional-food') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Hunza's Must-Try Traditional Food
						</h2>
						<p className="leading-normal text-center mb-4" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Hunza dishes are cooked with pure, organic ingredients to be very nutritious and keep people warm during the cold mountain winters. Local herbs are used a lot, and yak meat is a common and important part of the meals in Gilgit Baltistan.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== BEST RESTAURANTS TO VISIT IN HUNZA VALLEY ====================== */}
			<section 
				data-section-id="restaurants"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('restaurants') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Best Restaurants to Visit in Hunza Valley
						</h2>
						<p className="leading-normal text-center mb-4" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Hunza Valley is famous for its massive mountains, huge glaciers, and breathtaking turquoise lakes, creating a picture perfect setting. But this region is also a culinary destination where delicious food awaits at every turn!
						</p>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							The key to Hunzai cuisine is the focus on organic, pure, and healthy ingredients their motto is: tasty, locally grown, and all organic. So, you don't need to worry if you eat a little too much while enjoying your trip in Hunza Valley.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== BEST TIME TO VISIT HUNZA ====================== */}
			<section 
				data-section-id="best-time"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('best-time') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Best Time to Visit Hunza
						</h2>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border" style={{ borderColor: `${primaryOrange}30` }}>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>
									Cherry Blossom (March–April)
								</h3>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									The valley turns pink and white ideal for photography and peaceful walks.
								</p>
							</div>
						</div>
						
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border" style={{ borderColor: `${primaryOrange}30` }}>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>
									Autumn (October–November)
								</h3>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Golden leaves and dramatic mountain views Hunza at its most colorful.
								</p>
							</div>
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
								question: 'Where is Hunza Valley located?',
								answer: 'Hunza is located in Gilgit-Baltistan, along the Karakoram Highway.'
							},
							{
								question: 'What is the best time to visit Hunza?',
								answer: 'Cherry Blossom (March–April) and Autumn (October–November).'
							},
							{
								question: 'Is Hunza safe for tourists?',
								answer: 'Yes, Hunza is considered one of Pakistan\'s safest regions.'
							},
							{
								question: 'How can I reach Hunza?',
								answer: 'By road via KKH or by air via Gilgit Airport (then 1.5–2 hours drive).'
							},
							{
								question: 'Are there trekking routes in Hunza?',
								answer: 'Yes, Passu Glacier, Borith Lake, Ondra Poygah and Eagle\'s Nest.'
							},
							{
								question: 'Are there historical places?',
								answer: 'Altit Fort, Baltit Fort, Ganish Village and ancient settlements.'
							},
							{
								question: 'What festivals take place in Hunza?',
								answer: 'Local music nights, cultural festivals, apricot harvest festivals and more.'
							},
							{
								question: 'What food is available?',
								answer: 'Traditional Hunzai food, continental meals, BBQ and desi dishes.'
							},
							{
								question: 'Which languages are spoken?',
								answer: 'Burushaski, Wakhi, and Urdu.'
							},
							{
								question: 'Is ATM/credit card service available?',
								answer: 'ATMs available in Aliabad & Karimabad. Carry some cash for Upper Hunza'
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
								Get Your Free Quote Now!
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

export default HunzaPage;

