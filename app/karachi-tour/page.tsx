'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { X, Phone, Mail, Facebook, Instagram, Youtube, ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';

const KarachiTourPage = () => {
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle, still needed for hero section logic
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
	const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
	const [showAllPackages, setShowAllPackages] = useState(false);
	const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
	const [showFloatingWidget, setShowFloatingWidget] = useState(true);

	// Theme Colors
	const primaryOrange = '#f99621';
	const secondaryBlack = '#211f20';
	
	// WhatsApp click handler
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/923311438251', '_blank');
	};

	// Scroll detection for navbar transparency (still needed for hero section logic)
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

		// Observe all sections with data-section-id
		const sections = document.querySelectorAll('[data-section-id]');
		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	// Animated Background Component
	const AnimatedBackground = ({ variant = 'default' }: { variant?: 'default' | 'orange' | 'dark' | 'light' }) => {
		return null;
	};

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
						backgroundImage: "url('/images/karachi.avif')",
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
								The City That Never Stops
							</span>
							<br />
							<span className="block mt-4" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Karachi City Tour
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
							From grand colonial landmarks to vibrant bazaars and breezy beaches, dive into the pulse of the "City of Lights"
						</p>
						<div className="mt-8">
							<button 
								onClick={handleWhatsAppClick}
								className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
								style={{ 
									backgroundColor: primaryOrange, 
									color: secondaryBlack
								}}
							>
								Book Your Trip
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== KARACHI GUIDED CITY TOURS 2025 ====================== */}
			<section 
				data-section-id="guided-tours"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('guided-tours') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Karachi Guided City Tours
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Our Karachi City & Historical Tours are thoughtfully curated to showcase the true spirit of Pakistan's largest metropolis, from beach sunsets to colonial architecture and vibrant markets.
						</p>
					</div>

					{/* Tour Packages Grid - 6 packages */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{/* Package 1: 1 Day Historical Downtown Karachi and Masjid-e-Tooba Tour */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 1 karachi.jpg"
									alt="1 Day Historical Downtown Karachi and Masjid-e-Tooba Tour"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 text-center transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day: Historical Downtown Karachi and Masjid-e-Tooba Tour
									</h3>
								</div>
							</div>
						</div>

						{/* Package 2: 1 Day Karachi Coastline and Clifton Beach Sunset Ceremony */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 2 karachi.jpg"
									alt="1 Day Karachi Coastline and Clifton Beach Sunset Ceremony"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 text-center transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day: Karachi Coastline and Clifton Beach Sunset Ceremony
									</h3>
								</div>
							</div>
						</div>

						{/* Package 3: 1 Day Empress Market Heritage Walk and Colonial Architecture Tour */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 3 karachi 1.jpg"
									alt="1 Day Empress Market Heritage Walk and Colonial Architecture Tour"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 text-center transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day: Empress Market Heritage Walk and Colonial Architecture Tour
									</h3>
								</div>
							</div>
						</div>

						{/* Package 4: British Colonial Architecture Karachi City Tour Package */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 4 karachi.jpeg"
									alt="British Colonial Architecture Karachi City Tour Package"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 text-center transform group-hover:translate-x-2 transition-transform duration-300">
										British Colonial Architecture Karachi City Tour Package
									</h3>
								</div>
							</div>
						</div>

						{/* Package 5: Modern Day Karachi City Tour & Shopping District Tour */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 5 karachi.jpg"
									alt="Modern Day Karachi City Tour & Shopping District Tour"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 text-center transform group-hover:translate-x-2 transition-transform duration-300">
										Modern Day Karachi City Tour & Shopping District Tour
									</h3>
								</div>
							</div>
						</div>

						{/* Package 6: 1 Day Bahria Adventure Land & DanZoo Wildlife Experience */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/bharia town adventure land.jpg"
									alt="1 Day: Bahria Adventure Land & DanZoo Wildlife Experience"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 text-center transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day: Bahria Adventure Land & DanZoo Wildlife Experience
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== TOP PLACES TO VISIT IN KARACHI ====================== */}
			<section 
				data-section-id="destinations"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('destinations') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Top Attractions to Visit in Karachi City
						</h2>
						<p className="leading-normal max-w-4xl mx-auto" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							We have compiled a list of the most prominent and famous places to visit in Karachi. Our city tours are structured to ensure you see all the best sites:
						</p>
					</div>
					
					<div className="space-y-6">
						{[
							{ 
								title: 'Quaid-e-Azam\'s Mausoleum (Mazar-e-Quaid)', 
								image: '/images/Mazar-e-Quaid image.jpg',
								description: 'The Mazar-e-Quaid is the final resting place of Muhammad Ali Jinnah, the founder of Pakistan. This iconic white marble structure is a symbol of national identity and a key site for visitors. The mausoleum is surrounded by a large garden and serves as a place of quiet reflection and national pride.',
								imageLeft: true
							},
							{ 
								title: 'Mohatta Palace', 
								image: '/images/Mohatta Palace.jpeg',
								description: 'The Mohatta Palace is a stunning red sandstone and marble building constructed in 1927 by Shivratan Chandraratan Mohatta, a Hindu businessman. It was designed in the traditional stone palace style of Rajasthan and showcases Indo Saracenic architecture. Today, it serves as an arts museum, preserving the cultural heritage of Pakistan.',
								imageLeft: false
							},
							{ 
								title: 'Empress Market', 
								image: '/images/Empress Market.jpg',
								description: 'Empress Market is a huge, historic colonial era structure built during the British Raj in 1889. Located in the bustling Saddar Town, it is one of the busiest and oldest markets in the city. It remains a central marketplace today, selling everything from groceries and pets to textiles and household goods.',
								imageLeft: true
							},
							{ 
								title: 'Frere Hall', 
								image: '/images/Frere Hall.jpg',
								description: 'Frere Hall is a beautiful Venetian Gothic style building completed in 1865 in honor of Sir Bartle Frere, a former Governor of Bombay. It is famous for its architecture and the 19th century Sadequain murals that decorate its ceiling. The building is surrounded by Jinnah Gardens (Bagh-e-Jinnah) and is a key landmark of British colonial architecture.',
								imageLeft: false
							},
							{ 
								title: 'Clifton Beach and Clifton Clock Tower', 
								image: '/images/Clifton Beach and Clifton Clock Tower.jpg',
								description: 'Clifton Beach (also known as Sea View) is the most popular beach destination, offering a wide stretch of sand along the Arabian Sea. It\'s a hub of activity where families and tourists enjoy camel and buggy rides, food stalls, and ocean breezes. The nearby Clifton Clock Tower is a recognizable modern landmark and a popular photo spot.',
								imageLeft: true
							},
							{ 
								title: 'Masjid-e-Tooba (Tooba Mosque)', 
								image: '/images/Masjid-e-Tooba (Tooba Mosque).jpg',
								description: 'Also known as the Gol Masjid (Round Mosque), this is one of Karachi\'s architectural marvels, built in 1969. It is famous for having the world\'s largest single dome mosque without any central pillars. The pure white marble structure is a beautiful, serene site for prayer and visitation.',
								imageLeft: false
							},
							{ 
								title: 'State Bank of Pakistan Museum', 
								image: '/images/State Bank of Pakistan Museum.jpg',
								description: 'The State Bank Museum is housed in a grand colonial era building and preserves Pakistan\'s financial and monetary history. It showcases a vast collection of currencies, coins, and art, offering a fascinating look at the region\'s economic past. The museum is a great place to explore the history of money and banking in South Asia.',
								imageLeft: true
							},
							{ 
								title: 'National Museum of Pakistan', 
								image: '/images/National Museum of Pakistan.jpg',
								description: 'Located on Burns Garden, the museum displays diverse collections ranging from ancient artifacts to documents of Pakistan\'s independence. Key exhibits include relics from the Indus Valley Civilization, Gandhara art, and Islamic art. It provides a comprehensive historical narrative of the land and its people.',
								imageLeft: false
							},
							{ 
								title: 'Pakistan Air Force (PAF) Museum', 
								image: '/images/Pakistan Air Force (PAF) Museum.jpg',
								description: 'The PAF Museum is a popular family attraction showcasing the history of the Pakistan Air Force. It features various aircraft, including fighter jets and bombers, displayed in parks and hangars. It\'s a great place for aviation enthusiasts and for a fun outdoor visit.',
								imageLeft: true
							},
							{ 
								title: 'Turtle Beaches (Hawkesbay and Sandspit)', 
								image: '/images/Turtle Beaches (Hawkesbay and Sandspit).jpg',
								description: 'The beaches west of the city, especially Hawkesbay and Sandspit, are famous for being nesting grounds for Green and Olive Ridley turtles. These quieter beaches are popular for cottages (huts) and offer a peaceful escape from the city bustle. Visiting during the nesting season is a memorable experience.',
								imageLeft: false
							},
							{ 
								title: 'Manora Island and Port', 
								image: '/images/Manora Island and Port.jpeg',
								description: 'Manora Island is located south of the Karachi Port and offers beautiful views of the city skyline and harbor. It is home to a historic lighthouse, the 17th century fort remnants, and a naval base. Access involves crossing the long Manora bridge or taking a boat ride from the main harbor.',
								imageLeft: true
							},
							{ 
								title: 'Bohri Bazaar and Zaibunnisa Street', 
								image: '/images/Bohri Bazaar and Zaibunnisa Street.jpg',
								description: 'These areas represent the heart of Karachi\'s vibrant, chaotic and diverse shopping culture. Bohri Bazaar is famous for traditional clothing, jewelry, and household goods. Zaibunnisa Street (Elphinstone Street) offers a mix of modern and traditional shops, reflecting the city\'s energy.',
								imageLeft: false
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

			{/* ====================== MORE ABOUT KARACHI CITY ====================== */}
			<section 
				data-section-id="more-about-lahore"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('more-about-lahore') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl md:text-3xl font-bold mb-3 text-center" style={{ color: secondaryBlack }}>
							More About Karachi City
						</h2>
						<p className="leading-normal text-justify mb-0" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Karachi, established as a small fishing village centuries ago, rapidly transformed into a modern metropolitan area under the British Raj and became the first capital of Pakistan. Known today as the nation's economic powerhouse, Karachi is a resilient city built on trade, dreams, and diversity. Its history is a blend of ancient fishing communities, colonial development and the arrival of millions of settlers following Pakistan's independence. This resilient port city continues to grow, maintaining a fascinating mix of historical buildings, massive markets, and a unique coastal culture.
						</p>
						
						<h3 className="text-xl md:text-2xl font-bold mt-0 mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Historical Names of Karachi City
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Karachi's name has evolved over time, reflecting its early identity as a fishing and trading spot:
						</p>
						<div className="mt-2 space-y-1">
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Kolachi-jo-Goth (Village of Kolachi, after a local fisherwoman)</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Kolachi</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Karak (possibly from an old name for the port)</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Kharak Bandar</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== RULERS AND DYNASTIES THAT RULED OVER KARACHI ====================== */}
			<section 
				data-section-id="rulers-dynasties"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('rulers-dynasties') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-3 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Rulers and Dynasties That Ruled Over Karachi
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
							{/* Image on the left */}
							<div className="lg:col-span-1">
								<div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
									<Image 
										src="/images/hd-mazarequaid-karachi.jpg"
										alt="Historical Ruler of Karachi"
										fill
										className="object-cover"
									/>
								</div>
							</div>
							
							{/* Content on the right */}
							<div className="lg:col-span-2 space-y-2">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Karachi's history is defined by a succession of local and foreign powers:
								</p>
								<div className="space-y-3 mt-3">
									<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										<strong>Local Tribes:</strong> The early history involved local Sindhi tribes, primarily the Kalaris and Jokhio clans, who maintained the small fishing settlement.
									</p>
									<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										<strong>Talpur Dynasty (Sindh):</strong> In the 18th century, the Talpur rulers built a fort in the area, recognizing its trade importance.
									</p>
									<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										<strong>British Colonial Rule (1839):</strong> The British seized control of Karachi, recognizing its strategic harbor potential. They dramatically transformed it into a major port city, constructing the splendid Victorian style Colonial Architecture that defines the historical center today.
									</p>
									<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										<strong>The Post Independence Era (1947):</strong> After Pakistan's creation, Karachi served as the capital and witnessed a massive influx of migrants, which propelled its growth into the diverse, bustling metropolis it is today.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== THE COLORFUL BAZAARS OF KARACHI CITY ====================== */}
			<section 
				data-section-id="bazaars"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('bazaars') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							The Colorful Bazaars of Karachi City
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
							{/* Content on the left */}
							<div className="lg:col-span-2 space-y-2">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Karachi is home to some of Pakistan's largest, most chaotic, and diverse markets. Exploring these vibrant bazaars is the best way to experience the city's commercial energy and the true spirit of its people. They range from vast, traditional wholesale markets to modern shopping districts:
								</p>
								<div className="mt-2 space-y-1">
									<div className="flex items-start gap-2">
										<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
										<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Empress Market (Saddar): The historical heart of the city's trade.</p>
									</div>
									<div className="flex items-start gap-2">
										<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
										<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Bohri Bazaar: Famous for traditional textiles, jewelry, and household goods.</p>
									</div>
									<div className="flex items-start gap-2">
										<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
										<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Zainab Market: Popular for clothing, leather goods, and handicrafts, catering often to tourists.</p>
									</div>
									<div className="flex items-start gap-2">
										<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
										<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Tariq Road: A modern shopping hub known for bridal wear and latest fashion.</p>
									</div>
									<div className="flex items-start gap-2">
										<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
										<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Clifton/Do Darya: Features upscale shopping areas and dining experiences.</p>
									</div>
								</div>
								<p className="leading-normal mt-2" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									A Karachi Walking Tour or a Rickshaw Tour through these markets is the best way to witness the sheer volume and variety of goods traded in the city.
								</p>
							</div>
							
							{/* Image on the right */}
							<div className="lg:col-span-1">
								<div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
									<Image 
										src="/images/The Colorful Bazaars of Karachi City.jpg"
										alt="Colorful Bazaar of Karachi"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== KARACHI'S FOOD STREET AND VIBRANT CULTURE ====================== */}
			<section 
				data-section-id="food-street"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('food-street') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Karachi's Food Streets and Vibrant Culture
						</h3>
						<p className="leading-normal text-justify mb-3" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							A trip to Karachi is incomplete without diving into its incredible street food and diverse dining scene:
						</p>
						<ul className="space-y-2 mb-3">
							<li className="flex items-start gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
								<div>
									<p className="leading-normal font-semibold" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										Burns Road Food Street:
									</p>
									<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										The oldest and most famous food street, offering classic Karachi dishes like Biryani, Nihari, Paaye and the famous Bun Kebab. It is the place for an authentic Androon Karachi Food Tour.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
								<div>
									<p className="leading-normal font-semibold" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										Hussainabad Food Street:
									</p>
									<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										Another popular hub known for barbecue, grilled meats and local snacks.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: primaryOrange }}></div>
								<div>
									<p className="leading-normal font-semibold" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										Do Darya (Clifton/Seaview):
									</p>
									<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										Offers a unique, upscale dining experience with restaurants built on piers extending over the Arabian Sea perfect for a Seafood and Sunset Tour.
									</p>
								</div>
							</li>
						</ul>
						<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Our Karachi Food Street Tour will guide you to the best spots to sample the city's complex, flavorful cuisine.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== GUIDED KARACHI TOUR PACKAGES / KARACHI CITY TOUR ====================== */}
			<section 
				data-section-id="guided-lahore-tour-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('guided-lahore-tour-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						{/* Main Title */}
						<div className="text-center mb-6">
							<h2 className="text-1xl md:text-3xl font-bold" style={{ color: secondaryBlack }}>
								Guided Karachi Tour Packages / Karachi City Tour
							</h2>
						</div>

						{/* Two Column Layout: Image - List */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
						{/* Left Image */}
						<div className="order-2 lg:order-1">
							<div className="relative w-full h-[350px] rounded overflow-hidden">
								<Image 
									src="/images/The Colorful Bazaars of Karachi City.jpg"
									alt="Karachi Architecture"
									fill
									className="object-cover"
								/>
							</div>
						</div>

						{/* Content List */}
						<div className="order-1 lg:order-2">
							<div className="bg-white rounded">
								{[
									'Old Karachi Historical Tour',
									'British Colonial Architecture Karachi City Tour',
									'Coastal and Beach Exploration Tour',
									'Sufi Heritage and Shrine Tour',
									'Karachi Street Food Tour',
									'Androon Karachi Food Tour (Burns Road Special)',
									'Karachi Bus Tour (City Highlights)',
									'Walking Karachi City Tour',
								].map((tour, idx) => (
									<div 
										key={idx}
										className="py-2 px-3"
										style={{ 
											backgroundColor: idx % 2 === 0 ? '#fff4e6' : 'white',
										}}
									>
										<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
											{tour} | Karachi City Tour
										</p>
									</div>
								))}
							</div>
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
							Frequently Asked Questions 
						</h2>
					</div>
					
					<div className="space-y-0">
						{[
							{
								question: 'Where is Karachi located?',
								answer: 'South of Pakistan, on the coast of the Arabian Sea (Sindh province).'
							},
							{
								question: 'What is the best time to visit?',
								answer: 'Winter (October to March) for pleasant, moderate weather.'
							},
							{
								question: 'Is Karachi safe for tourists?',
								answer: 'Yes, generally safe; use reliable transport and follow local advice.'
							},
							{
								question: 'How can we travel there?',
								answer: 'Flights, train, or road (via Super Highway/M-9) are all options.'
							},
							{
								question: 'What kind of food is available?',
								answer: 'Biryani, Seafood, street food (Bun Kebab), and international cuisine.'
							},
							{
								question: 'What are the main attractions?',
								answer: 'Mazar-e-Quaid, Clifton Beach, Mohatta Palace, and historical markets.'
							},
							{
								question: 'Can I use my credit card or ATM?',
								answer: 'Yes, major cities have wide ATM and credit card availability.'
							},
							{
								question: 'Is there a public transport system?',
								answer: 'Yes, buses, rickshaws, taxis, and ride-hailing apps are common.'
							},
							{
								question: 'What is the local language spoken?',
								answer: 'Urdu is the main language, followed by Sindhi and Gujrati.'
							},
							{
								question: 'What is the time difference?',
								answer: 'Pakistan Standard Time (PST) is UTC+5.'
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

			{/* ====================== READY FOR TOUR CTA ====================== */}
			<section className="py-8 md:py-12 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
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
									href="https://www.facebook.com/share/1KDWBkecr5/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f99621] transition-colors"
								>
									<Facebook className="w-5 h-5 text-white" />
								</a>
								<a 
									href="https://www.instagram.com/nayi.talaash?igsh=OGd4dXViMDBxd3B2" 
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

export default KarachiTourPage;
