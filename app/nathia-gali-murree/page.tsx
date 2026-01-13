'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import Navbar from '@/app/components/Navbar';

const NathiaGaliMurreePage = () => {
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
			{/* Navbar Component */}
			<Navbar isLight={isLight} />

			{/* ====================== HERO SECTION ====================== */}
			<section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-[100px] sm:pt-[104px]" style={{ backgroundColor: secondaryBlack }}>
				{/* Background Image */}
				<div 
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ 
						backgroundImage: "url('/images/murree and nathia gali.jpg')",
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
								Murree & Nathia Gali Tour Packages
							</span>
							<br />
							<span className="block hero-text-reveal hero-text-delay-1"
								  style={{
									  color: primaryOrange,
									  display: 'inline-block',
									  fontSize: '48px'
								  }}>
								Your Perfect Mountain Getaway
							</span>
						</h1>
						<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-normal hero-text-reveal hero-text-delay-2 mb-6">
						Enjoy pine forests, fresh air, peaceful views, and hassle free travel. We handle everything transport, hotels, and sightseeing.						</p>
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hero-text-reveal hero-text-delay-3"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							View Tour Packages
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
							Best Murree & Nathia Gali Tour Packages
						</h2>
						<div className="space-y-4">
							<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Explore the scenic pine forests and peaks of Murree with Nayi Talaash’s fully customizable and all-inclusive tour packages.
							</p>
						</div>
					</div>
					
					{/* Tour Packages Data */}
					{(() => {
						const allPackages = [
							{ 
								title: '6 Days: Murree, Nathia Gali, Siri Paye, Shogran',
								image: '/images/package 1 murre.jpg'
							},
							{ 
								title: '5 Days: Nathia Gali, Ayubia, Murree Mall Road, Patriata, Bhurban',
								image: '/images/package 2 murree.jpg'
							},
							{ 
								title: '4 Days: Murree, Patriata, Nathia Gali, Ayubia',
								image: '/images/package 3 murree.jpg'
							},
							{ 
								title: '4 Days: Thandiani, Nathia Gali, Ayubia, Khanaspur',
								image: '/images/package 4 murree.jpg'
							},
							{ 
								title: '3 Days: Siri Paye, Shogran, Nathia Gali',
								image: '/images/package 5 murree.jpg'
							},
							{ 
								title: '3 Days: Nathia Gali, Ayubia, Mall Road, Patriata',
								image: '/images/package 6 murree.jpg'
							},
							{ 
								title: '2 Days: Nathia Gali & Ayubia',
								image: '/images/package 7murree.jpg'
							},
							{ 
								title: '2 Days: Mukshpuri Top & Ayubia',
								image: '/images/package 8 murree.jpg'
							},
							{ 
								title: '6 Days: Neelum Valley + Murree & Patriata',
								image: '/images/package 9 murree.jpg'
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
							Nathia Gali And Murree Group Tour Packages
						</h2>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							Join the Adventure! Nayi Talaash offers amazing tours to the beautiful Nathia Gali and Murree all year long. It's easy to join you can come by yourself, with a friend or with your whole group, whenever your schedule allows!
						</p>
					</div>

					{/* Two Tour Package Images */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/package 10 murree.jpg"
									alt="3 Days: Murree, Nathia Gali & Ayubia Group Tour"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal text-center" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									3 Days: Murree, Nathia Gali & Ayubia Group Tour
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
							<div className="relative w-full aspect-[16/9] overflow-hidden">
								<Image 
									src="/images/Package 11 murree.jpg"
									alt="4 Days: Galiyat Winter Snow Family Trip"
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-4">
								<p className="font-medium leading-normal text-center" style={{ color: secondaryBlack, fontSize: '16px', lineHeight: '1.4' }}>
									4 Days: Galiyat Winter Snow Family Trip
								</p>
							</div>
						</div>
					</div>

					{/* Who Are These Tours Perfect For Section */}
					<div className="max-w-4xl mx-auto mb-8">
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Who Are These Tours Perfect For?
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Couples & Honeymooners
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Romantic stays, quiet viewpoints, nature walks, and luxurious resort options.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Families
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Safe, comfortable tours with kid-friendly spots, activities, and guided sightseeing.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Students & Friends Groups
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Trekking, chairlifts, bonfire nights, games, and affordable group packages.
								</p>
							</div>
							<div>
								<h4 className="text-lg font-bold mb-2 text-left" style={{ color: secondaryBlack, fontSize: '18px' }}>
									Corporate & Business Teams
								</h4>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Team outings, retreats, leadership trips, and stress-free travel planning.
								</p>
							</div>
						</div>
					</div>

					{/* Departure Cities Section */}
					<div className="max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: secondaryBlack, fontSize: '24px' }}>
							Departure Cities
						</h3>
						<p className="text-left mb-4" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
							You can start your Murree tour from any major city:
						</p>
						<ul className="space-y-3 mb-4">
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Murree tour from Lahore
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Murree tour from Karachi
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Murree tour from Islamabad
								</p>
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryOrange }}></div>
								<p className="leading-normal text-left" style={{ color: `${secondaryBlack}90`, fontSize: '16px', lineHeight: '1.4' }}>
									Custom plans available from Faisalabad, Multan, Sialkot & others
								</p>
							</li>
						</ul>
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
							Top Attractions in Murree & Galiyat
						</h2>
					</div>
					
					{/* Destinations with Alternating Layout */}
					<div className="space-y-8">
						{[
							{ 
								title: 'Murree', 
								image: '/images/murree.jpg',
								description: 'Murree was first built in the 1850s as a retreat for the British Military troops in the Pir Panjal Mountain Range. It is blessed with dense forests, cool fresh air, beautiful mountains and a pure environment. Today, Murree is Pakistan\'s most famous and easily accessible tourist spot, popular year round for its cool climate and activities.',
								imageLeft: true
							},
							{ 
								title: 'Murree Mall Road and GPO Chowk', 
								image: '/images/Murree Mall Road and GPO Chowk.jpg',
								description: 'The Mall Road (also known as "Jinnah Road") is the lively main street built by the British founders of the town. It is always buzzing with tourists enjoying the shops, local restaurants, and engaging activities like horse riding and safari train rides. The GPO Chowk (General Post Office) is the busy heart of the Mall Road, always full of hustle and bustle.',
								imageLeft: false
							},
							{ 
								title: 'Pindi Point', 
								image: '/images/Pindi Point pakistan.jpg',
								description: 'This location is a popular spot to get a high, aerial view of the twin cities of Islamabad and Rawalpindi. It\'s just a short 15 minute walk from the Mall Road, making it easy to reach. Pindi Point is most famous for its Chairlift ride, which offers a delightful trip over the pine forest to Bansara Gali.',
								imageLeft: true
							},
							{ 
								title: 'Kashmir Point', 
								image: '/images/kashmir point.jpg',
								description: 'Kashmir Point is a peaceful 15-minute walk from the Mall Road, offering a different kind of view. From here, you can see the high, panoramic mountains of Azad Kashmir and Indian occupied Kashmir, including Srinagar. Tourists love the Murree Safari Train here, which gives a guided scenic ride to the Government House at Jhika Gali.',
								imageLeft: false
							},
							{ 
								title: 'Patriata and Patriata Chairlift (New Murree)', 
								image: '/images/Patriata and Patriata Chairlift (New Murree).jpg',
								description: 'Also called "New Murree," Patriata is about 15 km away, known for its thick surrounding forests. Its main attraction is the famous Patriata Chairlift and Cable Car ride, which gives thrilling views high over the dense forest. This area has also developed with many modern hotels, resorts and restaurants for visitors.',
								imageLeft: true
							},
							{ 
								title: 'Ayubia and Ayubia National Park', 
								image: '/images/Ayubia and Ayubia National Park.jpg',
								description: 'Ayubia is a small tourist town located inside the vast Ayubia National Park, covering over 8,184 acres. The park was created in 1984 to protect the unique wildlife, lush green forests and medicinal plants of the area. Ayubia is the starting point for two famous mountain hikes the Mushkpuri and Miranjani treks.',
								imageLeft: false
							},
							{ 
								title: 'Khanaspur', 
								image: '/images/Khanaspur.jpg',
								description: 'This is a nearby tourist spot, about a 10-minute drive from Ayubia, offering a quieter and calmer atmosphere. Famous attractions include an old Nawab Ashiq Hussain Qureshi Cricket Ground and the historic Virgin Mary Catholic Church. It also offers budget-friendly accommodation at the old Pakistan Youth Hostel.',
								imageLeft: true
							},
							{ 
								title: 'Nathia Gali', 
								image: '/images/Nathia Gali.jpg',
								description: 'Nathia Gali is the main highlight of the Galiyat Region, located about 35 km from Murree. It\'s the starting point for two major hiking tracks the Miranjani and Mukshpuri Tops.You must visit the 100 year old St. Matthew\'s Church and try the world famous original Patakha Chicken at Taj Mahal Hotel.',
								imageLeft: false
							},
							{ 
								title: 'Mukshpuri Top', 
								image: '/images/Mukshpuri Top.jpg',
								description: 'This is the second-highest hilltop in the Galiyat region, standing at 9,200 feet, located within Ayubia National Park. There are two tracks for hikers: one starting from Dunga Gali and the other from Nathia Gali. The hike is relatively easy (1-2 hours) and on a clear day, you can even catch a glimpse of the majestic Nanga Parbat.',
								imageLeft: true
							},
							{ 
								title: 'Miranjani Top', 
								image: '/images/Miranjani Top.png',
								description: 'At 9,816 feet, Miranjani is the highest hilltop in the entire Galiyat region, perfect for serious adventure lovers. The main track starts just a short drive from Nathia Gali and takes about 1-3 hours to complete. Completing this 4.96 km trail rewards hikers with the best possible mountain views in the area.',
								imageLeft: false
							},
							{ 
								title: 'Pipeline Track Ayubia', 
								image: '/images/Pipeline Track Ayubia.jpg',
								description: 'This is an easy, scenic track that runs from Dunga Gali to Ayubia Bazaar, perfect for beginners and families. It was built during the British era to carry water supplies via a pipeline, giving the track its name. It\'s a wonderful way to walk through the peaceful forest with minimal effort.',
								imageLeft: true
							},
							{ 
								title: 'Ayubia Moto Tunnel', 
								image: '/images/Ayubia Moto Tunnel.jpg',
								description: 'This unique British era stone tunnel was built in 1891 for water supply, but was hidden for decades. It was recently discovered, restored, and reopened in 2021, instantly attracting huge numbers of tourists.The tunnel is 250 feet long, giving a fun, unique historical experience connecting Ayubia and Khaira Gali.',
								imageLeft: false
							},
							{ 
								title: 'Bhurban and PC Bhurban Hotel', 
								image: '/images/Bhurban and PC Bhurban Hotel.png',
								description: 'Bhurban is a small hill station known for its peaceful, lush green forest surroundings. Its biggest attraction is the PC Bhurban Hotel, a 5 star resort famous as a luxury holiday destination in Pakistan. This area is a perfect retreat for those seeking calm, upscale stays away from the Murree bustle.',
								imageLeft: true
							},
							{ 
								title: 'Changla Gali', 
								image: '/images/Changla Gali.jpg',
								description: 'Changla Gali is a beautiful, quieter hill station located in the Galiyat region. It offers stunning views and a serene environment, making it a peaceful retreat away from the crowds. It is a popular spot for visitors looking for calm stays, particularly when the area is covered in snow.',
								imageLeft: false
							},
							{ 
								title: 'Kuza Gali', 
								image: '/images/Kuza Gali.jpg',
								description: 'Kuza Gali is another small, charming tourist spot along the scenic route of the Galiyat. It features a pleasant, relaxed atmosphere and its own unique local flavor and views. Visitors enjoy this location for its tranquility and easy access to the surrounding forest areas.',
								imageLeft: true
							},
							{ 
								title: 'Ghora Gali', 
								image: '/images/Ghora Gali.jpg',
								description: 'Ghora Gali is historically significant and is a quieter town in the Murree region. It is well known for being home to some older structures and providing a peaceful environment for tourists. Many visitors choose Ghora Gali for a relaxing stay with quick access to the main attractions of Murree.',
								imageLeft: false
							},
							{ 
								title: 'Jhika Gali', 
								image: '/images/Jhika Gali.png',
								description: 'Jhika Gali is a small, bustling stop often included in Murree and Galiyat tours. It is easily accessible and acts as a central point near tourist attractions like the Government House. This area offers a variety of local shops and small eateries for travelers to stop and enjoy.',
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
							Culture of Nathia Gali And Murree:
						</h3>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The region of Nathia Gali and Murree has a rich cultural heritage with influences from both British colonial era and local traditions. The area is known for its warm hospitality, traditional crafts, and unique cuisine. The local communities have preserved their cultural traditions while embracing modern tourism.
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
							The Economy of Nathia Gali And Murree:
						</h3>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							The economy of Nathia Gali and Murree is primarily based on tourism, hospitality, and small-scale businesses. The region benefits from year-round tourism due to its pleasant climate and proximity to major cities.
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
							Educational in Nathia Gali And Murree:
						</h3>
						<p className="leading-normal text-center" style={{ color: `${secondaryBlack}90`, fontSize: '14px', lineHeight: '1.4' }}>
							Several educational institutions in Nathia Gali and Murree include primary and secondary schools, colleges, and universities. The region has a strong focus on education with institutions serving both local communities and tourists.
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
							Things To Do In <span style={{ borderBottom: `2px solid ${primaryOrange}`, display: 'inline-block', paddingBottom: '2px' }}>Murree & Galiyat</span>
						</h2>
					</div>
					
					{/* 6 Images Horizontal Collage - Attached */}
					<div className="flex flex-row max-w-7xl mx-auto overflow-hidden rounded-lg">
						{[
							{
								image: '/images/Chairlift & cable car rides.jpg',
								title: 'Chairlift & cable car rides',
								description: 'Experience thrilling chairlift and cable car rides offering panoramic views of the beautiful Galiyat region'
							},
							{
								image: '/images/Hiking to lakes & waterfalls.jpg',
								title: 'Trekking & hiking',
								description: 'Explore scenic trails and hiking tracks leading to stunning mountain peaks and viewpoints'
							},
							{
								image: '/images/Shopping at local markets.jpg',
								title: 'Shopping at local markets',
								description: 'Browse through vibrant local markets and discover unique handicrafts and souvenirs'
							},
							{
								image: '/images/Bonfire & BBQ nights.jpg',
								title: 'Bonfire & BBQ nights',
								description: 'Enjoy cozy bonfire evenings with delicious BBQ under the starry mountain sky'
							},
							{
								image: '/images/Snowfall viewing.jpg',
								title: 'Snowfall viewing',
								description: 'Witness the magical transformation as snow blankets the hills during winter months'
							},
							{
								image: '/images/Horse riding.jpg',
								title: 'Horse riding',
								description: 'Take a peaceful horse ride through scenic trails and enjoy the natural beauty'
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
								question: 'How far is Murree from Islamabad?',
								answer: 'Around 60 km 1 to 1.5 hours by road.'
							},
							{
								question: 'What is Galiyat?',
								answer: 'A chain of hill stations between Abbottabad and Murree, including Ayubia and Nathia Gali.'
							},
							{
								question: 'Is Murree suitable for families?',
								answer: 'Yes, it is one of Pakistan\'s safest and most popular destinations.'
							},
							{
								question: 'Is snowfall guaranteed?',
								answer: 'Snowfall usually occurs from December to February.'
							},
							{
								question: 'How is the weather?',
								answer: 'Cool in summer, cold in winter.'
							},
							{
								question: 'Do you offer custom tours?',
								answer: 'Yes, all tours can be fully customized based on your preferences.'
							},
							{
								question: 'Are credit cards accepted?',
								answer: 'Hotels and restaurants usually accept cards, but small shops prefer cash.'
							},
							{
								question: 'Do you provide transport?',
								answer: 'Yes, we offer private cars, coasters and hiace vans.'
							},
							{
								question: 'What should I pack?',
								answer: 'Comfortable clothes, warm layers (even in summer), joggers, and essentials.'
							},
							{
								question: 'Are there restaurants and shops in Nathia Gali and Murree?',
								answer: 'Yes, there are many eateries, cafes, and local markets in both Nathia Gali and Murree.'
							},
							{
								question: 'Do you have Nathia Gali and Murree tours from Karachi?',
								answer: 'Yes, we offer complete Karachi-to-Nathia Gali and Murree packages with transport or flight options.'
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

export default NathiaGaliMurreePage;

