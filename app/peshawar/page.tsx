'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ChevronDown, ArrowRight, ChevronLeft } from 'lucide-react';

const PeshawarPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false);
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
	const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
	const [showAllPackages, setShowAllPackages] = useState(false);
	const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
	const [currentSlide, setCurrentSlide] = useState(0);

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
											<li><Link href="/swat-kalam" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Swat Kalam Tour Packages</Link></li>
											<li><Link href="/hunza" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Hunza Tour Packages</Link></li>
											<li><Link href="/skardu" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Skardu Tour Packages</Link></li>
											<li><Link href="/nathia-gali-murree" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Nathia Gali And Murree Tour Packages</Link></li>
											<li><Link href="/neelum-valley" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Neelum Valley Azad Kashmir Tour Packages</Link></li>
											<li><Link href="/kumrat-valley" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Kumrat Valley Tour Packages</Link></li>
											<li><Link href="/naran-kaghan" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Naran Kaghan Tour Packages</Link></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div className="relative group">
								<Link href="/#city-tours" className={`px-3 py-2 text-sm font-semibold transition-colors relative flex items-center gap-1 ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									CITY TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</Link>
								<div className="absolute top-full left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
									<div className="bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden">
										<ul className="py-1">
											<li><Link href="/karachi-tour" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Karachi Tour</Link></li>
											<li><Link href="/lahore-tour" className="block px-4 py-2.5 text-sm font-medium text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors">Lahore Tour</Link></li>
										</ul>
									</div>
								</div>
							</div>
							
							<Link href="/group-tours" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>GROUP TOUR</Link>
							
							{/* DESTINATION with Multi-Level Dropdown */}
							<div className="relative group cursor-pointer">
								<a href="/#destination" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>
									DESTINATION
								</a>
								
								<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[95vw] max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
									<div className="backdrop-blur-lg bg-white/95 border border-gray-200 shadow-2xl overflow-hidden rounded-lg">
										<div className="flex min-h-[400px]">
											<div className="w-1/4 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-[#f99621]/10 to-[#f99621]/5 flex-shrink-0">
												<Image 
													src="/images/map-2.png"
													alt="Pakistan Map"
													width={250}
													height={350}
													className="w-full h-auto max-h-[250px] object-contain"
												/>
											</div>
											
											<div className="w-3/4 flex border-r border-gray-200">
												<div className="w-1/3 p-4 sm:p-6 border-r border-gray-200 flex-shrink-0">
													<h3 className="text-xs font-bold text-[#211f20] uppercase tracking-wider mb-4 whitespace-nowrap">Pakistani Regions</h3>
													<ul className="space-y-1">
														<li className="group/item">
															<a 
																href="/#gilgit" 
																onMouseEnter={() => setSelectedRegion('gilgit')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Gilgit Baltistan
															</a>
														</li>
														<li className="group/item">
															<a 
																href="/#kpk" 
																onMouseEnter={() => setSelectedRegion('kpk')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																KPK / Galyat
															</a>
														</li>
														<li className="group/item">
															<a 
																href="/#punjab" 
																onMouseEnter={() => setSelectedRegion('punjab')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Punjab
															</a>
														</li>
														<li className="group/item">
															<a 
																href="/#sindh" 
																onMouseEnter={() => setSelectedRegion('sindh')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Sindh
															</a>
														</li>
														<li className="group/item">
															<a 
																href="/#balochistan" 
																onMouseEnter={() => setSelectedRegion('balochistan')}
																className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded whitespace-nowrap"
															>
																Balochistan
															</a>
														</li>
													</ul>
												</div>
												
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
															<a href="/#chaghi" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Chaghi District</a>
															<a href="/#gwadar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Gwadar District</a>
															<a href="/#kalat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Kalat District</a>
															<a href="/#khuzdar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Khuzdar District</a>
															<a href="/#quetta" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Quetta District</a>
															<a href="/#ziarat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20] whitespace-normal break-words">Ziarat District</a>
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
				{isMenuOpen && (
					<div 
						className="fixed inset-0 bg-black/50 z-[-1] backdrop-blur-sm" 
						onClick={() => setIsMenuOpen(false)}
						aria-hidden="true"
					/>
				)}
				<div className="p-6 sm:p-8 flex flex-col h-full">
					<button
						onClick={() => setIsMenuOpen(false)}
						className="absolute top-6 right-6 p-2 rounded-full text-white transition-colors hover:bg-[#e8851a]"
						style={{ backgroundColor: '#f99621' }}
						aria-label="Close navigation menu"
					>
						<X className="w-6 h-6" />
					</button>

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
						backgroundImage: "url('/images/gilgit.jpg')",
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
								The Living Soul of the Frontier
							</span>
							<br />
							<span className="block mt-4 hero-text-reveal hero-text-delay-1" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Peshawar District
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed hero-text-reveal hero-text-delay-2 mb-6">
							Walk through the 2,000 year old Qissa Khwani Bazaar and discover the architectural beauty of the Mahabat Khan Mosque in the heart of the "City of Flowers."
						</p>
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hero-text-reveal hero-text-delay-3"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Explore Peshawar City
						</button>
					</div>
				</div>
			</section>

			{/* ====================== KALEIDOSCOPE OF CULTURES SECTION ====================== */}
			<section className="py-8 md:py-12 bg-white relative overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Left Side - Text Content */}
						<div className="order-2 lg:order-1">
							<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
								Places To Visit In Peshawar Tour
							</h2>
							<p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: `${secondaryBlack}90`, lineHeight: '1.6' }}>
								Peshawar District, known as the "City of Flowers," is one of the oldest living cities in South Asia and the cultural heart of Khyber Pakhtunkhwa. Strategically located at the doorstep of the Khyber Pass, it has for millennia served as a melting pot for travelers, conquerors, and traders from Central Asia and the Subcontinent. The city is a fascinating mosaic of Buddhist, Mughal, Sikh, and British influences. From the bustling ancient alleys of Qissa Khwani Bazaar to the majestic Bala Hisar Fort and the world class Gandharan art in the Peshawar Museum, every corner of this district tells a story of survival and hospitality.
							</p>
							<button
								className="px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
								style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
							>
								Read More
							</button>
						</div>

						{/* Right Side - Image Slider */}
						<div className="order-1 lg:order-2 relative">
							<div className="relative w-full max-w-[90%] mx-auto lg:max-w-full aspect-[5/3] overflow-hidden rounded-lg shadow-lg">
								{/* Slider Images */}
								<div className="relative w-full h-full">
									{[
										'/images/slider 1 peshawar.jpg',
										'/images/slider 2 peshawar.jpg',
										'/images/slider 3 peshawar.jpg',
										'/images/slider 4 peshawar.jpg'
									].map((imageSrc, index) => (
										<div
											key={index}
											className={`absolute inset-0 transition-opacity duration-500 ${
												currentSlide === index ? 'opacity-100' : 'opacity-0'
											}`}
										>
											<Image
												src={imageSrc}
												alt={`Slide ${index + 1}`}
												fill
												className="object-cover"
											/>
										</div>
									))}
								</div>

								{/* Navigation Arrows */}
								<button
									onClick={() => setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1))}
									className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 z-10"
									style={{ border: '1px solid rgba(255, 255, 255, 0.8)' }}
									aria-label="Previous slide"
								>
									<ChevronLeft className="w-5 h-5" style={{ color: secondaryBlack }} />
								</button>
								<button
									onClick={() => setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1))}
									className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 z-10"
									style={{ border: '1px solid rgba(255, 255, 255, 0.8)' }}
									aria-label="Next slide"
								>
									<ChevronRight className="w-5 h-5" style={{ color: secondaryBlack }} />
								</button>

								{/* Progress Indicator Bars - 4 bars at bottom */}
								<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
									{[0, 1, 2, 3].map((index) => (
										<div
											key={index}
											className={`h-1 transition-all duration-300 ${
												currentSlide === index ? 'w-8' : 'w-2'
											}`}
											style={{
												backgroundColor: currentSlide === index ? primaryOrange : 'rgba(255, 255, 255, 0.5)',
												borderRadius: '2px'
											}}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== THINGS TO DO IN ASTORE DIAMER ====================== */}
			<section 
				data-section-id="things-to-do"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('things-to-do') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: secondaryBlack }}>
							Must Experience When in <span style={{ borderBottom: `2px solid ${primaryOrange}`, display: 'inline-block', paddingBottom: '2px' }}>Peshawar District</span>
						</h2>
					</div>
					
					{/* 5 Images Vertical Collage - Attached */}
					<div className="flex flex-row max-w-7xl mx-auto overflow-hidden rounded-lg">
						{[
							{
								image: '/images/Qissa Khwani Bazaar (1).jpg',
								title: 'Qissa Khwani Bazaar:',
								description: 'Step into the "Street of Storytellers." Once a hub for traders to swap tales over green tea, it remains a vibrant market where you can enjoy authentic Peshawari Kahwa and visit traditional tea houses.'
							},
							{
								image: '/images/Peshawar Museum (1).jpg',
								title: 'Peshawar Museum:',
								description: 'Explore one of the world\'s finest collections of Gandharan Buddhist art. Housed in a Victorian-era hall, it features 14,000+ artifacts including ancient coins, sculptures, and Mughal weapons.'
							},
							{
								image: '/images/Bala Hisar Fort (1).jpg',
								title: 'Bala Hisar Fort:',
								description: 'Marvel at the "Elevated Fort" that has guarded the city for centuries. Though it serves as a military HQ, its imposing brick walls and museum offer a glimpse into the region\'s turbulent military history.'
							},
							{
								image: '/images/Mahabat Khan Mosque (1).jpg',
								title: 'Mahabat Khan Mosque',
								description: 'Admire this 17th century Mughal masterpiece. With its white marble façade and intricate tile work, it stands as a testament to Shah Jahan era architecture in the heart of the Old City.'
							},
							{
								image: '/images/Namak Mandi Food Street (1).jpg',
								title: 'Namak Mandi Food Street',
								description: 'Indulge in Peshawar\'s legendary meat culture. Savor the world famous Charsi Tikka, juicy Chapli Kebabs, and authentic Namkeen Karahi grilled over open charcoal flames.'
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

			{/* ====================== CUSTOMIZED TOUR PACKAGES ====================== */}
			<section 
				data-section-id="customized-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('customized-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Trips you can experience
						</h2>
					</div>
					
					{/* 3 Cards with Static Content and CTA Buttons */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 md:px-8">
						{[
							{
								title: 'Peshawar Heritage Walk',
								description: 'A quick day tour focusing on the Old City, including Mahabat Khan Mosque, Sethi House, and Qissa Khwani.',
								image: '/images/card 1 peshawar (1).jpg',
								days: '1 Day',
								destinations: '3 Destinations'
							},
							{
								title: 'The Gateway Expedition',
								description: 'An immersive 3 day trip covering the Khyber Pass (Bab-e-Khyber), Jamrud Fort, and the archaeological wonders of Peshawar city.',
								image: '/images/card 2 peshawar (1).jpg',
								days: '3 Days',
								destinations: '5 Destinations'
							},
							{
								title: 'KPK Cultural Hubs',
								description: 'A deeper journey connecting Peshawar\'s history with the nearby ruins of Takht-i-Bahi (Mardan) and the scenic banks of the Kabul River.',
								image: '/images/card 3 peshawar (1).jpg',
								days: '5 Days',
								destinations: '4 Destinations'
							}
						].map((card, idx) => (
							<div 
								key={idx}
								className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
								style={{
									height: '450px',
									animationDelay: `${idx * 0.15}s`,
									opacity: visibleSections.has('customized-packages') ? 1 : 0,
									transform: visibleSections.has('customized-packages') ? 'translateY(0)' : 'translateY(30px)',
									transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
								}}
							>
								{/* Background Image */}
								<div className="absolute inset-0">
									<Image
										src={card.image}
										alt={card.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-110"
									/>
								</div>
								
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
								
								{/* Content - Always Visible */}
								<div className="absolute inset-0 flex flex-col justify-end p-6">
									<div>
										<div className="flex gap-4 mb-2 text-sm" style={{ color: primaryOrange }}>
											<span className="font-semibold">{card.days}</span>
											<span className="font-semibold">{card.destinations}</span>
										</div>
										<h3 className="text-lg font-bold text-white mb-3">
											{card.title}
										</h3>
										<p className="text-white/90 text-sm mb-5 leading-relaxed">
											{card.description}
										</p>
										<button
											onClick={handleWhatsAppClick}
											className="w-full px-6 py-3 font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
											style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
										>
											Explore More
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== MORE ABOUT HUNZA DISTRICT ====================== */}
			<section 
				data-section-id="more-about"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('more-about') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							More About Peshawar District
						</h2>
					</div>
					
					<div className="space-y-8">
						{[
							{
								description: 'Peshawar is a city where ancient traditions are woven into modern life. Its history dates back to at least 539 BC, making it a witness to the rise and fall of empires like the Kushans and the Durranis. The Sethi Mohallah inside the Old City features 19th century havelis (mansions) that showcase the wealth of merchants who traded with Central Asia, featuring intricate woodwork and stained glass.',
								image: '/images/peshawar 1 (1).jpg',
								imageLeft: true
							},
							{
								description: 'The district is also home to Islamia College, a stunning example of colonial-era architecture and a beacon of education featured on the 1,000-rupee note. For a peaceful escape, tourists visit Sardaryab on the Kabul River to enjoy fresh fish and boat rides, or explore the local Peshawar Zoo and Bagh e Naran.',
								image: '/images/peshawar 2 (1).jpg',
								imageLeft: false
							},
							{
								description: 'Economically and culturally, Peshawar is defined by its Pashtun hospitality. Whether you are shopping for traditional Peshawari Chappals (footwear) in the narrow lanes of Jahangirpura or exploring the vast Karkhano Market for electronics and imports, you will find the city to be a welcoming and safe hub for global travelers.',
								image: '/images/peshawar 3 (1).jpg',
								imageLeft: true
							}
						].map((item, idx) => (
							<div 
								key={idx} 
								className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center"
								style={{
									opacity: visibleSections.has('more-about') ? 1 : 0,
									transition: `opacity 0.8s ease-out ${idx * 0.15}s`
								}}
							>
								<div className={`${item.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
									<div className="relative h-40 lg:h-56 max-w-[80%] mx-auto overflow-hidden rounded-lg">
										<Image 
											src={item.image}
											alt="Peshawar District"
											fill
											className="object-cover transition-transform duration-700 hover:scale-110"
										/>
									</div>
								</div>
								
								<div className={`${item.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
									<div className="max-w-[80%] mx-auto">
										<p className={`leading-normal ${item.imageLeft ? 'text-left' : 'text-right'}`} style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ====================== FAQ SECTION ====================== */}
			<section 
				data-section-id="faq"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('faq') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
					<div className="text-center mb-6">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Frequently Asked Questions
						</h2>
					</div>
					
					<div className="space-y-0">
						{[
							{
								question: 'Where is Hunza District located?',
								answer: 'Astore and Diamer are districts in Gilgit-Baltistan, Pakistan, known for their stunning mountain landscapes.'
							},
							{
								question: 'What is the best time to visit?',
								answer: 'Summer months (May to September) are ideal for visiting, with pleasant weather and accessible routes.'
							},
							{
								question: 'Is it safe to travel?',
								answer: 'Yes, the region is generally safe for tourists with proper planning and guidance.'
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

			{/* ====================== READY FOR TOUR SECTION ====================== */}
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

export default PeshawarPage;

