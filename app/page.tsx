'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Menu, X, Search, Home, Map, Users, DollarSign, Globe, Mountain, Sun, Sailboat, CalendarDays, Newspaper, ArrowRight, ShieldCheck, Headset, Star, Clock, Tag, Briefcase, Smile, Moon, ChevronLeft, ChevronRight, ChevronDown, Instagram, Facebook, Mail, Phone, MessageCircle, Heart, Award, Building2, Landmark, Youtube, Music, Ship, Route, Droplets, Play, CheckCircle2 } from 'lucide-react';

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
	// State for selected destination region
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

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
				<div className="flex items-center justify-between py-1 sm:py-1.5">
					{/* Left: Contact Info */}
					<div className="flex items-center gap-3 sm:gap-5 text-white text-[11px] sm:text-xs">
						<a href="tel:+92331438251" className="flex items-center gap-1.5 hover:text-[#f99621] transition-colors">
							<Phone className="w-3.5 h-3.5" style={{ color: '#f99621' }} />
							<span className="hidden sm:inline">+92 331 438251</span>
							<span className="sm:hidden">+92 331...</span>
						</a>
						<a href="mailto:info@nayetalash.com" className="flex items-center gap-1.5 hover:text-[#f99621] transition-colors">
							<Mail className="w-3.5 h-3.5" style={{ color: '#f99621' }} />
							<span className="hidden md:inline">info@nayetalash.com</span>
							<span className="md:hidden text-[10px]">info@...</span>
						</a>
					</div>

					{/* Right: Social Media Icons & Customize Button */}
					<div className="flex items-center gap-2.5">
						{/* Social Media Icons - Styled with Hover Effects */}
						<div className="flex items-center gap-1.5">
							{/* Facebook */}
							<a 
								href="https://www.facebook.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="Facebook"
							>
								<Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* Instagram */}
							<a 
								href="https://www.instagram.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="Instagram"
							>
								<Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* YouTube */}
							<a 
								href="https://www.youtube.com/@nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="YouTube"
							>
								<Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* TikTok */}
							<a 
								href="https://www.tiktok.com/@nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="TikTok"
							>
								<svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#211f20] group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
									<path d="M19.321 5.281a7.286 7.286 0 0 1-.744 1.695 7.246 7.246 0 0 1-6.281 3.819v5.357A7.452 7.452 0 0 1 6 7.116V5.5a1 1 0 0 1 2 0v1.616A5.45 5.45 0 0 0 12.5 18.5a5.177 5.177 0 0 0 5.321-5.123v-7.01c0-.314.15-.587.386-.765a1.24 1.24 0 0 1 .814-.243 7.314 7.314 0 0 0 5.869-2.864 1 1 0 0 1 1.415-1.414A9.318 9.318 0 0 1 19.32 5.28z"/>
								</svg>
							</a>
				</div>

						{/* Customize A Tour Button */}
						<button
							onClick={handleWhatsAppClick}
							className="px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold text-[#211f20] rounded-md hover:bg-[#e8851a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f99621]/50"
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
		<header className="fixed top-[42px] sm:top-[44px] left-0 right-0 z-[100] bg-white/95 border-b border-gray-200 shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-3 sm:py-4">
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
							<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[90vw] max-w-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
								<div className="backdrop-blur-lg bg-white/95 border border-gray-200 shadow-2xl overflow-hidden rounded-lg">
									<div className="flex min-h-[400px]">
										{/* Pakistan Map - Left Side (Reduced Size) */}
										<div className="w-2/5 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-[#f99621]/10 to-[#f99621]/5">
											<Image 
												src="/images/map-2.png"
												alt="Pakistan Map"
												width={250}
												height={350}
												className="w-full h-auto max-h-[250px] object-contain"
											/>
										</div>
										
										{/* Regions List - Middle */}
										<div className="w-3/5 flex border-r border-gray-200">
											<div className="w-2/5 p-4 sm:p-6 border-r border-gray-200">
												<h3 className="text-xs font-bold text-[#211f20] uppercase tracking-wider mb-4">Pakistani Regions</h3>
												<ul className="space-y-1">
													<li className="group/item">
														<a 
															href="#gilgit" 
															onMouseEnter={() => setSelectedRegion('gilgit')}
															className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
														>
															Gilgit Baltistan
														</a>
													</li>
													<li className="group/item">
														<a 
															href="#kpk" 
															onMouseEnter={() => setSelectedRegion('kpk')}
															className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
														>
															KPK / Galyat
														</a>
													</li>
													<li className="group/item">
														<a 
															href="#punjab" 
															onMouseEnter={() => setSelectedRegion('punjab')}
															className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
														>
															Punjab
														</a>
													</li>
													<li className="group/item">
														<a 
															href="#sindh" 
															onMouseEnter={() => setSelectedRegion('sindh')}
															className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
														>
															Sindh
														</a>
													</li>
													<li className="group/item">
														<a 
															href="#balochistan" 
															onMouseEnter={() => setSelectedRegion('balochistan')}
															className="block px-3 py-2 text-sm font-semibold text-[#211f20] hover:bg-[#f99621] hover:text-white transition-colors rounded"
														>
															Balochistan
														</a>
													</li>
												</ul>
											</div>
											
											{/* Sub-regions List - Right Side (Third Column) */}
											<div className="w-3/5 p-4 sm:p-6 relative">
												{selectedRegion === 'gilgit' && (
													<div className="space-y-1">
														<a href="#hunza-valley" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Hunza Valley</a>
														<a href="#skardu-valley" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Skardu Valley</a>
														<a href="#ghizer" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Ghizer</a>
														<a href="#astore" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Astore</a>
														<a href="#nagar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Nagar</a>
													</div>
												)}
												{selectedRegion === 'kpk' && (
													<div className="space-y-1">
														<a href="#peshawar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Peshawar</a>
														<a href="#malam-jabba" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Malam Jabba</a>
														<a href="#swat-valley" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Swat Valley</a>
														<a href="#chitral" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Chitral</a>
														<a href="#abbottabad" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Abbottabad</a>
													</div>
												)}
												{selectedRegion === 'punjab' && (
													<div className="space-y-1">
														<a href="#lahore-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Lahore District</a>
														<a href="#multan-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Multan District</a>
														<a href="#rawalpindi-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Rawalpindi District</a>
														<a href="#islamabad-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Islamabad District</a>
														<a href="#bahawalpur-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Bahawalpur District</a>
														<a href="#chakwal-district" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Chakwal District</a>
													</div>
												)}
												{selectedRegion === 'sindh' && (
													<div className="space-y-1">
														<a href="#karachi" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Karachi</a>
														<a href="#hyderabad" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Hyderabad</a>
														<a href="#thatta" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Thatta</a>
														<a href="#sukkur" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Sukkur</a>
														<a href="#mirpur-khas" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Mirpur Khas</a>
													</div>
												)}
												{selectedRegion === 'balochistan' && (
													<div className="space-y-1">
														<a href="#quetta" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Quetta</a>
														<a href="#gwadar" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Gwadar</a>
														<a href="#ziarat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Ziarat</a>
														<a href="#turbat" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Turbat</a>
														<a href="#lasbela" className="block px-3 py-2 rounded hover:bg-[#f99621]/10 text-sm text-[#211f20]">Lasbela</a>
													</div>
												)}
											</div>
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

		{/* ====================== HERO SECTION ====================== */}
		<section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-[105px] sm:pt-[112px]">
			{/* Background Image */}
			<div 
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ 
					backgroundImage: "url('https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=2070')",
					filter: "brightness(0.6)",
				}}
			></div>

			{/* Floating Icons on Left Side */}
			<div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
				<a href="tel:+92331438251" className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
					<Phone className="w-6 h-6 text-white" />
				</a>
				<button 
					onClick={handleWhatsAppClick}
					className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
				>
					<MessageCircle className="w-6 h-6 text-white" />
				</button>
				<button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
					<X className="w-6 h-6 text-white" />
				</button>
			</div>

			{/* Main Content */}
			<div className="relative z-10 h-full flex items-center justify-center">
				<div className="text-center px-4">
					<h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4" style={{ color: '#dc2626' }}>
						Hey travelers
					</h1>
					<p className="text-2xl sm:text-3xl md:text-4xl text-white mb-2 font-semibold">
						Welcome to Nayi Talaash
					</p>
					<p className="text-xl sm:text-2xl md:text-3xl text-white font-medium">
						Your One-Stop Travel Agency In Pakistan
					</p>
				</div>
			</div>
		</section>

		{/* ====================== FASCINATING FACTS ABOUT PAKISTAN ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
					<span className="text-[#211f20]">FASCINATING FACTS ABOUT </span>
					<span className="bg-gray-200 px-3 py-1 rounded">PAKISTAN</span>
				</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Card 1: World's Largest Deep Sea Port */}
					<div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
						<div className="w-16 h-16 rounded-full bg-[#f99621]/10 flex items-center justify-center mb-4">
							<Ship className="w-8 h-8" style={{ color: '#f99621' }} strokeWidth={1.5} />
						</div>
						<h3 className="text-xl font-bold text-[#211f20] mb-3">World&apos;s Largest Deep Sea Port</h3>
						<p className="text-gray-600">
							Pakistan&apos;s superior position in Asia makes it a center of trade in the region and that is to increase further in the coming years.
						</p>
					</div>

					{/* Card 2: World's Highest Paved Road */}
					<div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
						<div className="w-16 h-16 rounded-full bg-[#f99621]/10 flex items-center justify-center mb-4">
							<Route className="w-8 h-8" style={{ color: '#f99621' }} strokeWidth={1.5} />
						</div>
						<h3 className="text-xl font-bold text-[#211f20] mb-3">World&apos;s Highest Paved Road</h3>
						<p className="text-gray-600">
							Also called the eighth wonder of the world or the China-Pakistan Friendship highway the Karakoram Highway is the highest road ever built.
						</p>
					</div>

					{/* Card 3: Fourth Largest Irrigation System */}
					<div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
						<div className="w-16 h-16 rounded-full bg-[#f99621]/10 flex items-center justify-center mb-4">
							<Droplets className="w-8 h-8" style={{ color: '#f99621' }} strokeWidth={1.5} />
						</div>
						<h3 className="text-xl font-bold text-[#211f20] mb-3">Fourth Largest Irrigation System</h3>
						<p className="text-gray-600">
							As most of Pakistan&apos;s population depend on a livelihood in agriculture the country had to develop a complex and extensive system of irrigation.
						</p>
					</div>
				</div>

				{/* Pagination Dots */}
				<div className="flex justify-center gap-2">
					<div className="w-2 h-2 rounded-full bg-[#f99621]"></div>
					<div className="w-2 h-2 rounded-full bg-gray-300"></div>
					<div className="w-2 h-2 rounded-full bg-gray-300"></div>
				</div>
			</div>
		</section>
			
		{/* ====================== DISCOVER PAKISTAN ====================== */}
		<section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#14b8a6' }}>
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left: Pakistan Map */}
					<div className="relative">
						<Image 
							src="/images/map-2.png"
							alt="Pakistan Map"
							width={600}
							height={800}
							className="w-full h-auto object-contain"
						/>
						{/* Glowing dots on map */}
						<div className="absolute top-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse"></div>
						<div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
						<div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
					</div>

					{/* Right: Content */}
					<div className="text-white">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">DISCOVER PAKISTAN</h2>
						<p className="text-lg md:text-xl leading-relaxed mb-6">
							Pakistan is a land where heritage meets modernity, where snow-kissed peaks touch the sky, and where every corner tells a story. From the majestic mountains of the north to the golden beaches of the south, from ancient civilizations to bustling cities, Pakistan offers a blend of experiences that captivate the soul. Explore our diverse landscapes, savor our culinary brilliance, and immerse yourself in the warmth of our people. Discover Pakistan – where every journey is an adventure waiting to unfold.
						</p>
						<button className="px-8 py-3 bg-white text-[#14b8a6] font-bold rounded-lg border-2 border-white hover:bg-transparent hover:text-white transition-all">
							EXPLORE MORE
						</button>
					</div>
				</div>
			</div>
		</section>

		{/* ====================== WHERE TO NEXT? ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="mb-8">
					<h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#9333ea' }}>
						Pakistan: &apos;Tourism&apos;s Next Big Thing&apos; - Lonely Planet
					</h2>
					<p className="text-lg text-gray-700">
						Travel with us to experience the beauty, culture, and hospitality of Pakistan!
					</p>
					<div className="flex justify-end mt-4">
						<button className="px-4 py-2 border-2 rounded-lg font-semibold" style={{ borderColor: '#9333ea', color: '#9333ea' }}>
							See All
						</button>
					</div>
				</div>

				{/* Destination Cards Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
					{[
						{ name: 'Hunza', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
						{ name: 'Skardu', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ name: 'Ghizer', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ name: 'Lahore', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
						{ name: 'Bahawalpur', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ name: 'Karachi', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
					].map((dest, idx) => (
						<div key={idx} className="relative group cursor-pointer">
							<div className="relative h-48 rounded-lg overflow-hidden">
								<Image 
									src={dest.image}
									alt={dest.name}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4 text-white font-bold text-lg">
									{dest.name}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Floating WhatsApp Icon */}
				<div className="fixed right-4 bottom-4 z-50">
					<button 
						onClick={handleWhatsAppClick}
						className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
					>
						<MessageCircle className="w-7 h-7 text-white" />
					</button>
				</div>
			</div>
		</section>

		{/* ====================== DESTINATION LIST OF PAKISTAN TOUR PACKAGES ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-8">
					<span className="text-[#dc2626] font-serif italic">Destination List of </span>
					<span className="text-[#211f20]">PAKISTAN TOUR PACKAGES</span>
				</h2>

				{/* Tour Packages Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{ name: 'HUNZA', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
						{ name: 'SKARDU', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ name: 'SWAT KALAM', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ name: 'MURREE NATHIA GALI', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
						{ name: 'NARAN KAGHAN', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ name: 'AZAD KASHMIR', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
					].map((tour, idx) => (
						<div key={idx} className="relative group cursor-pointer">
							<div className="relative h-64 rounded-lg overflow-hidden">
								<Image 
									src={tour.image}
									alt={tour.name}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<p className="text-[#f99621] font-serif text-sm mb-1">Tour Packages</p>
									<p className="text-white font-bold text-xl">{tour.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
			
		{/* ====================== HONEYMOON TRIP & FAMILY TOUR PACKAGES ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left: Honeymoon Trip */}
					<div className="relative">
						<div className="relative bg-white border-4 border-gray-300 p-4 shadow-2xl" style={{ transform: 'rotate(-2deg)' }}>
							<Image 
								src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800"
								alt="Honeymoon Trip"
								width={600}
								height={400}
								className="w-full h-auto object-cover"
							/>
							<div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
								<Phone className="w-5 h-5" style={{ color: '#dc2626' }} />
								<span className="font-bold text-sm">BOOK YOUR TOUR NOW +92 303 4364467</span>
							</div>
						</div>
						<p className="mt-4 text-center text-2xl font-serif italic" style={{ color: '#211f20' }}>Honeymoon Trip</p>
					</div>

					{/* Right: Family Tour Packages */}
					<div>
						<h2 className="text-4xl font-bold mb-6">
							<span className="text-[#dc2626]">FAMILY</span>
							<span className="text-[#211f20]"> TOUR PACKAGES</span>
						</h2>
						<ul className="space-y-4 mb-8">
							{[
								'Quality Accommodations',
								'Luxury Transport with Personal Driver',
								'Flight Reservations',
								'4x4 Jeep Safaris',
								'Local and Traditional Meals',
								'Bonfire Nights',
							].map((item, idx) => (
								<li key={idx} className="flex items-center gap-3">
									<div className="w-2 h-2 rounded-full bg-[#dc2626]"></div>
									<span className="text-lg text-gray-700">{item}</span>
								</li>
							))}
						</ul>
						<p className="text-2xl font-bold text-[#211f20]">GET YOUR FREE QUOTE NOW!</p>
					</div>
				</div>
			</div>
		</section>

		{/* ====================== WHY TRAVEL WITH US & VIDEO ====================== */}
		<section className="py-16 md:py-24 bg-gray-100">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left: Why Travel With Us */}
					<div>
						<h2 className="text-3xl font-bold text-[#211f20] mb-4">Why Travel With Us?</h2>
						<p className="text-gray-700 mb-6">
							The Mad Hatters Pakistan is a cultural and experiential travel company.
						</p>
						<ul className="space-y-3 mb-6">
							{[
								'Focus on Experiential, Cultural, and Religious Tourism',
								'Ethical and Responsible Tourism Philosophy',
								'Expertise in working with International Tourists',
								'Local Community Engagement',
								'Women-friendly tours',
							].map((item, idx) => (
								<li key={idx} className="flex items-center gap-3">
									<CheckCircle2 className="w-5 h-5" style={{ color: '#9333ea' }} />
									<span className="text-gray-700">{item}</span>
								</li>
							))}
						</ul>
						<button className="px-6 py-3 border-2 rounded-lg font-semibold" style={{ borderColor: '#9333ea', color: '#9333ea' }}>
							Learn More
						</button>
					</div>

					{/* Right: Video Embed */}
					<div>
						<div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
							<Image 
								src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800"
								alt="Video Thumbnail"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<button className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform">
									<Play className="w-8 h-8 text-white ml-1" fill="white" />
								</button>
							</div>
						</div>
						<button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm">
							Watch on Youtube
						</button>
					</div>
				</div>
			</div>
		</section>

		{/* ====================== PUBLIC GROUP TOURS ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="mb-8">
					<p className="text-[#f99621] text-sm font-bold uppercase tracking-widest mb-2">OUR WEEKLY</p>
					<h2 className="text-4xl md:text-5xl font-bold text-[#211f20] mb-4">PUBLIC GROUP TOURS</h2>
					<p className="text-gray-600 max-w-3xl">
						A Public Group Tour is open to the general public and is usually offered on a set day and time. It is suitable for people who want to meet new people and travel at a lower cost than a private tour.
					</p>
				</div>

				{/* Tour Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{[
						{ title: '2 DAYS MALAM JABBA SWAT GROUP TOUR', price: 'From Rs 11,000', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ title: '5 DAYS HUNZA, NALTAR, AND KHUNJERAB PUBLIC GROUP TOUR', price: 'From Rs 25,000', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
						{ title: '3 DAYS KALAM AND MALAM JABBA SWAT GROUP TOUR', price: 'From Rs 16,000', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
						{ title: '3 DAYS ARANGKEL NEELUM VALLEY KASHMIR GROUP TOUR', price: 'From Rs. 16,000', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
					].map((tour, idx) => (
						<div key={idx} className="relative group cursor-pointer">
							<div className="relative h-64 rounded-lg overflow-hidden">
								<Image 
									src={tour.image}
									alt={tour.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h3 className="text-white font-bold text-lg mb-2">{tour.title}</h3>
									<p className="text-[#f99621] font-bold">{tour.price}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Pagination Dots */}
				<div className="flex justify-center gap-2">
					<div className="w-2 h-2 rounded-full bg-[#f99621]"></div>
					<div className="w-2 h-2 rounded-full bg-gray-300"></div>
				</div>
			</div>
		</section>

		{/* ====================== TESTIMONIALS ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="mb-8">
					<p className="text-[#f99621] text-sm font-serif italic mb-2">Testimonials</p>
					<h2 className="text-4xl md:text-5xl font-bold text-[#211f20]">WHAT OUR CLIENTS HAVE TO SAY?</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Testimonial 1 */}
					<div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md">
						<div className="flex items-center mb-4">
							<div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden mr-4">
								<Image 
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
									alt="Muhammad Nauraiz Mushtaq"
									width={64}
									height={64}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<p className="text-gray-600 italic mb-2">
									&ldquo;Outstanding services provided by NatureHikePakistan. Highly recommended!&rdquo;
								</p>
								<p className="font-bold text-[#211f20]">MUHAMMAD NAURAIZ MUSHTAQ</p>
							</div>
						</div>
					</div>

					{/* Testimonial 2 */}
					<div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md">
						<div className="flex items-center mb-4">
							<div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden mr-4">
								<Image 
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
									alt="Ali Rehman"
									width={64}
									height={64}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<p className="text-gray-600 italic mb-2">
									&ldquo;We chose Nature Hike Pakistan for our vacations. Beautiful views and excellent customer service.&rdquo;
								</p>
								<p className="font-bold text-[#211f20]">ALI REHMAN</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* ====================== WHERE ARE WE LOCATED? ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="mb-8">
					<p className="text-[#f99621] text-sm font-serif italic mb-2">Find us</p>
					<h2 className="text-4xl md:text-5xl font-bold text-[#211f20]">WHERE ARE WE LOCATED?</h2>
				</div>

				<div className="w-full h-96 rounded-lg overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.123456789!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>

		{/* ====================== WORKED WITH / FEATURED ON ====================== */}
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold text-[#211f20]">Worked With / Featured On</h2>
					<button className="px-4 py-2 border-2 rounded-lg font-semibold" style={{ borderColor: '#211f20', color: '#211f20' }}>
						See All
					</button>
				</div>

				<div className="grid grid-cols-3 md:grid-cols-6 gap-8">
					{['UNESCO', 'USAID', 'The World Bank', 'UN WOMEN', 'ALJAZEERA', 'FINANCIAL TIMES'].map((org, idx) => (
						<div key={idx} className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
							<span className="text-sm font-semibold text-gray-600">{org}</span>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* ====================== READY FOR TOUR CTA ====================== */}
		<section className="py-16 md:py-24 bg-[#211f20]">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div>
						<p className="text-white text-2xl font-serif italic mb-2">Ready for an unforgettable tour!</p>
						<h2 className="text-4xl md:text-5xl font-bold text-[#f99621]">Plan your trips with us</h2>
					</div>
					<button
						onClick={handleWhatsAppClick}
						className="px-8 py-4 bg-green-400 text-[#211f20] font-bold rounded-lg hover:bg-green-500 transition-colors mt-6 md:mt-0"
					>
						Customize A Tour
					</button>
				</div>
			</div>
		</section>

		{/* ====================== FOOTER ====================== */}
		<footer className="py-16 bg-white border-t border-gray-200">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
					{/* Logo and Brand */}
					<div>
						<Image 
							src={logoImage}
							alt="Nayi Talaash Logo"
							width={150}
							height={50}
							className="h-12 w-auto object-contain mb-4"
						/>
						<p className="text-gray-600 text-sm mb-2">#SehriKushiiShamii</p>
						<div className="space-y-1 text-sm text-gray-600">
							<p>| NTS</p>
							<p>| OTS License</p>
							<p>| MTA Certification</p>
						</div>
					</div>

					{/* Site Map */}
					<div>
						<h3 className="font-bold text-[#211f20] mb-4">Site Map</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li><a href="#" className="hover:text-[#f99621]">About Us</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Contact Us</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Privacy Policy</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Terms and Condition</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Social Wall</a></li>
						</ul>
					</div>

					{/* International Tours */}
					<div>
						<h3 className="font-bold text-[#211f20] mb-4">International</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li><a href="#" className="hover:text-[#f99621]">Group Tours</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Private Tours</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Corporate Tours</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Umrah</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Hajj 2026</a></li>
						</ul>
					</div>

					{/* Domestic Tours */}
					<div>
						<h3 className="font-bold text-[#211f20] mb-4">Domestic</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li><a href="#" className="hover:text-[#f99621]">Group Tours</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Private Tours</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Corporate Tours</a></li>
						</ul>
					</div>

					{/* Upcoming Tours */}
					<div>
						<h3 className="font-bold text-[#211f20] mb-4">Upcoming</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li><a href="#" className="hover:text-[#f99621]">Winter Tours</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Malaysia</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Turkey</a></li>
							<li><a href="#" className="hover:text-[#f99621]">Indonesia</a></li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="text-center pt-8 border-t border-gray-200">
					<p className="text-gray-600 text-sm">© 2025 Nayi Talaash - All Right reserved.</p>
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

