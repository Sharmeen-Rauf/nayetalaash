360-DEGREE IMAGES FOLDER
========================

Place your 360-degree panoramic images in this folder.

IMAGE REQUIREMENTS:
- Format: Equirectangular panorama (JPG or PNG)
- Aspect Ratio: 2:1 (width:height)
- Recommended Resolution: 8192x4096 pixels or higher
- Example: If width is 8000px, height should be 4000px

FILE NAMING CONVENTIONS:
Use descriptive names that match your destinations:
- lahore-fort-360.jpg
- badshahi-mosque-360.jpg
- wazir-khan-mosque-360.jpg
- shalimar-gardens-360.jpg
- etc.

HOW TO ADD 360 IMAGES TO DESTINATIONS:
1. Place your 360 image in this folder
2. Update the destination data in the page (e.g., lahore-tour/page.tsx)
3. Add the image360 property:
   image360: '/images/360/your-image-name.jpg'

EXAMPLE:
{
  title: '1. Lahore Fort (Shahi Qila)',
  image: '/images/lahore.jpg',
  image360: '/images/360/lahore-fort-360.jpg',  // Add this line
  description: '...',
  imageLeft: true
}

Once you add the image360 property, the "360° View" button will automatically appear
when users hover over the destination image!

