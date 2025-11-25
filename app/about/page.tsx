'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ArrowRight, MapPin, Users, Globe, Award, Heart, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Theme Colors
	const primaryOrange = '#f99621';
	const secondaryBlack = '#211f20';
	const logoImage = '/images/logo landscape(white).png';

	// WhatsApp click handler
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/923311438251', '_blank');
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

			{/* Main Navigation Bar */}
			<header className="fixed top-[32px] sm:top-[36px] left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-[0_6px_12px_rgba(0,0,0,0.06)] transition-all duration-300">
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
							<Link href="/#home" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">HOME</Link>
							<Link href="/#tours" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors relative group">
								<span className="flex items-center gap-1">
									PAKISTAN TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</span>
							</Link>
							<Link href="/#city-tours" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors relative group">
								<span className="flex items-center gap-1">
									CITY TOURS
									<ChevronRight className="w-4 h-4 rotate-90" />
								</span>
							</Link>
							<Link href="/#group-tours" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">GROUP TOUR</Link>
							<Link href="/#destination" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">DESTINATION</Link>
							<Link href="/about" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">ABOUT US</Link>
							<Link href="/contact" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">CONTACT US</Link>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(true)}
							className="lg:hidden p-2 rounded-md transition-colors hover:bg-white/20"
							aria-label="Toggle navigation menu"
						>
							<Menu className="w-6 h-6 text-[#211f20]" />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="fixed inset-0 z-[120] bg-black/50 lg:hidden" onClick={() => setIsMenuOpen(false)}>
					<div className="fixed top-[32px] sm:top-[36px] left-0 right-0 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
						<div className="px-4 py-4 space-y-2">
							<Link href="/#home" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>HOME</Link>
							<Link href="/#tours" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>PAKISTAN TOURS</Link>
							<Link href="/#city-tours" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>CITY TOURS</Link>
							<Link href="/#group-tours" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>GROUP TOUR</Link>
							<Link href="/#destination" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>DESTINATION</Link>
							<Link href="/about" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
							<Link href="/contact" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
							<button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 p-2">
								<X className="w-6 h-6 text-[#211f20]" />
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Hero Section */}
			<section className="pt-[100px] sm:pt-[120px] pb-16 md:pb-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: secondaryBlack }}>
				<div className="max-w-7xl mx-auto">
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
							About Nayi Talaash
						</h1>
						<p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
							Your trusted travel partner for discovering the hidden gems, rich culture, and breathtaking beauty of Pakistan.
						</p>
					</div>
				</div>
			</section>

			{/* About Content Section */}
			<section className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						{/* Left: Main Content */}
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: secondaryBlack }}>
								Who We Are
							</h2>
							<p className="text-base mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
								Nayi Talaash is a premier travel agency dedicated to showcasing Pakistan&apos;s diverse landscapes, rich cultural heritage, and warm hospitality. We specialize in creating unforgettable travel experiences that combine adventure, culture, and comfort.
							</p>
							<p className="text-base mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
								Our mission is to help travelers discover the hidden treasures of Pakistan through carefully curated tours, expert guidance, and personalized service. Whether you&apos;re seeking mountain adventures, cultural immersion, or serene landscapes, we&apos;re here to make your journey exceptional.
							</p>
							<p className="text-base mb-8 leading-relaxed" style={{ color: '#6b7280' }}>
								With deep knowledge of Pakistan&apos;s geography, culture, and local communities, we ensure every trip is safe, meaningful, and memorable.
							</p>

							<h3 className="text-2xl md:text-3xl font-bold mb-6 mt-12" style={{ color: secondaryBlack }}>
								Our Values
							</h3>
							<ul className="space-y-4">
								{[
									{ icon: Heart, text: 'Passion for travel and cultural exploration' },
									{ icon: ShieldCheck, text: 'Safety and security as top priorities' },
									{ icon: Users, text: 'Community engagement and responsible tourism' },
									{ icon: Award, text: 'Excellence in service and customer satisfaction' },
									{ icon: Globe, text: 'Authentic experiences that respect local culture' }
								].map((item, idx) => {
									const Icon = item.icon;
									return (
										<li key={idx} className="flex items-start gap-3">
											<Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryOrange }} />
											<span className="text-base leading-relaxed" style={{ color: '#6b7280' }}>{item.text}</span>
										</li>
									);
								})}
							</ul>
						</div>

						{/* Right: Features/Stats */}
						<div className="space-y-8">
							<div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
								<h3 className="text-xl font-bold mb-4" style={{ color: secondaryBlack }}>
									Why Choose Us
								</h3>
								<ul className="space-y-4">
									{[
										'Expert local guides with deep knowledge of Pakistan',
										'Customized itineraries tailored to your interests',
										'Premium accommodations and comfortable transportation',
										'24/7 customer support throughout your journey',
										'Competitive pricing with transparent costs',
										'Women-friendly and family-oriented tours'
									].map((item, idx) => (
										<li key={idx} className="flex items-start gap-3">
											<ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryOrange }} />
											<span className="text-base leading-relaxed" style={{ color: '#6b7280' }}>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-[#f99621]/10 to-[#f99621]/5 rounded-lg p-6 border border-[#f99621]/20">
								<h3 className="text-xl font-bold mb-4" style={{ color: secondaryBlack }}>
									Our Location
								</h3>
								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryOrange }} />
										<p className="text-base" style={{ color: '#6b7280' }}>
											F-36 PECHS Block 6,<br />Karachi, Pakistan
										</p>
									</div>
									<div className="flex items-center gap-3">
										<Mail className="w-5 h-5 flex-shrink-0" style={{ color: primaryOrange }} />
										<a href="mailto:info@nayitalaash.com" className="text-base transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
											info@nayitalaash.com
										</a>
									</div>
									<div className="flex items-center gap-3">
										<Phone className="w-5 h-5 flex-shrink-0" style={{ color: primaryOrange }} />
										<a href="tel:+92331438251" className="text-base transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
											+92 331 438251
										</a>
									</div>
								</div>
							</div>
						</div>
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
									className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
								>
									<ArrowRight className="w-5 h-5" />
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

