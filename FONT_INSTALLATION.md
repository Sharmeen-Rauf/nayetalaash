# Autography Font Installation Guide

## Steps to Install Autography Font

1. **Download the Font**:
   - Visit: https://www.dafont.com/autography.font
   - Click "Download" to get the font file
   - Note: Autography is free for personal use. Commercial use requires a license.

2. **Extract the Font File**:
   - Locate the downloaded ZIP file
   - Extract it to find the font file (Autography.otf or Autography.ttf)

3. **Place Font File in Project**:
   - Copy the font file(s) to: `nayetalaash/public/fonts/`
   - You can use any of these formats: `.woff2`, `.woff`, `.ttf`, or `.otf`
   - The CSS is already configured to use any of these formats

4. **Convert to Web Formats (Optional, Recommended)**:
   - For best performance, convert to WOFF2 format
   - Use online converters like:
     - https://convertio.co/ttf-woff2/
     - https://cloudconvert.com/otf-to-woff2

5. **Verify Installation**:
   - Start your development server: `npm run dev`
   - Check the "Discover the Unseen" text on the homepage
   - It should now display in Autography font

## Font File Location
```
nayetalaash/
  public/
    fonts/
      Autography.woff2  (best format - recommended)
      Autography.woff   (fallback)
      Autography.ttf    (fallback)
      Autography.otf    (fallback)
```

## Note on Licensing
- **Personal Use**: Free
- **Commercial Use**: Requires license purchase
- For licensing inquiries: contact@hptypework.com

The @font-face declaration is already set up in `app/globals.css` - just add the font files to the `/public/fonts/` directory!

