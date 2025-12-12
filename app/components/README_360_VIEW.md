# 360° View Integration Guide

This guide explains how to add 360-degree views to destinations on your tour pages.

## Components Created

1. **View360.tsx** - Main 360-degree viewer modal component
2. **DestinationCard360.tsx** - Enhanced destination card with 360 view button

## How to Use

### Option 1: Using DestinationCard360 Component (Recommended)

Replace your existing destination image display with the `DestinationCard360` component:

```tsx
import DestinationCard360 from '@/app/components/DestinationCard360';

// In your destinations array, add optional 360 image URLs:
const destinations = [
  {
    title: '1. Lahore Fort (Shahi Qila)',
    image: '/images/lahore-fort.jpg',
    image360: '/images/360/lahore-fort-360.jpg', // Add this for 360 view
    description: 'A UNESCO World Heritage Site...',
    imageLeft: true
  },
  // ... more destinations
];

// Then use the component:
<DestinationCard360
  title={destination.title}
  image={destination.image}
  image360={destination.image360} // Optional
  iframe360={destination.iframe360} // Optional - for embedded tours
  description={destination.description}
  imageLeft={destination.imageLeft}
/>
```

### Option 2: Using View360 Component Directly

If you want more control, use the `View360` component directly:

```tsx
import View360 from '@/app/components/View360';
import { useState } from 'react';

const [show360, setShow360] = useState(false);

// In your JSX:
<button onClick={() => setShow360(true)}>View 360°</button>

<View360
  imageUrl="/images/360/destination-360.jpg" // Self-hosted 360 image
  // OR
  iframeUrl="https://kuula.co/share/..." // Embedded 360 tour URL
  title="Destination Name"
  isOpen={show360}
  onClose={() => setShow360(false)}
/>
```

## Image Requirements

### Self-Hosted 360 Images:
- Format: Equirectangular panorama (JPG or PNG)
- Recommended: 2:1 aspect ratio (e.g., 8192x4096 pixels)
- Place 360 images in `/public/images/360/` folder

### Embedded 360 Tours:
- Supports iframe URLs from services like:
  - Kuula (https://kuula.co)
  - Roundme (https://roundme.com)
  - Google Street View
  - 3DVista
  - Other 360 tour platforms

## Example Integration on Lahore Tour Page

```tsx
// Update destination data structure:
{
  title: '1. Lahore Fort (Shahi Qila)',
  image: '/images/lahore.jpg',
  image360: '/images/360/lahore-fort-360.jpg', // Add this
  description: 'A UNESCO World Heritage Site...',
  imageLeft: true
}

// Replace the Image component with DestinationCard360:
import DestinationCard360 from '@/app/components/DestinationCard360';

// Instead of:
<Image src={destination.image} alt={destination.title} fill />

// Use:
<DestinationCard360
  title={destination.title}
  image={destination.image}
  image360={destination.image360}
  description={destination.description}
  imageLeft={destination.imageLeft}
/>
```

## Features

- ✅ Fullscreen support
- ✅ Keyboard controls (WASD, arrow keys)
- ✅ Mouse drag to look around
- ✅ Auto-rotate option
- ✅ Mobile-friendly
- ✅ Close with Escape key or click outside
- ✅ Smooth animations
- ✅ Supports both self-hosted images and embedded tours

## Notes

- The 360 viewer loads Pannellum library from CDN (no npm install required)
- Only loads when 360 view is opened (performance optimized)
- The viewer automatically cleans up when closed
- Works on all modern browsers

