# How to Get 360-Degree Images for Your Website

## Quick Options:

### Option 1: Use Free Sample 360 Tours (For Testing)
I've added example iframe URLs from free 360 services so you can test the feature immediately. These work right away!

### Option 2: Create Your Own 360 Images

#### Using a 360 Camera:
- **Insta360** cameras (One X2, One RS, etc.)
- **GoPro MAX** 360 camera
- **Ricoh Theta** series
- **Samsung Gear 360**
- **Any camera with 360° mode**

**Steps:**
1. Take 360 photos at your destinations
2. Export in equirectangular format (2:1 ratio)
3. Recommended resolution: 8192x4096 pixels or higher
4. Save as JPG or PNG
5. Place in `/public/images/360/` folder

#### Using a Regular Camera + Software:
- Take multiple photos from one spot (panorama)
- Use software to stitch:
  - **PTGui** (paid)
  - **Hugin** (free)
  - **Photoshop** (Photo Merge → Panorama → Spherical)
  - **Autopano Giga** (paid)

#### Using Your Phone:
- **Google Street View app** - Can capture 360 photos
- **Insta360 app** - Works with compatible phones
- **Cardboard Camera** - Creates simple 360 images

### Option 3: Hire a Professional
- Search "360 photography services Pakistan"
- Find photographers who specialize in 360/virtual tours
- They can capture high-quality 360 images of your destinations

### Option 4: Use 360 Tour Services (Embedded Tours)

#### Services that provide embed codes:
1. **Kuula** (https://kuula.co)
   - Upload your images or use their library
   - Get iframe embed URL
   - Free and paid plans available

2. **Roundme** (https://roundme.com)
   - Create virtual tours
   - Get embed URLs
   - Free and paid plans

3. **Momento360** (https://momento360.com)
   - Easy to use
   - Free tier available
   - Get embed codes

4. **360Cities** (https://360cities.net)
   - Large library of 360 images
   - Can upload your own
   - Embed codes available

5. **Google Street View**
   - If your locations are on Street View
   - Can embed using Google Street View API

## How to Add to Your Code:

### For Self-Hosted 360 Images:
```tsx
{
  title: 'Lahore Fort',
  image: '/images/lahore.jpg',
  image360: '/images/360/lahore-fort-360.jpg', // Your 360 image
  description: '...',
}
```

### For Embedded Tours (Kuula, Roundme, etc.):
```tsx
{
  title: 'Lahore Fort',
  image: '/images/lahore.jpg',
  iframe360: 'https://kuula.co/share/collection/XXXXX', // Embed URL
  description: '...',
}
```

## Image Specifications:

- **Format:** JPG or PNG
- **Type:** Equirectangular panorama
- **Aspect Ratio:** 2:1 (width:height)
- **Recommended Size:** 8192x4096 pixels or higher
- **File Size:** Optimize for web (under 5MB recommended)

## Quick Test:

I've added example iframe360 URLs to some destinations so you can test the feature right away. Just uncomment them in the code!

