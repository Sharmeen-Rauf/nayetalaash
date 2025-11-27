'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, Search, Building2, Car, Sparkles, Users, ShieldCheck, FileText, Briefcase, CheckCircle2, MapPin, Globe, Award, Clock, Download } from 'lucide-react';

const AboutPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
	const [searchForm, setSearchForm] = useState({
		whenToGo: '',
		whatToDo: '',
		whereToGo: ''
	});

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
		'/images/Hunza.jpg',
		'/images/skardu 2.jpg',
		'/images/naran and kaghan.jpg',
		'/images/chitral.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
	];

	const hotelsThumbnails = [
		'/images/Hunza.jpg',
		'/images/skardu 2.jpg',
		'/images/naran and kaghan.jpg',
		'/images/chitral.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
	];

	// Conveyance slider images
	const conveyanceMainImages = [
		'/images/skardu 2.jpg',
		'/images/Hunza.jpg',
		'/images/naran and kaghan.jpg',
		'/images/chitral.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
	];

	const conveyanceThumbnails = [
		'/images/skardu 2.jpg',
		'/images/Hunza.jpg',
		'/images/naran and kaghan.jpg',
		'/images/chitral.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
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
		'/images/naran and kaghan.jpg',
		'/images/Hunza.jpg',
		'/images/skardu 2.jpg',
		'/images/chitral.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
	];

	const experiencesThumbnails = [
		'/images/naran and kaghan.jpg',
		'/images/Hunza.jpg',
		'/images/skardu 2.jpg',
		'/images/chitral.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
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
		'/images/chitral.jpg',
		'/images/Hunza.jpg',
		'/images/skardu 2.jpg',
		'/images/naran and kaghan.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
	];

	const crewThumbnails = [
		'/images/chitral.jpg',
		'/images/Hunza.jpg',
		'/images/skardu 2.jpg',
		'/images/naran and kaghan.jpg',
		'/images/fairy meadows 2.jpg',
		'/images/Kund Malir.jpg',
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
							<Link href="/#tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative group ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
								<span className="flex items-center gap-1">
									PAKISTAN TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</span>
							</Link>
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
					<div className="mt-12 mb-8">
						<Image 
							src={logoImage}
							alt="Nayi Talaash Logo"
							width={150}
							height={50}
							className="h-12 w-auto object-contain"
						/>
					</div>

					{/* Nav Links */}
					<nav className="flex flex-col space-y-2 flex-grow">
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
							<span className="font-autography hero-text-reveal" style={{ display: 'inline-block' }}>
								Discover the Unseen.
							</span>
							<br />
							<span className="block mt-4 hero-text-reveal hero-text-delay-1" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Explore With Nayi Talaash.
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed hero-text-reveal hero-text-delay-2">
							Your one stop travel partner for unforgettable cultural, historical, and scenic journeys across Pakistan.
						</p>
						
						{/* Search Form */}
						<div className="mt-8 hero-text-reveal hero-text-delay-3 max-w-4xl mx-auto">
							<div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
								{/* When to go */}
								<div className="relative flex-1 w-full sm:w-auto min-w-[200px]">
									<select
										value={searchForm.whenToGo}
										onChange={(e) => setSearchForm({...searchForm, whenToGo: e.target.value})}
										className="w-full px-4 py-3 rounded-lg text-sm font-medium appearance-none bg-white border-2 border-transparent focus:border-[#f99621] focus:outline-none transition-all cursor-pointer shadow-lg"
										style={{ color: secondaryBlack }}
									>
										<option value="">When to go?</option>
										<option value="spring">Spring (March - May)</option>
										<option value="summer">Summer (June - August)</option>
										<option value="autumn">Autumn (September - November)</option>
										<option value="winter">Winter (December - February)</option>
									</select>
									<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: `${secondaryBlack}60` }} />
								</div>

								{/* What to do */}
								<div className="relative flex-1 w-full sm:w-auto min-w-[200px]">
									<select
										value={searchForm.whatToDo}
										onChange={(e) => setSearchForm({...searchForm, whatToDo: e.target.value})}
										className="w-full px-4 py-3 rounded-lg text-sm font-medium appearance-none bg-white border-2 border-transparent focus:border-[#f99621] focus:outline-none transition-all cursor-pointer shadow-lg"
										style={{ color: secondaryBlack }}
									>
										<option value="">What to do?</option>
										<option value="culture">Cultural Tours</option>
										<option value="adventure">Adventure Tours</option>
										<option value="family">Family Tours</option>
										<option value="honeymoon">Honeymoon Trips</option>
										<option value="group">Group Tours</option>
										<option value="religious">Religious Tours</option>
									</select>
									<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: `${secondaryBlack}60` }} />
								</div>

								{/* Where to go */}
								<div className="relative flex-1 w-full sm:w-auto min-w-[200px]">
									<select
										value={searchForm.whereToGo}
										onChange={(e) => setSearchForm({...searchForm, whereToGo: e.target.value})}
										className="w-full px-4 py-3 rounded-lg text-sm font-medium appearance-none bg-white border-2 border-transparent focus:border-[#f99621] focus:outline-none transition-all cursor-pointer shadow-lg"
										style={{ color: secondaryBlack }}
									>
										<option value="">Where to go?</option>
										<option value="hunza">Hunza Valley</option>
										<option value="skardu">Skardu</option>
										<option value="swat">Swat</option>
										<option value="lahore">Lahore</option>
										<option value="karachi">Karachi</option>
										<option value="islamabad">Islamabad</option>
										<option value="gilgit">Gilgit</option>
										<option value="naran">Naran Kaghan</option>
									</select>
									<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: `${secondaryBlack}60` }} />
								</div>

								{/* Search Button */}
								<button
									onClick={() => {
										console.log('Search:', searchForm);
										handleWhatsAppClick();
									}}
									className="px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-base"
									style={{ 
										backgroundColor: primaryOrange, 
										color: secondaryBlack
									}}
								>
									<Search className="w-5 h-5" />
									<span>Search</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== WHY TRAVEL WITH NAYI TALAASH - CARD GRID SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Top Section: Button, Stars, and Heading */}
					<div className="text-center mb-12">
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 mb-6 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Get in Touch
						</button>
						<div className="flex items-center justify-center gap-2 mb-6">
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
								src="/images/Hunza.jpg"
								alt="Hotels & Accommodation"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">BEST DEALS ON PREMIUM STAYS</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">HOTELS & ACCOMMODATION</h3>
							</div>
						</div>

						{/* Card 2: Conveyance */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/skardu 2.jpg"
								alt="Conveyance"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">TRAVEL IN STYLE AND COMFORT</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">CONVEYANCE</h3>
							</div>
						</div>

						{/* Card 3: Curated Trip Experiences */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/naran and kaghan.jpg"
								alt="Curated Trip Experiences"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">MATCHING YOUR TASTE</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">CURATED TRIP EXPERIENCES</h3>
							</div>
						</div>

						{/* Card 4: Best Crew */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/chitral.jpg"
								alt="Best Crew"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">HANDPICKED TOUR MANAGERS</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">BEST CREW</h3>
							</div>
						</div>

						{/* Card 5: Covid-19 Prepared */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/fairy meadows 2.jpg"
								alt="Covid-19 Prepared"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">THE NEW TRAVELING PARADIGM</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">COVID-19 PREPARED</h3>
							</div>
						</div>

						{/* Card 6: Trust & Security */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/Kund Malir.jpg"
								alt="Trust & Security"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">TRAVEL WITH FREEDOM</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">TRUST & SECURITY</h3>
							</div>
						</div>

						{/* Card 7: Travel Visa */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/azad kashmir.jpg"
								alt="Travel Visa"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">HASSLE-FREE PROCESS</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">TRAVEL VISA</h3>
							</div>
						</div>

						{/* Card 8: Comprehensive Tour Management */}
						<div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
							<Image 
								src="/images/murree and nathia gali.jpg"
								alt="Comprehensive Tour Management"
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<p className="text-xs mb-2 font-medium">EXPERT GROUND HANDLING</p>
								<h3 className="text-base md:text-lg font-bold leading-tight">COMPREHENSIVE TOUR MANAGEMENT</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== HOTELS & ACCOMMODATION SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Main Banner Slider */}
					<div className="relative mb-6">
						<div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
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
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">HOTELS & ACCOMMODATION</h2>
								<p className="text-lg md:text-xl mb-6">Best deals on premium stays</p>
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

					{/* Auto-sliding Thumbnail Carousel */}
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2">
							{hotelsThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-full sm:w-1/3 md:w-1/6 cursor-pointer transition-all duration-300"
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
					<div className="flex items-center justify-center gap-2 mb-8">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-12">
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							We have partnered with 5-star hotel groups and accommodation services to bring you variety in lodging all over Pakistan without compromising on the quality you deserve. Book with us and prepare to be spoilt in premium suites and serene resorts, luxurious residential villas for families, boutique hotels and private chalets, and serviced campsites in the mountains and the wild – all at the best price match!
						</p>
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							Wherever we go together we ensure that your hotel and room preferences are always noted and delivered by our team. Our excellent partner network and experienced team check you into deluxe rooms and executive suites replete with indulgent amenities such as complimentary access to executive lounges, inclusive spa, and wellness center passes, and majestic room views. Whether it is a half board or checking in for the night, we make sure that you never have to compromise on quality and comfort.
						</p>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							Book with us to enjoy hassle-free hotel reservations and cancellations because we have it all covered in our packages. No need to stress about a change in flight timing or your vacation plans. Just give us a call and we will rebook or cancel hotel bookings according to your preference. It&apos;s that easy!
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
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Main Banner Slider */}
					<div className="relative mb-6">
						<div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
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
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CONVEYANCE</h2>
								<p className="text-lg md:text-xl mb-6">Travel in style and comfort</p>
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

					{/* Auto-sliding Thumbnail Carousel */}
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2">
							{conveyanceThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-full sm:w-1/3 md:w-1/6 cursor-pointer transition-all duration-300"
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
					<div className="flex items-center justify-center gap-2 mb-8">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-12">
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							There are no bumps on this road trip! Our fleet of premium SUV and SUT vehicles, helicopters and private jets are available to ensure a smooth journey across Pakistan and its remote areas at the best price possible.
						</p>
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							We have arranged round-the-clock, experienced drivers who have the expertise to conquer all terrains so that you can relax and enjoy the ride. Terrains in Pakistan can be perilous, but you are never out of options or backup plans when you book with us. Our network of standby replacement vehicles will reach you within 2-6 hours wherever you are in the country and emergency evacuations due to unforeseen weather conditions can be swiftly arranged to ensure maximum security for our guests.
						</p>
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							Helicopter journeys have been added into some of our premium tour packages to offer you unique experiences of Pakistan&apos;s terrains. These helicopter journeys and private jet charters are designed to help our guests cut down on long inter-state road travel times and the dependency on domestic commercial flights. Commercial flights can often have unannounced disruptions and cancellations and do not cover the remote locations in Pakistan. While our private jets and helicopters can help you take off and land in style on airstrips and rough terrains and carry on with your designed tour plan.
						</p>
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							Stay online in the remotest of areas with free Wi-Fi. Go live or call a friend and travel with them virtually because all our Nayi Talaash vehicles come with 24/7 Wi-Fi on-board.
						</p>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							For each of the provinces in Pakistan, we have carefully selected a fleet of high-performance, premium vehicles that match the terrain so that you never have to turn around from reaching an exquisite view in the mountains, valleys, desert, or at the coast. Our vehicles are stationed in major cities including Karachi, Quetta, Islamabad, and Peshawar, ready to serve you wherever your journey takes you.
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
								<h3 className="text-lg md:text-xl font-bold mb-2">MAKRAN COASTAL HIGHWAY</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">DRIVE 1300KM THROUGH SEA AND DESERT</p>
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
								<h3 className="text-lg md:text-xl font-bold mb-2">KALASH VALLEY</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">HELICOPTER JOURNEY TO THE HIDDEN VALLEY</p>
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
								<h3 className="text-lg md:text-xl font-bold mb-2">CONQUER THE WILD SINDH</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">DUNE BASHING AND HELI RIDES TO REACH YOUR DESTINATION</p>
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
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Main Banner Slider */}
					<div className="relative mb-6">
						<div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
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
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CURATED TRIP EXPERIENCES</h2>
								<p className="text-lg md:text-xl mb-6">MATCHING YOUR TASTE</p>
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

					{/* Auto-sliding Thumbnail Carousel */}
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2">
							{experiencesThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-full sm:w-1/3 md:w-1/6 cursor-pointer transition-all duration-300"
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
					<div className="flex items-center justify-center gap-2 mb-8">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-12">
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							Every journey with Nayi Talaash is carefully designed to match your preferences, interests, and travel style. We understand that no two travelers are the same, which is why we offer fully customizable itineraries that can be tailored to your specific needs and personality.
						</p>
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							From thrilling adventure activities like hiking, trekking, cycling, skiing, fishing, trophy hunting, national park safaris, camping, marine adventures, and helicopter tours to exploring natural wonders such as glaciers, canyons, ravines, waterfalls, nature valleys, deserts, beaches, and islands – we curate every experience to match your passion.
						</p>
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							Immerse yourself in Pakistan&apos;s rich culinary and cultural heritage with traditional food experiences, fine-dining, BBQ bonfires, roadside food adventures, local bazaars, meetups with indigenous tribes, homestays in villages, and local lifestyle tours that give you an authentic taste of Pakistani hospitality.
						</p>
						<p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: `${secondaryBlack}90` }}>
							Discover world heritage sites, museums, and spiritual sites, and delve into ethnic art, poetry, literature, Sufi music, local fashion, and ethno-tourism. Each experience is carefully crafted to provide you with deep cultural insights and lasting memories.
						</p>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							Contact our travel designers for personalized advice and book a consultation to create the perfect itinerary that matches your travel dreams and aspirations.
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
								<h3 className="text-xl md:text-2xl font-bold mb-2">PUNJAB: THE LAND OF 5 RIVERS</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">EXPERIENCE THE TRUE ESSENCE OF THE PUNJAB</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
								>
									<span>→</span>
									<span>BOOK NOW</span>
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
								<h3 className="text-xl md:text-2xl font-bold mb-2">BALOCHISTAN HOSPITALITY & HORSEBACK</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">DISCOVER THE AUTHENTIC BALOCH HERITAGE</p>
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

			{/* ====================== BEST CREW SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					{/* Main Banner Slider */}
					<div className="relative mb-6">
						<div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
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
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">BEST CREW</h2>
								<p className="text-lg md:text-xl mb-6">Handpicked Tour Managers</p>
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

					{/* Auto-sliding Thumbnail Carousel */}
					<div className="relative overflow-hidden mt-4">
						<div className="flex gap-2">
							{crewThumbnails.map((thumb, idx) => (
								<div 
									key={idx}
									className="flex-shrink-0 w-full sm:w-1/3 md:w-1/6 cursor-pointer transition-all duration-300"
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
					<div className="flex items-center justify-center gap-2 mb-8">
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
						<span className="text-2xl" style={{ color: '#dc2626' }}>★</span>
					</div>

					{/* Text Content */}
					<div className="max-w-4xl mx-auto mb-12 space-y-6">
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							Our people bring a cumulative 200 years of experience in local and international tourism operations. From sales call handling to our drivers and the service crew, everyone is driven to provide you with the best trip experience.
						</p>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							<strong className="font-semibold">Travel Designers –</strong> Our travel consultants help you in uncovering your own travel needs and then match them with the hundreds of places to visit, and experiences to enjoy and accommodation and conveyance to choose.
						</p>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							<strong className="font-semibold">Tour Managers –</strong> We have a selective pool of licensed and experienced guides in each region. The tour manager remains with you throughout your journey and is always available to assist you with your needs. Our tour managers speak English, Chinese, Arabic, and Russian besides Urdu and local languages which help them communicate easily between you and the local community.
						</p>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							<strong className="font-semibold">Ground Handling –</strong> The tour managers coordinate with the tour designer about your trip status and any change of plans to make sure all your needs are covered. The tour manager also works as a team with the tour driver to plan routes, maps, and any itinerary changes.
						</p>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							From receiving you at the airport to helping you check in to hotels, covering your cash needs, and capturing your professional video log, our tour managers have been handpicked to give you the comfort and the space to enjoy your trip completely hassle-free.
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
								<h3 className="text-xl md:text-2xl font-bold mb-2">KIRTHAR TROPHY HUNTING</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">HUNT WITH A PROFESSIONAL AND TRAINED CREW</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
								>
									<span>→</span>
									<span>BOOK NOW</span>
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
								<h3 className="text-xl md:text-2xl font-bold mb-2">CONTACT OUR DESIGN TEAM TODAY</h3>
								<p className="text-sm md:text-base mb-4 opacity-90">SHARE YOUR DETAILS FOR A CUSTOM ITINERARY</p>
								<button
									onClick={handleWhatsAppClick}
									className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
								>
									<span>→</span>
									<span>ENQUIRE NOW</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== COVID-19 PREPARED SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						{/* Left: Content */}
						<div>
							<div className="flex items-center gap-2 mb-4">
								<ShieldCheck className="w-8 h-8" style={{ color: primaryOrange }} />
								<h2 className="text-3xl md:text-4xl font-bold" style={{ color: secondaryBlack }}>Covid-19 Prepared</h2>
							</div>
							<p className="text-xl font-semibold mb-4" style={{ color: primaryOrange }}>The new traveling paradigm</p>
							<p className="text-base text-gray-600 mb-4 leading-relaxed">
								The tourism sector in Pakistan is fully committed to putting the visiting people and their well-being first. Nayi Talaash strongly believes that cooperation and understanding is vital for ensuring the safe guarding and implementation of all measures been recommended by the international bodies like UNWTO and WHO the World Tourism and Health Organizations.
							</p>
							<p className="text-base text-gray-600 mb-6 leading-relaxed">
								These and more are adapted in the country, where the tourism destinations are rated of its own class and expected to have a huge footfall of international tourists sooner than later. We have implemented comprehensive health and safety protocols to ensure your peace of mind during your travels.
							</p>
							<button
								onClick={handleWhatsAppClick}
								className="px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
								style={{ backgroundColor: primaryOrange, color: 'white' }}
							>
								Ask us more
							</button>
						</div>

						{/* Right: Image Slider */}
						<div className="relative">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image 
									src="/images/fairy meadows 2.jpg"
									alt="Covid-19 Prepared"
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex items-center justify-center gap-2 mt-4">
								<button
									onClick={() => setCovidSlide(prev => Math.max(0, prev - 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={covidSlide === 0}
								>
									<ChevronLeft className="w-5 h-5" style={{ color: covidSlide === 0 ? '#ccc' : primaryOrange }} />
								</button>
								<span className="text-sm text-gray-600">{covidSlide + 1} / 5</span>
								<button
									onClick={() => setCovidSlide(prev => Math.min(4, prev + 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={covidSlide === 4}
								>
									<ChevronRight className="w-5 h-5" style={{ color: covidSlide === 4 ? '#ccc' : primaryOrange }} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== TRUST & SECURITY SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						{/* Left: Image Slider */}
						<div className="relative order-2 lg:order-1">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image 
									src="/images/Kund Malir.jpg"
									alt="Trust & Security"
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex items-center justify-center gap-2 mt-4">
								<button
									onClick={() => setTrustSlide(prev => Math.max(0, prev - 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={trustSlide === 0}
								>
									<ChevronLeft className="w-5 h-5" style={{ color: trustSlide === 0 ? '#ccc' : primaryOrange }} />
								</button>
								<span className="text-sm text-gray-600">{trustSlide + 1} / 5</span>
								<button
									onClick={() => setTrustSlide(prev => Math.min(4, prev + 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={trustSlide === 4}
								>
									<ChevronRight className="w-5 h-5" style={{ color: trustSlide === 4 ? '#ccc' : primaryOrange }} />
								</button>
							</div>
						</div>

						{/* Right: Content */}
						<div className="order-1 lg:order-2">
							<div className="flex items-center gap-2 mb-4">
								<ShieldCheck className="w-8 h-8" style={{ color: primaryOrange }} />
								<h2 className="text-3xl md:text-4xl font-bold" style={{ color: secondaryBlack }}>Trust & Security</h2>
							</div>
							<p className="text-xl font-semibold mb-4" style={{ color: primaryOrange }}>Travel with freedom</p>
							<p className="text-base text-gray-600 mb-4 leading-relaxed">
								We are a registered and licensed tourism company with the state department, provincial and federal tax and revenue authorities, and administrative tourism bodies. We work closely with the state tourism body before your arrival to make sure your safety is well covered by local law enforcement wherever you travel within Pakistan.
							</p>
							<p className="text-base text-gray-600 mb-6 leading-relaxed">
								We offer you multiple modes of secure online payments. We try to minimize cash transactions throughout our operations. For our foreign travelers visiting Pakistan, you can book your travel package through a safe and secure wire and telegraphic transfer.
							</p>
							<button
								onClick={handleWhatsAppClick}
								className="px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
								style={{ backgroundColor: primaryOrange, color: 'white' }}
							>
								Ask us more
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== TRAVEL VISA SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						{/* Left: Content */}
						<div>
							<div className="flex items-center gap-2 mb-4">
								<FileText className="w-8 h-8" style={{ color: primaryOrange }} />
								<h2 className="text-3xl md:text-4xl font-bold" style={{ color: secondaryBlack }}>Travel Visa</h2>
							</div>
							<p className="text-xl font-semibold mb-4" style={{ color: primaryOrange }}>Hassle-free process</p>
							<p className="text-base text-gray-600 mb-4 leading-relaxed">
								We provide you a safe gateway to apply for your tourist, business and visit visa to Pakistan. Our services include visa consultation services, assembling your visa application papers, application letter from our side to the concerned department as we are a registered tour company, applying and liaising for your visa with the concerned public department, and resubmitting any further documents.
							</p>
							<p className="text-base text-gray-600 mb-6 leading-relaxed">
								We do not provide guarantees on visa issuance; however, our team of experts keeps you informed throughout the process and sets your expectations accordingly.
							</p>
							<button
								onClick={handleWhatsAppClick}
								className="px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
								style={{ backgroundColor: primaryOrange, color: 'white' }}
							>
								Enquire now
							</button>
						</div>

						{/* Right: Image Slider */}
						<div className="relative">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image 
									src="/images/azad kashmir.jpg"
									alt="Travel Visa"
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex items-center justify-center gap-2 mt-4">
								<button
									onClick={() => setVisaSlide(prev => Math.max(0, prev - 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={visaSlide === 0}
								>
									<ChevronLeft className="w-5 h-5" style={{ color: visaSlide === 0 ? '#ccc' : primaryOrange }} />
								</button>
								<span className="text-sm text-gray-600">{visaSlide + 1} / 5</span>
								<button
									onClick={() => setVisaSlide(prev => Math.min(4, prev + 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={visaSlide === 4}
								>
									<ChevronRight className="w-5 h-5" style={{ color: visaSlide === 4 ? '#ccc' : primaryOrange }} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== COMPREHENSIVE TOUR MANAGEMENT SLIDER ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						{/* Left: Image Slider */}
						<div className="relative order-2 lg:order-1">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image 
									src="/images/murree and nathia gali.jpg"
									alt="Comprehensive Tour Management"
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex items-center justify-center gap-2 mt-4">
								<button
									onClick={() => setManagementSlide(prev => Math.max(0, prev - 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={managementSlide === 0}
								>
									<ChevronLeft className="w-5 h-5" style={{ color: managementSlide === 0 ? '#ccc' : primaryOrange }} />
								</button>
								<span className="text-sm text-gray-600">{managementSlide + 1} / 5</span>
								<button
									onClick={() => setManagementSlide(prev => Math.min(4, prev + 1))}
									className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
									disabled={managementSlide === 4}
								>
									<ChevronRight className="w-5 h-5" style={{ color: managementSlide === 4 ? '#ccc' : primaryOrange }} />
								</button>
							</div>
						</div>

						{/* Right: Content */}
						<div className="order-1 lg:order-2">
							<div className="flex items-center gap-2 mb-4">
								<Briefcase className="w-8 h-8" style={{ color: primaryOrange }} />
								<h2 className="text-3xl md:text-4xl font-bold" style={{ color: secondaryBlack }}>Comprehensive Tour Management</h2>
							</div>
							<p className="text-xl font-semibold mb-4" style={{ color: primaryOrange }}>Expert Ground Handling</p>
							<p className="text-base text-gray-600 mb-4 leading-relaxed">
								If you are an international tourist visiting Pakistan, you will need more than a visit visa to roam freely in the country. Most places in Pakistan require access permits and approval documentation for foreign travelers and the process to acquire them is not always clear.
							</p>
							<p className="text-base text-gray-600 mb-6 leading-relaxed">
								Our network team has good knowledge and experience in expediting these documents from state authorities and local bodies. Our travel designer will advise you on these permits ahead of time and make you aware of the timelines needed to procure these documents.
							</p>
							<button
								onClick={handleWhatsAppClick}
								className="px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
								style={{ backgroundColor: primaryOrange, color: 'white' }}
							>
								Enquire now
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== THE ADVANTAGES OF BOOKING WITH NAYI TALAASH ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							The Advantages of Booking with Nayi Talaash
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Advantage 1 */}
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryOrange}20` }}>
								<ShieldCheck className="w-8 h-8" style={{ color: primaryOrange }} />
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Guaranteed for peace of mind</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								We are a destination management company. Our network offices are spread across the country ensuring the timely and professional delivery of all your destination needs.
							</p>
						</div>

						{/* Advantage 2 */}
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryOrange}20` }}>
								<Award className="w-8 h-8" style={{ color: primaryOrange }} />
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>BEST PRICE AND VALUE</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								Our corporate partnership with the hotels, venues, and transport businesses help us secure unmatched price and unquestionable value.
							</p>
						</div>

						{/* Advantage 3 */}
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryOrange}20` }}>
								<MapPin className="w-8 h-8" style={{ color: primaryOrange }} />
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>QUALITY OF ITINERARY</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								We cater to foreign inbound tourists, and have shaped our tours to match the needs of the international traveler. We have perfected multiple trip designs and allow further options to customize to your needs.
							</p>
						</div>

						{/* Advantage 4 */}
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryOrange}20` }}>
								<Globe className="w-8 h-8" style={{ color: primaryOrange }} />
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Access to local expertise</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								All our local agents have been chosen based on rigorous selection criteria, including English-speaking ability, fairness of prices, and knowledge of their destination.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== HOW DO LOCALLY-MADE TRIPS WORK? ====================== */}
			<section className="py-8 md:py-12 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							How do locally-made trips work?
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Step 1: Discover */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: primaryOrange }}>
								1
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Discover</h3>
							<p className="text-sm text-gray-600 leading-relaxed mb-4">
								Visit our website and discover our curated products. The products are divided into specialized tour themes covering the best of Pakistan's tourism.
							</p>
							<Link href="/#tours" className="text-sm font-semibold" style={{ color: primaryOrange }}>
								Find out more →
							</Link>
						</div>

						{/* Step 2: Customize */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: primaryOrange }}>
								2
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Customize</h3>
							<p className="text-sm text-gray-600 leading-relaxed mb-4">
								Share your travel details and request for customization through our interactive online forms. We have included the accommodation, transportation and activities to the best thematic design, but you may request to add more days, or destinations, or activities.
							</p>
							<Link href="/contact" className="text-sm font-semibold" style={{ color: primaryOrange }}>
								Find out more →
							</Link>
						</div>

						{/* Step 3: Travel */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: primaryOrange }}>
								3
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Travel</h3>
							<p className="text-sm text-gray-600 leading-relaxed mb-4">
								Read through our website for further destination guide and apply for your visa through our assisted service. Secure your itinerary and accommodation by paying through our online platform and get ready to be welcomed at the airport.
							</p>
							<Link href="/#destination" className="text-sm font-semibold" style={{ color: primaryOrange }}>
								Find out more →
							</Link>
						</div>

						{/* Step 4: Share your experience */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: primaryOrange }}>
								4
							</div>
							<h3 className="text-xl font-bold mb-3" style={{ color: secondaryBlack }}>Share your experience</h3>
							<p className="text-sm text-gray-600 leading-relaxed mb-4">
								We produce a complimentary video for all our guests showcasing your 60 sec destination story. Share the video with your friends, and share your experience with us through our easy-to-fill online customer review form.
							</p>
							<Link href="/contact" className="text-sm font-semibold" style={{ color: primaryOrange }}>
								Find out more →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== ADDITIONAL FEATURES SECTION ====================== */}
			<section className="py-8 md:py-12 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<Clock className="w-12 h-12 mx-auto mb-4" style={{ color: primaryOrange }} />
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>Affordable Journeys</h3>
							<p className="text-sm text-gray-600">Premium travel experience at the most affordable rates to provide you with the best value for your trip cost.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<Users className="w-12 h-12 mx-auto mb-4" style={{ color: primaryOrange }} />
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>Guided Experiences</h3>
							<p className="text-sm text-gray-600">Embrace our travel guide resources and know about the history and traditions of the areas you're traveling in.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: primaryOrange }} />
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>All Inclusive</h3>
							<p className="text-sm text-gray-600">Nayi Talaash is taking provision of all your travel needs and comforts within your package cost, leaving you with lasting trip memories.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md text-center">
							<Phone className="w-12 h-12 mx-auto mb-4" style={{ color: primaryOrange }} />
							<h3 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>Guest Support</h3>
							<p className="text-sm text-gray-600">We are happy to help you! Call us at +92 331 438251 or write to us at info@nayitalaash.com</p>
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

export default AboutPage;
