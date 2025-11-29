'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, Search, Building2, Car, Sparkles, Users, ShieldCheck, FileText, Briefcase, CheckCircle2, MapPin, Globe, Award, Clock, Download, MessageSquare, Map, Plane, ImagePlus, Gem, Luggage } from 'lucide-react';

const AboutPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

	// Slider states for each section
	const [hotelsSlide, setHotelsSlide] = useState(0);
	const [conveyanceSlide, setConveyanceSlide] = useState(0);
	const [experiencesSlide, setExperiencesSlide] = useState(0);
	const [crewSlide, setCrewSlide] = useState(0);
	const [covidSlide, setCovidSlide] = useState(0);
	const [trustSlide, setTrustSlide] = useState(0);
	const [visaSlide, setVisaSlide] = useState(0);
	const [managementSlide, setManagementSlide] = useState(0);

	// Hotels & Accommodation slider images
	const hotelsMainImages = [
		'/images/hotels and accomodation.jpg',
		'/images/hotel 1.jpg',
		'/images/hotel 2.jpg',
		'/images/hotel 3.jpg',
		'/images/hotel 4.jpg',
	];

	const hotelsThumbnails = [
		'/images/hotels and accomodation.jpg',
		'/images/hotel 1.jpg',
		'/images/hotel 2.jpg',
		'/images/hotel 3.jpg',
		'/images/hotel 4.jpg',
	];

	// Conveyance slider images
	const conveyanceMainImages = [
		'/images/conveyance 1.jpg',
		'/images/Conveyance 2.jpg',
		'/images/Conveyance 3.webp',
		'/images/conveyance 2.jpg',
		'/images/conveyance 3.jpg',
	];

	const conveyanceThumbnails = [
		'/images/conveyance 1.jpg',
		'/images/Conveyance 2.jpg',
		'/images/Conveyance 3.webp',
		'/images/conveyance 2.jpg',
		'/images/conveyance 3.jpg',
	];

	// Auto-slide effect for Hotels banner and thumbnail carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setHotelsSlide((prev) => (prev + 1) % hotelsMainImages.length);
		}, 4000); // Change slide every 4 seconds
		return () => clearInterval(interval);
	}, [hotelsMainImages.length]);

	// Auto-slide effect for Conveyance banner and thumbnail carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setConveyanceSlide((prev) => (prev + 1) % conveyanceMainImages.length);
		}, 4000); // Change slide every 4 seconds
		return () => clearInterval(interval);
	}, [conveyanceMainImages.length]);

	// Curated Trip Experiences slider images
	const experiencesMainImages = [
		'/images/Curated Trip Experiences.jpg',
		'/images/Curated Trip Experiences2.jpg',
		'/images/Curated Trip Experiences3.jpg',
		'/images/Curated Trip Experiences4.jpg',
		'/images/Curated Trip Experiences 5.jpg',
	];

	const experiencesThumbnails = [
		'/images/Curated Trip Experiences.jpg',
		'/images/Curated Trip Experiences2.jpg',
		'/images/Curated Trip Experiences3.jpg',
		'/images/Curated Trip Experiences4.jpg',
		'/images/Curated Trip Experiences 5.jpg',
	];

	// Auto-slide effect for Experiences banner and thumbnail carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setExperiencesSlide((prev) => (prev + 1) % experiencesMainImages.length);
		}, 4000); // Change slide every 4 seconds
		return () => clearInterval(interval);
	}, [experiencesMainImages.length]);

	// Best Crew slider images
	const crewMainImages = [
		'/images/crew.jpg',
		'/images/crew1.jpeg',
		'/images/crew2.jpg',
		'/images/crew3.jpeg',
	];

	const crewThumbnails = [
		'/images/crew.jpg',
		'/images/crew1.jpeg',
		'/images/crew2.jpg',
		'/images/crew3.jpeg',
	];

	// Auto-slide effect for Best Crew banner and thumbnail carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setCrewSlide((prev) => (prev + 1) % crewMainImages.length);
		}, 4000); // Change slide every 4 seconds
		return () => clearInterval(interval);
	}, [crewMainImages.length]);

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
							<Link href="/#home" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>HOME</Link>
							{/* PAKISTAN TOURS with Dropdown */}
							<div className="relative group cursor-pointer">
								<Link href="/#tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									<span className="flex items-center gap-1">
										PAKISTAN TOURS
										<ChevronRight className="w-4 h-4 rotate-90" />
									</span>
								</Link>
								
								{/* Dropdown Menu */}
								<div className="absolute top-full left-0 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
									<div className="backdrop-blur-lg bg-white/95 border border-gray-200 shadow-2xl rounded-lg overflow-hidden mt-2">
										<ul className="py-2">
											<li className="border-b border-gray-200">
												<Link href="/swat-kalam" className="block px-4 py-3 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Swat Kalam Tour Packages
												</Link>
											</li>
											<li className="border-b border-gray-200">
												<Link href="/#tours" className="block px-4 py-3 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Hunza Tour Packages
												</Link>
											</li>
											<li className="border-b border-gray-200">
												<Link href="/#tours" className="block px-4 py-3 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Skardu Tour Packages
												</Link>
											</li>
											<li className="border-b border-gray-200">
												<Link href="/#tours" className="block px-4 py-3 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Nathia Gali And Murree Tour Packages
												</Link>
											</li>
											<li className="border-b border-gray-200">
												<Link href="/#tours" className="block px-4 py-3 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Neelum Valley Azad Kashmir Tour Packages
												</Link>
											</li>
											<li className="border-b border-gray-200">
												<Link href="/#tours" className="block px-4 py-3 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
													Kumrat Valley Tour Packages
												</Link>
											</li>
											<li>
												<Link href="/#tours" className="block px-4 py-3 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">
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
							
							{/* DESTINATION with Multi-Level Dropdown */}
							<div className="relative group cursor-pointer">
								<Link href="/#destination" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									DESTINATION
								</Link>
								
								{/* Dropdown Menu - Responsive Width */}
								<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[90vw] max-w-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
									<div className="backdrop-blur-lg bg-white/95 border border-gray-200 shadow-2xl overflow-hidden rounded-lg">
										<div className="flex min-h-[400px]">
											{/* Pakistan Map - Left Side (Reduced Size) */}
											<div className="w-2/5 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-[#f99621]/10 to-[#f99621]/5">
												<Image 
													src="/images/map-2.png"
													alt="Pakistan Map"
													width={250}
													height={350}
													className="w-full h-auto max-h-[250px] object-contain"
												/>
											</div>
											
											{/* Regions List - Middle */}
											<div className="w-3/5 flex border-r border-gray-200">
												<div className="w-2/5 p-4 sm:p-6 border-r border-gray-200">
													<h3 className="text-xs font-bold text-[#211f20] uppercase tracking-wider mb-4">Pakistani Regions</h3>
													<ul className="space-y-1">
														<li className="group/item">
															<a 
																href="#gilgit" 
																onMouseEnter={() => setSelectedRegion('gilgit')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
															>
																Gilgit Baltistan
															</a>
														</li>
														<li className="group/item">
															<a 
																href="#kpk" 
																onMouseEnter={() => setSelectedRegion('kpk')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
															>
																KPK / Galyat
															</a>
														</li>
														<li className="group/item">
															<a 
																href="#punjab" 
																onMouseEnter={() => setSelectedRegion('punjab')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
															>
																Punjab
															</a>
														</li>
														<li className="group/item">
															<a 
																href="#sindh" 
																onMouseEnter={() => setSelectedRegion('sindh')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
															>
																Sindh
															</a>
														</li>
														<li className="group/item">
															<a 
																href="#balochistan" 
																onMouseEnter={() => setSelectedRegion('balochistan')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
															>
																Balochistan
															</a>
														</li>
													</ul>
												</div>
												
												{/* Sub-regions List - Right Side (Third Column) */}
												<div className="w-3/5 p-4 sm:p-6 relative">
													{selectedRegion === 'gilgit' && (
														<div className="space-y-1">
															<a href="#hunza-valley" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Hunza Valley</a>
															<a href="#skardu-valley" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Skardu Valley</a>
															<a href="#ghizer" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Ghizer</a>
															<a href="#astore" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Astore</a>
															<a href="#nagar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Nagar</a>
														</div>
													)}
													{selectedRegion === 'kpk' && (
														<div className="space-y-1">
															<a href="#peshawar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Peshawar</a>
															<a href="#malam-jabba" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Malam Jabba</a>
															<a href="#swat-valley" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Swat Valley</a>
															<a href="#chitral" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Chitral</a>
															<a href="#abbottabad" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Abbottabad</a>
														</div>
													)}
													{selectedRegion === 'punjab' && (
														<div className="space-y-1">
															<a href="#lahore-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Lahore District</a>
															<a href="#multan-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Multan District</a>
															<a href="#rawalpindi-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Rawalpindi District</a>
															<a href="#islamabad-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Islamabad District</a>
															<a href="#bahawalpur-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Bahawalpur District</a>
															<a href="#chakwal-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Chakwal District</a>
														</div>
													)}
													{selectedRegion === 'sindh' && (
														<div className="space-y-1">
															<a href="#karachi" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Karachi</a>
															<a href="#hyderabad" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Hyderabad</a>
															<a href="#thatta" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Thatta</a>
															<a href="#sukkur" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Sukkur</a>
															<a href="#mirpur-khas" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Mirpur Khas</a>
														</div>
													)}
													{selectedRegion === 'balochistan' && (
														<div className="space-y-1">
															<a href="#quetta" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Quetta</a>
															<a href="#gwadar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Gwadar</a>
															<a href="#ziarat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Ziarat</a>
															<a href="#turbat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Turbat</a>
															<a href="#lasbela" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Lasbela</a>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<Link href="/about" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>ABOUT US</Link>
							<Link href="/contact" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>CONTACT US</Link>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(true)}
							className="lg:hidden p-2 rounded-md transition-colors hover:bg-white/20"
							aria-label="Toggle navigation menu"
						>
							<Menu className={`w-6 h-6 ${isLight ? 'text-[#211f20]' : 'text-white'}`} />
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
					<div className="mt-12 mb-4">
						<Image 
							src={logoImage}
							alt="Nayi Talaash Logo"
							width={150}
							height={50}
							className="h-12 w-auto object-contain"
						/>
					</div>

					{/* Nav Links */}
					<nav className="flex flex-col space-y-1 flex-grow">
						<Link href="/#home" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
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
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
							<span className="font-autography hero-text-reveal block mb-4" style={{ display: 'inline-block' }}>
								Who We Are
							</span>
							<span className="block hero-text-reveal hero-text-delay-1" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Discover Pakistan. Discover Yourself.
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-normal hero-text-reveal hero-text-delay-2">
							Nayi Talaash offers meaningful group tours across Pakistan, turning every journey into stories, culture, and connection.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== WHY TRAVEL WITH NAYI TALAASH - CARD GRID SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Top Section: Button, Stars, and Heading */}
					<div className="text-center mb-6">
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 mb-4 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Get in Touch
						</button>
						<div className="flex items-center justify-center gap-2 mb-4">
							<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
							<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
							<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-bold" style={{ color: secondaryBlack }}>
							Do you want to know what makes us your perfect travel companion?
						</h2>
					</div>

					{/* 8-Card Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{/* Card 1: Hotels & Accommodation */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/hotels and accomodation.jpg"
								alt="Hotels & Accommodation"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">Premium Stays, Cozy Rooms, And Scenic Camps</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Hotels & Accommodation</h3>
							</div>
						</div>

						{/* Card 2: Conveyance */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/travel in style.jpg"
								alt="Conveyance"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">Travel Smoothly With Clean, Safe And Comfortable Transport</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Conveyance</h3>
							</div>
						</div>

						{/* Card 3: Curated Trip Experiences */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/Curated Trip Experiences.jpg"
								alt="Curated Trip Experiences"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">Adventure, Culture, Food, Nature Experiences Crafted For Your Style</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Curated Trip Experiences</h3>
							</div>
						</div>

						{/* Card 4: Best Crew */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/crew.jpg"
								alt="Best Crew"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">Friendly, Trained Tour Managers Who Make Your Journey Easy</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Best Crew</h3>
							</div>
						</div>

						{/* Card 5: Safe & Secure Travel */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/SAFE & SECURE TRAVEL.jpg"
								alt="Safe & Secure Travel"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">Verified Routes, Trusted Partners And Complete Peace Of Mind</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Safe & Secure Travel</h3>
							</div>
						</div>

						{/* Card 6: Trust & Security */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/TRUST & SECURITY.jpg"
								alt="Trust & Security"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">Registered Company, Transparent Booking And Reliable Support</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Trust & Security</h3>
							</div>
						</div>

						{/* Card 7: Travel Support */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/TRAVEL SUPPORT.jpg"
								alt="Travel Support"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">We Handle Permits, Bookings And Planning Zero Hassle For You</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Travel Support</h3>
							</div>
						</div>

						{/* Card 8: Tour Management */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/comprehensive tour management.jpg"
								alt="Tour Management"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium opacity-90">Smooth Coordination From Start To Finish Just Enjoy The Journey</p>
								<h3 className="text-base md:text-lg font-bold leading-tight capitalize">Tour Management</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== HOTELS & ACCOMMODATION SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				{/* Main Banner Slider - Full Width */}
				<div className="relative mb-4 w-full">
					<div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
							<Image 
								src={hotelsMainImages[hotelsSlide]}
								alt="Hotels & Accommodation"
								fill
								className="object-cover transition-opacity duration-500"
							/>
							{/* Dark overlay for text readability */}
							<div className="absolute inset-0 bg-black/30"></div>
							
							{/* Text Overlay */}
							<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Hotels & Accommodation</h2>
								<p className="text-lg md:text-xl mb-4">Best Deals On Premium Stays</p>
								<button
									onClick={handleWhatsAppClick}
									className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
									style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
								>
									Enquire now
								</button>
							</div>

							{/* Navigation Arrows with padding to avoid button overlap */}
							<button
								onClick={() => setHotelsSlide(prev => (prev - 1 + hotelsMainImages.length) % hotelsMainImages.length)}
								className="absolute left-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
							>
								<ChevronLeft className="w-6 h-6" style={{ color: primaryOrange }} />
							</button>
							<button
								onClick={() => setHotelsSlide(prev => (prev + 1) % hotelsMainImages.length)}
								className="absolute right-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
							>
								<ChevronRight className="w-6 h-6" style={{ color: primaryOrange }} />
							</button>
						</div>
					</div>

				{/* Auto-sliding Thumbnail Carousel - Centered */}
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2 justify-center flex-wrap">
							{hotelsThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-[calc(20%-0.5rem)] max-w-[180px] cursor-pointer transition-all duration-300"
									onClick={() => setHotelsSlide(idx)}
								>
									<div className="relative h-24 md:h-32 rounded overflow-hidden">
										<Image 
											src={thumb}
											alt={`Thumbnail ${idx + 1}`}
											fill
											className="object-cover transition-all duration-300"
										/>
										{/* Black opacity overlay for non-active thumbnails */}
										{idx !== hotelsSlide && (
											<div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>
										)}
										{idx === hotelsSlide && (
											<div className="absolute inset-0 border-2 transition-all duration-300" style={{ borderColor: primaryOrange }}></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ====================== HOTELS & ACCOMMODATION CONTENT SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Four Red Stars */}
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-6">
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							We partner with the best hotels, guest houses, resorts, and campsites across Pakistan to bring you a comfortable and safe stay at the best possible prices. From the luxury of Hunza river view hotels, the calm of Skardu boutique lodges, to beachside resorts in Gwadar & Kund Malir, we ensure comfort meets quality every time.
						</p>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Whether you prefer a private room, a family suite or a mountain campsite, our team ensures your preferences are noted, matched and delivered.
						</p>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							With Nayi Talaash, you enjoy:
						</p>
						<ul className="list-disc list-inside mb-4 space-y-1 text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
							<li>Smooth check-ins with your preferred room type</li>
							<li>Premium suites with scenic views</li>
							<li>Campsites with security & trained crew</li>
							<li>Easy reservation changes (no stress on flight delays or plan shifts)</li>
						</ul>
						<p className="text-base md:text-lg leading-normal font-semibold" style={{ color: secondaryBlack }}>
							Your comfort is our priority always.
						</p>
					</div>

					{/* Three Images Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
						{/* Image 1: Coastal Retreat */}
						<div className="relative group">
							<div className="relative h-80 rounded-lg overflow-hidden">
								<Image 
									src="/images/Kund Malir.jpg"
									alt="Coastal Retreat"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							</div>
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
								<div className="relative flex items-center justify-center">
									{/* Decorative green swirl - left */}
									<svg className="absolute -left-6 w-12 h-12" style={{ color: '#22c55e' }} viewBox="0 0 40 40" fill="currentColor">
										<path d="M20 5C12 5 5 12 5 20s7 15 15 15c3 0 6-1 8-3" stroke="none" fill="currentColor" opacity="0.8"/>
										<path d="M25 10C30 12 32 18 30 23c-2 5-8 7-13 5" stroke="none" fill="currentColor" opacity="0.6"/>
									</svg>
									<h3 className="text-xl md:text-2xl font-autography relative z-10 px-4">Coastal Retreat</h3>
									{/* Decorative green swirl - right */}
									<svg className="absolute -right-6 w-12 h-12" style={{ color: '#22c55e' }} viewBox="0 0 40 40" fill="currentColor">
										<path d="M20 35C28 35 35 28 35 20s-7-15-15-15c-3 0-6 1-8 3" stroke="none" fill="currentColor" opacity="0.8"/>
										<path d="M15 30C10 28 8 22 10 17c2-5 8-7 13-5" stroke="none" fill="currentColor" opacity="0.6"/>
									</svg>
								</div>
							</div>
						</div>

						{/* Image 2: Dream Journeys of North */}
						<div className="relative group">
							<div className="relative h-80 rounded-lg overflow-hidden">
								<Image 
									src="/images/Hunza.jpg"
									alt="Dream Journeys of North"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							</div>
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
								<div className="relative flex items-center justify-center">
									{/* Decorative green swirl - left */}
									<svg className="absolute -left-6 w-12 h-12" style={{ color: '#22c55e' }} viewBox="0 0 40 40" fill="currentColor">
										<path d="M20 5C12 5 5 12 5 20s7 15 15 15c3 0 6-1 8-3" stroke="none" fill="currentColor" opacity="0.8"/>
										<path d="M25 10C30 12 32 18 30 23c-2 5-8 7-13 5" stroke="none" fill="currentColor" opacity="0.6"/>
									</svg>
									<h3 className="text-xl md:text-2xl font-autography relative z-10 px-4">Dream Journeys of North</h3>
									{/* Decorative green swirl - right */}
									<svg className="absolute -right-6 w-12 h-12" style={{ color: '#22c55e' }} viewBox="0 0 40 40" fill="currentColor">
										<path d="M20 35C28 35 35 28 35 20s-7-15-15-15c-3 0-6 1-8 3" stroke="none" fill="currentColor" opacity="0.8"/>
										<path d="M15 30C10 28 8 22 10 17c2-5 8-7 13-5" stroke="none" fill="currentColor" opacity="0.6"/>
									</svg>
								</div>
							</div>
						</div>

						{/* Image 3: Baloch Richness */}
						<div className="relative group">
							<div className="relative h-80 rounded-lg overflow-hidden">
								<Image 
									src="/images/gwadar.jpg"
									alt="Baloch Richness"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							</div>
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
								<div className="relative flex items-center justify-center">
									{/* Decorative green swirl - left */}
									<svg className="absolute -left-6 w-12 h-12" style={{ color: '#22c55e' }} viewBox="0 0 40 40" fill="currentColor">
										<path d="M20 5C12 5 5 12 5 20s7 15 15 15c3 0 6-1 8-3" stroke="none" fill="currentColor" opacity="0.8"/>
										<path d="M25 10C30 12 32 18 30 23c-2 5-8 7-13 5" stroke="none" fill="currentColor" opacity="0.6"/>
									</svg>
									<h3 className="text-xl md:text-2xl font-autography relative z-10 px-4">Baloch Richness</h3>
									{/* Decorative green swirl - right */}
									<svg className="absolute -right-6 w-12 h-12" style={{ color: '#22c55e' }} viewBox="0 0 40 40" fill="currentColor">
										<path d="M20 35C28 35 35 28 35 20s-7-15-15-15c-3 0-6 1-8 3" stroke="none" fill="currentColor" opacity="0.8"/>
										<path d="M15 30C10 28 8 22 10 17c2-5 8-7 13-5" stroke="none" fill="currentColor" opacity="0.6"/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== CONVEYANCE SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-white">
				{/* Main Banner Slider - Full Width */}
				<div className="relative mb-4 w-full">
					<div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
							<Image 
								src={conveyanceMainImages[conveyanceSlide]}
								alt="Conveyance"
								fill
								className="object-cover transition-opacity duration-500"
							/>
							{/* Dark overlay for text readability */}
							<div className="absolute inset-0 bg-black/30"></div>
							
							{/* Text Overlay */}
							<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Conveyance</h2>
								<p className="text-lg md:text-xl mb-4">Travel In Style & Comfort</p>
								<button
									onClick={handleWhatsAppClick}
									className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
									style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
								>
									Enquire now
								</button>
							</div>

							{/* Navigation Arrows with padding to avoid button overlap */}
							<button
								onClick={() => setConveyanceSlide(prev => (prev - 1 + conveyanceMainImages.length) % conveyanceMainImages.length)}
								className="absolute left-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
							>
								<ChevronLeft className="w-6 h-6" style={{ color: primaryOrange }} />
							</button>
							<button
								onClick={() => setConveyanceSlide(prev => (prev + 1) % conveyanceMainImages.length)}
								className="absolute right-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
							>
								<ChevronRight className="w-6 h-6" style={{ color: primaryOrange }} />
							</button>
						</div>
					</div>

				{/* Auto-sliding Thumbnail Carousel - Centered */}
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2 justify-center flex-wrap">
							{conveyanceThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-[calc(20%-0.5rem)] max-w-[180px] cursor-pointer transition-all duration-300"
									onClick={() => setConveyanceSlide(idx)}
								>
									<div className="relative h-24 md:h-32 rounded overflow-hidden">
										<Image 
											src={thumb}
											alt={`Thumbnail ${idx + 1}`}
											fill
											className="object-cover transition-all duration-300"
										/>
										{/* Black opacity overlay for non-active thumbnails */}
										{idx !== conveyanceSlide && (
											<div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>
										)}
										{idx === conveyanceSlide && (
											<div className="absolute inset-0 border-2 transition-all duration-300" style={{ borderColor: primaryOrange }}></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ====================== CONVEYANCE CONTENT SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Three Red Stars */}
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-6">
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							From the winding roads of Karakoram Highway to the sandy tracks of Balochistan&apos;s Makran region, Nayi Talaash offers comfortable, terrain ready transportation:
						</p>
						<ul className="list-disc list-inside mb-4 space-y-1 text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
							<li>Spacious AC Coasters & Hiace for group tours</li>
							<li>4×4 Jeeps for rugged northern terrains</li>
							<li>Smooth, safe, well maintained vehicles</li>
							<li>Experienced drivers trained for every route</li>
						</ul>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Whatever the destination, our backup support ensures no breakdown ruins your journey.
						</p>
						<p className="text-base md:text-lg leading-normal font-semibold" style={{ color: secondaryBlack }}>
							Just sit back, enjoy the music, the mountains and the moment.
						</p>
					</div>

					{/* Three Image Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
						{/* Card 1: MAKRAN COASTAL HIGHWAY */}
						<div className="relative group">
							<div className="relative h-80 rounded-lg overflow-hidden">
								<Image 
									src="/images/Kund Malir.jpg"
									alt="Makran Coastal Highway"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							{/* Black Footer with Title, Description, and Button */}
							<div className="absolute bottom-0 left-0 right-0 bg-black p-4 text-white">
								<h3 className="text-lg md:text-xl font-bold mb-2">Makran Coastal Highway</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">Drive 1300KM Through Sea And Desert</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
								>
									<span>→</span>
									<span>BOOK NOW</span>
								</button>
							</div>
						</div>

						{/* Card 2: KALASH VALLEY */}
						<div className="relative group">
							<div className="relative h-80 rounded-lg overflow-hidden">
								<Image 
									src="/images/chitral.jpg"
									alt="Kalash Valley"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							{/* Black Footer with Title, Description, and Button */}
							<div className="absolute bottom-0 left-0 right-0 bg-black p-4 text-white">
								<h3 className="text-lg md:text-xl font-bold mb-2">Kalash Valley</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">Helicopter Journey To The Hidden Valley</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
								>
									<span>→</span>
									<span>BOOK NOW</span>
								</button>
							</div>
						</div>

						{/* Card 3: CONQUER THE WILD SINDH */}
						<div className="relative group">
							<div className="relative h-80 rounded-lg overflow-hidden">
								<Image 
									src="/images/gwadar.jpg"
									alt="Conquer the Wild Sindh"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							{/* Black Footer with Title, Description, and Button */}
							<div className="absolute bottom-0 left-0 right-0 bg-black p-4 text-white">
								<h3 className="text-lg md:text-xl font-bold mb-2">Conquer The Wild Sindh</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">Reach your destination through thrilling dune bashing</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
								>
									<span>→</span>
									<span>BOOK NOW</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== CURATED TRIP EXPERIENCES SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				{/* Main Banner Slider - Full Width */}
				<div className="relative mb-4 w-full">
					<div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
						<Image 
							src={experiencesMainImages[experiencesSlide]}
							alt="Curated Trip Experiences"
							fill
							className="object-cover transition-opacity duration-500"
						/>
						{/* Dark overlay for text readability */}
						<div className="absolute inset-0 bg-black/30"></div>
						
						{/* Text Overlay */}
						<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Curated Trip Experiences</h2>
							<p className="text-lg md:text-xl mb-4 capitalize">Matching Your Taste</p>
							<button
								onClick={handleWhatsAppClick}
								className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
								style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
							>
								Enquire now
							</button>
						</div>

						{/* Navigation Arrows with padding to avoid button overlap */}
						<button
							onClick={() => setExperiencesSlide(prev => (prev - 1 + experiencesMainImages.length) % experiencesMainImages.length)}
							className="absolute left-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
						>
							<ChevronLeft className="w-6 h-6" style={{ color: primaryOrange }} />
						</button>
						<button
							onClick={() => setExperiencesSlide(prev => (prev + 1) % experiencesMainImages.length)}
							className="absolute right-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
						>
							<ChevronRight className="w-6 h-6" style={{ color: primaryOrange }} />
						</button>
					</div>
				</div>

				{/* Auto-sliding Thumbnail Carousel - Centered */}
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2 justify-center flex-wrap">
							{experiencesThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-[calc(20%-0.5rem)] max-w-[180px] cursor-pointer transition-all duration-300"
									onClick={() => setExperiencesSlide(idx)}
								>
									<div className="relative h-24 md:h-32 rounded overflow-hidden">
										<Image 
											src={thumb}
											alt={`Thumbnail ${idx + 1}`}
											fill
											className="object-cover transition-all duration-300"
										/>
										{/* Black opacity overlay for non-active thumbnails */}
										{idx !== experiencesSlide && (
											<div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>
										)}
										{idx === experiencesSlide && (
											<div className="absolute inset-0 border-2 transition-all duration-300" style={{ borderColor: primaryOrange }}></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ====================== CURATED TRIP EXPERIENCES CONTENT SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Four Red Stars */}
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-6">
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							We design every tour with one mission:
						</p>
						<p className="text-base md:text-lg leading-normal mb-4 font-semibold" style={{ color: secondaryBlack }}>
							To make you fall in love with Pakistan.
						</p>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Our itineraries are crafted after deep research into each province and its hidden gems.
						</p>
						<ul className="list-disc list-inside mb-4 space-y-1 text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
							<li>Trekking, hiking & adventure tours</li>
							<li>Camping, bonfire & jamming nights</li>
							<li>Marine adventures & island visits</li>
							<li>Desert safaris & cultural festivals</li>
							<li>Food tours, heritage walks & bazaars</li>
							<li>Tribal experiences & village lifestyle tours</li>
						</ul>
						<p className="text-base md:text-lg leading-normal font-semibold" style={{ color: secondaryBlack }}>
							From snowfall in Naran, sunrise in Gwadar, autumn in Gilgit, to canyon views in Balochistan we give you experiences that stay in your heart forever.
						</p>
					</div>

					{/* Two Image Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
						{/* Card 1: PUNJAB */}
						<div className="relative group">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image 
									src="/images/lahore.jpg"
									alt="Punjab: The Land of 5 Rivers"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							{/* Black Footer with Title, Description, and Button */}
							<div className="absolute bottom-0 left-0 right-0 bg-black p-6 text-white">
								<h3 className="text-xl md:text-2xl font-bold mb-2 capitalize">Punjab: The Land Of 5 Rivers</h3>
								<p className="text-sm md:text-base mb-4 opacity-90 capitalize">Experience The True Essence Of The Punjab</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity capitalize"
								>
									<span>→</span>
									<span>Book Now</span>
								</button>
							</div>
						</div>

						{/* Card 2: BALOCHISTAN */}
						<div className="relative group">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image 
									src="/images/gwadar.jpg"
									alt="Balochistan Hospitality & Horseback"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							{/* Black Footer with Title, Description, and Button */}
							<div className="absolute bottom-0 left-0 right-0 bg-black p-6 text-white">
								<h3 className="text-xl md:text-2xl font-bold mb-2 capitalize">Balochistan Hospitality & Horseback</h3>
								<p className="text-sm md:text-base mb-4 opacity-90 capitalize">Discover The Authentic Baloch Heritage</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity capitalize"
								>
									<span>→</span>
									<span>Book Now</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== BEST CREW SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-white">
				{/* Main Banner Slider - Full Width */}
				<div className="relative mb-4 w-full">
					<div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
						<Image 
							src={crewMainImages[crewSlide]}
							alt="Best Crew"
							fill
							className="object-cover transition-opacity duration-500"
						/>
						{/* Dark overlay for text readability */}
						<div className="absolute inset-0 bg-black/30"></div>
						
						{/* Text Overlay */}
						<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Best Crew</h2>
							<p className="text-lg md:text-xl mb-4">Handpicked Tour Managers</p>
							<button
								onClick={handleWhatsAppClick}
								className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
								style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
							>
								Enquire now
							</button>
						</div>

						{/* Navigation Arrows with padding to avoid button overlap */}
						<button
							onClick={() => setCrewSlide(prev => (prev - 1 + crewMainImages.length) % crewMainImages.length)}
							className="absolute left-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
						>
							<ChevronLeft className="w-6 h-6" style={{ color: primaryOrange }} />
						</button>
						<button
							onClick={() => setCrewSlide(prev => (prev + 1) % crewMainImages.length)}
							className="absolute right-4 bottom-24 md:bottom-28 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
						>
							<ChevronRight className="w-6 h-6" style={{ color: primaryOrange }} />
						</button>
					</div>
				</div>

				{/* Auto-sliding Thumbnail Carousel - Centered */}
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2 justify-center flex-wrap">
							{crewThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-[calc(25%-0.5rem)] max-w-[220px] cursor-pointer transition-all duration-300"
									onClick={() => setCrewSlide(idx)}
								>
									<div className="relative h-24 md:h-32 rounded overflow-hidden">
										<Image 
											src={thumb}
											alt={`Thumbnail ${idx + 1}`}
											fill
											className="object-cover transition-all duration-300"
										/>
										{/* Black opacity overlay for non-active thumbnails */}
										{idx !== crewSlide && (
											<div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>
										)}
										{idx === crewSlide && (
											<div className="absolute inset-0 border-2 transition-all duration-300" style={{ borderColor: primaryOrange }}></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ====================== BEST CREW CONTENT SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Four Red Stars */}
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-6">
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Our people are our strength.
						</p>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Nayi Talaash&apos;s team includes:
						</p>
						<ul className="list-disc list-inside mb-4 space-y-1 text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
							<li>Experienced Tour Leaders</li>
							<li>Local Guides & Cultural Experts</li>
							<li>Safety & Trek Specialists</li>
							<li>Professional Drivers</li>
							<li>Travel Designers</li>
						</ul>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Each member is trained to offer you comfort, guidance and memorable storytelling throughout the journey.
						</p>
						<p className="text-base md:text-lg leading-normal font-semibold" style={{ color: secondaryBlack }}>
							We know the mountains, the roads, the people and we help you feel the soul of every destination.
						</p>
					</div>

					{/* Two Image Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
						{/* Card 1 */}
						<div className="relative group">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image
									src="/images/Hunza.jpg"
									alt="Kirthar Trophy Hunting"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="absolute bottom-0 left-0 right-0 bg-black p-6 text-white">
								<h3 className="text-xl md:text-2xl font-bold mb-2 capitalize">Kirthar Trophy Hunting</h3>
								<p className="text-sm md:text-base mb-4 opacity-90 capitalize">Hunt With A Professional And Trained Crew</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity capitalize"
								>
									<span>→</span>
									<span>Book Now</span>
								</button>
							</div>
						</div>

						{/* Card 2 */}
						<div className="relative group">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image
									src="/images/chitral.jpg"
									alt="Contact Our Design Team"
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="absolute bottom-0 left-0 right-0 bg-black p-6 text-white">
								<h3 className="text-xl md:text-2xl font-bold mb-2 capitalize">Contact Our Design Team Today</h3>
								<p className="text-sm md:text-base mb-4 opacity-90 capitalize">Share Your Details For A Custom Itinerary</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity capitalize"
								>
									<span>→</span>
									<span>Enquire Now</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== COVID-19 PREPARED BANNER ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				{/* Banner with Text Overlay - Full Width */}
				<div className="relative mb-4 w-full">
					<div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
						<Image 
							src="/images/fairy meadows 2.jpg"
							alt="Safe Travel Standards"
							fill
							className="object-cover"
						/>
						{/* Dark overlay for text readability */}
						<div className="absolute inset-0 bg-black/30"></div>
						
						{/* Text Overlay */}
						<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Safe Travel Standards</h2>
							<p className="text-lg md:text-xl mb-4 capitalize">The New Travel Paradigm</p>
								<button
									onClick={handleWhatsAppClick}
									className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
									style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
								>
									Ask us more
								</button>
							</div>
						</div>
					</div>
			</section>

			{/* ====================== COVID-19 PREPARED CONTENT SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Four Red Stars */}
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-6">
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Your safety matters.
						</p>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							We operate under responsible tourism guidelines aligned with national standards and local authorities.
						</p>
						<ul className="list-disc list-inside mb-4 space-y-1 text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
							<li>Hygienic stops</li>
							<li>Verified accommodations</li>
							<li>Trained medical aware crew</li>
							<li>Secure travel routes</li>
							<li>Emergency handling protocols</li>
						</ul>
						<p className="text-base md:text-lg leading-normal font-semibold" style={{ color: secondaryBlack }}>
							Wherever you go with us, you&apos;re safe, supported and cared for.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== TRUST & SECURITY BANNER ====================== */}
			<section className="py-8 md:py-12 bg-white">
				{/* Banner with Text Overlay - Full Width */}
				<div className="relative mb-4 w-full">
					<div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
						<Image 
							src="/images/TRUST & SECURITY.jpg"
							alt="Trust & Security"
							fill
							className="object-cover"
						/>
							{/* Dark overlay for text readability */}
							<div className="absolute inset-0 bg-black/30"></div>
							
							{/* Text Overlay */}
							<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Trust & Security</h2>
								<p className="text-lg md:text-xl mb-4">Travel with freedom</p>
								<button
									onClick={handleWhatsAppClick}
									className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
									style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
								>
									Ask us more
								</button>
							</div>
						</div>
					</div>
			</section>

			{/* ====================== TRUST & SECURITY CONTENT SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Three Red Stars */}
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-6">
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Nayi Talaash is a registered tour company, working with local tourism bodies and law enforcement to ensure:
						</p>
						<ul className="list-disc list-inside mb-4 space-y-1 text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
							<li>Verified hotels</li>
							<li>Secure travel routes</li>
							<li>Safe payment methods</li>
							<li>Zero cash travel options for foreigners</li>
							<li>Transparent pricing</li>
							<li>No hidden charges</li>
						</ul>
						<p className="text-base md:text-lg leading-normal font-semibold" style={{ color: secondaryBlack }}>
							Travel with confidence, comfort and complete freedom.
						</p>
					</div>

					{/* Organization Logos */}
					<div className="max-w-4xl mx-auto">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
							{/* SECP Logo */}
							<div className="flex flex-col items-center">
								<div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
									<span className="text-xs font-bold text-gray-600">SECP</span>
								</div>
							</div>

							{/* FBR Logo */}
							<div className="flex flex-col items-center">
								<div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
									<span className="text-xs font-bold text-gray-600">FBR</span>
								</div>
							</div>

							{/* PTDC Logo */}
							<div className="flex flex-col items-center">
								<div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
									<span className="text-xs font-bold text-gray-600">PTDC</span>
								</div>
							</div>

							{/* EFU Logo */}
							<div className="flex flex-col items-center">
								<div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
									<span className="text-xs font-bold text-gray-600">EFU</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== TRAVEL VISA BANNER ====================== */}
			<section className="w-full overflow-hidden">
				{/* Full Width Banner with Text Overlay */}
				<div className="relative w-full h-[500px] md:h-[600px]">
					<Image 
						src="/images/azad kashmir.jpg"
						alt="Travel Visa"
						fill
						className="object-cover"
					/>
					{/* Dark overlay for text readability */}
					<div className="absolute inset-0 bg-black/30"></div>
					
					{/* Text Overlay */}
					<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Travel Visa</h2>
						<p className="text-lg md:text-xl mb-4">Hassle-free process</p>
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Enquire now
						</button>
					</div>
				</div>
			</section>

			{/* ====================== TRAVEL VISA CONTENT SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Three Red Stars */}
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-6">
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Some locations in Pakistan require approvals, permits and special handling.
						</p>
						<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
							Don&apos;t worry we take care of everything:
						</p>
						<ul className="list-disc list-inside mb-4 space-y-1 text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
							<li>Entry permits for restricted zones</li>
							<li>Trekking permissions</li>
							<li>Marine & island access</li>
							<li>Transport arrangements</li>
							<li>Custom itinerary planning</li>
						</ul>
						<p className="text-base md:text-lg leading-normal font-semibold" style={{ color: secondaryBlack }}>
							Whether it&apos;s Deosai, Ormara, Kumrat, Hingol or Ratti Gali, our ground team ensures you travel without complications.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== COMPREHENSIVE TOUR MANAGEMENT BANNER ====================== */}
			<section className="w-full overflow-hidden">
				{/* Full Width Banner with Text Overlay */}
				<div className="relative w-full h-[500px] md:h-[600px]">
					<Image 
						src="/images/comprehensive tour management.jpg"
						alt="Comprehensive Tour Management"
						fill
						className="object-cover"
					/>
					{/* Dark overlay for text readability */}
					<div className="absolute inset-0 bg-black/30"></div>
					
					{/* Text Overlay */}
					<div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">Comprehensive Tour Management</h2>
						<p className="text-lg md:text-xl mb-4">Expert Ground Handling</p>
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
							style={{ backgroundColor: primaryOrange }}
						>
							Enquire now
						</button>
					</div>
				</div>
			</section>

			{/* ====================== THE ADVANTAGES OF BOOKING WITH NAYI TALAASH ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-6">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 capitalize" style={{ color: secondaryBlack }}>
							The Advantages Of Booking With Nayi Talaash
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Card 1: Guaranteed Peace of Mind */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md">
							<div className="relative w-full h-48">
								<Image 
									src="/images/murree and nathia gali.jpg"
									alt="Guaranteed Peace of Mind"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-lg md:text-xl font-bold mb-3 capitalize" style={{ color: secondaryBlack }}>
									Guaranteed Peace Of Mind
								</h3>
								<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
									Our presence across Pakistan ensures smooth, professional delivery of all travel needs.
								</p>
							</div>
						</div>

						{/* Card 2: Best Price & Value */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md">
							<div className="relative w-full h-48">
								<Image 
									src="/images/islamabad.jpg"
									alt="Best Price & Value"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-lg md:text-xl font-bold mb-3 capitalize" style={{ color: secondaryBlack }}>
									Best Price & Value
								</h3>
								<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
									We work with trusted partners to offer unmatched affordability.
								</p>
							</div>
						</div>

						{/* Card 3: Quality Itineraries */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md">
							<div className="relative w-full h-48">
								<Image 
									src="/images/Kund Malir.jpg"
									alt="Quality Itineraries"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-lg md:text-xl font-bold mb-3 capitalize" style={{ color: secondaryBlack }}>
									Quality Itineraries
								</h3>
								<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
									Designed for travelers who want comfort, culture and adventure in one experience.
								</p>
							</div>
						</div>

						{/* Card 4: Access to Local Expertise */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md">
							<div className="relative w-full h-48">
								<Image 
									src="/images/Hunza.jpg"
									alt="Access to Local Expertise"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-lg md:text-xl font-bold mb-3 capitalize" style={{ color: secondaryBlack }}>
									Access To Local Expertise
								</h3>
								<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
									Local guides, storytellers and experts bring every destination to life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== HOW IT WORKS ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-6">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 capitalize" style={{ color: secondaryBlack }}>
							How It Works
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 max-w-6xl mx-auto">
						{/* Step 1: Discover */}
						<div className="text-center max-w-xs mx-auto">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ borderColor: '#d1d5db' }}>
								<MessageSquare className="w-10 h-10" style={{ color: '#1f2937' }} />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>1. Discover</h3>
							<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
								Explore our travel packages, all designed to highlight the best of Pakistan.
							</p>
						</div>

						{/* Step 2: Customize */}
						<div className="text-center max-w-xs mx-auto">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ borderColor: '#d1d5db' }}>
								<Map className="w-10 h-10" style={{ color: '#1f2937' }} />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>2. Customize</h3>
							<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
								Share your preferences we tailor your tour to match your taste and vibe.
							</p>
						</div>

						{/* Step 3: Travel */}
						<div className="text-center max-w-xs mx-auto">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ borderColor: '#d1d5db' }}>
								<Plane className="w-10 h-10" style={{ color: '#1f2937' }} />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>3. Travel</h3>
							<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
								Get your itinerary, pack your bags and begin the journey.
							</p>
						</div>

						{/* Step 4: Cherish */}
						<div className="text-center max-w-xs mx-auto">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ borderColor: '#d1d5db' }}>
								<ImagePlus className="w-10 h-10" style={{ color: '#1f2937' }} />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>4. Cherish</h3>
							<p className="text-base md:text-lg leading-normal mb-4" style={{ color: `${secondaryBlack}90` }}>
								Live moments, record memories and relive your trip through our free highlight video.
							</p>
						</div>
					</div>
					
					{/* Call-to-Action Button */}
					<div className="text-center">
						<Link 
							href="/#tours"
							className="inline-block px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
							style={{ backgroundColor: primaryOrange }}
						>
							Discover Our Destinations
						</Link>
					</div>
				</div>
			</section>

			{/* ====================== FEATURES SECTION ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Affordable Journeys */}
						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Plane className="w-16 h-16" strokeWidth={1.5} style={{ color: primaryOrange, stroke: primaryOrange }} fill="none" />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Affordable Journeys</h3>
							<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
								Premium travel experience at the most affordable rates to provide you with the best value for your trip cost.
							</p>
						</div>

						{/* Guided Experiences */}
						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Users className="w-16 h-16" strokeWidth={1.5} style={{ color: primaryOrange, stroke: primaryOrange }} fill="none" />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Guided Experiences</h3>
							<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
								Embrace our travel guide resources and know about the history and traditions of the areas you're traveling in.
							</p>
						</div>

						{/* All Inclusive */}
						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Gem className="w-16 h-16" strokeWidth={1.5} style={{ color: primaryOrange, stroke: primaryOrange }} fill="none" />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>All Inclusive</h3>
							<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
								Nayi Talaash is taking provision of all your travel needs and comforts within your package cost, leaving you with lasting trip memories.
							</p>
						</div>

						{/* Guest Support */}
						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Luggage className="w-16 h-16" strokeWidth={1.5} style={{ color: primaryOrange, stroke: primaryOrange }} fill="none" />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Guest Support</h3>
							<p className="text-base md:text-lg leading-normal" style={{ color: `${secondaryBlack}90` }}>
								We are happy to help you! Call us at <a href="tel:+92331438251" className="hover:opacity-80 transition-opacity" style={{ color: primaryOrange }}>+92 331 438251</a> or write to us at <a href="mailto:info@nayitalaash.com" className="hover:opacity-80 transition-opacity" style={{ color: primaryOrange }}>info@nayitalaash.com</a>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== FOOTER ====================== */}
			<footer className="py-8 md:py-12 bg-white border-t relative overflow-hidden" style={{ borderColor: `${primaryOrange}30` }}>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 overflow-x-hidden">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
						{/* Column 1: Company Information */}
						<div>
							<Image 
								src="/images/Final....png"
								alt="Nayi Talaash Logo"
								width={200}
								height={80}
								className="h-16 sm:h-20 w-auto object-contain mb-4"
							/>
							<p className="text-sm mb-4 leading-normal" style={{ color: `${secondaryBlack}80` }}>
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
							<ul className="space-y-1">
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
							<ul className="space-y-1">
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
							<div className="flex gap-3 mb-4">
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
							<p className="text-sm mb-4 leading-normal" style={{ color: `${secondaryBlack}80` }}>
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

export default AboutPage;
