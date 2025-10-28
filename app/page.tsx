'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Menu, X, Search, Home, Map, Users, DollarSign, Globe, Mountain, Sun, Sailboat, CalendarDays, Newspaper, ArrowRight, ShieldCheck, Headset, Star, Clock, Tag, Briefcase, Smile, Moon, ChevronLeft, ChevronRight, Instagram, Facebook, Mail, Phone, MessageCircle, Heart, Award, Building2, Landmark, Youtube, Music } from 'lucide-react';

const Page = () => {
	// --- STATE AND HOOKS: MUST BE INSIDE THE COMPONENT FUNCTION ---
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showHeroContent, setShowHeroContent] = useState(false); 
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
	const [splashVisible, setSplashVisible] = useState(true);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [isScrollingNow, setIsScrollingNow] = useState(false);
	const [activeTourIndex, setActiveTourIndex] = useState(0); 
	// NEW STATE: To track which Exclusive Package is currently displayed/zoomed
	const [activePackageIndex, setActivePackageIndex] = useState(0); 

	// WhatsApp click handler
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/923311438251', '_blank');
	}; 

	// Effect to trigger hero animation on component mount
	useEffect(() => {
		// Small delay to ensure all CSS classes are recognized before transition starts
		const timer = setTimeout(() => setShowHeroContent(true), 50); 
		const splashTimer = setTimeout(() => setSplashVisible(false), 1400);
		return () => {
			clearTimeout(timer);
			clearTimeout(splashTimer);
		};
	}, []);

	// no-op removed scroll ruler
	// --- Theme Colors and Constants ---
	const primaryOrange = '#f99621'; // Main accent color
	const secondaryBlack = '#211f20'; // Main background/text color
	
	// Image IDs (Using high-quality Pakistan tour images from Unsplash)
	const newUploadedImageId = 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'; // Hunza Valley
	const logoImage = '/images/logo landscape(white).png';
	const heroImage = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'; // Pakistan mountains 
	const heroBgRef = useRef<HTMLDivElement | null>(null);
	// Enhanced Cultural background with Pakistan heritage elements
	const CulturalBackground = () => {
		const glyphs = ['ک', 'ع', 'گ', 'ہ', 'ن', 'ی', 'ت', 'ل', 'ا', 'ش', 'س', 'ر', 'پ', 'و', 'چ'];
		const heritageElements = [
			{ icon: Building2, name: 'Minar-e-Pakistan', pos: { top: '15%', left: '20%' }, color: '#f99621' },
			{ icon: Landmark, name: 'Shahi Qila', pos: { top: '25%', left: '80%' }, color: '#f99621' },
			{ icon: Award, name: 'Quaid-e-Azam Tomb', pos: { top: '60%', left: '15%' }, color: '#f99621' },
			{ icon: Map, name: 'Pakistan Map', pos: { top: '70%', left: '75%' }, color: '#f99621' },
			{ icon: Building2, name: 'Faisal Mosque', pos: { top: '8%', left: '50%' }, color: '#f99621' },
			{ icon: Landmark, name: 'Badshahi Mosque', pos: { top: '45%', left: '30%' }, color: '#f99621' },
			{ icon: Award, name: 'Mohenjo-daro', pos: { top: '80%', left: '60%' }, color: '#f99621' },
			{ icon: Map, name: 'K2 Base Camp', pos: { top: '5%', left: '70%' }, color: '#f99621' },
		];
		
		return (
			<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
				{/* Floating Urdu glyphs */}
				{Array.from({ length: 18 }).map((_, i) => {
					const top = (i * 137) % 100;
					const left = (i * 73) % 100;
					const size = 40 + ((i * 23) % 60);
					const delay = (i * 0.6) % 6;
					const opacity = 0.03 + ((i % 5) * 0.02);
					const char = glyphs[i % glyphs.length];
					return (
						<span
							key={i}
							className={`absolute select-none will-change-transform`}
							style={{
								top: `${top}%`,
								left: `${left}%`,
								fontSize: `${size}px`,
								opacity,
								color: isLight ? '#0f172a' : '#ffffff',
								filter: isLight ? 'none' : 'brightness(1) opacity(0.5)',
								animation: `floatGlyph 8s ease-in-out ${delay}s infinite, swayGlyph 14s ease-in-out ${(delay + 1) % 7}s infinite`,
							}}
						>
							{char}
						</span>
					);
				})}
				
				{/* Pakistan Heritage Icons */}
				{heritageElements.map((element, i) => {
					const Icon = element.icon;
					return (
						<div
							key={i}
							className="absolute select-none will-change-transform group cursor-pointer"
							style={{
								top: element.pos.top,
								left: element.pos.left,
								opacity: 0.08,
								color: isLight ? '#0f172a' : '#ffffff',
								animation: `floatGlyph 12s ease-in-out ${i * 2}s infinite`,
							}}
						>
							<Icon 
								size={60 + (i * 10)} 
								className="group-hover:text-[#f99621] transition-colors duration-500 group-hover:scale-110 transition-transform duration-300"
							/>
							{/* Glowing effect on hover */}
							<div 
								className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
								style={{
									background: `radial-gradient(circle, ${element.color} 0%, transparent 70%)`,
									transform: 'scale(2)',
								}}
							/>
							{/* Tooltip */}
							<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
								{element.name}
							</div>
						</div>
					);
				})}
				
				{/* soft gradient wash to unify look */}
				<div className="absolute inset-0" style={{ background: isLight ? 'radial-gradient(1000px 600px at 10% -10%, #f3f4f6 20%, transparent 60%)' : 'radial-gradient(1000px 600px at 90% 110%, rgba(249,150,33,0.08) 10%, transparent 60%)' }} />
			</div>
		);
	};

	// Simple animated route background for dark sections
	const MapRouteBackground = () => {
		const routeColor = isLight ? '#0f172a' : `${primaryOrange}AA`;
		const dotColor = isLight ? '#0f172a' : '#ffffff';
		return (
			<svg className="pointer-events-none absolute inset-0 z-0" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
				<g fill="none" stroke={routeColor} strokeWidth="2" className="route-dash">
					<path d="M50,800 C200,650 400,700 550,550 C700,400 900,450 1100,300" />
					<path d="M100,200 C250,350 450,300 650,480 C820,630 1050,620 1280,760" />
					<path d="M20,500 C240,420 380,560 740,520 C980,490 1120,420 1420,480" />
				</g>
				<g>
					<circle r="5" fill={dotColor} className="route-dot" >
						<animateMotion dur="8s" repeatCount="indefinite" path="M50,800 C200,650 400,700 550,550 C700,400 900,450 1100,300" />
					</circle>
					<circle r="5" fill={dotColor} className="route-dot" >
						<animateMotion dur="10s" repeatCount="indefinite" path="M100,200 C250,350 450,300 650,480 C820,630 1050,620 1280,760" />
					</circle>
					<circle r="5" fill={dotColor} className="route-dot" >
						<animateMotion dur="9s" repeatCount="indefinite" path="M20,500 C240,420 380,560 740,520 C980,490 1120,420 1420,480" />
					</circle>
				</g>
			</svg>
		);
	};

	// Simple light background for white sections
	const LightMapBackground = () => {
		return (
			<svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
				<g fill="#000" opacity="0.02">
					{/* Simple abstract shape */}
					<path d="M190,120 C220,140 230,200 270,210 C300,220 330,200 360,210 C410,230 420,290 460,310 C500,330 560,320 590,350 C610,370 600,410 580,430 C560,450 520,450 500,470 C480,490 490,520 470,540 C450,560 420,570 390,560 C350,550 350,500 320,490 C290,480 250,490 220,470 C200,460 200,440 190,420 C170,380 120,360 120,320 C120,280 170,250 170,220 C170,170 160,140 190,120 Z"/>
				</g>
			</svg>
		);
	};

	// Hero Parallax: update background position on scroll
	useEffect(() => {
		const element = heroBgRef.current;
		if (!element) return;
		let ticking = false;
		const handleScroll = () => {
			if (!element) return;
			const scrollY = window.scrollY || 0;
			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (element) {
						element.style.backgroundPosition = `center ${Math.round(scrollY * -0.2)}px`;
					}
					ticking = false;
				});
				ticking = true;
			}
			setIsScrollingNow(true);
			window.clearTimeout((handleScroll as any)._t);
			(handleScroll as any)._t = window.setTimeout(() => setIsScrollingNow(false), 150);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Custom cursor tracking
	useEffect(() => {
		const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
		window.addEventListener('mousemove', onMove, { passive: true });
		return () => window.removeEventListener('mousemove', onMove);
	}, []);
	
	// --- UPCOMING TOUR DATA (Section 5) ---
	const upcomingTours = [
		{
			title: "Autumn in Hunza",
			listTitle: "Autumn in Hunza",
			description: "Experience the majestic gold and crimson hues of the Karakoram mountains and traditional Hunza culture in this breathtaking seasonal journey.",
			image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Hunza Valley
			duration: "7 Days / 6 Nights",
			price: "$850 per person"
		},
		{
			title: "Winter Wonderland – Malam Jabba",
			listTitle: "Winter Wonderland",
			description: "A thrilling ski and snow adventure in the beautiful Swat Valley, perfect for winter sports enthusiasts and snow lovers.",
			image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Pakistan Mountains
			duration: "5 Days / 4 Nights",
			price: "$600 per person"
		},
		{
			title: "Coastal Adventure – Gwadar",
			listTitle: "Coastal Adventure",
			description: "Discover the pristine beaches and unique geological formations of Balochistan's breathtaking coastline, a true hidden gem.",
			image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Coastal Pakistan
			duration: "6 Days / 5 Nights",
			price: "$750 per person"
		},
		{
			title: "Historical Trails – Lahore & Multan",
			listTitle: "Historical Trails",
			description: "Journey through time visiting centuries-old mosques, tombs, and the vibrant Walled City culture of Punjab's historic centers.",
			image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Lahore Fort
			duration: "4 Days / 3 Nights",
			price: "$550 per person"
		},
	];

	// Removed scroll reveal animations to prevent blinking

	// --- NEW EXCLUSIVE PACKAGE DATA (Section 6) ---
	const exclusivePackages = [
		{
			title: "Weekend Getaways",
			icon: Sun,
			tagline: "Quick escapes to recharge and reconnect.",
			description: "Short, perfectly planned 2-3 day trips to nearby hill stations or historical sites. Ideal for a quick reset from the city hustle.",
			image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Pakistan Hill Station
			details: ["2-3 Day Duration", "All-Inclusive Transport", "Boutique Stays"]
		},
		{
			title: "Adventure Trips",
			icon: Mountain,
			tagline: "Trekking, hiking, camping, and rafting adventures.",
			description: "Challenging expeditions to K2 base camp, Nanga Parbat regions, or thrilling river rafting on the Indus. For the true adrenaline seeker.",
			image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // K2 Base Camp
			details: ["Expert Guides & Safety Gear", "High-Altitude Camping", "Rafting & Canyoning"]
		},
		{
			title: "Cultural & Heritage Tours",
			icon: Globe,
			tagline: "Explore Pakistan's traditions, history, and cuisine.",
			description: "Deep dive into the ancient civilizations of Mohenjo-Daro and Harappa, Mughal architecture in Lahore, and the Sufi shrines of Multan and interior Sindh.",
			image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Lahore Fort
			details: ["Historical Site Access", "Local Cuisine Tasting", "Expert History Lectures"]
		},
		{
			title: "Seasonal Tours",
			icon: CalendarDays,
			tagline: "Cherry blossom in Hunza, snowfall in Malam Jabba, and spring in Swat.",
			description: "Tours crafted around Pakistan's stunning seasonal events. Witness spring bloom, autumn colors, or heavy winter snowfalls in the Northern Areas.",
			image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Hunza Valley
			details: ["Optimal Timing Guaranteed", "Special Seasonal Hotels", "Photography Workshops"]
		},
		{
			title: "Corporate & Student Tours",
			icon: Users,
			tagline: "Customized tours perfect for team bonding or university trips.",
			description: "Tailor-made itineraries focusing on educational value, team-building activities, and comfortable logistics for large groups and organizations.",
			image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Group Tour
			details: ["Custom Itinerary Planning", "Bulk Discount Pricing", "Dedicated Tour Manager"]
		},
	];
	
	// Navigation Links
	const navLinks = [
		{ name: 'Home', icon: Home, link: '#' },
		{ name: 'Destinations', icon: Map, link: '#' },
		{ name: 'Packages', icon: DollarSign, link: '#' },
		{ name: 'About Us', icon: Users, link: '#' },
		{ name: 'Contact', icon: Globe, link: '#' },
	];

	// --- FEATURE DATA (Section 7) ---
	const features = [
		{ 
			icon: Star, 
			title: "Paanch-Sitaara Tajurba", 
			description: "Hum har safar mein shandaar suvidhaon aur mehmaan-nawazi ka vaada karte hain." 
		},
		{ 
			icon: ShieldCheck, 
			title: "Mukammal Hifazat", 
			description: "Aapki suraksha humari sabse pehli tarjeeh hai. Safar be-fikar karein." 
		},
		{ 
			icon: Headset, 
			title: "24/7 Support", 
			description: "Humari madadgaar team hamesha aapki seva mein hazir hai, din ho ya raat." 
		},
		{ 
			icon: Map, 
			title: "Khas Rastey", 
			description: "Humare paas aisi jagahon ke anokhe aur chhupay rastay hain jo aam taur par nahi milte." 
		},
	];


	// Stay Idea Card Data (Now Section 8)
	const stayIdeas = [
		{ 
			title: "Nature Trails", 
			subtitle: "Hiking and Exploration", 
			icon: Mountain, 
			image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Hunza Hiking
			description: "Discover the hidden beauty of our lush forests and winding trails, perfect for the adventurous soul.",
			link: "#" 
		},
		{ 
			title: "Summer Getaways", 
			subtitle: "Relax by the Lakeside", 
			icon: Sun, 
			image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Pakistan Lakes
			description: "Enjoy peaceful afternoons by the crystal-clear waters, offering relaxation and family fun.",
			link: "#" 
		},
		{ 
			title: "Water Sports", 
			subtitle: "Kayaking and Canoeing", 
			icon: Sailboat, 
			image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Coastal Pakistan
			description: "Engage in thrilling water activities on the main lake. Equipment rentals available.",
			link: "#" 
		},
	];

	// News/Event Data (Now Section 9)
	const newsItems = [
		{
			category: "Event",
			title: "Hunza Autumn Festival 2024",
			date: "October 20, 2024",
			image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Hunza Festival
			link: "#"
		},
		{
			category: "News",
			title: "New Road Opens to Fairy Meadows",
			date: "September 28, 2024",
			image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Fairy Meadows
			link: "#"
		},
		{
			category: "Deal",
			title: "Winter Ski Package Discount!",
			date: "Valid till Dec 15",
			image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Winter Ski
			link: "#"
		},
	];

	// Individual Stay Idea Card Component (Now Section 8)
	const StayIdeaCard = ({ title, subtitle, icon: Icon, image, description, link }: { title: string, subtitle: string, icon: React.ElementType, image: string, description: string, link: string }) => (
		<div 
			className="flex flex-col rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.03] transform"
			style={{ backgroundColor: secondaryBlack }}
		>
			<div className="relative h-48 overflow-hidden">
				<img 
					src={image} 
					alt={title} 
					className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-80" 
					// Placeholder/Fallback for images
					onError={(e) => e.currentTarget.src = 'https://placehold.co/400x300/9d8189/211f20?text=Image+Missing'}
				/>
				{/* Icon Overlay */}
				<div className="absolute inset-0 flex items-center justify-center bg-black/30">
					<Icon className="w-12 h-12 text-white p-2 rounded-full shadow-lg" style={{ backgroundColor: primaryOrange }} />
				</div>
			</div>
			<div className="p-6 text-center flex flex-col flex-grow">
				<h3 className="text-xl font-bold uppercase mb-1" style={{ color: primaryOrange }}>
					{title}
				</h3>
				<p className="text-sm font-light text-gray-300 mb-4">{subtitle}</p>
				<p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
				<a 
					href={link} 
					className="mt-auto px-6 py-2 text-sm font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-white"
					style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
				>
					View Offer
				</a>
			</div>
		</div>
	);

	// Individual News Card Component (Now Section 9)
	const NewsCard = ({ title, category, date, image, link }: { title: string, category: string, date: string, image: string, link: string }) => (
		<a 
			href={link}
			className="group block rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02] transform hover:shadow-2xl"
			style={{ backgroundColor: 'white', borderColor: primaryOrange }}
		>
			<div className="relative h-52 overflow-hidden">
				<img 
					src={image} 
					alt={title} 
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
					// Placeholder/Fallback for images
					onError={(e) => e.currentTarget.src = 'https://placehold.co/400x250/9d8189/211f20?text=Image+Missing'}
				/>
				<span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full text-white`} style={{ backgroundColor: secondaryBlack }}>
					{category}
				</span>
			</div>
			<div className="p-5">
				<div className="flex items-center text-xs mb-3 font-medium text-gray-500">
					<CalendarDays className="w-4 h-4 mr-2" style={{ color: primaryOrange }} />
					{date}
				</div>
				<h3 className="text-xl font-bold leading-snug transition-colors duration-300 group-hover:underline" style={{ color: secondaryBlack }}>
					{title}
				</h3>
			</div>
		</a>
	);

	// Individual Feature Card Component (New Section 7)
	const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
		<div 
			className="text-center p-6 md:p-8 rounded-xl border-4 transition-all duration-300 hover:border-transparent hover:shadow-[0_0_40px_rgba(249,150,33,0.5)] hover:scale-[1.05]" 
			style={{ backgroundColor: 'white', borderColor: primaryOrange }}
		>
			<Icon className="w-12 h-12 mx-auto mb-4 p-3 rounded-full shadow-lg" style={{ backgroundColor: secondaryBlack, color: primaryOrange }} />
			<h4 className="text-xl font-bold mb-2" style={{ color: secondaryBlack }}>{title}</h4>
			<p className="text-gray-600 font-light">{description}</p>
		</div>
	);
	
	// Individual Exclusive Package Card Component (NEW Section 6)
	const ExclusivePackageCard = ({ index, pkg, activePackageIndex, setActivePackageIndex }: { 
		index: number, 
		pkg: (typeof exclusivePackages)[0], 
		activePackageIndex: number, 
		setActivePackageIndex: (index: number) => void 
	}) => {
		const isActive = index === activePackageIndex;
		const Icon = pkg.icon;

		return (
			<div 
				onClick={() => setActivePackageIndex(index)}
				className={`relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-in-out transform ${
					isActive ? 'scale-[1.05] ring-8 ring-offset-4 ring-offset-white' : 'scale-90 hover:scale-[0.95] opacity-70 hover:opacity-100'
				}`}
				style={{ 
					minWidth: '320px', 
					maxWidth: '320px', 
					boxShadow: isActive ? `0 0 30px 5px ${primaryOrange}80` : '0 10px 15px rgba(0,0,0,0.5)'
				}}
			>
				{/* Background Image */}
				<img
					src={pkg.image}
					alt={pkg.title}
					className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isActive ? 'brightness-75' : 'brightness-50'}`}
					onError={(e) => e.currentTarget.src = 'https://placehold.co/320x384/211f20/f99621?text=Package+Image'}
				/>
				
				{/* Content */}
				<div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500">
					
					{/* Icon and Tagline (Always Visible) */}
					<div className="flex items-center mb-3">
						<Icon className="w-8 h-8 p-1 rounded-full mr-3 shadow-lg" style={{ backgroundColor: primaryOrange, color: secondaryBlack }} />
						<p className="text-sm font-semibold uppercase tracking-wider">{pkg.tagline}</p>
					</div>
					
					{/* Title (Always Visible) */}
					<h3 className="text-3xl font-extrabold mb-4 leading-tight">
						{pkg.title}
					</h3>
					
					{/* Extended Details (Visible only when active/zoomed) */}
					<div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
						<p className="text-sm mb-4 font-light border-l-4 pl-4" style={{ borderColor: primaryOrange }}>
							{pkg.description}
						</p>
						<ul className="space-y-1 text-sm font-medium">
							{pkg.details.map((detail, i) => (
								<li key={i} className="flex items-center">
									<ShieldCheck className="w-4 h-4 mr-2" style={{ color: primaryOrange }} />
									{detail}
								</li>
							))}
						</ul>
						<a 
							href="#" 
							className="mt-6 inline-block px-6 py-2 text-sm font-bold uppercase rounded-full transition-colors duration-300 hover:bg-white"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							View Details
						</a>
					</div>
				</div>
			</div >
		);
	};


	return (
		<div className="relative min-h-screen font-sans" style={{ cursor: 'none' }}>
			
		{/* --- 1. Two-Tier Navbar --- */}
		{/* Top Bar - Dark Background with Contact & Social */}
		<div className="fixed top-0 left-0 right-0 z-[110] bg-[#211f20] border-b border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-2 sm:py-3">
					{/* Left: Contact Info */}
					<div className="flex items-center gap-4 sm:gap-6 text-white text-xs sm:text-sm">
						<a href="tel:+92331438251" className="flex items-center gap-2 hover:text-[#f99621] transition-colors">
							<Phone className="w-4 h-4" style={{ color: '#f99621' }} />
							<span className="hidden sm:inline">+92 331 438251</span>
							<span className="sm:hidden">+92 331...</span>
						</a>
						<a href="mailto:info@nayetalash.com" className="flex items-center gap-2 hover:text-[#f99621] transition-colors">
							<Mail className="w-4 h-4" style={{ color: '#f99621' }} />
							<span className="hidden md:inline">info@nayetalash.com</span>
							<span className="md:hidden text-xs">info@...</span>
						</a>
					</div>

					{/* Right: Social Media Icons & Customize Button */}
					<div className="flex items-center gap-3">
						{/* Social Media Icons - Styled with Hover Effects */}
						<div className="flex items-center gap-2">
							{/* Facebook */}
							<a 
								href="https://www.facebook.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f99621]/50"
								aria-label="Facebook"
							>
								<Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* Instagram */}
							<a 
								href="https://www.instagram.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f99621]/50"
								aria-label="Instagram"
							>
								<Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* YouTube */}
							<a 
								href="https://www.youtube.com/@nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f99621]/50"
								aria-label="YouTube"
							>
								<Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* TikTok */}
							<a 
								href="https://www.tiktok.com/@nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f99621]/50"
								aria-label="TikTok"
							>
								<svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#211f20] group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
									<path d="M19.321 5.281a7.286 7.286 0 0 1-.744 1.695 7.246 7.246 0 0 1-6.281 3.819v5.357A7.452 7.452 0 0 1 6 7.116V5.5a1 1 0 0 1 2 0v1.616A5.45 5.45 0 0 0 12.5 18.5a5.177 5.177 0 0 0 5.321-5.123v-7.01c0-.314.15-.587.386-.765a1.24 1.24 0 0 1 .814-.243 7.314 7.314 0 0 0 5.869-2.864 1 1 0 0 1 1.415-1.414A9.318 9.318 0 0 1 19.32 5.28z"/>
								</svg>
							</a>
						</div>
						
						{/* Customize A Tour Button */}
						<button
							onClick={handleWhatsAppClick}
							className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-[#211f20] rounded-lg hover:bg-[#e8851a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f99621]/50"
							style={{ backgroundColor: '#e8851a' }}
						>
							<span className="hidden sm:inline">CUSTOMIZE A TOUR</span>
							<span className="sm:hidden">CUSTOMIZE</span>
						</button>
					</div>
				</div>
			</div>
		</div>

		{/* Main Navigation Bar - Solid White Background */}
		<header className="fixed top-[48px] sm:top-[50px] left-0 right-0 z-[100] bg-white border-b border-gray-200 shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4 sm:py-5">
					{/* Logo */}
					<div className="flex items-center">
						<Image 
							src={logoImage}
							alt="Nayi Talaash Logo"
							width={180}
							height={60}
							className="h-12 sm:h-14 w-auto object-contain"
						/>
					</div>

					{/* Desktop Navigation Links */}
					<nav className="hidden lg:flex items-center gap-1">
						<a href="#home" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">HOME</a>
						<a href="#tours" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors relative group">
							<span className="flex items-center gap-1">
								PAKISTAN TOURS
								<ChevronRight className="w-4 h-4 rotate-90" />
							</span>
						</a>
						<a href="#city-tours" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors relative group">
							<span className="flex items-center gap-1">
								CITY TOURS
								<ChevronRight className="w-4 h-4 rotate-90" />
							</span>
						</a>
						<a href="#group-tours" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">GROUP TOUR</a>
						
						{/* DESTINATION with Multi-Level Dropdown */}
						<div className="relative group cursor-pointer">
							<a href="#destination" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">
								DESTINATION
							</a>
							
							{/* Dropdown Menu - Responsive Width */}
							<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[90vw] max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
								<div className="backdrop-blur-lg bg-white/95 border border-gray-200 shadow-2xl overflow-hidden rounded-lg">
									<div className="flex min-h-[350px]">
										{/* Pakistan Map - Left Side */}
										<div className="w-2/5 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-[#f99621]/10 to-[#f99621]/5">
											<Image 
												src="/images/map-2.png"
												alt="Pakistan Map"
												width={300}
												height={400}
												className="w-full h-auto max-h-[300px] object-contain"
											/>
										</div>
										
										{/* Regions List - Right Side */}
										<div className="w-3/5 p-4 sm:p-6">
											<h3 className="text-xs font-bold text-[#211f20] uppercase tracking-wider mb-4">Pakistani Regions</h3>
											<ul className="space-y-1">
												<li className="group/item relative">
													<a href="#gilgit" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded">Gilgit Baltistan</a>
													{/* Sub-items for Gilgit Baltistan */}
													<div className="absolute left-full top-0 w-[220px] bg-[#f99621] text-white p-3 rounded-r-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-200 z-10">
														<div className="space-y-1">
															<a href="#hunza" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Hunza Valley</a>
															<a href="#skardu" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Skardu</a>
															<a href="#ghizar" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Ghizar</a>
															<a href="#astore" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Astore</a>
														</div>
													</div>
												</li>
												<li className="group/item relative">
													<a href="#kpk" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded">KPK / Galyat</a>
													{/* Sub-items for KPK */}
													<div className="absolute left-full top-0 w-[220px] bg-[#f99621] text-white p-3 rounded-r-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-200 z-10">
														<div className="space-y-1">
															<a href="#peshawar" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Peshawar</a>
															<a href="#malam-jabba" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Malam Jabba</a>
															<a href="#swat" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Swat Valley</a>
															<a href="#chitral" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Chitral</a>
														</div>
													</div>
												</li>
												<li className="group/item relative">
													<a href="#punjab" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded">Punjab</a>
													{/* Sub-items for Punjab */}
													<div className="absolute left-full top-0 w-[240px] bg-[#f99621] text-white p-3 rounded-r-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-200 z-10">
														<div className="space-y-1">
															<a href="#lahore" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Lahore District</a>
															<a href="#multan" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Multan District</a>
															<a href="#rawalpindi" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Rawalpindi District</a>
															<a href="#islamabad" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Islamabad District</a>
															<a href="#bahawalpur" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Bahawalpur District</a>
															<a href="#chakwal" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Chakwal District</a>
														</div>
													</div>
												</li>
												<li className="group/item relative">
													<a href="#sindh" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded">Sindh</a>
													{/* Sub-items for Sindh */}
													<div className="absolute left-full top-0 w-[220px] bg-[#f99621] text-white p-3 rounded-r-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-200 z-10">
														<div className="space-y-1">
															<a href="#karachi" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Karachi</a>
															<a href="#hyderabad" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Hyderabad</a>
															<a href="#thatta" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Thatta</a>
															<a href="#sukkur" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Sukkur</a>
														</div>
													</div>
												</li>
												<li className="group/item relative">
													<a href="#balochistan" className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded">Balochistan</a>
													{/* Sub-items for Balochistan */}
													<div className="absolute left-full top-0 w-[220px] bg-[#f99621] text-white p-3 rounded-r-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-200 z-10">
														<div className="space-y-1">
															<a href="#quetta" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Quetta</a>
															<a href="#gwadar" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Gwadar</a>
															<a href="#ziarat" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Ziarat</a>
															<a href="#turbat" className="block px-3 py-2 rounded hover:bg-white/10 text-sm">Turbat</a>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<a href="#about" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">ABOUT US</a>
						<a href="#contact" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">CONTACT US</a>
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

			{/* Splash Screen */}
			{(splashVisible && (
				<div className="fixed inset-0 z-[120]" style={{ backgroundColor: isLight ? 'white' : secondaryBlack }}>
					{/* Heritage pattern background */}
					<div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(45deg, ${isLight ? '#e5e7eb' : '#0b0b0b'}, ${isLight ? '#e5e7eb' : '#0b0b0b'} 6px, transparent 6px, transparent 14px), radial-gradient(circle at 20% 30%, ${primaryOrange}22, transparent 40%), radial-gradient(circle at 80% 70%, ${primaryOrange}22, transparent 40%)` }} />
					{/* Ornamental stroke drawing */}
					<svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
						<g fill="none" stroke={isLight ? '#0f172a' : '#ffffff'} strokeWidth="1.5" opacity="0.25">
							<path className="heritage-stroke" d="M100,450 C220,320 380,320 500,450 C620,580 780,580 900,450 C1020,320 1180,320 1300,450" />
							<path className="heritage-stroke" d="M140,520 C260,390 360,390 520,520 C680,650 840,650 1000,520 C1160,390 1260,390 1320,520" />
							<path className="heritage-stroke" d="M120,380 C260,260 420,260 560,380 C700,500 860,500 1000,380 C1140,260 1300,260 1380,380" />
						</g>
					</svg>
					{/* Center logo */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="flex flex-col items-center">
							<div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shadow-2xl flex items-center justify-center logo-float" style={{ backgroundColor: primaryOrange }}>
								<Image src={logoImage} alt="Nayi Talaash Logo" width={144} height={144} className="w-full h-full object-cover rounded-full" />
							</div>
							<div className="mt-5 text-xs tracking-[0.35em] uppercase" style={{ color: isLight ? secondaryBlack : '#ffffff' }}>Nayi Talaash</div>
						</div>
					</div>
					{/* Local styles for stroke animation */}
					<style>{`
						.heritage-stroke { stroke-dasharray: 900; stroke-dashoffset: 900; animation: heritageDash 1.4s ease-out forwards; }
						.heritage-stroke:nth-child(2) { animation-delay: .15s; }
						.heritage-stroke:nth-child(3) { animation-delay: .3s; }
						@keyframes heritageDash { to { stroke-dashoffset: 0; } }
					`}</style>
				</div>
			))}

		{/* --- 2. Mobile Side Navigation Menu --- */}
		<div
			className={`fixed top-0 right-0 h-full w-full max-w-sm z-[115] shadow-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
			style={{ backgroundColor: '#f8f9fa' }}
		>
			{/* Clickable Overlay to close menu */}
			{isMenuOpen && (
				<div 
					className="fixed inset-0 bg-black/50 z-[-1] backdrop-blur-sm" 
					onClick={() => setIsMenuOpen(false)}
					aria-hidden="true"
				/>
			)}
			<div className="p-6 sm:p-8 flex flex-col h-full">
				{/* Close Button */}
				<button
					onClick={() => setIsMenuOpen(false)}
					className="absolute top-6 right-6 p-2 rounded-full text-white transition-colors hover:bg-[#e8851a]"
					style={{ backgroundColor: '#f99621' }}
					aria-label="Close navigation menu"
				>
					<X className="w-6 h-6" />
				</button>

				{/* Logo */}
				<div className="mt-12 mb-8">
					<Image 
						src={logoImage}
						alt="Nayi Talaash Logo"
						width={150}
						height={50}
						className="h-12 w-auto object-contain"
					/>
				</div>

				{/* Nav Links */}
				<nav className="flex flex-col space-y-2 flex-grow">
					<a href="#home" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						HOME
					</a>
					<a href="#tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						PAKISTAN TOURS
					</a>
					<a href="#city-tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						CITY TOURS
					</a>
					<a href="#group-tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						GROUP TOUR
					</a>
					<a href="#destination" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						DESTINATION
					</a>
					<a href="#about" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						ABOUT US
					</a>
					<a href="#contact" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						CONTACT US
					</a>
				</nav>

			{/* Footer Info in Menu */}
			<div className="mt-auto pt-6 border-t border-gray-300">
				<div className="flex items-center gap-3 mb-3">
					<a href="https://www.facebook.com/nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
						<Facebook className="w-5 h-5 text-white stroke-[white]" />
					</a>
					<a href="https://www.instagram.com/nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
						<Instagram className="w-5 h-5 text-white stroke-[white]" />
					</a>
					<a href="https://www.youtube.com/@nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
						<Youtube className="w-5 h-5 text-white stroke-[white]" />
					</a>
					<a href="https://www.tiktok.com/@nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
						<svg className="w-5 h-5 text-white stroke-[white]" fill="none" viewBox="0 0 24 24">
							<path d="M19.321 5.281a7.286 7.286 0 0 1-.744 1.695 7.246 7.246 0 0 1-6.281 3.819v5.357A7.452 7.452 0 0 1 6 7.116V5.5a1 1 0 0 1 2 0v1.616A5.45 5.45 0 0 0 12.5 18.5a5.177 5.177 0 0 0 5.321-5.123v-7.01c0-.314.15-.587.386-.765a1.24 1.24 0 0 1 .814-.243 7.314 7.314 0 0 0 5.869-2.864 1 1 0 0 1 1.415-1.414A9.318 9.318 0 0 1 19.32 5.28z"/>
						</svg>
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

		{/* ====================== NAYI TALAASH HEADER SECTION ====================== */}
		<section className="relative w-full h-screen overflow-hidden pt-[120px] sm:pt-[130px]">
			{/* Background with dark overlay */}
			<div 
				className="absolute inset-0 bg-cover bg-center"
				style={{ 
					backgroundImage: "url('https://tourisme-sumene-artense.com/wp-content/uploads/2024/11/section_intro-e1733142641941.jpg')",
					filter: "brightness(0.75)",
				}}
			></div>

				{/* Large transparent ring */}
				<div className="absolute inset-0 flex items-center justify-center px-4">
					{/* Outer ring - Animated */}
					<div className="relative w-[80vw] max-w-[800px] aspect-square rounded-full border-[10vw] sm:border-[60px] md:border-[80px] border-white/10 animate-spin-slow"></div>
					
					{/* Inner circle - Stationary */}
					<div className="absolute w-[60vw] max-w-[400px] aspect-square rounded-full bg-black/40 flex flex-col items-center justify-center text-center px-6">
						{/* Logo Image */}
						<div className="mb-6">
							<Image 
								src={logoImage} 
								alt="Nayi Talaash Logo" 
								width={224}
								height={80}
								className="w-48 h-16 sm:w-56 sm:h-20 object-contain"
							/>
						</div>

						{/* Tagline */}
						<p className="text-white text-xs sm:text-sm tracking-wider uppercase mb-2">
							Welcome to Nayi Talaash – Time to Meet the Culture!
						</p>
						
						{/* Main Heading */}
						<h1 className="text-[#f99621] text-3xl sm:text-4xl font-bold mb-4">
							NAYE TALAASH
						</h1>
						
						{/* Subtitle */}
						<p className="text-white text-sm sm:text-base tracking-wide mb-6">
							Discover the Beauty of Pakistan with Nayi Talaash
						</p>

						{/* Contact Us Button */}
						<button
							onClick={handleWhatsAppClick}
							className="px-8 py-3 bg-[#f99621] text-white font-bold rounded-full hover:bg-[#e8851a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
						>
							Contact Us
						</button>
					</div>
				</div>
			</section>

			{/* --- 3.1 Intro Section (Themed Content) --- */}
			<section className="py-16 md:py-24 z-20 relative" style={{ backgroundColor: secondaryBlack }}>
				{/* Route/map overlay for dark section */}
				<div className="absolute inset-0 z-[1] opacity-50">
					<MapRouteBackground />
				</div>
				{/* Animated Urdu glyphs CSS */}
				<style>{`
					@keyframes floatGlyph { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-18px) rotate(6deg); } 100% { transform: translateY(0) rotate(0deg); } }
					@keyframes swayGlyph { 0% { transform: translateX(0); } 50% { transform: translateX(10px); } 100% { transform: translateX(0); } }
					.logo-float { animation: floatGlyph 5s ease-in-out infinite; }
					.cultural-glyph { animation: floatGlyph 8s ease-in-out infinite; }
				`}</style>
				<div className="container mx-auto px-4 max-w-5xl text-center relative z-[2]">
					<h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: primaryOrange }}>
						Welcome to Nayi Talaash – Time to Meet the Culture!
					</h2>
					<h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
						Discover the Beauty of Pakistan with Nayi Talaash
					</h3>
					<p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
						Travel beyond boundaries and explore the real essence of Pakistan with Nayi Talaash — your ultimate travel companion. We offer group tour packages that bring together people, places, and unforgettable memories.
					</p>
					<p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
						From the majestic mountains of Gilgit-Baltistan to the crystal-clear beaches of Balochistan, every journey with us is an experience worth remembering.
					</p>
				</div>
			</section>
			
			{/* --- 3.2 Plan Your Next Adventure (Cards + CTAs) --- */}
			<section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
				<div className="container mx-auto px-4 max-w-7xl">
					<div className="text-center mb-12">
						<h2 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: primaryOrange }}>Plan Your Next Adventure</h2>
						<p className="text-gray-300 text-lg md:text-xl">The world is waiting, and Pakistan is calling!</p>
						<p className="text-gray-400 max-w-2xl mx-auto mt-2">Join us to explore, connect, and rediscover your passion for travel.</p>
					</div>

					{/* Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
						{[
							{ title: 'Autumn in Hunza', icon: Mountain, color: '#9a3412' },
							{ title: 'Winter Wonderland – Malam Jabba', icon: CalendarDays, color: '#1e3a8a' },
							{ title: 'Coastal Adventure – Gwadar', icon: Sailboat, color: '#0c4a6e' },
							{ title: 'Historical Trails – Lahore & Multan', icon: Newspaper, color: '#14532d' },
						].map((item, index) => {
							const Icon = item.icon;
							return (
								<div
									key={index}
									className="relative rounded-2xl p-6 md:p-7 h-full bg-white/5 backdrop-blur-md border overflow-hidden group hover:shadow-2xl transition-all duration-500"
									style={{ borderColor: primaryOrange }}
								>
									{/* Glow gradient */}
									<div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(800px 200px at 20% -20%, ${primaryOrange}33, transparent 40%)` }} />
									<div className="relative z-10 flex flex-col h-full">
										<div className="flex items-center mb-4">
											<div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: primaryOrange }}>
												<Icon className="w-6 h-6" style={{ color: secondaryBlack }} />
											</div>
											<h4 className="ml-3 text-lg font-bold text-white leading-snug">{item.title}</h4>
										</div>
										<p className="text-sm text-gray-300">Experience the magic of {item.title.split(' – ')[0]} with curated stays, safe travel, and community vibes.</p>
										<a href="#" className="mt-5 inline-flex items-center text-sm font-semibold group/link" style={{ color: primaryOrange }}>
											Explore Details
											<ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
										</a>
									</div>
								</div>
							);
						})}
					</div>

					{/* CTAs */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
						<a href="#" className="px-8 py-3 rounded-full font-bold uppercase transition-all duration-300 hover:scale-105 hover:bg-white" style={{ backgroundColor: primaryOrange, color: secondaryBlack }}>Explore Packages</a>
						<a href="#" className="px-8 py-3 rounded-full font-bold uppercase border-2 hover:bg-white hover:text-black transition-all duration-300" style={{ borderColor: 'white', color: 'white' }}>Join a Tour</a>
						<a href="#" className="px-8 py-3 rounded-full font-bold uppercase border-2 transition-all duration-300 hover:bg-black hover:text-white" style={{ borderColor: primaryOrange, color: primaryOrange }}>Contact Us</a>
					</div>
				</div>
			</section>

			{/* --- 3.3 About Nayi Talaash (Story + Quote + Mini Cards) --- */}
			<section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
				<div className="absolute inset-0 z-[1] pointer-events-none">
					<LightMapBackground />
				</div>
				<div className="container mx-auto px-4 max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-[2]">
						{/* Left: Content */}
						<div>
							<h2 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: secondaryBlack }}>About Nayi Talaash</h2>
							<h3 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: primaryOrange }}>Experiences That Stay With You</h3>
							<p className="text-gray-700 text-lg">Founded with a passion for exploration, Nayi Talaash – DITS & Travel Agency aims to inspire travelers to experience Pakistan like never before.</p>
							<p className="text-gray-600 mt-3">Our mission is simple: to promote local tourism, connect people with culture, and create lifelong memories through shared adventures.</p>
							<blockquote className="mt-6 p-5 rounded-xl border-l-4" style={{ borderColor: primaryOrange, background: '#fff7ed' }}>
								<p className="text-gray-800 italic">&ldquo;At Nayi Talaash, we don&apos;t just plan tours — we create experiences that stay with you forever.&rdquo;</p>
							</blockquote>
							<div className="mt-8 grid grid-cols-2 gap-4">
								<div className="rounded-xl p-4 border shadow-sm" style={{ borderColor: primaryOrange }}>
									<div className="text-3xl font-extrabold" style={{ color: secondaryBlack }}>50k+</div>
									<p className="text-sm text-gray-600">Happy Travelers</p>
								</div>
								<div className="rounded-xl p-4 border shadow-sm" style={{ borderColor: primaryOrange }}>
									<div className="text-3xl font-extrabold" style={{ color: secondaryBlack }}>150+</div>
									<p className="text-sm text-gray-600">Curated Tours</p>
								</div>
							</div>
						</div>

						{/* Right: Mini Feature Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[
								{ title: 'Local Culture First', desc: 'Authentic routes, real connections.', icon: Globe },
								{ title: 'Community & Safety', desc: 'Trained guides and safe logistics.', icon: ShieldCheck },
								{ title: '24/7 Assistance', desc: 'We are with you end-to-end.', icon: Headset },
								{ title: 'Premium Comfort', desc: 'Handpicked stays and transport.', icon: Star },
							].map((f, i) => {
								const Icon = f.icon;
								return (
									<div key={i} className="rounded-2xl p-6 bg-white border shadow-md hover:shadow-xl transition-shadow duration-300" style={{ borderColor: primaryOrange }}>
										<Icon className="w-10 h-10 mb-3 p-2 rounded-lg" style={{ backgroundColor: secondaryBlack, color: primaryOrange }} />
										<h4 className="text-lg font-bold mb-1" style={{ color: secondaryBlack }}>{f.title}</h4>
										<p className="text-sm text-gray-600">{f.desc}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* --- 4. Special Section: Explore Pakistan (Map) --- */}
			<section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
				<div className="absolute inset-0 z-[1] opacity-40 pointer-events-none">
					<MapRouteBackground />
				</div>
				<div className="container mx-auto px-4 max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-[2]">
						
						{/* Left Column: Text Card */}
						<div className="lg:pr-10">
							<div 
								className="p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.01]"
								style={{ backgroundColor: 'white', border: `3px solid ${primaryOrange}` }}
							>
								<h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: secondaryBlack }}>
									The Land of Wonders
								</h2>
								
								<h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: primaryOrange }}>
									Pakistan&apos;s Hidden Gems
								</h3>

								{/* Main Text Content */}
								<p className="text-xl md:text-2xl font-light mb-8" style={{ color: secondaryBlack }}>
									From the mighty peaks of **Hunza** to the golden shores of **Gwadar** — explore Pakistan’s hidden gems through our exclusive group tour packages designed for comfort, adventure, and unforgettable memories.
								</p>

								{/* Call to Action Button */}
								<button
									className="group px-8 py-3 text-lg font-bold uppercase rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-xl hover:bg-black"
									style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
								>
									Book Your Next Adventure 
									<ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
								</button>
							</div>
						</div>

						{/* Right Column: User's Custom Map Image Placeholder */}
						<div className="flex justify-center items-center p-4">
							{/* TODO: Yahan aap apni pasand ki map ki image laga sakte hain. */}
							<img 
								src="https://plus.unsplash.com/premium_vector-1729264578798-6c7f043e6425?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" 
								alt="Pakistan Map Placeholder. Please replace with your custom map image." 
								className="w-full h-auto max-h-[70vh] rounded-xl shadow-2xl object-cover transition-transform duration-500 hover:scale-[1.01]" 
								onError={(e) => e.currentTarget.src = 'https://placehold.co/800x600/211f20/f99621?text=Map+Load+Error'}
							/>
						</div>

					</div>
				</div>
			</section>
			
			{/* --- 5. Upcoming Tours (Interactive Tour Slider) --- */}
			<section className="py-16 md:py-24 bg-white z-20 relative overflow-hidden">
				<div className="absolute inset-0 z-[1] pointer-events-none">
					<LightMapBackground />
				</div>
				<div className="container mx-auto px-4 max-w-7xl">
					
					{/* Section Header */}
					<div className="text-center mb-12">
						<h2 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: secondaryBlack }}>
							The World Is Waiting
						</h2>
						<h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: primaryOrange }}>
							Plan Your Next Adventure
						</h3>
						<p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
							Join us to explore, connect, and rediscover your passion for travel. Pakistan is calling!
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative z-[2]">
						
						{/* Left Column: Interactive Tour Card */}
						<div className="lg:col-span-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
							
							{/* Image Background (with transition for image change) */}
							<div 
								key={activeTourIndex} // Key forces re-render/transition on change
								className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out" 
								style={{ 
									backgroundImage: `url(${upcomingTours[activeTourIndex].image})`,
									opacity: 1, // Start fully visible
								}}
							>
								{/* Dark Overlay */}
								<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
							</div>
							
							{/* Card Content */}
							<div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
								<h4 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: primaryOrange }}>
									Upcoming Tour
								</h4>
								<h3 className="text-4xl font-extrabold mb-4 leading-tight">
									{upcomingTours[activeTourIndex].title}
								</h3>
								<p className="text-lg font-light mb-6">
									{upcomingTours[activeTourIndex].description}
								</p>
								
								{/* Price and Duration Tags */}
								<div className="flex space-x-4 mb-8">
									<div className="flex items-center text-sm font-semibold p-2 rounded-lg" style={{ backgroundColor: primaryOrange, color: secondaryBlack }}>
										<Clock className="w-4 h-4 mr-2" />
										{upcomingTours[activeTourIndex].duration}
									</div>
									<div className="flex items-center text-sm font-semibold p-2 rounded-lg" style={{ backgroundColor: secondaryBlack, color: primaryOrange }}>
										<Tag className="w-4 h-4 mr-2" />
										{upcomingTours[activeTourIndex].price}
									</div>
								</div>

								{/* Main CTAs */}
								<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
									<a
										href="#"
										className="px-8 py-3 text-lg font-bold uppercase rounded-full transition-all duration-300 text-white hover:bg-white hover:text-black"
										style={{ border: `2px solid ${primaryOrange}`, backgroundColor: primaryOrange, color: secondaryBlack }}
									>
										Explore Packages
									</a>
									<a
										href="#"
										className="px-8 py-3 text-lg font-bold uppercase rounded-full transition-all duration-300 hover:bg-white hover:text-black"
										style={{ border: `2px solid white`, color: 'white' }}
									>
										Join a Tour
									</a>
								</div>
							</div>
						</div>
						
						{/* Right Column: Tour Selection Buttons */}
						<div className="lg:col-span-1 space-y-4">
							<h4 className="text-xl font-bold mb-4" style={{ color: secondaryBlack }}>
								Upcoming Tours:
							</h4>
							{upcomingTours.map((tour, index) => (
								<button
									key={index}
									onClick={() => setActiveTourIndex(index)}
									className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center shadow-lg transform ${
										activeTourIndex === index 
											? 'bg-black text-white scale-[1.03] ring-4 ring-offset-2 ring-offset-white'
											: 'bg-gray-100 text-black hover:bg-gray-200'
									}`}
									style={{
										borderColor: primaryOrange,
									}}
								>
									{/* Small Image Thumbnail for Visual Context */}
									<img
										src={tour.image}
										alt={tour.listTitle}
										className="w-12 h-12 object-cover rounded-md mr-4 border-2"
										style={{ borderColor: activeTourIndex === index ? primaryOrange : 'transparent' }}
										onError={(e) => e.currentTarget.src = 'https://placehold.co/50x50/9d8189/211f20?text=Pic'}
									/>
									<span className={`text-lg font-semibold ${activeTourIndex === index ? 'text-white' : 'text-gray-800'}`}>
										{tour.listTitle}
									</span>
									<ArrowRight className={`w-5 h-5 ml-auto transition-transform duration-300 ${activeTourIndex === index ? 'text-white translate-x-1' : 'text-gray-500'}`} />
								</button>
							))}
							
							{/* Contact Us Link */}
							<a
								href="#"
								className="block text-center mt-6 text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:underline"
								style={{ color: primaryOrange }}
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</section>


			{/* --- 6. NEW SECTION: Exclusive Group Tour Packages (Horizontal Slider) --- */}
			<section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
				<div className="absolute inset-0 z-[1] opacity-40 pointer-events-none">
					<MapRouteBackground />
				</div>
				<div className="max-w-7xl mx-auto px-4">
					{/* Section Header */}
					<div className="text-center mb-12">
						<h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-white" style={{ color: primaryOrange }}>
							Our Core Offerings
						</h2>
						<h3 className="text-3xl md:text-4xl font-extrabold text-white">
							Our Exclusive Group Tour Packages
						</h3>
						<p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
							Join our vibrant travel community and make new memories on every journey.
						</p>
					</div>

					{/* Horizontal Slider with Buttons */}
					<div className="relative z-[2]">
						<div id="packages-track" className="flex space-x-8 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth lg:justify-center no-scrollbar">
						{exclusivePackages.map((pkg, index) => (
							<ExclusivePackageCard 
								key={index}
								index={index}
								pkg={pkg}
								activePackageIndex={activePackageIndex}
								setActivePackageIndex={setActivePackageIndex}
							/>
						))}
					</div>
						{/* Prev/Next buttons */}
						<div className="hidden md:block">
							<button onClick={() => {
								const el = document.getElementById('packages-track');
								if (el) el.scrollBy({ left: -360, behavior: 'smooth' });
							}} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg" style={{ backgroundColor: primaryOrange, color: secondaryBlack }} aria-label="Previous">
								<ChevronLeft className="w-6 h-6" />
							</button>
							<button onClick={() => {
								const el = document.getElementById('packages-track');
								if (el) el.scrollBy({ left: 360, behavior: 'smooth' });
							}} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg" style={{ backgroundColor: primaryOrange, color: secondaryBlack }} aria-label="Next">
								<ChevronRight className="w-6 h-6" />
							</button>
						</div>
					</div>

					{/* Slider Navigation Dots/Buttons */}
					<div className="flex justify-center space-x-3 mt-8">
						{exclusivePackages.map((_, index) => (
							<button
								key={index}
								onClick={() => setActivePackageIndex(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									activePackageIndex === index ? 'w-8' : 'opacity-50'
								}`}
								style={{ backgroundColor: activePackageIndex === index ? primaryOrange : 'white' }}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
					
					{/* Custom Tour CTA */}
					<div className="text-center mt-12">
						<h4 className="text-2xl font-bold text-white mb-4">
							<Briefcase className="w-6 h-6 inline-block mr-2" style={{ color: primaryOrange }}/> Customized Corporate & Student Tours
						</h4>
						<a
							href="#"
							className="px-10 py-3 text-lg font-bold uppercase rounded-full transition-all duration-300 hover:scale-105 hover:bg-white"
							style={{ backgroundColor: primaryOrange, color: secondaryBlack }}
						>
							Request a Custom Tour Plan
						</a>
					</div>
				</div>
			</section>
			

			{/* --- 7. Section: Why Choose Us (Hamari Khususiyat) --- */}
			<section className="py-16 md:py-24 bg-white z-20 relative overflow-hidden">
				<div className="absolute inset-0 z-[1] pointer-events-none">
					<LightMapBackground />
				</div>
				<div className="container mx-auto px-4 max-w-7xl">
					{/* Section Header (In Hindi/Hinglish) */}
					<div className="text-center mb-12">
						<h2 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: secondaryBlack }}>
							Humein Chunein
						</h2>
						<h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: primaryOrange }}>
							Aap Humara Chunav Kyun Karen?
						</h3>
						<p className="text-gray-500 mt-3 max-w-2xl mx-auto">
							Humari khaas khoobiyan jo aapke safar ko behtareen aur yaadgaar banayengi.
						</p>
					</div>

					{/* Features Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-[2]">
						{features.map((feature, index) => (
							<FeatureCard key={index} {...feature} />
						))}
					</div>
				</div>
			</section>


			{/* --- 8. Stay Ideas Section (Our Stay Ideas) --- */}
			<section className="py-16 md:py-24 bg-white z-20 relative overflow-hidden">
				<div className="absolute inset-0 z-[1] pointer-events-none">
					<LightMapBackground />
				</div>
				<div className="container mx-auto px-4 max-w-7xl">
					{/* Section Header (In English) */}
					<div className="text-center mb-12">
						<h2 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: primaryOrange }}>
							Our Ideas
						</h2>
						<h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: secondaryBlack }}>
							Our Stay Ideas
						</h3>
						<p className="text-gray-500 mt-3 max-w-2xl mx-auto">
							Choose your perfect adventure from our curated selection of stay experiences and local activities.
						</p>
					</div>

					{/* Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-[2]">
						{stayIdeas.map((idea, index) => (
							<StayIdeaCard key={index} {...idea} />
						))}
					</div>
					
					{/* View All Button */}
					<div className="text-center mt-12">
						<button
							className="px-10 py-3 text-base font-bold uppercase rounded-full transition-all duration-300 border-2 hover:bg-black hover:text-white"
							style={{ borderColor: secondaryBlack, color: secondaryBlack }}
						>
							View All Offers
						</button>
					</div>
				</div>
			</section>
			
			{/* --- 9. Events and News Section (Events and News) --- */}
			<section className="py-16 md:py-24 z-20 relative" style={{ backgroundColor: secondaryBlack }}>
				<div className="absolute inset-0 z-[1] opacity-40 pointer-events-none">
					<MapRouteBackground />
				</div>
				<div className="container mx-auto px-4 max-w-7xl">
					{/* Section Header (In English) */}
					<div className="text-center mb-12">
						<h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-white" style={{ color: primaryOrange }}>
							What&apos;s New
						</h2>
						<h3 className="text-3xl md:text-4xl font-extrabold text-white">
							Events and News
						</h3>
						<p className="text-gray-400 mt-3 max-w-2xl mx-auto">
							Stay updated with our latest tour announcements, special deals, and travel stories.
						</p>
					</div>

					{/* News Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-[2]">
						{newsItems.map((news, index) => (
							<NewsCard key={index} {...news} />
						))}
					</div>
					
					{/* View All News Button */}
					<div className="text-center mt-12">
						<button
							className="px-10 py-3 text-base font-bold uppercase rounded-full transition-all duration-300 border-2 hover:bg-white hover:text-black"
							style={{ borderColor: primaryOrange, color: primaryOrange }}
						>
							View All News
						</button>
					</div>
				</div>
			</section>

			{/* --- 10. Enhanced Footer --- */}
			<footer className="py-16 px-8 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
				{/* Heritage background overlay */}
				<div className="absolute inset-0 z-[1] opacity-20 pointer-events-none">
					<MapRouteBackground />
						</div>
				
				<div className="container mx-auto max-w-7xl text-gray-400 text-sm relative z-[2]">
					{/* Main Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
						{/* Company Info */}
						<div className="lg:col-span-1">
							<div className="flex items-center mb-6">
								{/* Logo */}
								<img 
									src={logoImage} 
									alt="Nayi Talaash Logo" 
									className="w-32 h-10 sm:w-40 sm:h-12 object-contain"
									onError={(e) => {
										e.currentTarget.style.display = 'none';
										const parent = e.currentTarget.parentElement;
										if (parent) {
											parent.innerHTML = `
												<div class="text-center">
													<h3 class="text-[#f99621] text-xl font-bold">NAYI TALAASH</h3>
													<p class="text-[#f99621] text-xs font-semibold">TIME TO MEET CULTURES</p>
												</div>
											`;
										}
									}}
								/>
							</div>
							<p className="text-gray-300 mb-4 leading-relaxed">
								Discover the beauty of Pakistan with our curated travel experiences. From majestic mountains to historic cities, we bring you authentic cultural adventures.
							</p>
							<div className="flex space-x-4">
								<a href="https://www.instagram.com/nayi.talaash?igsh=ODFxeWZvNnIyNmtk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-[#f99621] transition-colors group">
									<Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
								</a>
								<a href="https://www.facebook.com/share/15b53BTcdm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-[#f99621] transition-colors group">
									<Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
								</a>
								<a href="mailto:info@nayitalaash.com" className="p-2 rounded-full bg-gray-800 hover:bg-[#f99621] transition-colors group">
									<Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="text-lg font-bold mb-6" style={{ color: primaryOrange }}>Quick Links</h4>
							<ul className="space-y-3">
								<li><a href="#" className="hover:text-white transition-colors flex items-center group">
									<ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
									About Us
								</a></li>
								<li><a href="#" className="hover:text-white transition-colors flex items-center group">
									<ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
									Our Tours
								</a></li>
								<li><a href="#" className="hover:text-white transition-colors flex items-center group">
									<ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
									Destinations
								</a></li>
								<li><a href="#" className="hover:text-white transition-colors flex items-center group">
									<ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
									Gallery
								</a></li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className="text-lg font-bold mb-6" style={{ color: primaryOrange }}>Contact Us</h4>
							<div className="space-y-4">
								<div className="flex items-center group">
									<Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" style={{ color: primaryOrange }} />
									<a href="mailto:info@nayitalaash.com" className="hover:text-white transition-colors">
										info@nayitalaash.com
									</a>
						</div>
								<div className="flex items-center group">
									<Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" style={{ color: primaryOrange }} />
									<a href="tel:+923311438251" className="hover:text-white transition-colors">
										+92 331 1438251
									</a>
								</div>
								<button 
									onClick={handleWhatsAppClick}
									className="flex items-center group bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
								>
									<MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
									WhatsApp Us
								</button>
							</div>
						</div>

						{/* Newsletter */}
						<div>
							<h4 className="text-lg font-bold mb-6" style={{ color: primaryOrange }}>Stay Updated</h4>
							<p className="text-gray-300 mb-4">Get exclusive travel deals and Pakistan&apos;s hidden gems delivered to your inbox.</p>
							<div className="space-y-3">
								<input 
									type="email" 
									placeholder="Your Email Address" 
									className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors" 
								/>
								<button className="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: primaryOrange, color: secondaryBlack }}>
									Subscribe Now
								</button>
					</div>
						</div>
					</div>

					{/* Bottom Section */}
					<div className="pt-8 border-t border-gray-700">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div className="flex items-center space-x-6">
								<p className="text-gray-500 text-sm">
									© 2024 Nayi Talaash. All rights reserved.
								</p>
								<div className="flex items-center text-gray-500 text-sm">
									<Heart className="w-4 h-4 mr-1 text-red-500" />
									Made with love for Pakistan
								</div>
							</div>
							<div className="flex space-x-6">
								<a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
								<a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
								<a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Cookie Policy</a>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Custom Cursor */}
			<div
				className="fixed z-[130] pointer-events-none"
				style={{
					left: mousePos.x - 12,
					top: mousePos.y - 12,
					width: 24,
					height: 24,
					borderRadius: 9999,
					border: `2px solid ${primaryOrange}`,
					background: isScrollingNow ? `${primaryOrange}` : 'transparent',
					mixBlendMode: 'difference',
					transition: 'transform 120ms ease, background-color 150ms ease',
					transform: isScrollingNow ? 'scale(0.6)' : 'scale(1)',
				}}
			/>

			<style>{`
				.no-scrollbar { scrollbar-width: none; }
				.no-scrollbar::-webkit-scrollbar { display: none; }
				.animate-spin-slow { animation: spin 20s linear infinite; }
				.animate-city-pulse { animation: cityPulse 3s ease-in-out infinite; }
				.animate-route-flow { animation: routeFlow 2s linear infinite; }
				.animate-heritage-glow { animation: heritageGlow 4s ease-in-out infinite; }
				@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
				@keyframes cityPulse {
					0%, 100% { transform: scale(1); opacity: 0.8; }
					50% { transform: scale(1.1); opacity: 1; }
				}
				@keyframes routeFlow {
					0% { stroke-dashoffset: 0; }
					100% { stroke-dashoffset: 20; }
				}
				@keyframes heritageGlow {
					0%, 100% { filter: drop-shadow(0 0 5px rgba(249,150,33,0.3)); }
					50% { filter: drop-shadow(0 0 15px rgba(249,150,33,0.6)); }
				}
			`}</style>
		</div>
	);
};

export default Page;

