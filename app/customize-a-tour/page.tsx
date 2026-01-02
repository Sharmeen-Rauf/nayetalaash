'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, Calendar, ArrowRight } from 'lucide-react';

const CustomizeTourPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Form state
	const [formData, setFormData] = useState({
		destination: '',
		totalDays: '',
		startingDate: '',
		travelMode: '',
		vehiclePreference: '',
		totalPersons: '',
		adults: '',
		children: '',
		totalRooms: '',
		departureLocation: '',
		tourGuide: '',
		groupCategory: '',
		serviceType: '',
		specificRequirements: '',
		fullName: '',
		email: '',
		phone: ''
	});

	// Theme colors
	const primaryOrange = '#f99621';
	const secondaryBlack = '#211f20';

	// Logo image
	const logoImage = '/images/Final....png';


	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log('Form submitted:', formData);
		// Optionally redirect or show success message
		alert('Thank you for your inquiry! We will contact you soon.');
	};

	// Handle input changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	return (
		<div className="relative min-h-screen font-sans overflow-x-hidden bg-white">
			
			{/* --- Top Bar - Dark Background with Contact & Social --- */}
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
							{/* Social Media Icons */}
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
			<header className="fixed top-[32px] sm:top-[36px] left-0 right-0 z-[100] backdrop-blur-sm transition-all duration-300 bg-white/95 border-b border-gray-200 shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
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

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center gap-1">
							<Link href="/" className={`px-3 py-2 text-sm font-semibold transition-colors text-[#211f20] hover:text-[#f99621]`}>HOME</Link>
							<a href="/#destination" className={`px-3 py-2 text-sm font-semibold transition-colors text-[#211f20] hover:text-[#f99621]`}>DESTINATIONS</a>
							<a href="/#tours" className={`px-3 py-2 text-sm font-semibold transition-colors text-[#211f20] hover:text-[#f99621]`}>PACKAGES</a>
							<Link href="/about" className={`px-3 py-2 text-sm font-semibold transition-colors text-[#211f20] hover:text-[#f99621]`}>ABOUT US</Link>
							<Link href="/contact" className={`px-3 py-2 text-sm font-semibold transition-colors text-[#211f20] hover:text-[#f99621]`}>CONTACT US</Link>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden p-2"
							aria-label="Toggle menu"
						>
							{isMenuOpen ? <X className="w-6 h-6" style={{ color: secondaryBlack }} /> : <Menu className="w-6 h-6" style={{ color: secondaryBlack }} />}
						</button>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="pt-[80px] sm:pt-[90px] pb-12">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Page Title */}
					<div className="text-center mb-8">
						<h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack }}>
							CUSTOMIZE YOUR OWN TOUR WITH US!
						</h1>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
							The more information you provide, the better we can design your trip. Kindly provide us with the following information:
						</p>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
						{/* Trip Details Section */}
						<div className="space-y-4">
							<h2 className="text-xl font-bold mb-4" style={{ color: secondaryBlack }}>Trip Details</h2>
							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										What is your desired destination(s)? <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="destination"
										value={formData.destination}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Total Number of Days: <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="totalDays"
										value={formData.totalDays}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Starting Date of Trip:
									</label>
									<div className="relative">
										<input
											type="text"
											name="startingDate"
											value={formData.startingDate}
											onChange={handleChange}
											placeholder="dd/mm/yyyy"
											className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621] pr-10"
											style={{ color: secondaryBlack }}
										/>
										<Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Travel Mode: <span className="text-red-500">*</span>
									</label>
									<div className="flex gap-4">
										<label className="flex items-center">
											<input
												type="radio"
												name="travelMode"
												value="air"
												checked={formData.travelMode === 'air'}
												onChange={handleChange}
												required
												className="mr-2"
											/>
											<span style={{ color: secondaryBlack }}>By Air</span>
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												name="travelMode"
												value="road"
												checked={formData.travelMode === 'road'}
												onChange={handleChange}
												required
												className="mr-2"
											/>
											<span style={{ color: secondaryBlack }}>By Road</span>
										</label>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Which vehicle would you prefer? <span className="text-red-500">*</span>
									</label>
									<select
										name="vehiclePreference"
										value={formData.vehiclePreference}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									>
										<option value="">Select Vehicle</option>
										<option value="coaster-saloon">Coaster Saloon</option>
										<option value="hiace">Hiace</option>
										<option value="corolla">Corolla</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Total Number of Persons: <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="totalPersons"
										value={formData.totalPersons}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Adults (12+ years):
									</label>
									<input
										type="text"
										name="adults"
										value={formData.adults}
										onChange={handleChange}
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Children (0-12 years):
									</label>
									<input
										type="text"
										name="children"
										value={formData.children}
										onChange={handleChange}
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Total Number of Rooms required: <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="totalRooms"
										value={formData.totalRooms}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Departure Location: <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="departureLocation"
										value={formData.departureLocation}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Do you need a Tour Guide?
									</label>
									<div className="flex gap-4">
										<label className="flex items-center">
											<input
												type="radio"
												name="tourGuide"
												value="yes"
												checked={formData.tourGuide === 'yes'}
												onChange={handleChange}
												className="mr-2"
											/>
											<span style={{ color: secondaryBlack }}>Yes</span>
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												name="tourGuide"
												value="no"
												checked={formData.tourGuide === 'no'}
												onChange={handleChange}
												className="mr-2"
											/>
											<span style={{ color: secondaryBlack }}>No</span>
										</label>
									</div>
								</div>
							</div>
						</div>

						{/* Group Category Section */}
						<div className="border-t pt-6">
							<label className="block text-sm font-medium mb-4" style={{ color: secondaryBlack }}>
								Group Category: <span className="text-red-500">*</span>
							</label>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								<label className="flex items-center">
									<input
										type="radio"
										name="groupCategory"
										value="couple"
										checked={formData.groupCategory === 'couple'}
										onChange={handleChange}
										required
										className="mr-2"
									/>
									<span style={{ color: secondaryBlack }}>Couple</span>
								</label>
								<label className="flex items-center">
									<input
										type="radio"
										name="groupCategory"
										value="family"
										checked={formData.groupCategory === 'family'}
										onChange={handleChange}
										required
										className="mr-2"
									/>
									<span style={{ color: secondaryBlack }}>Family</span>
								</label>
								<label className="flex items-center">
									<input
										type="radio"
										name="groupCategory"
										value="corporate"
										checked={formData.groupCategory === 'corporate'}
										onChange={handleChange}
										required
										className="mr-2"
									/>
									<span style={{ color: secondaryBlack }}>Corporate</span>
								</label>
								<label className="flex items-center">
									<input
										type="radio"
										name="groupCategory"
										value="students"
										checked={formData.groupCategory === 'students'}
										onChange={handleChange}
										required
										className="mr-2"
									/>
									<span style={{ color: secondaryBlack }}>Students/Friends</span>
								</label>
							</div>
						</div>

						{/* Services/Budget Section */}
						<div className="border-t pt-6">
							<label className="block text-sm font-medium mb-4" style={{ color: secondaryBlack }}>
								What kind of services do you need? (Trip Budget)
							</label>
							<div className="flex gap-4">
								<label className="flex items-center">
									<input
										type="radio"
										name="serviceType"
										value="standard"
										checked={formData.serviceType === 'standard'}
										onChange={handleChange}
										className="mr-2"
									/>
									<span style={{ color: secondaryBlack }}>Standard</span>
								</label>
								<label className="flex items-center">
									<input
										type="radio"
										name="serviceType"
										value="deluxe"
										checked={formData.serviceType === 'deluxe'}
										onChange={handleChange}
										className="mr-2"
									/>
									<span style={{ color: secondaryBlack }}>Deluxe</span>
								</label>
								<label className="flex items-center">
									<input
										type="radio"
										name="serviceType"
										value="executive"
										checked={formData.serviceType === 'executive'}
										onChange={handleChange}
										className="mr-2"
									/>
									<span style={{ color: secondaryBlack }}>Executive</span>
								</label>
							</div>
						</div>

						{/* Specific Requirements Section */}
						<div className="border-t pt-6">
							<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
								Do you have any specific requirements? If yes, then mention below.
							</label>
							<textarea
								name="specificRequirements"
								value={formData.specificRequirements}
								onChange={handleChange}
								rows={6}
								className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621] resize-y"
								style={{ color: secondaryBlack }}
							/>
						</div>

						{/* Contact Details Section */}
						<div className="border-t pt-6">
							<h2 className="text-xl font-bold mb-4" style={{ color: secondaryBlack }}>Contact Details:</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Full Name: <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Email Address:
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>

								<div className="md:col-span-2">
									<label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
										Phone / WhatsApp Number: <span className="text-red-500">*</span>
									</label>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
										style={{ color: secondaryBlack }}
									/>
								</div>
							</div>
						</div>

						{/* Submit Button */}
						<div className="border-t pt-6 text-center">
							<button
								type="submit"
								className="px-8 py-3 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
								style={{ backgroundColor: primaryOrange, color: 'white' }}
							>
								MAKE MY TRIP
							</button>
						</div>
					</form>
				</div>
			</main>

			{/* Footer */}
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

export default CustomizeTourPage;

