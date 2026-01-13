'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, MessageCircle, ChevronRight, ChevronDown, Mail, Facebook, Instagram, Youtube, Phone, X } from 'lucide-react';
import Navbar from '@/app/components/Navbar';

const AbbottabadPage = () => {
	const [isLight, setIsLight] = useState(false);
	const [showFloatingWidget, setShowFloatingWidget] = useState(true);
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
	const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
	const [showAllPackages, setShowAllPackages] = useState(false);
	const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
	const [currentSlide, setCurrentSlide] = useState(0);

	// Theme Colors
	const primaryOrange = '#f99621';
	const secondaryBlack = '#211f20';
	
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
			{/* Navbar Component */}
			<Navbar isLight={isLight} />

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
								The City of Pines
							</span>
							<br />
							<span className="block mt-4 hero-text-reveal hero-text-delay-1" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Abbottabad District
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed hero-text-reveal hero-text-delay-2 mb-6">
							Discover the colonial charm of this peaceful city and explore the surrounding green peaks of Thandiani and Ayubia National Park.
						</p>
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hero-text-reveal hero-text-delay-3"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Explore Galiyat Tours
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
								Places To Visit In Abbottabad Tour
							</h2>
							<p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: `${secondaryBlack}90`, lineHeight: '1.6' }}>
								Abbottabad District, often called the "City of Pines," is a prominent city nestled in the Hazara region of Khyber Pakhtunkhwa. Famous for its pleasant, moderate climate, green hill stations, and historical British era cantonment feel, it serves as the perfect gateway to both the Galiyat region and the higher Karakoram Highway. The district is a hub of educational institutions and military training (like PMA Kakul) but is equally known for its natural beauty, including the high peaks of Thandiani, the tranquil Harnoi River, and the forested serenity of Ayubia National Park.
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
										'/images/slider 1 abbottabad.jpg',
										'/images/slider 2 abbottabad.jpg',
										'/images/slider 3 abbottabad.jpg',
										'/images/slider 4 abbottabad.jpg'
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
							Must Experience When in <span style={{ borderBottom: `2px solid ${primaryOrange}`, display: 'inline-block', paddingBottom: '2px' }}>Abbottabad District</span>
						</h2>
					</div>
					
					{/* 5 Images Vertical Collage - Attached */}
					<div className="flex flex-row max-w-7xl mx-auto overflow-hidden rounded-lg">
						{[
							{
								image: '/images/Thandiani Top.jpg',
								title: 'Thandiani Top',
								description: 'Journey to the "Very Cold Place" (Thandiani), the highest mountain in the area, offering panoramic views of the Kaghan and Kohistan ranges and lush pine forests.'
							},
							{
								image: '/images/Ilyasi Mosque & Stream.jpg',
								title: 'Ilyasi Mosque & Stream',
								description: 'Visit this historical and largest mosque in Abbottabad, famously built over a cold, clear water stream. It\'s a key spiritual and local attraction, renowned for its surrounding Pakora stalls.'
							},
							{
								image: '/images/Pipeline Track & Ayubia National Park.jpg',
								title: 'Pipeline Track & Ayubia National Park',
								description: 'Trek the famous 4 km Pipeline Track between Ayubia and Dunga Gali within the lush, thickly forested national park, known for its rich wildlife and scenic overlooks.'
							},
							{
								image: '/images/Sajikot & Umbrella Waterfalls.jpg',
								title: 'Sajikot & Umbrella Waterfalls',
								description: 'Discover the beauty of the district\'s hidden cascades. Sajikot Waterfall (near Havelian) and the unique Umbrella Waterfall offer refreshing retreats and photography spots.'
							},
							{
								image: '/images/Miranjani & Mushkpuri Peaks.jpg',
								title: 'Miranjani & Mushkpuri Peaks',
								description: 'Embark on rewarding moderate treks to the highest peaks of the Galiyat region. These summits offer stunning views overlooking Murree, Azad Kashmir, and the surrounding forests.'
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
								title: 'Galiyat Hill Stations Retreat',
								description: 'A concentrated tour covering Abbottabad (Ilyasi Mosque), Nathia Gali, and Ayubia National Park for trekking and relaxation.',
								image: '/images/card 1 abbottabad.jpg',
								days: '3 Days',
								destinations: '3 Destinations'
							},
							{
								title: 'Thandiani & Waterfalls Explorer',
								description: 'Focuses on the scenic drive to Thandiani, the Sajikot/Umbrella Waterfalls, and the historical center of Abbottabad.',
								image: '/images/card 2 abbottabad.jpg',
								days: '4 Days',
								destinations: '4 Destinations'
							},
							{
								title: 'Kaghan & Galiyat Combo',
								description: 'A perfect week-long trip linking the accessible hill stations of Abbottabad with the high altitude lakes and passes of the Naran Kaghan Valley.',
								image: '/images/card 3 abbottabad.jpg',
								days: '7 Days',
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

			{/* ====================== MORE ABOUT ABBOTTABAD DISTRICT ====================== */}
			<section 
				data-section-id="more-about"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('more-about') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							More About Abbottabad District
						</h2>
					</div>
					
					<div className="space-y-8">
						{[
							{
								description: 'Abbottabad was founded in 1853 by Major James Abbott, the first Deputy Commissioner of the Hazara region under British Rule, and was named "Abbott\'s Town." This history is visible in its architecture, large cantonment area, and wide, tree lined roads, giving it a unique colonial charm.',
								image: '/images/Abbottabad 1.jpg',
								imageLeft: true
							},
							{
								description: 'The district is the gateway to three major mountain ranges (Karakoram, Hindu Kush, and Himalayas) and acts as the crucial starting point for the Karakoram Highway (KKH) leading north. The local population primarily speaks Hindko, followed by Pashto and Urdu, reflecting the area\'s cultural mix.',
								image: '/images/abbotabad 2.jpg',
								imageLeft: false
							},
							{
								description: 'Abbottabad is not only a base for higher mountain travel but also a destination in its own right. Attractions like Shimla Pahari, the Harnoi Picnic Point (on the Dor River), and the historical Lady Garden Public Park provide easy, accessible recreation for families and hikers. Its bracing, pleasant climate makes it a popular tourist spot year round, even when higher valleys are snowed in.',
								image: '/images/abbottabad 3.jpg',
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
											alt="Abbottabad District"
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
								question: 'Where is Astore Diamer District located?',
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

export default AbbottabadPage;

