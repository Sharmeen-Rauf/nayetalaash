'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ArrowRight, ChevronDown, MapPin, MessageCircle, Check } from 'lucide-react';

const ContactPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		company: '',
		service: '',
		source: '',
		message: ''
	});

	// Theme Colors
	const primaryOrange = '#f99621';
	const secondaryBlack = '#211f20';
	
	// Dynamic logo based on scroll position
	const logoImage = isLight ? '/images/Final....png' : '/images/logo landscape(white).png';
	
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
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// WhatsApp click handler
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/923311438251', '_blank');
	};

	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
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
								className="px-2 py-1 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-bold text-[#211f20] rounded-full hover:bg-[#e8851a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f99621]/50 ml-0.5"
								style={{ backgroundColor: '#f99621' }}
							>
								<span className="hidden sm:inline">CUSTOMIZE A TOUR</span>
								<span className="sm:hidden">CUSTOMIZE</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation Bar - Dynamic */}
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
							<Link href="/#home" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>HOME</Link>
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
							<Link href="/#about" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>ABOUT US</Link>
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
								<Link href="/#tours" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
									Hunza Tour Packages
								</Link>
								<Link href="/#tours" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
									Skardu Tour Packages
								</Link>
								<Link href="/#tours" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
									Nathia Gali And Murree Tour Packages
								</Link>
								<Link href="/#tours" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
									Neelum Valley Azad Kashmir Tour Packages
								</Link>
								<Link href="/#tours" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
									Kumrat Valley Tour Packages
								</Link>
								<Link href="/#tours" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
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

			{/* Hero Section */}
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
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
							<span className="font-autography hero-text-reveal" style={{ display: 'inline-block' }}>
								Get Your Perfect Travel Plan
							</span>
							<br />
							<span className="block mt-4 hero-text-reveal hero-text-delay-1" 
								style={{ 
									color: primaryOrange, 
									display: 'inline-block'
								}}>
								We&apos;re your complete travel partner.
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed hero-text-reveal hero-text-delay-2">
							From discovering hidden cultures to planning stress free trips, we help you travel smarter, safer and more comfortably starting today.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="py-8 md:py-12" style={{ backgroundColor: '#f5f5f5' }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header Section */}
					<div className="text-center mb-12">
						<div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: primaryOrange }}></div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Let&apos;s explore where we can take you next
						</h2>
						<p className="text-base md:text-lg mb-2 max-w-3xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
							We help travelers and companies design structured, smooth and memorable travel experiences. From tour planning to bookings get full support without any hassle.

						</p>
						
					</div>

					{/* Main Content Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
						<div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-10">
							{/* Left: Why Talk To Us? */}
							<div>
								<h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: secondaryBlack }}>
									Why talk to us?
								</h3>
								<ul className="space-y-4">
									{[
										'Free, no obligation consultation with a travel specialist',
										'Customized routes, stays and experiences',
										'Clear guidance on budget, itinerary and booking',
										'Trusted travel support across Pakistan'
									].map((item, idx) => (
										<li key={idx} className="flex items-start gap-3">
											<div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ backgroundColor: primaryOrange }}>
												<Check className="w-3 h-3 text-white" strokeWidth={3} />
											</div>
											<span className="text-base leading-relaxed" style={{ color: '#6b7280' }}>{item}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Right: Contact Form */}
							<div>
								<div className="mb-6">
									<span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ backgroundColor: primaryOrange }}>
										CONTACT
									</span>
									<h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: secondaryBlack }}>
										Tell Us About Your Project
									</h3>
								</div>

								<form onSubmit={handleFormSubmit} className="space-y-4">
									{/* Row 1: Full Name and Email */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<input
												type="text"
												id="fullName"
												name="fullName"
												placeholder="Your full name"
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f99621] focus:border-transparent bg-white text-[#211f20] placeholder-gray-400"
												required
											/>
										</div>
										<div>
											<input
												type="email"
												id="email"
												name="email"
												placeholder="you@example.com"
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f99621] focus:border-transparent bg-white text-[#211f20] placeholder-gray-400"
												required
											/>
										</div>
									</div>

									{/* Row 2: Phone and Service of Interest */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<input
												type="tel"
												id="phone"
												name="phone"
												placeholder="Phone number"
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f99621] focus:border-transparent bg-white text-[#211f20] placeholder-gray-400"
												required
											/>
										</div>
										<div className="relative">
											<select
												id="service"
												name="service"
												value={formData.service}
												onChange={handleFormChange}
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f99621] focus:border-transparent appearance-none bg-white text-[#211f20]"
												required
											>
												<option value="">Tour Categories</option>
												<option value="custom-tours">Custom Tour Packages</option>
												<option value="family-tours">Family Tour Packages</option>
												<option value="honeymoon">Honeymoon Trips</option>
												<option value="group-tours">Group Tours</option>
												<option value="adventure">Adventure Tours</option>
												<option value="cultural">Cultural Experiences</option>
												<option value="city-tours">City Tours</option>
												<option value="other">Other</option>
											</select>
											<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
										</div>
									</div>

									{/* Row 3: Company Name (optional) */}
									<div>
										<input
											type="text"
											id="company"
											name="company"
											placeholder="Company name (optional)"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f99621] focus:border-transparent bg-white text-[#211f20] placeholder-gray-400"
										/>
									</div>

									{/* Row 4: How did you find us? */}
									<div className="relative">
										<select
											id="source"
											name="source"
											value={formData.source}
											onChange={handleFormChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f99621] focus:border-transparent appearance-none bg-white text-[#211f20]"
											required
										>
											<option value="">How did you find us?</option>
											<option value="search">Search Engine</option>
											<option value="social">Social Media</option>
											<option value="referral">Referral</option>
											<option value="event">Event / Webinar</option>
											<option value="other">Other</option>
										</select>
										<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
									</div>

									{/* Row 5: Message Textarea */}
									<div>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleFormChange}
											rows={6}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f99621] focus:border-transparent resize-y text-[#211f20] placeholder-gray-400"
											placeholder="Tell us a bit about your goals"
											required
										/>
									</div>

									{/* Consent Checkbox */}
									<div className="flex items-start gap-2">
										<input
											type="checkbox"
											id="consent"
											className="mt-1 w-4 h-4 rounded border-gray-300 focus:ring-[#f99621]"
											required
										/>
										<label htmlFor="consent" className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
											I consent to receive marketing communications from Nayi Talaash, and understand I can opt out at any time.
										</label>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										className="w-full px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
										style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
									>
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Presence Section */}
			<section className="py-8 md:py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Centered Heading */}
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Our Presence
						</h2>
					</div>

					{/* Image Left, Content Right */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Left: Image */}
						<div className="order-2 lg:order-1">
							<div className="relative w-full h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-xl">
								<Image
									src="/images/hd-mazarequaid-karachi.jpg"
									alt="Mazar-e-Quaid Karachi"
									fill
									className="object-cover"
								/>
							</div>
						</div>

						{/* Right: Content */}
						<div className="order-1 lg:order-2">
							<h3 className="font-autography text-3xl md:text-4xl font-bold mb-2" style={{ color: primaryOrange }}>
								Head Office
							</h3>
							<h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
								Karachi, Pakistan
							</h3>
							<p className="text-base mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
								Located in the heart of the city, our head office in PECHS Block 6 serves as the center of all operations at Nayi Talaash. This is where our travel experts plan routes, design tour experiences and assist travelers from all across Pakistan.
							</p>
							<p className="text-base mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
								Whether you want guidance, bookings or a fully customized trip, our Karachi team is always ready to help you explore the beauty of Pakistan with comfort and confidence.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryOrange }} />
									<p className="text-base" style={{ color: '#6b7280' }}>F-36 PECHS Block 6, Karachi, Pakistan</p>
								</div>
								<div className="flex items-center gap-3">
									<Mail className="w-5 h-5 flex-shrink-0" style={{ color: primaryOrange }} />
									<a href="mailto:info@nayitalaash.com" className="text-base transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
										info@nayitalaash.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Connect With Us Section */}
			<section className="py-8 md:py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Connect With Us
						</h2>
						<p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
							Stay updated with travel tips, new packages and cultural experiences.
						</p>
						<div className="flex justify-center gap-6">
							<a 
								href="https://www.facebook.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#f99621] transition-all"
							>
								<Facebook className="w-6 h-6" style={{ color: secondaryBlack }} />
							</a>
							<a 
								href="https://www.instagram.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#f99621] transition-all"
							>
								<Instagram className="w-6 h-6" style={{ color: secondaryBlack }} />
							</a>
							<a 
								href="https://www.youtube.com/@nayetalash" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#f99621] transition-all"
							>
								<Youtube className="w-6 h-6" style={{ color: secondaryBlack }} />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== WHERE ARE WE LOCATED? ====================== */}
			<section className="pt-0 pb-8 md:pb-12 bg-white overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-x-hidden">
					<div className="mb-8 scroll-reveal-fade-up text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
								color: primaryOrange
							}}>
								Find us
							</span>
							<span className="block mt-2" style={{ 
								color: secondaryBlack
							}}>
								Where Are We Located?
							</span>
						</h2>
					</div>

					<div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
						<iframe
							src="https://www.google.com/maps?q=F-36+PECHS+BLOCK+6,+Karachi,+Pakistan&output=embed"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-16 bg-white border-t relative overflow-hidden" style={{ borderColor: `${primaryOrange}30` }}>
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
									<span className="text-lg">🇵🇰</span>
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
									<Link href="/#home" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Home</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/#tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Pakistan Tours</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/#city-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>City Tours</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/#group-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Group Tour</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/#destination" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Destination</Link>
								</li>
								<li className="pb-2">
									<Link href="/#about" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>About Us</Link>
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

export default ContactPage;

