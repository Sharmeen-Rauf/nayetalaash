'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Search, Home, Map, Users, DollarSign, Globe, Mountain, Sun, Sailboat, CalendarDays, Newspaper, ArrowRight, ShieldCheck, Headset, Star, Clock, Tag, Briefcase, Smile, Moon, ChevronLeft, ChevronRight, ChevronDown, Instagram, Facebook, Mail, Phone, MessageCircle, Heart, Award, Building2, Landmark, Youtube, Music, Ship, Route, Droplets, Play, CheckCircle2 } from 'lucide-react';
import Lottie from 'lottie-react';

const Page = () => {
	// --- STATE AND HOOKS: MUST BE INSIDE THE COMPONENT FUNCTION ---
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showHeroContent, setShowHeroContent] = useState(false); 
	const [isLight, setIsLight] = useState(false); // Navbar B/W toggle
	const [splashVisible, setSplashVisible] = useState(true);
	const [activeTourIndex, setActiveTourIndex] = useState(0); 
	// NEW STATE: To track which Exclusive Package is currently displayed/zoomed
	const [activePackageIndex, setActivePackageIndex] = useState(0); 
	// State for selected destination region
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
	const [showAllDestinations, setShowAllDestinations] = useState(false);
	const [showAllPackages, setShowAllPackages] = useState(false);
	const [searchForm, setSearchForm] = useState({
		whenToGo: '',
		whatToDo: '',
		whereToGo: ''
	});

	// Tour Packages Data
	const allTourPackages = [
		{ name: 'Hunza – 5 Days Tour Package', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800', description: 'Majestic valleys and ancient culture' },
		{ name: 'Skardu – 6 Days Tour Package', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', description: 'Gateway to K2 and Baltoro Glacier' },
		{ name: 'Swat & Kalam – 4 Days Tour Package', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', description: 'Switzerland of Pakistan' },
		{ name: 'Murree & Nathia Gali – 2 Days Tour Package', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800', description: 'Colonial hill station charm' },
		{ name: 'Naran Kaghan – 3 Days Tour Package', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', description: 'Alpine lakes and meadows' },
		{ name: 'Azad Kashmir – 4 Days Tour Package', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800', description: 'Paradise on earth' },
		{ name: 'Fairy Meadows – 3 Days Trek Package', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', description: 'Base camp to Nanga Parbat' },
		{ name: 'Chitral & Kalash – 5 Days Tour Package', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800', description: 'Ancient culture and traditions' },
		{ name: 'Gwadar & Kund Malir – 2 Days Tour Package', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', description: 'Coastal beauty and beaches' },
	];

	// Get visible packages based on state
	const visibleTourPackages = showAllPackages ? allTourPackages : allTourPackages.slice(0, 6);

	// WhatsApp click handler
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/923311438251', '_blank');
	};

	// Lottie Animation Data (Simple travel icon animation)
	const travelAnimationData = {
		"v": "5.7.4",
		"fr": 30,
		"ip": 0,
		"op": 60,
		"w": 100,
		"h": 100,
		"nm": "Travel Icon",
		"ddd": 0,
		"assets": [],
		"layers": [
			{
				"ddd": 0,
				"ind": 1,
				"ty": 4,
				"nm": "Plane",
				"sr": 1,
				"ks": {
					"o": {"a": 0, "k": 100},
					"r": {"a": 1, "k": [
						{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
						{"t": 60, "s": [360]}
					]},
					"p": {"a": 0, "k": [50, 50, 0]},
					"a": {"a": 0, "k": [0, 0, 0]},
					"s": {"a": 1, "k": [
						{"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 0, "s": [100, 100, 100]},
						{"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 30, "s": [120, 120, 100]},
						{"t": 60, "s": [100, 100, 100]}
					]}
				},
				"ao": 0,
				"shapes": [
					{
						"ty": "gr",
						"it": [
							{
								"ind": 0,
								"ty": "sh",
								"ks": {
									"a": 0,
									"k": {
										"i": [[0, 0], [0, 0], [0, 0], [0, 0]],
										"o": [[0, 0], [0, 0], [0, 0], [0, 0]],
										"v": [[-15, -5], [15, 0], [-15, 5], [-5, 0]],
										"c": true
									}
								}
							},
							{
								"ty": "fl",
								"c": {"a": 0, "k": [0.976, 0.588, 0.129, 1]},
								"o": {"a": 0, "k": 100}
							}
						]
					}
				],
				"ip": 0,
				"op": 60,
				"st": 0
			}
		]
	};

	const destinationData = [
		{ name: 'Hunza', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
		{ name: 'Skardu', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
		{ name: 'Gilgit', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
		{ name: 'Lahore', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
		{ name: 'Islamabad', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
		{ name: 'Karachi', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
		{ name: 'Swat', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
		{ name: 'Naran Kaghan', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
		{ name: 'Gwadar', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
		{ name: 'Neelum Valley', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
		{ name: 'Fairy Meadows', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
		{ name: 'Chitral', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
		{ name: 'Bahawalpur', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
		{ name: 'Murree', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800' },
		{ name: 'Khaplu', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800' },
	];

	const visibleDestinations = showAllDestinations ? destinationData : destinationData.slice(0, 10);

	const mountainAnimationData = {
		"v": "5.7.4",
		"fr": 30,
		"ip": 0,
		"op": 90,
		"w": 100,
		"h": 100,
		"nm": "Mountain",
		"ddd": 0,
		"assets": [],
		"layers": [
			{
				"ddd": 0,
				"ind": 1,
				"ty": 4,
				"nm": "Mountain",
				"sr": 1,
				"ks": {
					"o": {"a": 1, "k": [
						{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
						{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 15, "s": [100]},
						{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 75, "s": [100]},
						{"t": 90, "s": [0]}
					]},
					"r": {"a": 0, "k": 0},
					"p": {"a": 0, "k": [50, 60, 0]},
					"a": {"a": 0, "k": [0, 0, 0]},
					"s": {"a": 1, "k": [
						{"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 0, "s": [0, 0, 100]},
						{"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 15, "s": [100, 100, 100]},
						{"t": 75, "s": [100, 100, 100]}
					]}
				},
				"ao": 0,
				"shapes": [
					{
						"ty": "gr",
						"it": [
							{
								"ind": 0,
								"ty": "sh",
								"ks": {
									"a": 0,
									"k": {
										"i": [[0, 0], [0, 0], [0, 0]],
										"o": [[0, 0], [0, 0], [0, 0]],
										"v": [[0, -20], [-20, 20], [20, 20]],
										"c": true
									}
								}
							},
							{
								"ty": "fl",
								"c": {"a": 0, "k": [0.129, 0.588, 0.976, 1]},
								"o": {"a": 0, "k": 100}
							}
						]
					}
				],
				"ip": 0,
				"op": 90,
				"st": 0
			}
		]
	}; 

	// AOS initialization removed - animations removed for better performance

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

	// Professional scroll reveal animations using Intersection Observer
	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -100px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					// Optionally unobserve after animation
					// observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		// Observe all scroll-reveal elements
		const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-fade-up, .scroll-reveal-fade-in, .scroll-reveal-slide-left, .scroll-reveal-slide-right, .scroll-reveal-scale');
		revealElements.forEach((el) => observer.observe(el));

		return () => {
			revealElements.forEach((el) => observer.unobserve(el));
		};
	}, []);

	// no-op removed scroll ruler
	// --- Theme Colors and Constants ---
	const primaryOrange = '#f99621'; // Main accent color
	const secondaryBlack = '#211f20'; // Main background/text color
	
	// --- Animated Background Components ---
	const AnimatedBackground = ({ variant = 'default' }: { variant?: 'default' | 'orange' | 'dark' | 'light' }) => {
		// All background animations removed (yellow lines and grey circles)
		return null;
	};
	
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

	// Simple animated route background for dark sections - Removed lines and circles
	const MapRouteBackground = () => {
		// Route lines and circles removed
		return null;
	};

	// Simple light background for white sections - Removed background shapes
	const LightMapBackground = () => {
		// Background shapes removed
		return null;
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
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
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
		<div className="relative min-h-screen font-sans overflow-x-hidden">
			
		{/* --- 1. Two-Tier Navbar --- */}
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
						{/* Social Media Icons - Round with Hover Effects */}
						<div className="flex items-center gap-0.5">
							{/* Facebook */}
							<a 
								href="https://www.facebook.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="Facebook"
							>
								<Facebook className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* Instagram */}
							<a 
								href="https://www.instagram.com/nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="Instagram"
							>
								<Instagram className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* YouTube */}
							<a 
								href="https://www.youtube.com/@nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="YouTube"
							>
								<Youtube className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform stroke-[#211f20]" />
							</a>
							
							{/* TikTok */}
							<a 
								href="https://www.tiktok.com/@nayetalash" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="group w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f99621]/50"
								aria-label="TikTok"
							>
								<svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#211f20] group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
									<path d="M19.321 5.281a7.286 7.286 0 0 1-.744 1.695 7.246 7.246 0 0 1-6.281 3.819v5.357A7.452 7.452 0 0 1 6 7.116V5.5a1 1 0 0 1 2 0v1.616A5.45 5.45 0 0 0 12.5 18.5a5.177 5.177 0 0 0 5.321-5.123v-7.01c0-.314.15-.587.386-.765a1.24 1.24 0 0 1 .814-.243 7.314 7.314 0 0 0 5.869-2.864 1 1 0 0 1 1.415-1.414A9.318 9.318 0 0 1 19.32 5.28z"/>
								</svg>
							</a>
				</div>

						{/* Customize A Tour Button - Round */}
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

		{/* Main Navigation Bar - Reduced Height */}
		<header className="fixed top-[32px] sm:top-[36px] left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-[0_6px_12px_rgba(0,0,0,0.06)] transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-2 sm:py-2.5">
					{/* Logo */}
					<div className="flex items-center">
						<Image 
							src={logoImage}
							alt="Nayi Talaash Logo"
							width={160}
							height={50}
							className="h-10 sm:h-12 w-auto object-contain"
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
						
						<a href="/about" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">ABOUT US</a>
						<a href="/contact" className="px-3 py-2 text-sm font-semibold text-[#211f20] hover:text-[#f99621] transition-colors">CONTACT US</a>
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
					<a href="#home" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
						HOME
					</a>
					<a href="#tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
						PAKISTAN TOURS
					</a>
					<a href="#city-tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
						CITY TOURS
					</a>
					<a href="#group-tours" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
						GROUP TOUR
					</a>
					<a href="#destination" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
						DESTINATION
					</a>
					<a href="/about" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						ABOUT US
					</a>
					<a href="/contact" className="flex items-center px-4 py-3 text-lg font-semibold text-[#211f20] hover:text-[#f99621] hover:bg-[#f99621]/5 transition-all rounded-lg" onClick={() => setIsMenuOpen(false)}>
						CONTACT US
					</a>
					</nav>

					{/* Footer Info in Menu */}
			<div className="mt-auto pt-6 border-t border-gray-300">
				<div className="flex items-center gap-3 mb-3">
					<a href="https://www.facebook.com/nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
						<Facebook className="w-5 h-5 text-white stroke-[white]" />
					</a>
					<a href="https://www.instagram.com/nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
						<Instagram className="w-5 h-5 text-white stroke-[white]" />
					</a>
					<a href="https://www.youtube.com/@nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
						<Youtube className="w-5 h-5 text-white stroke-[white]" />
					</a>
					<a href="https://www.tiktok.com/@nayetalash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f99621] to-[#e8851a] flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg">
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
		<section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-[100px] sm:pt-[104px]" style={{ backgroundColor: secondaryBlack }}>
			{/* Background Image */}
			<div 
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ 
					backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
						<span className="font-autography hero-text-reveal" style={{ display: 'inline-block' }}>
							Discover the Unseen.
						</span>
						<br />
						<span className="block mt-4 hero-text-reveal hero-text-delay-1" 
							  style={{ 
								  color: primaryOrange,
								  display: 'inline-block'
							  }}>
							Explore With Nayi Talaash.
						</span>
					</h1>
					<p className="text-base sm:text-sm md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed hero-text-reveal hero-text-delay-2">
						Your one stop travel partner for unforgettable cultural, historical, and scenic journeys across Pakistan.
					</p>
					
					{/* Search Form */}
					<div className="mt-8 hero-text-reveal hero-text-delay-3 max-w-4xl mx-auto">
						<div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
							{/* When to go */}
							<div className="relative flex-1 w-full sm:w-auto min-w-[200px]">
								<select
									value={searchForm.whenToGo}
									onChange={(e) => setSearchForm({...searchForm, whenToGo: e.target.value})}
									className="w-full px-4 py-3 rounded-lg text-sm font-medium appearance-none bg-white border-2 border-transparent focus:border-[#f99621] focus:outline-none transition-all cursor-pointer shadow-lg"
									style={{ color: secondaryBlack }}
								>
									<option value="">When to go?</option>
									<option value="spring">Spring (March - May)</option>
									<option value="summer">Summer (June - August)</option>
									<option value="autumn">Autumn (September - November)</option>
									<option value="winter">Winter (December - February)</option>
								</select>
								<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: `${secondaryBlack}60` }} />
							</div>

							{/* What to do */}
							<div className="relative flex-1 w-full sm:w-auto min-w-[200px]">
								<select
									value={searchForm.whatToDo}
									onChange={(e) => setSearchForm({...searchForm, whatToDo: e.target.value})}
									className="w-full px-4 py-3 rounded-lg text-sm font-medium appearance-none bg-white border-2 border-transparent focus:border-[#f99621] focus:outline-none transition-all cursor-pointer shadow-lg"
									style={{ color: secondaryBlack }}
								>
									<option value="">What to do?</option>
									<option value="culture">Cultural Tours</option>
									<option value="adventure">Adventure Tours</option>
									<option value="family">Family Tours</option>
									<option value="honeymoon">Honeymoon Trips</option>
									<option value="group">Group Tours</option>
									<option value="religious">Religious Tours</option>
								</select>
								<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: `${secondaryBlack}60` }} />
							</div>

							{/* Where to go */}
							<div className="relative flex-1 w-full sm:w-auto min-w-[200px]">
								<select
									value={searchForm.whereToGo}
									onChange={(e) => setSearchForm({...searchForm, whereToGo: e.target.value})}
									className="w-full px-4 py-3 rounded-lg text-sm font-medium appearance-none bg-white border-2 border-transparent focus:border-[#f99621] focus:outline-none transition-all cursor-pointer shadow-lg"
									style={{ color: secondaryBlack }}
								>
									<option value="">Where to go?</option>
									<option value="hunza">Hunza Valley</option>
									<option value="skardu">Skardu</option>
									<option value="swat">Swat</option>
									<option value="lahore">Lahore</option>
									<option value="karachi">Karachi</option>
									<option value="islamabad">Islamabad</option>
									<option value="gilgit">Gilgit</option>
									<option value="naran">Naran Kaghan</option>
								</select>
								<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: `${secondaryBlack}60` }} />
							</div>

							{/* Search Button */}
							<button
								onClick={() => {
									// Handle search functionality
									console.log('Search:', searchForm);
									handleWhatsAppClick();
								}}
								className="px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-base"
								style={{ 
									backgroundColor: primaryOrange, 
									color: secondaryBlack
								}}
							>
								<Search className="w-5 h-5" />
								<span>Search</span>
							</button>
						</div>
					</div>

					{/* <div className="mt-6 hero-text-reveal hero-text-delay-3">
						<button 
							onClick={handleWhatsAppClick}
							className="px-8 py-3 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-base btn-ripple"
							style={{ 
								backgroundColor: primaryOrange, 
								color: secondaryBlack
							}}
						>
							Customize Your Tour
						</button>
					</div> */}
				</div>
			</div>
		</section>

		{/* ====================== FASCINATING FACTS ABOUT PAKISTAN ====================== */}
		<section className="py-16 md:py-24 bg-white relative overflow-x-hidden">
			{/* Animated Background */}
			<AnimatedBackground variant="light" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
				<div className="text-center mb-16 scroll-reveal-fade-up px-2 sm:px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
							color: primaryOrange,
							paddingLeft: '8px',
							paddingRight: '8px',
							display: 'inline-block'
						}}>
							Pakistan's Enchanting 
						</span>
						<span className="block mt-2" style={{ 
							color: secondaryBlack
						}}>
							Natural Wonders
						</span>
					</h2>
					<p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: `${secondaryBlack}90` }}>
						Pakistan is home to one of the richest natural landscapes in the world from majestic mountain ranges to vibrant cultural heritage spread across every region.
					</p>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{/* Card 1: World's Highest Mountain Ranges */}
					<div className="group bg-white border-2 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] card-hover relative overflow-hidden scroll-reveal-scale stagger-delay-1" 
						 style={{ borderColor: `${primaryOrange}30` }}
					>
						{/* Theme Background Effect */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
							<div className="w-full h-full" style={{ background: `linear-gradient(45deg, ${primaryOrange}, transparent, ${primaryOrange})` }}></div>
						</div>
						<div className="relative z-10">
							<div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg"
								 style={{ backgroundColor: primaryOrange }}>
								<Mountain className="w-7 h-7" style={{ color: secondaryBlack }} strokeWidth={1.5} />
							</div>
							<h3 className="text-sm font-bold mb-3 transition-colors duration-300 transform -rotate-1" 
								style={{ color: secondaryBlack }}>World&apos;s Highest Mountain Ranges</h3>
							<p className="leading-relaxed text-xs" style={{ color: `${secondaryBlack}80` }}>
								Pakistan hosts 5 of the world&apos;s 14 highest peaks, including K2 a paradise for adventure seekers and nature lovers.
							</p>
						</div>
					</div>

					{/* Card 2: World's Largest Deep-Sea Port */}
					<div className="group bg-white border-2 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] card-hover relative overflow-hidden scroll-reveal-scale stagger-delay-2" 
						 style={{ borderColor: `${primaryOrange}30` }}
					>
						{/* Theme Background Effect */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
							<div className="w-full h-full" style={{ background: `linear-gradient(-45deg, ${primaryOrange}, transparent, ${primaryOrange})` }}></div>
						</div>
						<div className="relative z-10">
							<div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg"
								 style={{ backgroundColor: secondaryBlack }}>
								<Ship className="w-7 h-7" style={{ color: primaryOrange }} strokeWidth={1.5} />
							</div>
							<h3 className="text-sm font-bold mb-3 transition-colors duration-300 transform rotate-1" 
								style={{ color: secondaryBlack }}>World&apos;s Largest Deep-Sea Port</h3>
							<p className="leading-relaxed text-xs" style={{ color: `${secondaryBlack}80` }}>
								Gwadar stands as one of the deepest sea ports globally, reshaping trade routes and offering travelers pristine beaches and breathtaking coastal drives.
							</p>
						</div>
					</div>

					{/* Card 3: World's Highest Paved Road */}
					<div className="group bg-white border-2 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] card-hover relative overflow-hidden scroll-reveal-scale stagger-delay-3" 
						 style={{ borderColor: `${primaryOrange}30` }}
					>
						{/* Theme Background Effect */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
							<div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${primaryOrange}, transparent, ${primaryOrange})` }}></div>
						</div>
						<div className="relative z-10">
							<div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg"
								 style={{ backgroundColor: primaryOrange }}>
								<Route className="w-7 h-7" style={{ color: secondaryBlack }} strokeWidth={1.5} />
							</div>
							<h3 className="text-sm font-bold mb-3 transition-colors duration-300 transform -rotate-1" 
								style={{ color: secondaryBlack }}>World&apos;s Highest Paved Road</h3>
							<p className="leading-relaxed text-xs" style={{ color: `${secondaryBlack}80` }}>
								The legendary Karakoram Highway is the highest paved international road on Earth a once-in-a-lifetime driving experience through mountains, rivers, and glaciers.
							</p>
						</div>
					</div>

					{/* Card 4: Cultural Heritage */}
					<div className="group bg-white border-2 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] card-hover relative overflow-hidden scroll-reveal-scale stagger-delay-4" 
						 style={{ borderColor: `${primaryOrange}30` }}
					>
						{/* Theme Background Effect */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
							<div className="w-full h-full" style={{ background: `linear-gradient(225deg, ${primaryOrange}, transparent, ${primaryOrange})` }}></div>
						</div>
						<div className="relative z-10">
							<div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg"
								 style={{ backgroundColor: secondaryBlack }}>
								<Landmark className="w-7 h-7" style={{ color: primaryOrange }} strokeWidth={1.5} />
							</div>
							<h3 className="text-sm font-bold mb-3 transition-colors duration-300 transform rotate-1" 
								style={{ color: secondaryBlack }}>Cultural Heritage Like Nowhere Else</h3>
							<p className="leading-relaxed text-xs" style={{ color: `${secondaryBlack}80` }}>
								From ancient civilizations like Mohenjo Daro to Mughal masterpieces, Pakistan&apos;s history spans thousands of years of art, culture, and innovation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
			
		{/* ====================== DISCOVER PAKISTAN ====================== */}
		<section className="py-5 md:py-6 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-[1]">
				<AnimatedBackground variant="orange" />
			</div>

			<div className="container mx-auto px-4 max-w-7xl relative z-[2]">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
					{/* Left: Pakistan Map */}
					<div className="relative scroll-reveal-slide-left">
						<div className="relative group max-w-xs mx-auto lg:max-w-sm w-full">
							<div className="relative w-full" style={{ paddingBottom: '132%' }}>
								<Image 
									src="/images/map-2.png"
									alt="Pakistan Map"
									width={250}
									height={330}
									className="absolute top-0 left-0 w-full h-full object-contain transform group-hover:scale-110 transition-all duration-700 filter group-hover:brightness-110"
								/>
								{/* Enhanced Glowing dots on map with travel destinations */}
								<div className="absolute top-[10%] left-[48%] group z-10" style={{ transform: 'translate(-50%, -50%)' }}>
									<div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg ring-2 ring-white/50"></div>
									<div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										Hunza Valley
									</div>
								</div>
								<div className="absolute top-[40%] left-[53%] group z-10" style={{ animationDelay: '0.5s', transform: 'translate(-50%, -50%)' }}>
									<div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg ring-2 ring-white/50"></div>
									<div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										Islamabad
									</div>
								</div>
								<div className="absolute top-[54%] left-[70%] group z-10" style={{ animationDelay: '1s', transform: 'translate(-50%, -50%)' }}>
									<div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg ring-2 ring-white/50"></div>
									<div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										Lahore
									</div>
								</div>
								<div className="absolute top-[74%] left-[62%] group z-10" style={{ animationDelay: '1.5s', transform: 'translate(-50%, -50%)' }}>
									<div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg ring-2 ring-white/50"></div>
									<div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										Karachi
									</div>
								</div>
								<div className="absolute top-[85%] left-[25%] group z-10" style={{ animationDelay: '2s', transform: 'translate(-50%, -50%)' }}>
									<div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg ring-2 ring-white/50"></div>
									<div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										Gwadar
									</div>
								</div>
							</div>
							{/* Connecting lines between cities */}
							<svg className="absolute inset-0 w-full h-full pointer-events-none">
								<path d="M 33% 25%, 50% 50%, 50% 75%, 25% 33%, 66% 66%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
							</svg>
						</div>
						</div>

					{/* Right: Content */}
					<div className="text-white scroll-reveal-slide-right">
						<div className="mb-3">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
									color: 'white',
									textShadow: '2px 2px 0px rgba(249, 150, 33, 0.5), 4px 4px 0px rgba(0, 0, 0, 0.3)'
								}}>
									Discover
								</span>
								<span className="block mt-1" style={{ 
									color: primaryOrange
								}}>
									Pakistan
								</span>
							</h2>
						</div>
						<p className="text-sm md:text-base leading-snug mb-3 text-white">
							Pakistan is a land of unmatched beauty, culture, and hospitality. With its mix of vibrant cities, serene valleys, vast deserts, and unspoiled coastlines, the country invites travelers to experience its rich traditions, diverse cuisines, and breathtaking landscapes.
						</p>
						<p className="text-sm md:text-base leading-snug mb-4 text-white opacity-90">
							Whether you dream of standing before snow capped peaks, exploring historic landmarks, or immersing yourself in the warmth of local communities Nayi Talaash is here to make your journey smooth, affordable, and memorable.
						</p>
						<button className="px-6 py-2.5 font-bold rounded-full border-2 transition-all transform hover:scale-105 text-sm" 
								style={{ backgroundColor: primaryOrange, color: secondaryBlack, borderColor: primaryOrange }}
								onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = primaryOrange; }}
								onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = primaryOrange; e.currentTarget.style.color = secondaryBlack; }}
>
							Explore More
						</button>
					</div>
					</div>
				</div>
			</section>
			
		{/* ====================== WHERE TO NEXT? ====================== */}
		<section className="py-16 md:py-24 bg-white relative overflow-x-hidden">
			{/* Animated Background */}
			<AnimatedBackground variant="default" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 overflow-x-hidden">
				<div className="mb-12">
					<div className="text-center mb-8 scroll-reveal-fade-up">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
								color: primaryOrange
							}}>
								Pakistan: The Traveler&apos;s 
							</span>
							<span className="block mt-2" style={{ 
								color: secondaryBlack
							}}>
								Hidden Gem
							</span>
						</h2>
					</div>
				</div>
							
				{/* Destination Cards Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
					{visibleDestinations.map((dest, idx) => (
						<div key={idx} className="relative group cursor-pointer" data-aos-delay={idx * 50}>
							<div className="relative h-40 rounded-xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-orange-200" 
								 style={{ borderColor: `${primaryOrange}20` }}>
								<Image 
									src={dest.image}
									alt={dest.name}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/85 transition-all"></div>
								<div className="absolute bottom-3 left-3 text-white font-bold text-sm transform group-hover:translate-y-[-4px] transition-transform"
									 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
									{dest.name}
								</div>
							</div>
						</div>
					))}
				</div>
				
				<div className="text-center">
					<button
						type="button"
						className="px-8 py-3 border-2 rounded-full font-semibold hover:scale-110 transition-all duration-300 transform hover:rotate-1" 
						style={{ borderColor: primaryOrange, color: primaryOrange, backgroundColor: 'transparent' }}
						onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryOrange; e.currentTarget.style.color = secondaryBlack; }}
						onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = primaryOrange; }}
						onClick={(e) => { e.preventDefault(); setShowAllDestinations((prev) => !prev); }}
					>
						{showAllDestinations ? 'See Less' : 'See More'}
					</button>
				</div>

				{/* Floating WhatsApp Icon with Theme Colors */}
				<div className="fixed right-4 bottom-4 z-50">
					<button 
						onClick={handleWhatsAppClick}
						className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 pulse-glow relative overflow-hidden group"
						style={{ backgroundColor: primaryOrange }}
					>
						<MessageCircle className="w-8 h-8 z-10" style={{ color: secondaryBlack }} />
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ backgroundColor: secondaryBlack }}></div>
						<div className="absolute -top-1 -right-1 w-4 h-4">
							<Lottie 
								animationData={travelAnimationData} 
								loop={true}
								style={{ width: '100%', height: '100%' }}
							/>
								</div>
					</button>
							</div>
						</div>
		</section>

		{/* ====================== PAKISTAN TOUR PACKAGES ====================== */}
		<section className="py-16 md:py-24 bg-white relative overflow-x-hidden">
			{/* Animated Background */}
			<AnimatedBackground variant="light" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 overflow-x-hidden">
				<div className="text-center mb-12 scroll-reveal-fade-up">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
							color: primaryOrange
						}}>
							Pakistan Tour Packages
						</span>
					</h2>
					<h3 className="text-3xl md:text-4xl font-bold" 
						style={{ color: secondaryBlack }}>
						<span className="block">
							Discover Pakistan With Nayi Talaash
						</span>
					</h3>
				</div>

				{/* Enhanced Tour Packages Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
					{visibleTourPackages.map((tour, idx) => (
							<div key={`${tour.name}-${idx}`} className="relative group cursor-pointer perspective-1000 scroll-reveal-scale" style={{ transitionDelay: `${idx * 0.1}s` }}>
								<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-2xl group-hover:shadow-[#f99621]/30 card-hover">
									{/* 3D Card Background */}
									<div className="absolute inset-0 bg-gradient-to-br from-[#f99621]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
									
									<Image 
										src={tour.image}
										alt={tour.name}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110 img-hover-scale"
									/>
									
									{/* Enhanced Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
									
									{/* Floating Elements */}
									<div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#f99621]/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180">
										<Mountain className="w-6 h-6 text-white" />
									</div>
									
									{/* Content */}
									<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-12px] transition-all duration-500">
										<div className="mb-2">
											<div className="inline-block px-2 py-0.5 bg-[#f99621]/80 backdrop-blur-sm rounded-full text-white text-[10px] font-semibold uppercase tracking-wider transform group-hover:scale-110 transition-transform duration-300">
												Tour Package
											</div>
										</div>
										<h3 className="text-white font-bold text-lg mb-1 transform group-hover:translate-x-2 transition-transform duration-300">
											{tour.name}
										</h3>
										<p className="text-gray-200 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
											{tour.description}
										</p>
										<div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
											<button className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors transform hover:scale-105"
													style={{ backgroundColor: primaryOrange, color: secondaryBlack }}>
												Explore Now
											</button>
										</div>
									</div>
									
									{/* 3D Border Effect */}
									<div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500" 
										 style={{ borderColor: `${primaryOrange}30` }}></div>
								</div>
							</div>
					))}
				</div>
				
				<div className="text-center">
					<button 
						type="button"
						onClick={(e) => { e.preventDefault(); setShowAllPackages(!showAllPackages); }}
						className="px-10 py-4 border-2 rounded-full font-bold hover:scale-110 transition-all duration-300 transform hover:rotate-1 text-lg" 
						style={{ borderColor: primaryOrange, color: primaryOrange, backgroundColor: 'transparent' }}
						onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryOrange; e.currentTarget.style.color = secondaryBlack; }}
						onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = primaryOrange; }}
					>
						{showAllPackages ? 'Show Less' : 'View All Packages'}
					</button>
				</div>
			</div>
		</section>

		{/* ====================== FAMILY TOUR & HONEYMOON PACKAGES ====================== */}
		<section className="py-16 md:py-24 bg-white relative overflow-hidden">
			{/* Animated Background */}
			<AnimatedBackground variant="default" />
			
			<div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10 overflow-x-hidden">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left: Honeymoon Trips - Polaroid Style */}
					<div className="relative flex justify-center">
						<div className="relative max-w-sm" style={{ transform: 'rotate(-2deg)' }}>
							{/* Polaroid Frame */}
							<div className="bg-white p-3 shadow-2xl relative" style={{ border: '8px solid white', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
								<Image 
									src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800"
									alt="Honeymoon Trip"
									width={350}
									height={300}
									className="w-full h-auto object-cover"
								/>
								{/* Phone booking bubble overlay - Left mid corner */}
								<div className="absolute top-1/2 left-4 bg-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 z-10" style={{ transform: 'translateY(-50%) rotate(2deg)' }}>
									<Phone className="w-5 h-5" style={{ color: primaryOrange }} />
									<div className="flex flex-col">
										<span className="text-xs font-semibold" style={{ color: secondaryBlack }}>BOOK YOUR TOURS NOW</span>
										<span className="text-base font-bold" style={{ color: secondaryBlack }}>+92 331 438251</span>
									</div>
								</div>
							</div>
							{/* "Honeymoon Trip" text below polaroid */}
							<p className="font-autography text-xl text-center mt-3" style={{ color: secondaryBlack, transform: 'rotate(2deg)' }}>
								Honeymoon Trip
							</p>
						</div>
					</div>

					{/* Right: Family Tour Packages */}
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-8"> 
							<span style={{ color: primaryOrange }}>Family</span>{' '}
							<span style={{ color: secondaryBlack }}>Tour Packages</span>
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
									<CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: primaryOrange }} />
									<span className="text-base" style={{ color: '#6b7280' }}>
										{item}
									</span>
								</li>
							))}
						</ul>
						
						<Link 
							href="/contact"
							className="inline-block text-lg font-bold uppercase tracking-wide transition-colors hover:text-[#f99621]" 
							style={{ color: secondaryBlack }}
						>
							GET YOUR FREE QUOTE NOW!
						</Link>
					</div>
				</div>
			</div>
		</section>

		{/* ====================== WHY TRAVEL WITH US & VIDEO ====================== */}
		<section className="py-16 md:py-24 bg-gray-100 overflow-x-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-x-hidden">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left: Why Travel With Us */}
					<div className="scroll-reveal-slide-left">
						<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: secondaryBlack, fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
							Why Travel With Us?
						</h2>
						<p className="mb-6 text-base" style={{ color: '#6b7280', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
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
								<li key={idx} className="flex items-center gap-3" data-aos-delay={idx * 100 + 300}>
									<CheckCircle2 className="w-5 h-5 transform hover:rotate-12 transition-transform" style={{ color: primaryOrange }} />
									<span className="hover:text-[#f99621] transition-colors" style={{ color: '#6b7280', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>{item}</span>
								</li>
							))}
						</ul>
						<button className="px-6 py-3 border-2 rounded-lg font-semibold hover:scale-110 transition-transform btn-ripple" style={{ borderColor: primaryOrange, color: primaryOrange, fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
							Learn More
						</button>
					</div>

					{/* Right: Video Embed - Replace YOUR_VIDEO_ID with your YouTube video ID */}
					<div className="scroll-reveal-slide-right">
						<div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl img-hover-scale">
							<iframe 
								src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&modestbranding=1&rel=0"
								title="Video"
								className="absolute inset-0 w-full h-full"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								frameBorder="0"
							></iframe>
						</div>
					</div>
					</div>
				</div>
			</section>
			
		{/* ====================== PUBLIC GROUP TOURS ====================== */}
		<section className="py-16 md:py-24 bg-white overflow-x-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-x-hidden">
				<div className="mb-8 scroll-reveal-fade-up text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
							color: primaryOrange
						}}>
							Our Weekly
						</span>
						<span className="block mt-2" style={{ 
							color: secondaryBlack
						}}>
							Public Group Tours
						</span>
					</h2>
					<p className="text-base max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
						A Public Group Tour is open to the general public and is usually offered on a set day and time. It is suitable for people who want to meet new people and travel at a lower cost than a private tour.
					</p>
					</div>

				{/* Enhanced Tour Cards with 3D Effects */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{[
						{ title: '2 DAYS MALAM JABBA SWAT GROUP TOUR', price: 'From Rs 11,000', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', duration: '2 Days' },
						{ title: '5 DAYS HUNZA, NALTAR, AND KHUNJERAB PUBLIC GROUP TOUR', price: 'From Rs 25,000', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800', duration: '5 Days' },
						{ title: '3 DAYS KALAM AND MALAM JABBA SWAT GROUP TOUR', price: 'From Rs 16,000', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', duration: '3 Days' },
						{ title: '3 DAYS ARANGKEL NEELUM VALLEY KASHMIR GROUP TOUR', price: 'From Rs. 16,000', image: 'https://images.unsplash.com/photo-1588416389013-78c69e4e52d8?q=80&w=800', duration: '3 Days' },
					].map((tour, idx) => (
						<div key={idx} className="relative group cursor-pointer perspective-1000" data-aos-delay={idx * 150}>
							<div className="relative h-64 rounded-2xl overflow-hidden transform-gpu transition-all duration-700 hover:scale-110 hover:rotate-y-8 hover:rotate-x-3 shadow-2xl hover:shadow-3xl group-hover:shadow-[#f99621]/25">
								{/* 3D Floating Badge */}
								<div className="absolute top-4 left-4 z-20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
									<div className="px-3 py-1 bg-[#f99621] text-white text-xs font-bold rounded-full shadow-lg">
										{tour.duration}
									</div>
								</div>
								
								{/* Price Badge */}
								<div className="absolute top-4 right-4 z-20 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
									<div className="px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
										GROUP TOUR
									</div>
								</div>
								
								<Image 
									src={tour.image}
									alt={tour.title}
									fill
									className="object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110"
								/>
								
								{/* Enhanced Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent group-hover:from-black/98 transition-all duration-500"></div>
								
								{/* Content */}
								<div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-[-16px] transition-all duration-500">
									<h3 className="text-white font-bold text-base mb-2 leading-tight transform group-hover:translate-x-2 transition-transform duration-300">
										{tour.title}
									</h3>
									<div className="flex items-center justify-between">
										<p className="text-[#f99621] font-bold text-base transform group-hover:scale-110 transition-transform duration-300">
											{tour.price}
										</p>
										<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
											<button className="px-4 py-2 bg-[#f99621] text-white rounded-lg text-sm font-semibold hover:bg-[#e8851a] transition-colors transform hover:scale-105">
												Book Now
											</button>
										</div>
									</div>
								</div>

								{/* 3D Border Effect */}
								<div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#f99621]/40 transition-all duration-500"></div>
								
								{/* Shine Effect */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-1000"></div>
								</div>
							</div>
						</div>
						))}
					</div>
					
			</div>
		</section>
			
		{/* ====================== TESTIMONIALS ====================== */}
		<section className="py-16 md:py-24 bg-white overflow-x-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-x-hidden">
				<div className="mb-8 scroll-reveal-fade-up text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
							color: primaryOrange
						}}>
							Testimonials
						</span>
						<span className="block mt-2" style={{ 
							color: secondaryBlack
						}}>
							What Our Clients Have To Say?
						</span>
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Testimonial 1 */}
					<div className="bg-white border-2 border-gray-200 rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 card-hover scroll-reveal-scale stagger-delay-1">
						<div className="flex items-center mb-3">
							<div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-3 transform hover:rotate-12 transition-transform">
								<Image 
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
									alt="Muhammad Nauraiz Mushtaq"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<p className="text-gray-600 italic mb-2 text-sm">
									&ldquo;Outstanding services provided by NatureHikePakistan. Highly recommended!&rdquo;
								</p>
								<p className="font-bold text-[#211f20] text-sm">MUHAMMAD NAURAIZ MUSHTAQ</p>
							</div>
						</div>
					</div>

					{/* Testimonial 2 */}
					<div className="bg-white border-2 border-gray-200 rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
						<div className="flex items-center mb-3">
							<div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-3 transform hover:rotate-12 transition-transform">
								<Image 
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
									alt="Ali Rehman"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<p className="text-gray-600 italic mb-2 text-sm">
									&ldquo;We chose Nature Hike Pakistan for our vacations. Beautiful views and excellent customer service.&rdquo;
								</p>
								<p className="font-bold text-[#211f20] text-sm">ALI REHMAN</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* ====================== WHERE ARE WE LOCATED? ====================== */}
		<section className="py-16 md:py-24 bg-white overflow-x-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-x-hidden">
				<div className="mb-8 scroll-reveal-fade-up text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="font-autography text-2xl sm:text-3xl md:text-4xl block" style={{ 
							color: primaryOrange
						}}>
							Find us
						</span>
						<span className="block mt-2" style={{ 
							color: secondaryBlack
						}}>
							Where Are We Located?
						</span>
					</h2>
				</div>

				<div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
					<iframe
						src="https://www.google.com/maps?q=F-36+PECHS+BLOCK+6,+Karachi,+Pakistan&output=embed"
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
		<section className="py-16 md:py-24 bg-white relative overflow-hidden">
			{/* Animated Background */}
			<AnimatedBackground variant="light" />
			
			<div className="container mx-auto px-4 max-w-7xl relative z-10">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold" style={{ color: secondaryBlack }}>Worked With / Featured On</h2>
					<button className="px-4 py-2 border-2 rounded-lg font-semibold hover:scale-110 transition-transform" 
							style={{ borderColor: primaryOrange, color: primaryOrange }} 
>
						See All
					</button>
				</div>

				<div className="grid grid-cols-3 md:grid-cols-6 gap-8">
					{['UNESCO', 'USAID', 'The World Bank', 'UN WOMEN', 'ALJAZEERA', 'FINANCIAL TIMES'].map((org, idx) => (
						<div key={idx} className="flex items-center justify-center h-20 rounded-lg hover:scale-110 transition-all duration-300 transform hover:rotate-2 border-2" 
							 style={{ backgroundColor: `${primaryOrange}05`, borderColor: `${primaryOrange}20` }}
 data-aos-delay={idx * 100}>
							<span className="text-sm font-semibold transition-colors" 
								  style={{ color: secondaryBlack }}
								  onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange}
								  onMouseLeave={(e) => e.currentTarget.style.color = secondaryBlack}>
								{org}
							</span>
						</div>
						))}
					</div>
			</div>
		</section>

		{/* ====================== READY FOR TOUR CTA ====================== */}
		<section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: secondaryBlack }}>
			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-[1]">
				<AnimatedBackground variant="orange" />
			</div>

			<div className="container mx-auto px-4 max-w-7xl relative z-[2]">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div>
						<p className="text-white text-2xl font-autography mb-2">Ready for an unforgettable tour!</p>
						<h2 className="text-4xl md:text-5xl font-bold" style={{ color: primaryOrange }}>Plan your trips with us</h2>
					</div>
						<button
						onClick={handleWhatsAppClick}
						className="px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-110 shadow-lg hover:shadow-xl mt-6 md:mt-0"
						style={{ backgroundColor: primaryOrange, color: secondaryBlack }}

					>
						Customize A Tour
						</button>
					</div>
				</div>
			</section>

		{/* ====================== FOOTER ====================== */}
		<footer className="py-16 bg-white border-t relative overflow-hidden" style={{ borderColor: `${primaryOrange}30` }}>
			{/* Animated Background */}
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
								<a href="#home" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Home</a>
							</li>
							<li className="border-b border-gray-200 pb-2">
								<a href="#tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Pakistan Tours</a>
							</li>
							<li className="border-b border-gray-200 pb-2">
								<a href="#city-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>City Tours</a>
							</li>
							<li className="border-b border-gray-200 pb-2">
								<a href="#group-tours" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Group Tour</a>
							</li>
							<li className="border-b border-gray-200 pb-2">
								<a href="#destination" className="text-sm transition-colors block" style={{ color: `${secondaryBlack}70` }} onMouseEnter={(e) => e.currentTarget.style.color = primaryOrange} onMouseLeave={(e) => e.currentTarget.style.color = `${secondaryBlack}70`}>Destination</a>
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


		{/* Enhanced CSS Animations and 3D Effects */}
		<style>{`
			.no-scrollbar { scrollbar-width: none; }
			.no-scrollbar::-webkit-scrollbar { display: none; }
			.animate-spin-slow { animation: spin 20s linear infinite; }
			.animate-city-pulse { animation: cityPulse 3s ease-in-out infinite; }
			.animate-route-flow { animation: routeFlow 2s linear infinite; }
			.animate-heritage-glow { animation: heritageGlow 4s ease-in-out infinite; }
			
			/* Unique Font Animations */
			@keyframes floatText {
				0%, 100% {
					transform: translateY(0px) rotate(-1deg);
				}
				50% {
					transform: translateY(-10px) rotate(1deg);
				}
			}
			
			@keyframes colorShift {
				0%, 100% {
					filter: hue-rotate(0deg) brightness(1);
				}
				25% {
					filter: hue-rotate(10deg) brightness(1.1);
				}
				50% {
					filter: hue-rotate(-10deg) brightness(0.9);
				}
				75% {
					filter: hue-rotate(5deg) brightness(1.05);
				}
			}
			
			@keyframes bounceLetters {
				0%, 100% {
					transform: translateY(0px) scale(1);
				}
				50% {
					transform: translateY(-8px) scale(1.1);
				}
			}
			
			.animate-bounce-letter {
				animation: bounceLetters 2s ease-in-out infinite;
			}
			
			@keyframes wiggle {
				0%, 100% {
					transform: rotate(1deg) translateX(0px);
				}
				25% {
					transform: rotate(-1deg) translateX(-2px);
				}
				50% {
					transform: rotate(1deg) translateX(2px);
				}
				75% {
					transform: rotate(-1deg) translateX(-1px);
				}
			}
			
			@keyframes glow {
				0%, 100% {
					text-shadow: 0 0 10px rgba(249, 150, 33, 0.5), 0 0 20px rgba(249, 150, 33, 0.3);
				}
				50% {
					text-shadow: 0 0 20px rgba(249, 150, 33, 0.8), 0 0 30px rgba(249, 150, 33, 0.5), 0 0 40px rgba(249, 150, 33, 0.3);
				}
			}
			
			@keyframes fadeSlide {
				0% {
					opacity: 0;
					transform: translateY(30px);
				}
				100% {
					opacity: 1;
					transform: translateY(0px);
				}
			}
			
			@keyframes pulseButton {
				0%, 100% {
					transform: scale(1);
					box-shadow: 0 0 0 0 rgba(249, 150, 33, 0.7);
				}
				50% {
					transform: scale(1.05);
					box-shadow: 0 0 0 10px rgba(249, 150, 33, 0);
				}
			}
			
			/* 3D Perspective and Transform Effects */
			.perspective-1000 {
				perspective: 1000px;
			}
			.transform-gpu {
				transform-style: preserve-3d;
			}
			.rotate-y-12:hover {
				transform: rotateY(12deg);
			}
			.rotate-y-8:hover {
				transform: rotateY(8deg);
			}
			.rotate-x-5:hover {
				transform: rotateX(5deg);
			}
			.rotate-x-3:hover {
				transform: rotateX(3deg);
			}
			
			/* Enhanced Shadow Effects */
			.shadow-3xl {
				box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
			}
			
			/* Floating Animation for 3D Elements */
			@keyframes float3d {
				0%, 100% {
					transform: translateY(0px) rotateX(0deg) rotateY(0deg);
				}
				50% {
					transform: translateY(-20px) rotateX(10deg) rotateY(5deg);
				}
			}
			.float-3d {
				animation: float3d 6s ease-in-out infinite;
			}
			
			/* Pulse Glow Effect */
			@keyframes pulseGlow {
				0%, 100% {
					box-shadow: 0 0 20px rgba(249, 150, 33, 0.3);
				}
				50% {
					box-shadow: 0 0 40px rgba(249, 150, 33, 0.6);
				}
			}
			.pulse-glow {
				animation: pulseGlow 2s ease-in-out infinite;
			}
			
			/* Shimmer Effect */
			@keyframes shimmer {
				0% {
					transform: translateX(-100%);
				}
				100% {
					transform: translateX(100%);
				}
			}
			.shimmer {
				position: relative;
				overflow: hidden;
			}
			.shimmer::before {
				content: '';
				position: absolute;
				top: 0;
				left: -100%;
				width: 100%;
				height: 100%;
				background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
				animation: shimmer 2s infinite;
			}
			
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


