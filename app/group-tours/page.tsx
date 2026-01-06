'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ChevronDown, ArrowRight, Users, CalendarDays, MapPin, ShieldCheck, CheckCircle2, Search, FileText, Mountain, MessageCircle } from 'lucide-react';

const GroupToursPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
	const [showFloatingWidget, setShowFloatingWidget] = useState(true);

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
							<Link
								href="/customize-a-tour"
								className="px-2 py-1 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-bold text-[#211f20] hover:bg-[#e8851a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f99621]/50 ml-0.5"
								style={{ backgroundColor: '#f99621' }}
							>
								<span className="hidden sm:inline">CUSTOMIZE A TOUR</span>
								<span className="sm:hidden">CUSTOMIZE</span>
							</Link>
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
							
							{/* DESTINATION with Multi-Level Dropdown */}
							<div className="relative group cursor-pointer">
								<a href="#destination" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									DESTINATION
								</a>
								
								{/* Dropdown Menu - Responsive Width */}
								<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[95vw] max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
									<div className="backdrop-blur-lg bg-white/95 border border-gray-200 shadow-2xl overflow-hidden rounded-lg">
										<div className="flex min-h-[400px]">
											{/* Pakistan Map - Left Side */}
											<div className="w-1/4 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-[#f99621]/10 to-[#f99621]/5 flex-shrink-0">
												<Image 
													src="/images/map-2.png"
													alt="Pakistan Map"
													width={250}
													height={350}
													className="w-full h-auto max-h-[250px] object-contain"
												/>
											</div>
											
											{/* Regions List - Middle */}
											<div className="w-3/4 flex border-r border-gray-200">
												<div className="w-1/3 p-4 sm:p-6 border-r border-gray-200 flex-shrink-0">
													<h3 className="text-xs font-bold text-[#211f20] uppercase tracking-wider mb-4 whitespace-nowrap">Pakistani Regions</h3>
													<ul className="space-y-1">
														<li>
															<button
																onMouseEnter={() => setSelectedRegion('gilgit')}
																className="block w-full text-left px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Gilgit Baltistan
															</button>
														</li>
														<li>
															<button
																onMouseEnter={() => setSelectedRegion('kpk')}
																className="block w-full text-left px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																KPK / Galyat
															</button>
														</li>
														<li>
															<button
																onMouseEnter={() => setSelectedRegion('punjab')}
																className="block w-full text-left px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Punjab
															</button>
														</li>
														<li>
															<button
																onMouseEnter={() => setSelectedRegion('sindh')}
																className="block w-full text-left px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Sindh
															</button>
														</li>
														<li>
															<button
																onMouseEnter={() => setSelectedRegion('balochistan')}
																className="block w-full text-left px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Balochistan
															</button>
														</li>
													</ul>
												</div>
												
												{/* Districts List - Right Side */}
												<div className="w-2/3 p-4 sm:p-6 relative min-w-0">
													{selectedRegion === 'gilgit' && (
														<div className="space-y-1">
															<Link href="/astore-diamer" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Astore Diamer District</Link>
															<Link href="/ghizer" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Ghizer District</Link>
															<Link href="/gilgit-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Gilgit District</Link>
															<Link href="/hunza-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Hunza District</Link>
															<Link href="/shigar-ghanche" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Shigar Ghanche District</Link>
															<Link href="/skardu-kharmang" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Skardu Kharmang District</Link>
														</div>
													)}
													{selectedRegion === 'kpk' && (
														<div className="space-y-1">
															<Link href="/abbottabad" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Abbottabad District</Link>
															<Link href="/chitral" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Chitral District</Link>
															<Link href="/malakand" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Malakand District</Link>
															<Link href="/mansehra" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Mansehra District</Link>
															<Link href="/peshawar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Peshawar District</Link>
															<Link href="/upper-dir" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Upper Dir District</Link>
														</div>
													)}
													{selectedRegion === 'punjab' && (
														<div className="space-y-1">
															<Link href="/bahawalpur" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Bahawalpur District</Link>
															<Link href="/chakwal" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Chakwal District</Link>
															<Link href="/islamabad" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Islamabad District</Link>
															<Link href="/lahore" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Lahore District</Link>
															<Link href="/multan" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Multan District</Link>
															<Link href="/rawalpindi" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Rawalpindi District</Link>
														</div>
													)}
													{selectedRegion === 'sindh' && (
														<div className="space-y-1">
															<Link href="/hyderabad" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Hyderabad District</Link>
															<Link href="/jamshoro" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Jamshoro District</Link>
															<Link href="/karachi-thatta" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Karachi Thatta District</Link>
															<Link href="/larkana-shikarpur" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Larkana Shikarpur District</Link>
															<Link href="/sukkur" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Sukkur District</Link>
															<Link href="/tharparkar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Tharparkar District</Link>
														</div>
													)}
													{selectedRegion === 'balochistan' && (
														<div className="space-y-1">
															<Link href="/chaghi" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Chaghi District</Link>
															<Link href="/gwadar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Gwadar District</Link>
															<Link href="/kalat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Kalat District</Link>
															<Link href="/khuzdar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Khuzdar District</Link>
															<Link href="/quetta" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Quetta District</Link>
															<Link href="/ziarat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Ziarat District</Link>
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
						
						{/* DESTINATION with Simple Dropdown */}
						<div>
							<button
								onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'destination' ? null : 'destination')}
								className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg"
							>
								<span>DESTINATION</span>
								<ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen === 'destination' ? 'rotate-180' : ''}`} />
							</button>
							{mobileDropdownOpen === 'destination' && (
								<div className="pl-4 pr-2 py-2 space-y-1 max-h-[60vh] overflow-y-auto">
									{/* Gilgit Baltistan */}
									<p className="px-4 py-2 text-sm font-bold text-[#f99621] uppercase">Gilgit Baltistan</p>
									<Link href="/astore-diamer" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Astore Diamer District</Link>
									<Link href="/ghizer" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Ghizer District</Link>
									<Link href="/gilgit-district" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Gilgit District</Link>
									<Link href="/hunza-district" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Hunza District</Link>
									<Link href="/shigar-ghanche" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Shigar Ghanche District</Link>
									<Link href="/skardu-kharmang" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Skardu Kharmang District</Link>
									
									{/* KPK / Galyat */}
									<p className="px-4 py-2 mt-4 text-sm font-bold text-[#f99621] uppercase">KPK / Galyat</p>
									<Link href="/abbottabad" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Abbottabad District</Link>
									<Link href="/chitral" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Chitral District</Link>
									<Link href="/malakand" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Malakand District</Link>
									<Link href="/mansehra" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Mansehra District</Link>
									<Link href="/peshawar" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Peshawar District</Link>
									<Link href="/upper-dir" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Upper Dir District</Link>
									
									{/* Punjab */}
									<p className="px-4 py-2 mt-4 text-sm font-bold text-[#f99621] uppercase">Punjab</p>
									<Link href="/bahawalpur" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Bahawalpur District</Link>
									<Link href="/chakwal" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Chakwal District</Link>
									<Link href="/islamabad" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Islamabad District</Link>
									<Link href="/lahore" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Lahore District</Link>
									<Link href="/multan" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Multan District</Link>
									<Link href="/rawalpindi" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Rawalpindi District</Link>
									
									{/* Sindh */}
									<p className="px-4 py-2 mt-4 text-sm font-bold text-[#f99621] uppercase">Sindh</p>
									<Link href="/hyderabad" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Hyderabad District</Link>
									<Link href="/jamshoro" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Jamshoro District</Link>
									<Link href="/karachi-thatta" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Karachi Thatta District</Link>
									<Link href="/larkana-shikarpur" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Larkana Shikarpur District</Link>
									<Link href="/sukkur" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Sukkur District</Link>
									<Link href="/tharparkar" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Tharparkar District</Link>
									
									{/* Balochistan */}
									<p className="px-4 py-2 mt-4 text-sm font-bold text-[#f99621] uppercase">Balochistan</p>
									<Link href="/chaghi" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Chaghi District</Link>
									<Link href="/gwadar" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Gwadar District</Link>
									<Link href="/kalat" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Kalat District</Link>
									<Link href="/khuzdar" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Khuzdar District</Link>
									<Link href="/quetta" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Quetta District</Link>
									<Link href="/ziarat" className="block px-4 py-2.5 text-base font-medium text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>Ziarat District</Link>
								</div>
							)}
						</div>
						
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
							Explore Pakistan's diverse history, culture, and nature with our comprehensive group packages that cover the North, South, and Central regions.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== WEEKLY GROUP TOURS SECTION ====================== */}
			<section className="bg-white relative overflow-x-hidden pt-24 pb-12 md:pb-16 md:pt-28">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-12 scroll-reveal-fade-up px-2 sm:px-4">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							All Pakistan Group Tour Packages
						</h2>
						<p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed mt-4" style={{ color: `${secondaryBlack}90` }}>
							Explore Pakistan's diverse history, culture, and nature with our comprehensive group packages that cover the North, South, and Central regions.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{/* Tour Package 1 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-48 overflow-hidden">
								<Image 
									src="/images/murree and nathia gali.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/Swat.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/Swat.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/Hunza.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/skardu 2.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/fairy meadows 2.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/azad kashmir.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/azad kashmir.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/skardu 2.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/Kund Malir.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/fairy meadows 2.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
									src="/images/gilgit.jpg"
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
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
			<section className="py-12 md:py-16 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
				<div className="text-center mb-16 scroll-reveal-fade-up px-2 sm:px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack, fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
						How it works?
					</h2>
				</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						{/* Step 1 */}
						<div className="text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#fbbf24' }}>
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
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#fbbf24' }}>
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
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#fbbf24' }}>
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
							<div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#fbbf24' }}>
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
			<section className="py-12 md:py-16 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
				<div className="text-center mb-16 scroll-reveal-fade-up px-2 sm:px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack, fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
						Our Journeys
					</h2>
				</div>

					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
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
					
					{/* WhatsApp Button */}
					<a
						href="https://wa.me/923311438251"
						target="_blank"
						rel="noopener noreferrer"
						className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50 group"
						aria-label="Contact us on WhatsApp"
						style={{
							boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
						}}
					>
						<MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
					</a>
					
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

