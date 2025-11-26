'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, ArrowRight, ChevronDown, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
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
							<Link href="/#destination" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>DESTINATION</Link>
							<Link href="/#about" className={`px-3 py-2 text-sm font-semibold transition-colors ${isLight ? 'text-[#211f20] hover:text-[#f99621]' : 'text-white hover:text-[#f99621]'}`}>ABOUT US</Link>
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
							<Link href="/#about" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
							<Link href="/contact" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621]" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
							<button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 p-2">
								<X className="w-6 h-6 text-[#211f20]" />
							</button>
						</div>
					</div>
				</div>
			)}

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
							<span className="font-autography hero-text-reveal hero-text-delay-1" 
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
			<section className="py-16 md:py-24" style={{ backgroundColor: '#f5f5f5' }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header Section */}
					<div className="text-center mb-12">
						<div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: primaryOrange }}></div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Let&apos;s explore where we can take you next
						</h2>
						<p className="text-base md:text-lg mb-2 max-w-3xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
							We help travelers and companies design structured, smooth and memorable travel experiences.
						</p>
						<p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
							From tour planning to bookings get full support without any hassle.
						</p>
					</div>

					{/* Main Content Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
							{/* Left: Why Talk To Us? */}
							<div>
								<h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: secondaryBlack }}>
									Why talk to us?
								</h3>
								<ul className="space-y-6">
									{[
										'Free, no obligation consultation with a travel specialist',
										'Customized routes, stays and experiences',
										'Clear guidance on budget, itinerary and booking',
										'Trusted travel support across Pakistan'
									].map((item, idx) => (
										<li key={idx} className="flex items-start gap-3">
											<div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ backgroundColor: `${primaryOrange}20` }}>
												<CheckCircle2 className="w-5 h-5" style={{ color: primaryOrange }} />
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
												<option value="">Service of interest</option>
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

							{/* Our Presence */}
							<div>
								<h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: secondaryBlack }}>
									Our Presence
								</h3>
								<div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
									<h4 className="text-lg font-bold mb-2" style={{ color: secondaryBlack }}>
										Karachi, Pakistan — Head Office
									</h4>
									<p className="text-sm mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
										Located in the heart of the city, our head office in PECHS Block 6 serves as the center of all operations at Nayi Talaash. This is where our travel experts plan routes, design tour experiences and assist travelers from all across Pakistan.
									</p>
									<p className="text-sm mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
										Whether you want guidance, bookings or a fully customized trip, our Karachi team is always ready to help you explore the beauty of Pakistan with comfort and confidence.
									</p>
									<div className="space-y-3">
										<div className="flex items-start gap-3">
											<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryOrange }} />
											<p className="text-sm" style={{ color: '#6b7280' }}>F-36 PECHS Block 6, Karachi, Pakistan</p>
										</div>
										<div className="flex items-center gap-3">
											<Mail className="w-5 h-5 flex-shrink-0" style={{ color: primaryOrange }} />
											<a href="mailto:info@nayitalaash.com" className="text-sm transition-colors" style={{ color: '#6b7280' }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
												info@nayitalaash.com
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* Connect With Us */}
							<div>
								<h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: secondaryBlack }}>
									Connect With Us
								</h3>
								<p className="text-base mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
									Stay updated with travel tips, new packages and cultural experiences.
								</p>
								<div className="flex gap-3">
									<a 
										href="https://www.facebook.com/nayetalash" 
										target="_blank" 
										rel="noopener noreferrer"
										className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
									>
										<Facebook className="w-6 h-6 text-white" />
									</a>
									<a 
										href="https://www.instagram.com/nayetalash" 
										target="_blank" 
										rel="noopener noreferrer"
										className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
									>
										<Instagram className="w-6 h-6 text-white" />
									</a>
									<a 
										href="https://www.youtube.com/@nayetalash" 
										target="_blank" 
										rel="noopener noreferrer"
										className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
									>
										<Youtube className="w-6 h-6 text-white" />
									</a>
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

export default ContactPage;

