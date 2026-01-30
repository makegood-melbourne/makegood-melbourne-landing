# Image Upload Log

## 2026-01-30: Polycarbonate Roofing Page Update

### Image Details

| Field | Value |
|-------|-------|
| **Original Adobe Stock ID** | AdobeStock_1828244705.jpeg |
| **New Filename** | crane-lifting-roof-panels-melbourne.webp |
| **Alt Text** | Crane lifting polycarbonate roof panels for industrial skylight installation Melbourne |
| **Dimensions** | 1200x800px |
| **File Size** | 45KB |
| **Format** | WebP (85% quality) |
| **Location** | `/src/assets/services/crane-lifting-roof-panels-melbourne.webp` |
| **Used On** | `/services/remediation-solutions/polycarbonate-roofing-skylights/` |
| **Section** | Skylight & Roof Panel Replacement Scope (featured section) |

### Changes Made

1. **Image Optimisation:**
   - Converted from JPEG to WebP format
   - Resized to 1200px width (optimal for service page sections)
   - Compressed to 85% quality
   - Final size: 45KB (well under 100KB target)

2. **SEO Optimisation:**
   - Descriptive filename: `crane-lifting-roof-panels-melbourne.webp`
   - Alt text includes location (Melbourne) and describes the action
   - Keywords: crane, lifting, roof panels, industrial, skylight, installation

3. **Page Updates:**
   - Replaced previous image in featured section
   - Updated section title to display on 2 lines: "Skylight &" / "Roof Panel Replacement Scope"
   - Updated image alt text in services.ts data file

### Technical Implementation

- Added import statement in `src/data/services.ts`
- Updated `featuredSections` array for polycarbonate-roofing-skylights service
- Used HTML `<br/>` tag for line break in title (rendered by service template)
- Image will be processed by Astro's Image component for responsive srcset

### Deployment

- Status: Pending preview
- Branch: To be created
- Preview required before production deployment
