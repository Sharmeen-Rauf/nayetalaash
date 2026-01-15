'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { X, Phone, Mail, Facebook, Instagram, Youtube, ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';

const LahoreTourPage = () => {
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
						backgroundImage: "url('/images/Lahore City 1.jpg')",
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
								Lahore City Tour
							</span>
							<br />
							<span className="block mt-4" 
								  style={{ 
									  color: primaryOrange, 
									  display: 'inline-block'
								  }}>
								Discover the Heart of Pakistan
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
							Explore the ancient Walled City, taste the famous Food Street flavors, and feel the history of the Mughals. Your unforgettable Pakistan adventure starts here.
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
								Book Your Tour
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== LAHORE GUIDED CITY TOURS 2025 ====================== */}
			<section 
				data-section-id="guided-tours"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('guided-tours') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Lahore Guided City Tours
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Our Lahore City & Walled City Guided Tours are thoughtfully designed to reveal the true soul of the old city through immersive cultural and historical experiences.
						</p>
					</div>

					{/* Tour Packages Grid - 3 columns top row, 2 columns bottom row */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{/* Package 1: 1 Day Walking Tour of Mughal and Sikh Era Walled City of Lahore */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 1 lahore.jpg"
									alt="1 Day Walking Tour of Mughal and Sikh Era Walled City of Lahore"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day Walking Tour of Mughal and Sikh Era Walled City of Lahore
									</h3>
								</div>
							</div>
						</div>

						{/* Package 2: 1 Day Lahore Guided Walled City Tour and Wahga Border Flag Raising Ceremony */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 2 lahore.jpg"
									alt="1 Day Lahore Guided Walled City Tour and Wahga Border Flag Raising Ceremony"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day Lahore Guided Walled City Tour and Wahga Border Flag Raising Ceremony
									</h3>
								</div>
							</div>
						</div>

						{/* Package 3: 1 Day Heritage Walk Through the Royal Route and Old Streets of Walled City Lahore */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 3 lahore.jpg"
									alt="1 Day Heritage Walk Through the Royal Route and Old Streets of Walled City Lahore"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										1 Day Heritage Walk Through the Royal Route and Old Streets of Walled City Lahore
									</h3>
								</div>
							</div>
						</div>

						{/* Package 4: Sufi Heritage Lahore City Tour Package */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 4 lahore.jpg"
									alt="Sufi Heritage Lahore City Tour Package"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										Sufi Heritage Lahore City Tour Package
									</h3>
								</div>
							</div>
						</div>

						{/* Package 5: British Colonial Architecture Lahore City Tour Package */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/package 5 lahore.png"
									alt="British Colonial Architecture Lahore City Tour Package"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										British Colonial Architecture Lahore City Tour Package
									</h3>
								</div>
							</div>
						</div>

						{/* Package 6: Modern Day Lahore City Tour Package */}
						<div className="relative group cursor-pointer">
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
								<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
								<Image 
									src="/images/papackage 6 lahore.jpg"
									alt="Modern Day Lahore City Tour Package"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
										Modern Day Lahore City Tour Package
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== TOP PLACES TO VISIT IN LAHORE ====================== */}
			<section 
				data-section-id="destinations"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('destinations') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Top Places to Visit in Lahore
						</h2>
						<p className="leading-normal max-w-4xl mx-auto" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							We have compiled a list of the most prominent and famous places to visit in Lahore. Our city tours are structured to ensure you see all the best sites:
						</p>
					</div>
					
					<div className="space-y-6">
						{[
							{ 
								title: 'Lahore Fort (Shahi Qila)', 
								image: '/images/Lahore Fort (Shahi Qila).jpeg',
								image360: '/images/marc-markstein-if4wsNq145o-unsplash.jpg', // Your 360 image
								// For embedded tour (Kuula/Roundme/etc): iframe360: 'https://kuula.co/share/collection/XXXXX',
								description: 'A UNESCO World Heritage Site and the crown jewel of Mughal Lahore. Explore the stunning Sheesh Mahal, the magnificent Picture Wall, and the grand Alamgiri Gate. The fort holds centuries of history within its royal chambers and ancient walls.',
								imageLeft: true
							},
							{ 
								title: 'Badshahi Mosque', 
								image: '/images/Badshahi Mosque.jpg',
								// For self-hosted 360 image: image360: '/images/360/badshahi-mosque-360.jpg',
								// For embedded tour (Kuula/Roundme/etc): iframe360: 'https://kuula.co/share/collection/XXXXX',
								description: 'One of the largest and most architecturally beautiful mosques in the world. Its striking red sandstone exterior and pristine white marble interior are truly spectacular. The mosque reflects the immense glory and power of Emperor Aurangzeb\'s historical era.',
								imageLeft: false
							},
							{ 
								title: 'Wazir Khan Mosque', 
								image: '/images/Wazir Khan Mosque.jpg',
								// Add 360 image when available: image360: '/images/360/wazir-khan-mosque-360.jpg',
								description: 'This beautiful mosque was built in the 17th century by Ilm-ud-Din Ansari (known as Wazir Khan), the Governor of Lahore under Emperor Shah Jahan. Located on the Royal Route (Shahi Guzargah), it is famous for its intricate Kashi Kari (tile work) and delicate Fresco Paintings. Its entrance includes a unique market area, historically known as the Calligrapher\'s Market.',
								imageLeft: true
							},
							{ 
								title: 'Hazuri Bagh & Baradari', 
								image: '/images/Hazuri Bagh & Baradari.jpg',
								// Add 360 image when available: image360: '/images/360/hazuri-bagh-360.jpg',
								description: 'Hazuri Bagh is a significant garden located between the Lahore Fort\'s Alamgiri Gate and the Badshahi Mosque. At its center stands a Bara Dari (Twelve-Door Pavilion), which was built by Maharaja Ranjit Singh using white marble from dismantled Mughal structures. The garden also holds the Tombs of Sir Allama Mohammad Iqbal (National Poet) and Sikandar Hayat Khan.',
								imageLeft: false
							},
							{ 
								title: 'Shahi Hammam', 
								image: '/images/Shahi Hammam.jpg',
								// Add 360 image when available: image360: '/images/360/shahi-hammam-360.jpg',
								description: 'This is a Mughal era public bathhouse, inspired by Turkish designs, also commissioned by Wazir Khan near the Delhi Gate. It provided comprehensive services, including hot, warm, and cold water sections, a sauna, and separate areas for men and women. After being restored in 2013, its beautiful frescoes and hidden water channels were uncovered, making it a key historical site.',
								imageLeft: true
							},
							{ 
								title: 'Shalimar Gardens', 
								image: '/images/Shalimar Gardens.jpg',
								// Add 360 image when available: image360: '/images/360/shalimar-gardens-360.jpg',
								description: 'Referred to as Shah Jahan\'s "Heaven on Earth" for its meticulous design. The gardens feature stunning water terraces, numerous fountains, and elegant pavilions. They perfectly embody the symmetry and planning characteristic of Mughal landscape design.',
								imageLeft: false
							},
							{ 
								title: 'Lahore Museum', 
								image: '/images/Lahore Museum.jpg',
								// Add 360 image when available: image360: '/images/360/lahore-museum-360.jpg',
								description: 'A true treasure house preserving rare artifacts from across many eras of history. Its collection spans the Gandhara, Mughal, Sikh, and British periods. It is an essential stop for anyone interested in the cultural heritage of the region.',
								imageLeft: true
							},
							{ 
								title: 'Gali Surjan Singh', 
								image: '/images/Gali Surjan Singh.jpg',
								// Add 360 image when available: image360: '/images/360/gali-surjan-singh-360.jpg',
								description: 'A meticulously restored historic street nestled deep within old Lahore. It is filled with tangible heritage, vibrant culture, and charming architecture. This alley offers a uniquely beautiful setting perfect for photography and exploration.',
								imageLeft: false
							},
							{ 
								title: 'Minar-e-Pakistan', 
								image: '/images/Minar-e-Pakistan.jpg',
								// Add 360 image when available: image360: '/images/360/minar-e-pakistan-360.jpg',
								description: 'The towering place where the landmark Pakistan Resolution was formally passed in 1940. This monument is an unmistakable and powerful symbol of the nation\'s identity and birth. It is a crucial site of historical and patriotic significance for the country.',
								imageLeft: true
							},
							{ 
								title: 'Wahga Border Ceremony', 
								image: '/images/Wahga Border Ceremony.jpg',
								// Add 360 image when available: image360: '/images/360/wahga-border-360.jpg',
								description: 'A thrilling and popular daily flag lowering military ceremony between Pakistan and India. The event is a highly energetic spectacle, generating intense national pride and patriotism. It is an unmissable cultural and theatrical experience for visitors to Lahore.',
								imageLeft: false
							},
							{ 
								title: 'Data Darbar', 
								image: '/images/Data Darbar 1.jpg',
								// Add 360 image when available: image360: '/images/360/data-darbar-360.jpg',
								description: 'One of the most important and largest Sufi shrines found across all of South Asia. It is a spiritual center rich with deep historical and cultural significance. The shrine draws millions of pilgrims and followers seeking blessings and peace.',
								imageLeft: true
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

			{/* ====================== HISTORICAL SITES IN LAHORE ====================== */}
			<section 
				data-section-id="historical-sites"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('historical-sites') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="w-full">
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Some Other Historical and Heritage Sites in Lahore:
						</h3>

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
							{[
								'Hazuri Bagh',
								'Naulakha Pavilion',
								'Lahore Fort Gates',
								'Delhi Gate',
								'Roshnai Gate',
								'Bhatti Gate',
								'Mochi Gate',
								'Taxali Gate',
								'Gulabi Bagh Gateway',
								'Chauburji',
								'Tomb of Allama Iqbal',
								'Masjid Wazir Khan',
							].map((item, idx) => (
								<div 
									key={idx} 
									className="transition-all duration-500 cursor-pointer group rounded-lg w-full scroll-reveal-fade-up"
									style={{ 
										backgroundColor: 'white',
										border: `2px solid ${primaryOrange}`,
										height: '56px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										paddingLeft: '2rem',
										paddingRight: '2rem',
										minWidth: '100%',
										opacity: visibleSections.has('historical-sites') ? 1 : 0,
										transform: visibleSections.has('historical-sites') ? 'translateY(0)' : 'translateY(20px)',
										transitionDelay: `${idx * 0.05}s`
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = primaryOrange;
										e.currentTarget.style.transform = 'translateY(-2px)';
										const pElement = e.currentTarget.querySelector('p') as HTMLParagraphElement;
										if (pElement) pElement.style.color = secondaryBlack;
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'white';
										e.currentTarget.style.transform = 'translateY(0)';
										const pElement = e.currentTarget.querySelector('p') as HTMLParagraphElement;
										if (pElement) pElement.style.color = secondaryBlack;
									}}
								>
									<p className="leading-normal transition-colors duration-300 text-center capitalize" style={{ color: secondaryBlack, fontSize: '14px', lineHeight: '1.5' }}>
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ====================== MORE ABOUT LAHORE CITY ====================== */}
			<section 
				data-section-id="more-about-lahore"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('more-about-lahore') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-4">
						<h2 className="text-2xl md:text-3xl font-bold mb-3 text-center" style={{ color: secondaryBlack }}>
							More About Lahore City
						</h2>
						<div className="space-y-2">
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								With a history spanning perhaps 3,000 to 3,500 years, Lahore is much more than a city; it is a narrator of history. This resilient metropolis has survived the rise and fall of countless empires, conflicts, and natural disasters, yet it always stands tall, emerging stronger than before.
							</p>
							<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								Present-day Lahore is proud of its lively streets, fantastic architecture, echoing food streets, and vibrant, loving people, known locally as "Zinda Dilan e Lahore" (Lahore with Lively Hearts). Every door and alleyway tells a story of endurance, evolution, and timeless charm.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== HISTORY OF LAHORE ====================== */}
			<section 
				data-section-id="history-lahore"
				className={`py-2 md:py-3 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('history-lahore') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							History Of Lahore
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Lahore is an ancient city, often called the "City of Gardens," with a history stretching back over a thousand years. It became truly magnificent under the Mughal emperors, who built stunning palaces and mosques like the Lahore Fort and Badshahi Mosque, making it an imperial cultural center. It also served as the capital during the Sikh era. Critically, Lahore is the symbolic birthplace of modern Pakistan, where the resolution for an independent nation was passed, blending its deep historical roots with its modern status as the country's vibrant, beating heart.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== A BRIEF HISTORY OF THE WALLED CITY OF LAHORE ====================== */}
			<section 
				data-section-id="walled-city-history"
				className={`py-2 md:py-3 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('walled-city-history') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							A Brief History of the Walled City of Lahore
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							According to ancient Hindu mythology, the Walled City of Lahore was founded by Lav (Loh), one of the twin sons of the Hindu god Ram. It is said that Lav established Lavapuri (the present-day Walled City of Lahore), while his brother Kusha founded the nearby city of Kasur. However, this origin story is widely considered a myth, as concrete historical evidence only dates back to the 11th century when Mahmood Ghaznavi became victorious and established Muslim rule in the region.
						</p>
						<p className="leading-normal text-justify mt-2" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							The Walled City, with its ancient gates, narrow alleys, and historic structures, has been the heart of Lahore for centuries. Its fortifications, originally built for defense, now serve as a living testament to the city's rich and complex history, attracting historians, archaeologists, and tourists from around the world.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== OTHER HISTORICAL NAMES OF LAHORE CITY ====================== */}
			<section 
				data-section-id="historical-names"
				className={`py-2 md:py-3 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('historical-names') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Other Historical Names of Lahore City
						</h3>
						<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Throughout its long history, Lahore has been known by various names. Some of the historical names associated with the city include:
						</p>
						<div className="mt-2 space-y-1">
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Mehmood Puri</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohpur</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lavapuri</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohawar</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohkot</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lavakot</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lavapur</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== RULERS AND DYNASTIES THAT RULED OVER LAHORE ====================== */}
			<section 
				data-section-id="rulers-dynasties"
				className={`py-2 md:py-3 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('rulers-dynasties') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-3 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Rulers and Dynasties That Ruled Over the Lahore City
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
							{/* Image on the left */}
							<div className="lg:col-span-1">
								<div className="relative h-40 lg:h-auto rounded-lg overflow-hidden">
									<Image 
										src="/images/Lahore Fort (Shahi Qila) 1-district.jpg"
										alt="Historical Ruler of Lahore"
										fill
										className="object-cover"
									/>
								</div>
							</div>
							
							{/* Content on the right */}
							<div className="lg:col-span-2 space-y-2">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Lahore has been ruled by numerous powerful dynasties and empires throughout its history. The Hindu Shahis were among the earliest known rulers, with Raja Jayapal being defeated by Mahmud Ghaznavi in 1021, marking the beginning of Muslim rule in the region.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									The city experienced a golden era under Malik Ahmed Ayyaz, but Ghazni rule was eventually overthrown by Shahabuddin Ghori. This was followed by a succession of Muslim dynasties that shaped Lahore's destiny.
								</p>
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									The Sultans under Qutubuddin Albak established their presence, followed by the Turco-Afghan Dynasty under Jalaludin Firoz Khilji. The Tughlaq Dynasty, led by Ghiyasudin Tughlaq, and the Sadaat under Khizer Khan, also left their mark. The Lodhi Dynasty, with Ibrahim Lodhi at the helm, preceded the arrival of the Mughals.
								</p>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* ====================== 13 GATES OF THE WALLED CITY OF LAHORE ====================== */}
			<section 
				data-section-id="gates"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('gates') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							13 Gates of the Walled City of Lahore
						</h3>
						<p className="leading-normal text-justify mb-3" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							The historic Walled City was once fortified by 13 grand gates, commissioned by the Mughals, each serving as a key entry point. Many still stand today, including:
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Delhi Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Bhatti Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Lohari Gate or Lahori Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Mori Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Sheranwala Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Taxali Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Roshnai Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Mochi Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Shah Alam Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Akbari Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Masti Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Kashmiri Gate</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>Yakki Gate</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== THE COLORFUL BAZAARS OF LAHORE CITY ====================== */}
			<section 
				data-section-id="bazaars"
				className={`py-4 md:py-5 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('bazaars') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '24px' }}>
							The Colorful Bazaars of Lahore City
						</h3>
						
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
							{/* Content on the left */}
							<div className="lg:col-span-2 space-y-2">
								<p className="leading-normal text-justify" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Lahore boasts some of the most vibrant and bustling bazaars in Pakistan. Exploring these markets is the best way to witness the city's true life and culture. They feature everything from traditional jewelry and handicrafts to aromatic spices and appealing food stalls.
								</p>
								<div className="mt-2">
									<p className="leading-normal mb-2" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
										Famous markets include: Anarkali Bazaar, Ichhra Bazaar, Shah Alami Market, Rang Mahal Bazaar, and Liberty Market. For a true Lahori experience, you can take a colorful Rangeela Rickshaw Tour through these busy streets!
									</p>
								</div>
							</div>
							
							{/* Image on the right */}
							<div className="lg:col-span-1">
								<div className="relative h-40 lg:h-auto rounded-lg overflow-hidden">
									<Image 
										src="/images/The Colorful Bazaars of Lahore City.jpg"
										alt="Colorful Bazaar of Lahore"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====================== GUIDED LAHORE TOUR PACKAGES / LAHORE CITY TOUR ====================== */}
			<section 
				data-section-id="guided-lahore-tour-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('guided-lahore-tour-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						{/* Main Title */}
						<div className="text-center mb-6">
							<h2 className="text-1xl md:text-3xl font-bold" style={{ color: secondaryBlack }}>
								Guided Lahore Tour Packages / Lahore City Tour
							</h2>
						</div>

						{/* Two Column Layout: Image - List */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
							{/* Left Image */}
							<div className="order-2 lg:order-1">
								<div className="relative w-full h-[350px] rounded overflow-hidden">
									<Image 
										src="/images/lahore.jpg"
										alt="Lahore Architecture"
										fill
										className="object-cover"
									/>
								</div>
							</div>

							{/* Content List */}
							<div className="order-1 lg:order-2">
								<div className="bg-white rounded">
									{[
										'Old Lahore Historical Tour',
										'British Colonial Architecture Lahore City Tour',
										'Mughal History Lahore City Tour',
										'Sufi Heritage Lahore City Tour',
										'Lahore Street Food Tour',
										'Androon Lahore Food Tour',
										'Lahore Rickshaw Tour',
										'Lahore Rangeela Rickshaw Tour',
										'Lahore City Bus Tour',
										'Walking Lahore City Tour',
									].map((tour, idx) => (
										<div 
											key={idx}
											className="py-2 px-3"
											style={{ 
												backgroundColor: idx % 2 === 0 ? '#fff4e6' : 'white',
											}}
										>
											<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
												{tour} | Lahore City Tour
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
								question: 'What is included in the Lahore City Tour?',
								answer: 'Our tours include guided visits to major landmarks, transportation, entry assistance and a curated experience based on the theme you choose.'
							},
							{
								question: 'Can I customize my Lahore tour?',
								answer: 'Yes! You can add or remove destinations, extend the tour or create a fully custom city tour according to your preference.'
							},
							{
								question: 'How long is the Lahore City Tour?',
								answer: 'It depends on the package. We offer half day, full day, and multi day Lahore tours.'
							},
							{
								question: 'Do you provide pickup and drop-off?',
								answer: 'Yes, we provide convenient pickup and drop-off from your hotel or preferred location.'
							},
							{
								question: 'Are entry tickets included?',
								answer: 'Some tours include tickets, while others may require on spot purchase. Full details are provided before booking.'
							},
							{
								question: 'Is the tour suitable for families?',
								answer: 'Absolutely! Our tours are family friendly and safe for all age groups.'
							},
							{
								question: 'What should I wear during the tour?',
								answer: 'Comfortable clothing and shoes are recommended. For mosques or religious sites, modest dressing is appreciated.'
							},
							{
								question: 'Do you offer food tours?',
								answer: 'Yes, our Lahore Food Street & Androon Lahore Food Tour lets you enjoy authentic Lahori cuisine.'
							},
							{
								question: 'Is the Wahga Border Parade included?',
								answer: 'Yes, it can be added as part of your tour. We provide guided assistance for the ceremony.'
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
									<a href="/swat-kalam" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Pakistan Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/lahore-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>City Tours</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<a href="/astore-diamer" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Destination</a>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/about" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>About Us</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/contact" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Contact Us</Link>
								</li>
							</ul>
						</div>

						{/* Column 3: What We Do */}
						<div>
							<h3 className="font-bold mb-4 text-base" style={{ color: secondaryBlack }}>What We Do</h3>
							<ul className="space-y-2">
								<li className="border-b border-gray-200 pb-2">
									<Link href="/customize-a-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Custom Tour Packages</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/group-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Family Tour Packages</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/customize-a-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Honeymoon Trips</Link>
								</li>
								<li className="border-b border-gray-200 pb-2">
									<Link href="/skardu" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Adventure Tours</Link>
								</li>
								<li className="pb-2">
									<Link href="/lahore-tour" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Cultural Experiences</Link>
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

export default LahoreTourPage;

