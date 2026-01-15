'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, ChevronDown, Mail, Facebook, Instagram, Youtube, Phone, X } from 'lucide-react';
import Navbar from '@/app/components/Navbar';

const NaranKaghanPage = () => {
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
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

	return (
		<div className="relative min-h-screen font-sans overflow-x-hidden">
			<Navbar isLight={isLight} />

			{/* ====================== HERO SECTION ====================== */}
			<section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-[100px] sm:pt-[104px]" style={{ backgroundColor: secondaryBlack }}>
				{/* Background Image */}
				<div 
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ 
						backgroundImage: "url('/images/Naran Kaghan-pk-banner.jpg')",
						filter: "brightness(0.3)",
					}}
				></div>

				{/* Theme Color Overlay */}
				<div className="absolute inset-0 z-[2]" style={{ background: `linear-gradient(135deg, ${secondaryBlack}90 0%, transparent 50%, ${primaryOrange}30 100%)` }}></div>

				{/* Main Content */}
				<div className="relative z-10 h-full flex items-center justify-center">
					<div className="text-center px-4">
						<h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-white">
							<span className="font-autography hero-text-reveal block mb-2 text-white" style={{ display: 'inline-block', fontSize: '48px', color: 'white' }}>
								Naran Kaghan Tour Packages
							</span>
							<br />
							<span className="block hero-text-reveal hero-text-delay-1"
								  style={{
									  color: primaryOrange,
									  display: 'inline-block',
									  fontSize: '48px'
								  }}>
								Mountains, Lakes & Adventure
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-normal hero-text-reveal hero-text-delay-2 mb-6">
						Relive old memories or create new ones with our custom tours, from vibrant Naran Bazaar to Babusar Pass and the magical Saif-ul-Malook Lake.						</p>
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hero-text-reveal hero-text-delay-3"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Book Now
						</button>
					</div>
				</div>
			</section>

			{/* ====================== CUSTOMIZED SWAT TOUR PACKAGES 2025 ====================== */}
			<section 
				data-section-id="customized-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('customized-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Best Naran Kaghan Tour Packages
						</h2>
						<div className="space-y-4">
							<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
								Your journey should be unique! These tour packages to Naran Kaghan can be custom built for you by our professional tour operators. Feel free to choose from the popular list below or customize your itinerary to meet your exact requirements:
							</p>
						</div>
					</div>
					
					{/* Tour Packages Data */}
					{(() => {
						const allPackages = [
							{ 
								title: '4 Days: Naran, Lalazar Meadows, and Babusar Top Climb',
								image: '/images/package 1 naran.jpg'
							},
							{ 
								title: '4 Days: Naran, Babusar Top, and Shogran Valley Explorer',
								image: '/images/package 2 naran.jpg'
							},
							{ 
								title: '4 Days: Sharan Forest, Manshi Top, and Shogran Kaghan Valley Trip',
								image: '/images/package 3 naran.jpg'
							},
							{ 
								title: '3 Days: Shogran, Siri Paye Meadows, and Sharan Valley Quick Tour',
								image: '/images/package 4 naran.jpg'
							},
							{ 
								title: '4 Days: Naran Kaghan Valley, Babusar Top, and Nathiya Gali Combo',
								image: '/images/package 5 naran.jpg'
							},
							{ 
								title: '8 Days: Shogran, Naran, and Hunza Valley Grand Tour',
								image: '/images/package 6 naran.jpg'
							},
							{ 
								title: '9 Days: Naran Kaghan and Neelum Valley',
								image: '/images/package 7 naran.jpg'
							},
							{ 
								title: '4 Days: Naran, Lulusar Lake, and Jalkhad Scenic Tour',
								image: '/images/package 8 naran.jpg'
							},
							{ 
								title: '5 Days: Naran, Kaghan, Batakundi & Babusar Top Adventure',
								image: '/images/package 9 naran.jpg'
							},
						];
						
						const visiblePackages = showAllPackages ? allPackages : allPackages.slice(0, 6);
						
						return (
							<>
								{/* 9 Tour Packages Grid */}
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 md:px-8">
									{visiblePackages.map((item, idx) => (
							<div 
								key={idx} 
								className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-700"
								style={{
									animationDelay: `${idx * 0.1}s`,
									opacity: visibleSections.has('customized-packages') ? 1 : 0,
									transform: visibleSections.has('customized-packages') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
									transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
								}}
							>
								<div className="relative w-full aspect-[2/1] overflow-hidden">
									<Image 
										src={item.image}
										alt={item.title}
										fill
										className="object-cover hover:scale-110 transition-transform duration-500"
									/>
								</div>
								<div className="p-3">
									<p className="font-medium leading-normal text-center" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
										{item.title}
									</p>
								</div>
							</div>
									))}
								</div>
								
								{/* See More / See Less Button */}
								<div className="flex justify-center mt-8">
									{!showAllPackages ? (
										<button
											onClick={() => setShowAllPackages(true)}
											className="px-8 py-3 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
											style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
										>
											See More
										</button>
									) : (
										<button
											onClick={() => setShowAllPackages(false)}
											className="px-8 py-3 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
											style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
										>
											See Less
										</button>
									)}
								</div>
							</>
						);
					})()}
				</div>
			</section>

			{/* ====================== PUBLIC SWAT KALAM TOUR PACKAGES 2025 ====================== */}
			<section 
				data-section-id="public-packages"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('public-packages') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					{/* Main Heading and Intro */}
					<div className="max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: secondaryBlack }}>
							Naran Kaghan Group Tour Packages
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Nayi Talaash organizes these group tours throughout the summer season. You can easily join these fixed departures as an individual traveler or with your group, according to your schedule:
						</p>
					</div>

					{/* Two Tour Package Images */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/package 10 naran.jpg"
									alt="3 Days: Naran Kaghan, Babusar Top, and Shogran Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal text-center" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									3 Days: Naran Kaghan, Babusar Top, and Shogran
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/package 11 naran.jpg"
									alt="2 Days: Shogran and Siri Paye"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal text-center" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									2 Days: Shogran and Siri Paye
								</p>
							</div>
						</div>
					</div>

					{/* Customized Naran Kaghan Tours: Who Are You Traveling With? Section */}
					<div className="max-w-4xl mx-auto mb-8">
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Who Are You Traveling With?
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Couples / Honeymoon
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Luxury and Solitude. We offer a private, beautiful environment for newlyweds to celebrate surrounded by nature\'s stunning beauty.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Families
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Fun, Luxurious, and Secure. We ensure a great, relaxing environment for your loved ones to connect and make lifelong memories.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Students / Friends
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Pure Fun and Adventure! Enjoy exciting activities and games while exploring adventurous destinations without the hassle of planning.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Corporate Groups
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Team Building in Nature. A perfect setting for employees to develop a closer connection and recharge outside the usual office environment.
								</p>
							</div>
						</div>
					</div>

					{/* Starting Point Flexibility Section */}
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Starting Point Flexibility
						</h3>
						<p className="text-left mb-4" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							We offer tours starting from: Lahore, Karachi, and Islamabad. You can also customize these tours to start from any other city in Pakistan!
						</p>
					</div>
				</div>
			</section>

			{/* ====================== MOST POPULAR DESTINATIONS AND ATTRACTIONS IN SWAT VALLEY ====================== */}
			<section 
				data-section-id="destinations"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('destinations') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: secondaryBlack }}>
							Top Attractions in Naran Kaghan
						</h2>
					</div>
					
					{/* 15 Destinations with Alternating Layout */}
					<div className="space-y-8">
						{[
							{ 
								title: 'Naran', 
								image: '/images/naran.jpg',
								description: 'Naran is a beautiful small town and the main hub in Kaghan Valley. It is where most tourists stay to visit the upper parts of Kaghan and the Gilgit Baltistan road. Naran offers a wide variety of accommodations but is closed during the winter due to heavy snowfall.',
								imageLeft: true
							},
							{ 
								title: 'Naran Bazaar', 
								image: '/images/Naran Bazaar.jpg',
								description: 'The Naran Bazaar is always busy and crowded with tourists, offering a lively atmosphere. You can find all your necessities here, plus shops selling traditional clothes, dry fruits, and local handicrafts. It\'s famous for the tempting aroma of local foods being cooked, especially fresh Trout Fish and Chapli Kababs.',
								imageLeft: false
							},
							{ 
								title: 'Kunhar River', 
								image: '/images/naran kaghan.jpg',
								description: 'The Kunhar River flows right through the Kaghan Valley, fed by glaciers, lakes and surrounding streams from Babusar Top. It is home to various fish species, most famously the Trout Fish, which supports the local fishing industry. The river eventually flows out of Kaghan and joins the Jhelum River near Muzaffarabad.',
								imageLeft: true
							},
							{ 
								title: 'Saif-ul-Malook Lake', 
								image: '/images/Saif-ul-Malook Lake.jpg',
								description: 'Located north of Naran, this stunning glacial lake is shadowed by the iconic Malika-e-Parbat peak. Access requires an exciting off-road jeep ride up a narrow track. It is famous for the local fairy tale about the Egyptian prince Saif-ul-Malook and the fairy Badri-ul-Jamal.',
								imageLeft: false
							},
							{ 
								title: 'Batakundi', 
								image: '/images/Batakundi.jpg',
								description: 'Batakundi is the first town you reach after Naran when heading towards Babusar, offering a beautiful, peaceful place to stay. It is the starting point for the one hour jeep track that leads up to the scenic Lalazar Meadows. The town offers several hotels, rest houses, camping sites, and a small market.',
								imageLeft: true
							},
							{ 
								title: 'Jalkhad', 
								image: '/images/Jalkhad.jpg',
								description: 'Jalkhad is a scenic small town further up the Naran-Babusar road, popular for camping. It is a hub for high altitude attractions like Tiger Peak, the bowl-shaped Pyala Lake, and the route to Saral Lake. It is also where the jeepable mountain pass, Noori Top, begins its climb towards Neelum Valley in Kashmir.',
								imageLeft: false
							},
							{ 
								title: 'Besal', 
								image: '/images/Besal.jpg',
								description: 'The scenery changes completely at Besal (or Besar), where the valley broadens out amidst huge surrounding mountains. It is the official starting point for the challenging two-day moderate level trek to the beautiful Dudipatsar Lake. Besal is also home to the famous Moon Restaurant and falls under the Lulusar-Dudipatsar National Park area.',
								imageLeft: true
							},
							{ 
								title: 'Lulusar Lake', 
								image: '/images/Lulusar Lake.jpg',
								description: 'Lulusar is the largest lake in the entire Kaghan Valley, famous for its deep teal colored water. As a glacial lake, it is a significant source of water for the Kunhar River. It remains completely covered in snow during the winter and is a crucial part of the Lulusar-Dudipatsar National Park.',
								imageLeft: false
							},
							{ 
								title: 'Babusar Pass', 
								image: '/images/Babusar Pass.jpg',
								description: 'Babusar Pass is the highest point on the Kaghan Road, reached via a zigzag, steep drive past Gitidas. From the top, on a clear day, you can see stunning views of Nanga Parbat, Rakaposhi, and the lower Kaghan Valley. This pass is the high-altitude route that connects Kaghan to Gilgit Baltistan via Chilas and is best visited from May to September.',
								imageLeft: true
							},
							{ 
								title: 'Ansoo Lake', 
								image: '/images/naran kaghan.jpg',
								description: 'Ansoo means "teardrop" in Urdu, and the lake is named for its distinctive shape. It is located north of Naran and requires a challenging one-day trek from Saif-ul-Malook Lake. Visitors can hire mules from Saif-ul-Malook to make the difficult hike easier.',
								imageLeft: false
							},
							{ 
								title: 'Kiwai Waterfall', 
								image: '/images/Kiwai Waterfall.jpg',
								description: 'Kiwai is a town in Kaghan Valley famous for a small, accessible waterfall reached by hiking along water streams. Kiwai is the main starting point for the jeep tracks that lead up to the popular hilltop tourist destinations of Shogran and Siri Paye. The town itself has a small market and several hotels.',
								imageLeft: true
							},
							{ 
								title: 'Shogran', 
								image: '/images/Shogran.jpg',
								description: 'Shogran is a beautiful hilltop tourist destination easily accessible by jeep from Kiwai. It is popular because it remains open throughout the year, even when high-altitude areas like Naran close down. Shogran offers a range of accommodations, from economical to luxury.',
								imageLeft: false
							},
							{ 
								title: 'Siri Paye', 
								image: '/images/Siri Paye.jpg',
								description: 'Siri Paye consists of two parts Siri (a small seasonal lake/pond) and Paye Meadows. Paye Meadows are vast grasslands at the end of the jeep track, known for attracting shepherd herds in summer. This area is a great starting point to spot or trek towards the majestic Makra Peak.',
								imageLeft: true
							},
							{ 
								title: 'Sharan Forest', 
								image: '/images/Sharan Forest.png',
								description: 'Sharan Forest is a beautiful neighboring hilltop destination, accessible by a steep jeep track from Paras town. It is a thick forest made up of Deodar, Cedar, and Pine trees, popular for summer camping and glamping.The forest offers government run pods for accommodation and is home to the stunning Sharan Waterfall.',
								imageLeft: false
							},
							{ 
								title: 'Manshi Top', 
								image: '/images/naran.jpg',
								description: 'Manshi Top is a viewpoint at an altitude of 9,000 feet, reached by a 2-3 hour steep hike through the dense Sharan Forest. From this majestic top, you can see vast landscapes, including Makra Peak, Siri Paye, Malika-e-Parbat, and Allai Valley. It is one of the most rewarding short treks in the region.',
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
								{/* Image */}
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
								
								{/* Text Content */}
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

			{/* ====================== CULTURE OF SWAT VALLEY ====================== */}
			<section 
				data-section-id="culture"
				className={`py-2 md:py-3 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('culture') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Culture of Naran Kaghan:
						</h3>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The people of Naran and Kaghan are known for their rich cultural heritage and warm hospitality. The region has a unique identity with traditional customs, local crafts, and folk traditions. The local communities have preserved their cultural values while welcoming modern tourism.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== THE ECONOMY OF KALAM SWAT VALLEY ====================== */}
			<section 
				data-section-id="economy"
				className={`py-2 md:py-3 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('economy') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							The Economy of Naran Kaghan:
						</h3>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The economy of Naran and Kaghan is primarily based on agriculture, tourism, and hospitality. The region benefits significantly from tourism, which has become the main source of income for local communities. Fishing and agriculture also contribute to the local economy.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== EDUCATIONAL IN KALAM SWAT VALLEY ====================== */}
			<section 
				data-section-id="educational"
				className={`py-2 md:py-3 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('educational') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Educational in Naran Kaghan:
						</h3>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							Several educational institutions in Naran and Kaghan include primary and secondary schools, colleges, and universities. The region has a strong focus on education with institutions serving both local communities and surrounding areas.
						</p>
					</div>
				</div>
			</section>

			{/* ====================== THINGS TO DO IN KALAM SWAT ====================== */}
			<section 
				data-section-id="things-to-do"
				className={`py-6 md:py-8 bg-white relative overflow-x-hidden scroll-reveal-fade-up ${visibleSections.has('things-to-do') ? 'revealed' : ''}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: secondaryBlack }}>
							Things To Do In <span style={{ borderBottom: `2px solid ${primaryOrange}`, display: 'inline-block', paddingBottom: '2px' }}>Naran Kaghan</span>
						</h2>
					</div>
					
					{/* 5 Images Vertical Collage - Attached */}
					<div className="flex flex-row max-w-7xl mx-auto overflow-hidden rounded-lg">
						{[
							{
								image: '/images/boating.jpg',
								title: 'Boating at Saif-ul-Malook Lake',
								description: 'Enjoy serene boat rides on the legendary emerald lake surrounded by snow-capped peaks and fairy-tale landscapes'
							},
							{
								image: '/images/Hiking to lakes & waterfalls.jpg',
								title: 'Jeep Safari to Babusar Top',
								description: 'Experience an adventurous jeep ride to Babusar Top with breathtaking views of valleys, glaciers, and high mountain passes'
							},
							{
								image: '/images/camping.jpg',
								title: 'Camping by Kunhar River',
								description: 'Relax in riverside camps, enjoy bonfires, and spend peaceful nights listening to the flowing Kunhar River'
							},
							{
								image: '/images/Hiking to lakes & waterfalls.jpg',
								title: 'Hiking to Lakes & Meadows',
								description: 'Discover scenic hiking trails leading to Lalazar Meadows, Dudipatsar Lake, and hidden alpine gems'
							},
							{
								image: '/images/picture forest.jpg',
								title: 'Photography in Valleys & Meadows',
								description: 'Capture stunning landscapes, wildflowers, waterfalls, and panoramic mountain views in every direction'
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
										<h3 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide text-center">
											{item.title}
										</h3>
										<div className="w-12 h-0.5 bg-white mx-auto mb-3"></div>
										<p className="text-sm md:text-base opacity-90 max-w-xs text-center mx-auto">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
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
							Frequently Asked Question
						</h2>
					</div>
					
					<div className="space-y-0">
						{[
							{
								question: 'Where is Kaghan Valley located?',
								answer: 'Mansehra District of Khyber Pakhtunkhwa (KPK), Pakistan.'
							},
							{
								question: 'Can I drive to Naran Kaghan?',
								answer: 'Yes, the main road to Naran is suitable for all vehicles.'
							},
							{
								question: 'How can we travel there?',
								answer: 'Best way is by private car, rental car, or local bus/van.'
							},
							{
								question: 'What kind of accommodations is available?',
								answer: 'Hotels, guesthouses, and camping sites (luxury and economical options available).'
							},
							{
								question: 'Are there any trekking routes?',
								answer: 'Yes, popular routes include Saif-ul-Malook to Ansoo Lake and Besal to Dudipatsar Lake.'
							},
							{
								question: 'How many lakes are there?',
								answer: 'Several, including major ones like Saif-ul-Malook, Lulusar, and Ansoo Lake.'
							},
							{
								question: 'What is the highest point?',
								answer: 'Babusar Pass (approx. 13,700 ft / 4,170 m).'
							},
							{
								question: 'Which is the highest peak?',
								answer: 'Malika-e-Parbat (approx. 17,356 ft / 5,290 m).'
							},
							{
								question: 'What is the local cuisine like?',
								answer: 'Famous for fresh Trout Fish and Chapli Kababs (also standard Pakistani food).'
							},
							{
								question: 'Can I use my credit card or ATM?',
								answer: 'ATMs are limited (mostly in Naran Bazaar) cash is highly recommended.'
							},
							{
								question: 'What is the main source of income?',
								answer: 'Tourism, agriculture, and fishing.'
							},
							{
								question: 'Is it safe to travel to Kaghan Valley?',
								answer: 'Yes, it is considered very safe for tourists.'
							},
							{
								question: 'Is there any mobile network coverage?',
								answer: 'Yes, good coverage in Naran and surrounding areas, but spotty past Besal.'
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

			{/* ====================== READY FOR AN UNFORGETTABLE TOUR! ====================== */}
			<section className="py-6 md:py-8 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
				<div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-[2]">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="px-4 md:px-6">
							<p className="text-white text-3xl font-autography mb-2">Ready for an unforgettable tour!</p>
							<h2 className="text-3xl md:text-4xl font-bold" style={{ color: primaryOrange }}>Plan your trips with us</h2>
						</div>
						<div className="px-4 md:px-6">
							<Link
								href="/customize-a-tour"
								className="inline-block px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-110 shadow-lg hover:shadow-xl text-center"
								style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
							>
								Customize a Tour!
							</Link>
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

export default NaranKaghanPage;

