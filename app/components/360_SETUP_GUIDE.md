# Quick Setup Guide: Adding 360° Views

## ✅ What I've Done:
- ✅ Integrated 360° viewer component into all tour pages
- ✅ Set up the structure ready to accept 360 images
- ✅ Created this guide to help you add images

## 🚀 Fastest Way to Get Started (Option 1 - Embedded Tours):

### Using Kuula (Free Tier Available):
1. Go to https://kuula.co
2. Sign up for free account
3. Upload your 360 images OR browse their library
4. Create a tour/collection
5. Copy the share/embed URL (looks like: `https://kuula.co/share/collection/XXXXX`)
6. Add to your destination data:

```tsx
{
  title: 'Lahore Fort',
  image: '/images/lahore.jpg',
  iframe360: 'https://kuula.co/share/collection/XXXXX', // Paste your Kuula URL here
  description: '...',
}
```

### Using Roundme (Free Tier Available):
1. Go to https://roundme.com
2. Create account and upload 360 images
3. Get embed URL
4. Add `iframe360` property as shown above

### Using Momento360 (Free Tier):
1. Go to https://momento360.com
2. Upload 360 images
3. Get embed iframe URL
4. Add to your code

## 📸 Option 2 - Self-Hosted 360 Images:

If you have 360 panoramic images:

1. **Place images in:** `/public/images/360/`
2. **Add to destination data:**
```tsx
{
  title: 'Lahore Fort',
  image: '/images/lahore.jpg',
  image360: '/images/360/lahore-fort-360.jpg', // Your 360 image path
  description: '...',
}
```

**Image Requirements:**
- Format: JPG or PNG
- Type: Equirectangular panorama
- Aspect Ratio: 2:1 (e.g., 8000x4000 pixels)
- Recommended: 8192x4096 or higher

## 📱 Option 3 - Create 360 Images with Phone:

### Google Street View App (Free):
1. Download "Street View" app on Android/iOS
2. Tap camera icon → "Camera" → "360 Photo"
3. Follow instructions to capture 360 photo
4. Export image to your computer
5. Use as self-hosted image (Option 2)

### Cardboard Camera (Free):
1. Download Cardboard Camera app
2. Take 360 photo
3. Export and use

## 🎥 Option 4 - Use 360 Camera:

**Popular 360 Cameras:**
- Insta360 One X2 / One RS
- GoPro MAX
- Ricoh Theta Z1 / V
- Samsung Gear 360

**Steps:**
1. Capture 360 photos at your destinations
2. Transfer to computer
3. Export in equirectangular format
4. Place in `/public/images/360/` folder
5. Add `image360` property

## 🎯 Test Right Now:

I've added example commented code in your tour pages. You can:

1. Sign up for a free Kuula/Roundme account
2. Upload or use a sample 360 image
3. Get the embed URL
4. Uncomment and add the `iframe360` property in your code
5. Test immediately!

## 📍 Where to Add in Code:

**Lahore Tour:** `app/lahore-tour/page.tsx` (around line 590-660)
**Hunza Tour:** `app/hunza/page.tsx` (around line 705-820)
**Skardu Tour:** `app/skardu/page.tsx` (around line 728-855)
**Swat-Kalam Tour:** `app/swat-kalam/page.tsx` (around line 708-817)
**Karachi Tour:** `app/karachi-tour/page.tsx` (similar structure)

## 💡 Pro Tips:

1. **Start with one destination** - Test with one 360 view first
2. **Use embedded tours** - Easier than self-hosting initially
3. **Optimize file sizes** - Keep images under 5MB for fast loading
4. **Test on mobile** - Make sure it works on phones too
5. **Add gradually** - You don't need all destinations at once

## ❓ Need Help?

The component is ready! Just add your 360 images or embed URLs and it will work automatically. The "360° View" button appears only when you provide `image360` or `iframe360` properties.

