'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, Maximize2, Minimize2 } from 'lucide-react';

interface View360Props {
	imageUrl?: string; // For self-hosted 360 images
	iframeUrl?: string; // For embedded 360 tours (Kuula, Roundme, etc.)
	title?: string;
	isOpen: boolean;
	onClose: () => void;
}

const View360: React.FC<View360Props> = ({ 
	imageUrl, 
	iframeUrl, 
	title = '360° View', 
	isOpen, 
	onClose 
}) => {
	const viewerRef = useRef<HTMLDivElement>(null);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [pannellumLoaded, setPannellumLoaded] = useState(false);

	// Load Pannellum CSS and JS from CDN
	useEffect(() => {
		if (!isOpen || pannellumLoaded || iframeUrl) return;

		// Load CSS
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
		document.head.appendChild(link);

		// Load JS
		const script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
		script.async = true;
		script.onload = () => {
			setPannellumLoaded(true);
		};
		document.body.appendChild(script);

		return () => {
			// Cleanup: Remove script and link when component unmounts
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
			if (link.parentNode) {
				link.parentNode.removeChild(link);
			}
		};
	}, [isOpen, pannellumLoaded, iframeUrl]);

	// Initialize Pannellum viewer when imageUrl is available
	useEffect(() => {
		if (!isOpen || !imageUrl || !pannellumLoaded || !viewerRef.current) return;

		// Clear any existing viewer
		if (viewerRef.current) {
			viewerRef.current.innerHTML = '';
		}

		// Initialize Pannellum
		if ((window as any).pannellum) {
			(viewerRef.current as any).viewer = (window as any).pannellum.viewer(viewerRef.current, {
				type: 'equirectangular',
				panorama: imageUrl,
				autoLoad: true,
				autoRotate: 2,
				showControls: true,
				compass: true,
				keyboardZoom: true,
				mouseZoom: true,
				showFullscreenCtrl: false, // We'll use custom button
			});
		}

		return () => {
			if (viewerRef.current && (viewerRef.current as any).viewer) {
				try {
					(viewerRef.current as any).viewer.destroy();
				} catch (e) {
					console.log('Viewer cleanup');
				}
			}
		};
	}, [isOpen, imageUrl, pannellumLoaded]);

	// Handle fullscreen
	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			viewerRef.current?.requestFullscreen().then(() => {
				setIsFullscreen(true);
			}).catch(err => {
				console.log('Error attempting to enable fullscreen:', err);
			});
		} else {
			document.exitFullscreen().then(() => {
				setIsFullscreen(false);
			});
		}
	};

	// Listen for fullscreen changes
	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};
		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
	}, []);

	// Close on Escape key
	useEffect(() => {
		if (!isOpen) return;
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div 
			className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose();
				}
			}}
		>
			{/* Close Button */}
			<button
				onClick={onClose}
				className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
				style={{ color: '#f99621' }}
				aria-label="Close 360 view"
			>
				<X className="w-6 h-6" />
			</button>

			{/* Fullscreen Toggle Button */}
			{(imageUrl || iframeUrl) && (
				<button
					onClick={toggleFullscreen}
					className="absolute top-4 right-20 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
					style={{ color: '#f99621' }}
					aria-label="Toggle fullscreen"
				>
					{isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
				</button>
			)}

			{/* Title */}
			{title && (
				<div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
					<h3 className="text-lg font-bold">{title}</h3>
				</div>
			)}

			{/* Viewer Container */}
			<div 
				ref={viewerRef}
				className="w-full h-full"
				style={{
					width: '100%',
					height: '100%',
					maxWidth: '100vw',
					maxHeight: '100vh'
				}}
			>
				{/* Iframe for embedded 360 tours */}
				{iframeUrl && !imageUrl && (
					<iframe
						src={iframeUrl}
						className="w-full h-full border-0"
						allow="fullscreen; gyroscope; accelerometer"
						title={title}
					/>
				)}

				{/* Loading state */}
				{imageUrl && !pannellumLoaded && (
					<div className="flex items-center justify-center w-full h-full">
						<div className="text-white text-center">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f99621] mx-auto mb-4"></div>
							<p>Loading 360° view...</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default View360;

